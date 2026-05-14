/*
  BOX ELDER ANSWERS — CLEAN MODULAR CONTROL FILE

  Replace the entire content-codes.js file with this.
  This version fixes the issue where highlighted mission words kept coming back.

  Normal edits should happen in the QUICK SETTINGS and content sections below.
*/

window.BEA_CODES = {
  SETTINGS: {
    MISSION_TITLE_MODE: "plain", // "plain" or "highlight"
    MISSION_HIGHLIGHT_COLOR: "white",

    PETITION_BUTTON_STYLE: "glass", // "glass", "red", or "blue"

    GLOBAL_BACKGROUND_ON: true,
    GLOBAL_BACKGROUND_OPACITY: ".10"
  },

  THEME: {
    SOFT_RED: "#b55d62",
    SOFT_BLUE: "#7dc0d1",
    DEEP_BLUE: "#061a2a",
    DEEP_BLUE_2: "#082338",

    GLASS_BUTTON_BACKGROUND: "rgba(255,255,255,.08)",
    GLASS_BUTTON_BORDER: "rgba(255,255,255,.18)",

    GLOBAL_BACKGROUND_IMAGE: "https://www.fws.gov/sites/default/files/styles/max_1300x1300/public/images/2025-09/visitor-center-from-dock-at-bear-river-migratory-bird-refuge-usfws.jpg?itok=euz0qzvK"
  },

  LINKS: {
    PETITION_URL: "https://www.change.org/p/pause-project-stratos-now-box-elder-deserves-answers",
    COUNTY_QUESTION_URL: "https://www.boxeldercountyut.gov/641/Stratos-Project",
    CONTACT_EMAIL: "contact@boxelderanswers.com"
  },

  SOCIAL: {
    FACEBOOK: "",
    INSTAGRAM: "",
    TIKTOK: "",
    X: "",
    YOUTUBE: "",
    CHANGE_ORG: "https://www.change.org/p/pause-project-stratos-now-box-elder-deserves-answers"
  },

  MENU: [
    {
      label: "Understand",
      items: [
        ["Project Stratos", "project-stratos.html"],
        ["Data Centers Explained", "data-centers-explained.html"],
        ["Community Impact", "community-impact.html"]
      ]
    },
    {
      label: "Issues",
      items: [
        ["Water", "water.html"],
        ["Power & Air", "power-air.html"],
        ["Other Communities", "case-studies.html"]
      ]
    },
    {
      label: "Records",
      items: [
        ["Public Records", "records.html"],
        ["Questions to Ask", "questions.html"],
        ["Sources", "sources.html"]
      ]
    },
    {
      label: "Take Action",
      items: [
        ["Sign Petition", "https://www.change.org/p/pause-project-stratos-now-box-elder-deserves-answers"],
        ["Submit County Question", "https://www.boxeldercountyut.gov/641/Stratos-Project"],
        ["Share Tools", "take-action.html"]
      ]
    }
  ],

  GLOBAL: {
    SITE_NAME: `Box Elder Answers`,
    FOOTER_DESCRIPTION: `A public education and records hub helping Box Elder County residents understand Project Stratos before irreversible commitments move forward.`,
    OPERATOR_LINE: `Operated by T.C.`
  },

  MEDIA: {
    HERO_BACKGROUND_1: "https://www.fws.gov/sites/default/files/styles/max_1300x1300/public/images/2025-09/visitor-center-from-dock-at-bear-river-migratory-bird-refuge-usfws.jpg?itok=euz0qzvK",
    HERO_BACKGROUND_2: "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/media/images/greatsaltlake_oli_2021205_lrg.jpg",
    HERO_BACKGROUND_3: "https://www.fws.gov/sites/default/files/styles/max_1300x1300/public/2023-07/sunset%20of%20bear%20river%20mig%20bird%20refuge%20in%20utah%20sandra%20uecker%20usfws%20june%2012%202021.jpg?itok=Q9WLtNtS",

    PAGE_BACKGROUNDS: {
      "project-stratos.html": "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/media/images/greatsaltlake_oli_2021205_lrg.jpg",
      "data-centers-explained.html": "https://www.fws.gov/sites/default/files/styles/max_1300x1300/public/images/2025-09/visitor-center-from-dock-at-bear-river-migratory-bird-refuge-usfws.jpg?itok=euz0qzvK",
      "water.html": "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/media/images/greatsaltlake_oli_2021205_lrg.jpg",
      "power-air.html": "https://www.fws.gov/sites/default/files/styles/max_1300x1300/public/2023-07/sunset%20of%20bear%20river%20mig%20bird%20refuge%20in%20utah%20sandra%20uecker%20usfws%20june%2012%202021.jpg?itok=Q9WLtNtS",
      "community-impact.html": "https://www.fws.gov/sites/default/files/styles/max_1300x1300/public/images/2026-01/tundra-swans-tom-koerner-usfws.jpg?itok=1BRsZ29Q",
      "case-studies.html": "https://www.fws.gov/sites/default/files/styles/max_1300x1300/public/banner_images/2021-05/DSCF6125_0.JPG?itok=0MxI_ptZ",
      "questions.html": "https://www.fws.gov/sites/default/files/styles/max_1300x1300/public/banner_images/2021-05/Avocet_Brian_Ferguson.JPG?itok=nB96HlYZ",
      "records.html": "https://www.fws.gov/sites/default/files/styles/max_1300x1300/public/2023-07/sunset%20of%20bear%20river%20mig%20bird%20refuge%20in%20utah%20sandra%20uecker%20usfws%20june%2012%202021.jpg?itok=Q9WLtNtS",
      "sources.html": "https://www.fws.gov/sites/default/files/styles/max_1300x1300/public/images/2025-09/visitor-center-from-dock-at-bear-river-migratory-bird-refuge-usfws.jpg?itok=euz0qzvK",
      "take-action.html": "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/media/images/greatsaltlake_oli_2021205_lrg.jpg"
    }
  },

  HOME: {
    HERO_KICKER: `Paid for and sponsored by Tony\u00A0Castillo`,
    HERO_TITLE: `Before the future is decided, the public deserves the whole record.`,
    HERO_LEAD: `Box Elder Answers is a public education and records hub for residents trying to understand the environmental, water, energy, tax, and local control impacts of Project Stratos.`,

    STAT_1_NUMBER: `40,000`,
    STAT_1_TEXT: `acre project area described in public materials`,
    STAT_2_NUMBER: `9 GW`,
    STAT_2_TEXT: `power scale evaluated in independent Stratos analysis`,
    STAT_3_NUMBER: `24/7`,
    STAT_3_TEXT: `operation is what makes data centers different`,
    STAT_4_NUMBER: `Now`,
    STAT_4_TEXT: `is when public questions still matter`,

    MISSION_EYEBROW: `Why this exists`,
    MISSION_TITLE: `A public message built on clarity, time, and honest answers.`,
    MISSION_HIGHLIGHT_WORDS: ["clarity", "time", "honest answers"],

    MISSION_LEAD: `Residents are not reacting because they fear technology. They are reacting because a project this large felt like it moved faster than the public explanation that should have come with it.`,

    MISSION_P1: `<span class="highlight">Box Elder Answers exists to slow the conversation down</span> long enough for regular people to understand what is being proposed, who controls the process, and what the long term consequences could be for water, power, land, taxes, and public oversight.`,

    MISSION_P2: `<span class="highlight">This is about more than one project announcement.</span> It is about whether a rural county is expected to absorb enormous infrastructure decisions first and receive complete explanations later. People want facts they can read, questions they can ask, and a public record that does not require guesswork.`,

    MISSION_P3: `<span class="highlight">The goal is education before momentum.</span> When residents can clearly see the records, compare official claims with the underlying documents, and understand what other communities experienced, they are in a stronger position to protect Box Elder County and demand responsible review.`,

    PUBLIC_ASK_KICKER: `The public ask`,
    PUBLIC_ASK_TITLE: `A pause is not a rejection. It is responsible review.`,
    PUBLIC_ASK_TEXT: `A project this large should not move faster than the public’s understanding. Residents deserve the records, independent analysis, open meetings, and clear answers needed to know what the county is accepting, and what future generations may inherit.`,

    CTA_TITLE: `Read. Ask. Share. Keep records.`,
    CTA_TEXT: `Sign the petition, send detailed questions, share source based explanations, and keep copies of every public answer.`
  },

  VIDEOS: {
    SHOW_SECTION: false,
    SECTION_TITLE: `Watch the issue explained`,
    SECTION_TEXT: `Use this section later for a YouTube video, local meeting clip, explainer video, or campaign message.`,
    ITEMS: []
  },

  GALLERY: {
    SHOW_SECTION: false,
    SECTION_TITLE: `Photos and public visuals`,
    SECTION_TEXT: `Use this section later for local photos, public meeting screenshots, maps, or project visuals.`,
    ITEMS: []
  },

  QUICK_POSTS: {
    SHORT_SHARE_TEXT: `Box Elder County residents deserve a full public record before Project Stratos moves any further. This is not about rejecting technology. It is about understanding water, power, air, taxes, land use, public authority, and long term local control before irreversible decisions are made.`
  }
};

