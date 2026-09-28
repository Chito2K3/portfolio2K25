/**
 * Chito2K3 Portfolio Application Logic
 * Integrates curated domain projects with live GitHub repository status.
 */
import { PORTFOLIO_DATA } from './data.js?v=1.1';

class PortfolioApp {
  constructor() {
    this.projects = PORTFOLIO_DATA.projects;
    this.categories = PORTFOLIO_DATA.categories;
    this.skills = PORTFOLIO_DATA.skills;
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.liveRepoData = new Map();

    this.initDOMElements();
    this.initEventHandlers();
    this.renderCategoryTabs();
    this.renderSkills();
    this.renderProjects();
    this.fetchLiveGitHubData();
  }

  initDOMElements() {
    this.categoryTabsContainer = document.getElementById('categoryTabs');
    this.projectsGrid = document.getElementById('projectsGrid');
    this.skillsGrid = document.getElementById('skillsGrid');
    this.searchInput = document.getElementById('searchInput');
    this.liveSyncStatus = document.getElementById('liveSyncStatus');
    this.repoCountStat = document.getElementById('repoCountStat');

    // Modal elements
    this.modal = document.getElementById('projectModal');
    this.modalCloseBtn = document.getElementById('modalCloseBtn');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalTagline = document.getElementById('modalTagline');
    this.modalCategoryBadge = document.getElementById('modalCategoryBadge');
    this.modalLanguageBadge = document.getElementById('modalLanguageBadge');
    this.modalChallenge = document.getElementById('modalChallenge');
    this.modalSolution = document.getElementById('modalSolution');
    this.modalHighlights = document.getElementById('modalHighlights');
    this.modalTechStack = document.getElementById('modalTechStack');
    this.modalGithubLink = document.getElementById('modalGithubLink');
    this.modalLiveLink = document.getElementById('modalLiveLink');

    // Copy / Toast
    this.copyEmailBtn = document.getElementById('copyEmailBtn');
    this.footerContactBtn = document.getElementById('footerContactBtn');
    this.toastNotice = document.getElementById('toastNotice');
    this.siteHeader = document.getElementById('siteHeader');
  }

