(function () {
  "use strict";

  const state = {
    lang: localStorage.getItem("lang") || ((navigator.language || "en").slice(0, 2) === "fr" ? "fr" : "en"),
    theme: localStorage.getItem("theme") || "dark",
    filter: "all"
  };
  if (!CONTENT[state.lang]) state.lang = "en";

  const svgIcon = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.96.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 5h18v14H3z" stroke-linejoin="round"/><path d="m3 6 9 7 9-7" stroke-linejoin="round"/></svg>',
    credly: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.25 3.66 9.9 9 11 5.34-1.1 9-5.75 9-11V5l-9-4zm0 2.24 7 3.11v4.65c0 4.15-2.79 7.98-7 8.98-4.21-1-7-4.83-7-8.98V6.35l7-3.11zM11 8v5.5l4.2 2.5.8-1.3-3.5-2.1V8z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" stroke-linecap="round"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 14.6A8.9 8.9 0 0 1 9.4 3.5 9 9 0 1 0 20.5 14.6z"/></svg>'
  };

  function t(lang) { return CONTENT[lang]; }

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function render() {
    const c = t(state.lang);
    document.documentElement.lang = state.lang;
    document.title = c.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", c.meta.description);

    // Nav
    document.querySelectorAll("[data-nav]").forEach(a => {
      const key = a.getAttribute("data-nav");
      a.textContent = c.nav[key];
    });

    // Hero
    document.getElementById("hero-kicker").textContent = c.hero.kicker;
    document.getElementById("hero-name").textContent = c.hero.name;
    document.getElementById("hero-role").textContent = c.hero.role;
    document.getElementById("hero-tagline").textContent = c.hero.tagline;
    document.getElementById("hero-cta-projects").textContent = c.hero.ctaProjects;
    document.getElementById("hero-cta-contact").textContent = c.hero.ctaContact;
    document.getElementById("hero-scroll").textContent = c.hero.scroll;
    const badgeWrap = document.getElementById("hero-badges");
    badgeWrap.innerHTML = "";
    c.hero.badges.forEach(b => badgeWrap.appendChild(el("span", "badge", b)));

    // About
    document.getElementById("about-kicker").textContent = c.about.kicker;
    document.getElementById("about-heading").textContent = c.about.heading;
    const aboutText = document.getElementById("about-text");
    aboutText.innerHTML = "";
    c.about.paragraphs.forEach(p => aboutText.appendChild(el("p", null, p)));
    const factsWrap = document.getElementById("about-facts");
    factsWrap.innerHTML = "";
    c.about.facts.forEach(f => {
      const item = el("div", "fact");
      item.appendChild(el("span", "fact-label", f.label));
      item.appendChild(el("span", "fact-value", f.value));
      factsWrap.appendChild(item);
    });

    // Experience
    document.getElementById("experience-kicker").textContent = c.experience.kicker;
    document.getElementById("experience-heading").textContent = c.experience.heading;
    const expWrap = document.getElementById("experience-list");
    expWrap.innerHTML = "";
    c.experience.items.forEach(item => {
      const node = el("div", "timeline-item");
      node.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-head">
            <h3>${item.role}</h3>
            <span class="timeline-period">${item.period}</span>
          </div>
          <div class="timeline-org">${item.org}</div>
          ${item.bullets.length ? `<ul>${item.bullets.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
        </div>`;
      expWrap.appendChild(node);
    });

    // Education
    document.getElementById("education-kicker").textContent = c.education.kicker;
    document.getElementById("education-heading").textContent = c.education.heading;
    const eduWrap = document.getElementById("education-list");
    eduWrap.innerHTML = "";
    c.education.items.forEach(item => {
      const node = el("div", "edu-card");
      node.innerHTML = `
        <div class="timeline-head">
          <h3>${item.degree}</h3>
          <span class="timeline-period">${item.period}</span>
        </div>
        <div class="timeline-org">${item.school}</div>
        ${item.detail ? `<p>${item.detail}</p>` : ""}`;
      eduWrap.appendChild(node);
    });

    // Skills
    document.getElementById("skills-kicker").textContent = c.skills.kicker;
    document.getElementById("skills-heading").textContent = c.skills.heading;
    const skillsWrap = document.getElementById("skills-list");
    skillsWrap.innerHTML = "";
    c.skills.groups.forEach(g => {
      const card = el("div", "skill-card");
      card.appendChild(el("h3", null, g.name));
      const pillWrap = el("div", "pill-wrap");
      g.items.forEach(s => pillWrap.appendChild(el("span", "pill", s)));
      card.appendChild(pillWrap);
      skillsWrap.appendChild(card);
    });

    // Projects
    document.getElementById("projects-kicker").textContent = c.projects.kicker;
    document.getElementById("projects-heading").textContent = c.projects.heading;
    const filterWrap = document.getElementById("project-filters");
    filterWrap.innerHTML = "";
    Object.keys(c.projects.filters).forEach(key => {
      const btn = el("button", "filter-btn" + (state.filter === key ? " active" : ""), c.projects.filters[key]);
      btn.setAttribute("data-filter", key);
      btn.addEventListener("click", () => { state.filter = key; render(); });
      filterWrap.appendChild(btn);
    });
    const projWrap = document.getElementById("projects-list");
    projWrap.innerHTML = "";
    c.projects.items
      .filter(p => state.filter === "all" || p.category === state.filter)
      .forEach(p => {
        const card = el("article", "project-card");
        const noteIcon = (note) => {
          const n = note.toLowerCase();
          if (n.includes("coming") || n.includes("bientôt")) return "&#9203;";
          if (n.includes("development") || n.includes("développement")) return "&#128295;";
          return "&#128274;";
        };
        const titleHtml = p.link
          ? `<a href="${p.link}" target="_blank" rel="noopener">${p.title} &#8599;</a>`
          : p.title;
        card.innerHTML = `
          <div class="project-top">
            <h3>${titleHtml}</h3>
            ${p.note ? `<span class="confidential-tag">${noteIcon(p.note)} ${p.note}</span>` : ""}
          </div>
          <p>${p.desc}</p>
          <div class="tag-wrap">${p.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>`;
        projWrap.appendChild(card);
      });

    // Certifications
    document.getElementById("certifications-kicker").textContent = c.certifications.kicker;
    document.getElementById("certifications-heading").textContent = c.certifications.heading;
    const certWrap = document.getElementById("certifications-list");
    certWrap.innerHTML = "";
    c.certifications.items.forEach(item => {
      const node = el("div", "cert-card");
      node.innerHTML = `<h4>${item.name}</h4><span>${item.date}</span>`;
      certWrap.appendChild(node);
    });
    const credlyLink = document.getElementById("credly-link");
    credlyLink.textContent = c.certifications.viewCredly;
    credlyLink.href = PROFILE_LINKS.credly;

    // Leadership
    document.getElementById("leadership-kicker").textContent = c.leadership.kicker;
    document.getElementById("leadership-heading").textContent = c.leadership.heading;
    document.getElementById("leadership-text").textContent = c.leadership.text;
    const langWrap = document.getElementById("languages-list");
    langWrap.innerHTML = "";
    c.leadership.languages.forEach(l => {
      const node = el("div", "lang-item");
      node.innerHTML = `<strong>${l.lang}</strong><span>${l.level}</span>`;
      langWrap.appendChild(node);
    });

    // Contact
    document.getElementById("contact-kicker").textContent = c.contact.kicker;
    document.getElementById("contact-heading").textContent = c.contact.heading;
    document.getElementById("contact-text").textContent = c.contact.text;
    document.getElementById("contact-email-cta").textContent = c.contact.emailCta;
    document.getElementById("contact-links-label").textContent = c.contact.links;

    // Footer
    document.getElementById("footer-text").textContent = c.footer.text;
    document.getElementById("footer-source").textContent = c.footer.source;

    // Lang toggle labels
    document.getElementById("lang-toggle").textContent = state.lang === "en" ? "FR" : "EN";
    document.getElementById("theme-toggle-label").textContent =
      state.theme === "dark" ? c.themeToggle.toLight : c.themeToggle.toDark;
  }

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const iconWrap = document.getElementById("theme-icon");
    iconWrap.innerHTML = state.theme === "dark" ? svgIcon.sun : svgIcon.moon;
    localStorage.setItem("theme", state.theme);
  }

  function setupStaticLinks() {
    document.getElementById("icon-github-hero").innerHTML = svgIcon.github;
    document.getElementById("icon-linkedin-hero").innerHTML = svgIcon.linkedin;
    document.getElementById("icon-mail-hero").innerHTML = svgIcon.mail;
    document.getElementById("icon-github-footer").innerHTML = svgIcon.github;
    document.getElementById("icon-linkedin-footer").innerHTML = svgIcon.linkedin;
    document.getElementById("icon-mail-footer").innerHTML = svgIcon.mail;
    document.getElementById("icon-credly-footer").innerHTML = svgIcon.credly;

    document.querySelectorAll("[data-link='github']").forEach(a => a.href = PROFILE_LINKS.github);
    document.querySelectorAll("[data-link='linkedin']").forEach(a => a.href = PROFILE_LINKS.linkedin);
    document.querySelectorAll("[data-link='credly']").forEach(a => a.href = PROFILE_LINKS.credly);
    document.querySelectorAll("[data-link='mail']").forEach(a => a.href = "mailto:" + PROFILE_LINKS.email);
    document.getElementById("contact-email-display").textContent = PROFILE_LINKS.email;

    document.getElementById("footer-year").textContent = new Date().getFullYear();
  }

  function setupInteractions() {
    document.getElementById("lang-toggle").addEventListener("click", () => {
      state.lang = state.lang === "en" ? "fr" : "en";
      localStorage.setItem("lang", state.lang);
      render();
    });

    document.getElementById("theme-toggle").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      applyTheme();
      render();
    });

    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      navToggle.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
    }));

    // Active nav-link highlighting as sections scroll through view.
    const sections = document.querySelectorAll("section[id]");
    const navAnchors = document.querySelectorAll(".nav-links a");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
          navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
        }
      });
    }, { threshold: [0.35] });
    sections.forEach(s => observer.observe(s));

    // Sticky header shadow on scroll
    const header = document.getElementById("site-header");
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 12);
    }, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    setupStaticLinks();
    setupInteractions();
    render();
  });
})();