/* =========================================================
   SITE ENGINE
   Do not edit below this line unless changing behavior.
   ========================================================= */

(function () {
  const C = window.BEA_CODES || {};
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  function setVar(name, value) {
    if (value !== undefined && value !== null) {
      document.documentElement.style.setProperty(name, value);
    }
  }

  function txt(selector, value) {
    if (value === undefined || value === null) return;
    document.querySelectorAll(selector).forEach(el => {
      el.textContent = value;
    });
  }

  function html(selector, value) {
    if (value === undefined || value === null) return;
    document.querySelectorAll(selector).forEach(el => {
      el.innerHTML = value;
    });
  }

  function attr(selector, name, value) {
    if (value === undefined || value === null) return;
    document.querySelectorAll(selector).forEach(el => {
      el.setAttribute(name, value);
    });
  }

  function safeUrl(value) {
    return String(value || "").replace(/"/g, "%22");
  }

  function setBgVar(name, url) {
    if (url) {
      setVar(name, `url("${safeUrl(url)}")`);
    }
  }

  function setLinks(oldPart, newUrl) {
    if (!newUrl) return;
    document.querySelectorAll("a[href]").forEach(a => {
      if (a.href.includes(oldPart)) {
        a.href = newUrl;
      }
    });
  }

  function injectSiteStyles() {
    const settings = C.SETTINGS || {};
    const theme = C.THEME || {};
    const buttonStyle = settings.PETITION_BUTTON_STYLE || "glass";
    const style = document.createElement("style");

    let petitionButtonCss = "";

    if (buttonStyle === "glass") {
      petitionButtonCss = `
        .btn.primary,
        .nav-cta {
          background: ${theme.GLASS_BUTTON_BACKGROUND || "rgba(255,255,255,.08)"} !important;
          border: 1px solid ${theme.GLASS_BUTTON_BORDER || "rgba(255,255,255,.18)"} !important;
          color: white !important;
        }
      `;
    } else if (buttonStyle === "blue") {
      petitionButtonCss = `
        .btn.primary,
        .nav-cta {
          background: ${theme.SOFT_BLUE || "#7dc0d1"} !important;
          border: 1px solid rgba(255,255,255,.18) !important;
          color: #061a2a !important;
        }
      `;
    } else {
      petitionButtonCss = `
        .btn.primary,
        .nav-cta {
          background: ${theme.SOFT_RED || "#b55d62"} !important;
          border: 1px solid rgba(255,255,255,.18) !important;
          color: white !important;
        }
      `;
    }

    style.textContent = `
      .accent {
        color: ${settings.MISSION_HIGHLIGHT_COLOR || "white"} !important;
        font-weight: 900;
      }

      ${petitionButtonCss}
    `;

    document.head.appendChild(style);
  }

  function escapeRegExp(str) {
    return String(str).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function renderMissionTitle() {
    const H = C.HOME || {};
    const settings = C.SETTINGS || {};
    let title = H.MISSION_TITLE || "";

    if (settings.MISSION_TITLE_MODE !== "highlight") {
      txt("main > section:nth-of-type(2) h2", title);
      return;
    }

    (H.MISSION_HIGHLIGHT_WORDS || []).forEach(word => {
      const re = new RegExp(escapeRegExp(word), "gi");
      title = title.replace(re, match => `<span class="accent">${match}</span>`);
    });

    html("main > section:nth-of-type(2) h2", title);
  }

  function buildMenu() {
    const nav = document.querySelector(".nav-links");
    if (!nav || !Array.isArray(C.MENU)) return;

    nav.innerHTML = "";

    C.MENU.forEach(group => {
      const wrapper = document.createElement("div");
      wrapper.className = "nav-item";

      if (Array.isArray(group.items) && group.items.length) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = group.label;
        button.setAttribute("aria-expanded", "false");

        const dropdown = document.createElement("div");
        dropdown.className = "dropdown";

        group.items.forEach(item => {
          const a = document.createElement("a");
          a.textContent = item[0];
          a.href = item[1];
          dropdown.appendChild(a);
        });

        button.addEventListener("click", () => {
          const open = wrapper.classList.toggle("open");
          button.setAttribute("aria-expanded", open ? "true" : "false");
        });

        wrapper.appendChild(button);
        wrapper.appendChild(dropdown);
      } else if (group.href) {
        const a = document.createElement("a");
        a.textContent = group.label;
        a.href = group.href;
        wrapper.appendChild(a);
      }

      nav.appendChild(wrapper);
    });

    const petition = document.createElement("a");
    petition.className = "nav-cta";
    petition.href = C.LINKS?.PETITION_URL || "#";
    petition.textContent = "Sign petition";
    nav.appendChild(petition);
  }

  function socialLabel(name) {
    return {
      FACEBOOK: "FB",
      INSTAGRAM: "IG",
      TIKTOK: "TT",
      X: "X",
      YOUTUBE: "YT",
      CHANGE_ORG: "CH"
    }[name] || name.slice(0, 2);
  }

  function buildSocialLinks() {
    const social = C.SOCIAL || {};
    const links = Object.entries(social).filter(([_, url]) =>
      String(url || "").trim()
    );

    document.querySelectorAll(".social-links").forEach(el => el.remove());

    if (!links.length) return;

    const footerFirst = document.querySelector(".footer-inner > div:first-child");
    if (!footerFirst) return;

    const wrap = document.createElement("div");
    wrap.className = "social-links";

    links.forEach(([name, url]) => {
      const a = document.createElement("a");
      a.href = url;
      a.textContent = socialLabel(name);
      a.setAttribute("aria-label", name.replace("_", " "));
      wrap.appendChild(a);
    });

    footerFirst.appendChild(wrap);
  }

  function buildVideos() {
    const config = C.VIDEOS || {};
    const section = document.querySelector("[data-videos-section]");
    const grid = document.querySelector("[data-video-grid]");

    if (!section || !grid) return;

    if (!config.SHOW_SECTION || !Array.isArray(config.ITEMS) || !config.ITEMS.length) {
      section.hidden = true;
      return;
    }

    section.hidden = false;
    txt("[data-videos-title]", config.SECTION_TITLE);
    txt("[data-videos-text]", config.SECTION_TEXT);
    grid.innerHTML = "";

    config.ITEMS.forEach(item => {
      const card = document.createElement("article");
      card.className = "video-card";

      const embed = document.createElement("div");
      embed.className = "video-embed";

      if (item.embedUrl) {
        const iframe = document.createElement("iframe");
        iframe.src = item.embedUrl;
        iframe.loading = "lazy";
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        embed.appendChild(iframe);
      } else if (item.videoUrl) {
        const video = document.createElement("video");
        video.src = item.videoUrl;
        video.controls = true;
        if (item.poster) video.poster = item.poster;
        embed.appendChild(video);
      }

      const body = document.createElement("div");
      body.className = "card-body";
      body.innerHTML = `<h3>${item.title || "Video"}</h3><p>${item.description || ""}</p>`;

      card.appendChild(embed);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  function buildGallery() {
    const config = C.GALLERY || {};
    const section = document.querySelector("[data-gallery-section]");
    const grid = document.querySelector("[data-gallery-grid]");

    if (!section || !grid) return;

    if (!config.SHOW_SECTION || !Array.isArray(config.ITEMS) || !config.ITEMS.length) {
      section.hidden = true;
      return;
    }

    section.hidden = false;
    txt("[data-gallery-title]", config.SECTION_TITLE);
    txt("[data-gallery-text]", config.SECTION_TEXT);
    grid.innerHTML = "";

    config.ITEMS.forEach(item => {
      const card = document.createElement("article");
      card.className = "gallery-card";

      const photo = document.createElement("div");
      photo.className = "gallery-photo";
      photo.style.backgroundImage = `url("${safeUrl(item.imageUrl || "")}")`;

      const body = document.createElement("div");
      body.className = "card-body";
      body.innerHTML = `<h3>${item.title || "Photo"}</h3><p>${item.description || ""}</p>`;

      card.appendChild(photo);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  document.body.classList.add("has-global-bg");

  injectSiteStyles();

  setVar("--red", C.THEME?.SOFT_RED);
  setVar("--blue", C.THEME?.SOFT_BLUE);
  setVar("--blue-soft", C.THEME?.SOFT_BLUE);
  setVar("--deep", C.THEME?.DEEP_BLUE);
  setVar("--deep-2", C.THEME?.DEEP_BLUE_2);

  if (C.SETTINGS?.GLOBAL_BACKGROUND_ON) {
    setBgVar("--global-bg-image", C.THEME?.GLOBAL_BACKGROUND_IMAGE);
    setVar("--global-bg-opacity", C.SETTINGS?.GLOBAL_BACKGROUND_OPACITY || ".10");
  } else {
    setVar("--global-bg-opacity", "0");
  }

  const heroLayers = document.querySelectorAll(".hero-layer");
  if (heroLayers[0] && C.MEDIA?.HERO_BACKGROUND_1) {
    heroLayers[0].style.backgroundImage = `url("${safeUrl(C.MEDIA.HERO_BACKGROUND_1)}")`;
  }
  if (heroLayers[1] && C.MEDIA?.HERO_BACKGROUND_2) {
    heroLayers[1].style.backgroundImage = `url("${safeUrl(C.MEDIA.HERO_BACKGROUND_2)}")`;
  }
  if (heroLayers[2] && C.MEDIA?.HERO_BACKGROUND_3) {
    heroLayers[2].style.backgroundImage = `url("${safeUrl(C.MEDIA.HERO_BACKGROUND_3)}")`;
  }

  document.querySelectorAll(".page-hero").forEach(el => {
    const bg = C.MEDIA?.PAGE_BACKGROUNDS?.[path];
    if (bg) {
      el.style.setProperty("--page-bg", `url("${safeUrl(bg)}")`);
    }
  });

  setLinks("change.org/p/pause-project-stratos", C.LINKS?.PETITION_URL);
  setLinks("boxeldercountyut.gov/641/Stratos-Project", C.LINKS?.COUNTY_QUESTION_URL);

  attr(
    'a[href^="mailto:"]',
    "href",
    "mailto:" + (C.LINKS?.CONTACT_EMAIL || "contact@boxelderanswers.com")
  );

  txt('a[href^="mailto:"]', C.LINKS?.CONTACT_EMAIL);

  txt(".brand span", C.GLOBAL?.SITE_NAME);
  txt(".footer-inner > div:first-child p:first-of-type", C.GLOBAL?.FOOTER_DESCRIPTION);
  html(".footer-inner > div:first-child p:nth-of-type(2) strong", C.GLOBAL?.OPERATOR_LINE);

  buildMenu();
  buildSocialLinks();

  if (path === "index.html" || path === "") {
    const H = C.HOME || {};

    txt(".hero .kicker", H.HERO_KICKER);
    txt(".hero h1", H.HERO_TITLE);
    txt(".hero p", H.HERO_LEAD);

    txt(".stat-strip div:nth-child(1) strong", H.STAT_1_NUMBER);
    txt(".stat-strip div:nth-child(1) span", H.STAT_1_TEXT);
    txt(".stat-strip div:nth-child(2) strong", H.STAT_2_NUMBER);
    txt(".stat-strip div:nth-child(2) span", H.STAT_2_TEXT);
    txt(".stat-strip div:nth-child(3) strong", H.STAT_3_NUMBER);
    txt(".stat-strip div:nth-child(3) span", H.STAT_3_TEXT);
    txt(".stat-strip div:nth-child(4) strong", H.STAT_4_NUMBER);
    txt(".stat-strip div:nth-child(4) span", H.STAT_4_TEXT);

    txt("main > section:nth-of-type(2) .eyebrow", H.MISSION_EYEBROW);
    renderMissionTitle();
    txt("main > section:nth-of-type(2) .lead", H.MISSION_LEAD);

    html(".mission-copy p:nth-of-type(1)", H.MISSION_P1);
    html(".mission-copy p:nth-of-type(2)", H.MISSION_P2);
    html(".mission-copy p:nth-of-type(3)", H.MISSION_P3);

    txt(".full-bleed .kicker", H.PUBLIC_ASK_KICKER);
    txt(".full-bleed h2", H.PUBLIC_ASK_TITLE);
    txt(".full-bleed p", H.PUBLIC_ASK_TEXT);

    txt(".cta h2", H.CTA_TITLE);
    txt(".cta > div:first-child p", H.CTA_TEXT);

    buildVideos();
    buildGallery();
  }
})();
/* ADD MISSING FIVE W'S CARDS */

(() => {

  const sections = Array.from(document.querySelectorAll("section"));

  const fiveWsSection = sections.find(section => {

    const eyebrow = section.querySelector(".eyebrow");

    return eyebrow && eyebrow.textContent.trim().toLowerCase().includes("five w");

  });

  if (!fiveWsSection) return;

  const grid = fiveWsSection.querySelector(".grid-3");

  if (!grid) return;

  const existingLabels = Array.from(grid.querySelectorAll(".label")).map(label =>

    label.textContent.trim().toLowerCase()

  );

  function createCard(label, title, text) {

    const article = document.createElement("article");

    article.className = "card large";

    article.innerHTML = `

      <div class="label">${label}</div>

      <h3>${title}</h3>

      <p>${text}</p>

    `;

    return article;

  }

  const whenCard = createCard(

    "When",

    "Before irreversible commitments move forward",

    "Residents need a clear timeline showing when the project was introduced, when public officials were briefed, when agreements or approvals were considered, and which decisions still remain open for public review."

  );

  const whereCard = createCard(

    "Where",

    "Box Elder County carries the local impact",

    "The project may be tied to state, regional, and national technology goals, but the land, water, power, roads, air quality, emergency response, and quality of life questions land here in Box Elder County."

  );

  const whyCard = Array.from(grid.querySelectorAll("article")).find(card => {

    const label = card.querySelector(".label");

    return label && label.textContent.trim().toLowerCase() === "why";

  });

  if (!existingLabels.includes("when")) {

    if (whyCard) {

      grid.insertBefore(whenCard, whyCard);

    } else {

      grid.appendChild(whenCard);

    }

  }

  if (!existingLabels.includes("where")) {

    if (whyCard) {

      grid.insertBefore(whereCard, whyCard);

    } else {

      grid.appendChild(whereCard);

    }

  }

})();