  initEventHandlers() {
    // Search input
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderProjects();
      });
    }

    // Modal close
    if (this.modalCloseBtn) {
      this.modalCloseBtn.addEventListener('click', () => this.closeModal());
    }

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && this.modal.classList.contains('open')) {
        this.closeModal();
      }
    });

    // Copy Email
    if (this.copyEmailBtn) {
      this.copyEmailBtn.addEventListener('click', () => {
        this.copyToClipboard(PORTFOLIO_DATA.profile.email, 'Email address copied to clipboard!');
      });
    }

    if (this.footerContactBtn) {
      this.footerContactBtn.addEventListener('click', () => {
        window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=Project%20Inquiry%20from%20Portfolio`;
      });
    }

    // Header scroll background toggle
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        this.siteHeader.classList.add('scrolled');
      } else {
        this.siteHeader.classList.remove('scrolled');
      }
    });
  }

  renderCategoryTabs() {
    if (!this.categoryTabsContainer) return;
    this.categoryTabsContainer.innerHTML = '';

    this.categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `tab-btn ${this.activeCategory === cat.id ? 'active' : ''}`;
      btn.textContent = cat.label;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', this.activeCategory === cat.id);
      btn.addEventListener('click', () => {
        this.activeCategory = cat.id;
        document.querySelectorAll('.tab-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        this.renderProjects();
      });
      this.categoryTabsContainer.appendChild(btn);
    });
  }

  renderSkills() {
    if (!this.skillsGrid) return;
    this.skillsGrid.innerHTML = '';

    this.skills.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-pill';
      card.innerHTML = `
        <span class="skill-name">${skill.name}</span>
        <span class="skill-badge">${skill.level}</span>
      `;
      this.skillsGrid.appendChild(card);
    });
  }

  getFilteredProjects() {
    return this.projects.filter(project => {
      const matchesCategory = this.activeCategory === 'all' || project.category === this.activeCategory;
      const matchesSearch = !this.searchQuery || 
        project.title.toLowerCase().includes(this.searchQuery) ||
        project.description.toLowerCase().includes(this.searchQuery) ||
        project.tagline.toLowerCase().includes(this.searchQuery) ||
        project.techStack.some(t => t.toLowerCase().includes(this.searchQuery)) ||
        project.language.toLowerCase().includes(this.searchQuery);

      return matchesCategory && matchesSearch;
    });
  }

  renderProjects() {
    if (!this.projectsGrid) return;
    const filtered = this.getFilteredProjects();

    if (filtered.length === 0) {
      this.projectsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px; text-align: center; color: var(--text-muted); background: var(--bg-card); border: 1px dashed var(--border-subtle); border-radius: var(--radius-md);">
          <p style="font-size: 16px; margin-bottom: 8px;">No matching systems found.</p>
          <p style="font-size: 13px;">Try adjusting your keyword filter or switching category tabs.</p>
        </div>
      `;
      return;
    }

    this.projectsGrid.innerHTML = '';

    filtered.forEach(project => {
      const liveData = this.liveRepoData.get(project.repoName.toLowerCase()) || {};
      const card = document.createElement('article');
      card.className = `project-card ${project.featured ? 'featured' : ''}`;
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View details for ${project.title}`);

      // Category label
      const catObj = this.categories.find(c => c.id === project.category);
      const catLabel = catObj ? catObj.label : 'Engineering';

      card.innerHTML = `
        <div>
          <div class="card-top">
            <div class="card-repo-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div class="card-top-right">
              ${project.featured ? `<span class="badge badge-cyan">Flagship</span>` : ''}
              <span class="badge badge-subtle">${project.language}</span>
            </div>
          </div>

          <div class="card-main" style="margin-top: 14px;">
            <h3 class="card-title">
              <span>${project.title}</span>
              <span class="arrow" aria-hidden="true">↗</span>
            </h3>
            <p class="card-tagline">${project.tagline}</p>
            
            <div class="card-tags">
              ${project.techStack.slice(0, 3).map(tech => `<span class="tag-chip">${tech}</span>`).join('')}
              ${project.techStack.length > 3 ? `<span class="tag-chip">+${project.techStack.length - 3}</span>` : ''}
            </div>
          </div>
        </div>

        <div class="card-footer">
          <span class="card-github-link">
            <span>github.com/${project.repoName}</span>
          </span>

          ${project.liveUrl ? `
            <span class="live-indicator">
              <span class="live-dot"></span>
              <span>Online</span>
            </span>
          ` : `
            <span style="color: var(--text-muted); font-size: 11px;">Repo Active</span>
          `}
        </div>
      `;

      // Open Modal on click or Enter key
      card.addEventListener('click', () => this.openModal(project));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openModal(project);
        }
      });

      this.projectsGrid.appendChild(card);
    });
  }

  openModal(project) {
    if (!this.modal) return;

    const catObj = this.categories.find(c => c.id === project.category);
    this.modalCategoryBadge.textContent = catObj ? catObj.label : 'Systems';
    this.modalLanguageBadge.textContent = project.language;
    this.modalTitle.textContent = project.title;
    this.modalTagline.textContent = project.tagline;
    this.modalChallenge.textContent = project.challenge;
    this.modalSolution.textContent = project.solution;

    // Highlights list
    this.modalHighlights.innerHTML = project.highlights
      .map(h => `<li><span>${h}</span></li>`)
      .join('');

    // Tech stack chips
    this.modalTechStack.innerHTML = project.techStack
      .map(t => `<span class="tag-chip" style="font-size: 12px; padding: 4px 10px;">${t}</span>`)
      .join('');

    // Action links
    this.modalGithubLink.href = project.githubUrl;
    if (project.liveUrl) {
      this.modalLiveLink.style.display = 'inline-flex';
      this.modalLiveLink.href = project.liveUrl;
    } else {
      this.modalLiveLink.style.display = 'none';
    }

    this.modal.classList.add('open');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.classList.remove('open');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  async fetchLiveGitHubData() {
    try {
      const response = await fetch('https://api.github.com/users/Chito2K3/repos?per_page=30&sort=updated');
      if (!response.ok) return;

      const repos = await response.json();
      if (!Array.isArray(repos)) return;

      repos.forEach(repo => {
        this.liveRepoData.set(repo.name.toLowerCase(), {
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          size: repo.size,
          updatedAt: repo.updated_at,
          defaultBranch: repo.default_branch
        });
      });

      if (this.repoCountStat) {
        this.repoCountStat.textContent = `${repos.length}+`;
      }

      if (this.liveSyncStatus) {
        this.liveSyncStatus.title = `Live GitHub data synced (${repos.length} public repos fetched)`;
      }

      // Re-render project cards with live indicators if needed
      this.renderProjects();
    } catch (err) {
      // Graceful fallback to static data
      console.info('Live GitHub sync running in offline/cached fallback mode.');
    }
  }

  copyToClipboard(text, message = 'Copied to clipboard!') {
    navigator.clipboard.writeText(text).then(() => {
      this.showToast(message);
    }).catch(() => {
      // Fallback
      const input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      this.showToast(message);
    });
  }

  showToast(message) {
    if (!this.toastNotice) return;
    this.toastNotice.textContent = message;
    this.toastNotice.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toastNotice.classList.remove('show');
    }, 2800);
  }
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});
