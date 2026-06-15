const STORAGE_KEY = "ats-cv-builder-data";
const MAX_PHOTO_SIZE_MB = 10;
const MAX_PHOTO_SIZE_BYTES = MAX_PHOTO_SIZE_MB * 1024 * 1024;

const templateLabels = {
  classic: "Template Klasik ATS",
  modern: "Template Modern Pro",
  executive: "Template Executive",
  creative: "Template Creative CV",
  minimalCreative: "Template Minimal Creative",
  boldCreative: "Template Bold Creative",
  pastelCreative: "Template Pastel Creative",
  designer: "Template Designer CV",
  developer: "Template Developer CV",
  marketing: "Template Marketing CV"
};

const languageLabels = {
  id: "Bahasa Indonesia",
  en: "English Version",
  bilingual: "Bilingual ID / EN"
};

const sectionConfigs = [
  { key: "summary", sectionId: "summarySection", headingId: "headingSummary" },
  { key: "experience", sectionId: "experienceSection", headingId: "headingExperience" },
  { key: "education", sectionId: "educationSection", headingId: "headingEducation" },
  { key: "skills", sectionId: "skillsSection", headingId: "headingSkills" },
  { key: "projects", sectionId: "projectsSection", headingId: "headingProjects" },
  { key: "certifications", sectionId: "certificationsSection", headingId: "headingCertifications" },
  { key: "languages", sectionId: "languagesSection", headingId: "headingLanguages" }
];

const sectionTexts = {
  summary: { id: "Ringkasan", en: "Summary", bilingual: "Ringkasan / Summary" },
  experience: { id: "Pengalaman Kerja", en: "Experience", bilingual: "Pengalaman Kerja / Experience" },
  education: { id: "Pendidikan", en: "Education", bilingual: "Pendidikan / Education" },
  skills: { id: "Skill", en: "Skills", bilingual: "Skill / Skills" },
  projects: { id: "Proyek Unggulan", en: "Featured Projects", bilingual: "Proyek Unggulan / Featured Projects" },
  certifications: { id: "Sertifikasi", en: "Certifications", bilingual: "Sertifikasi / Certifications" },
  languages: { id: "Bahasa", en: "Languages", bilingual: "Bahasa / Languages" }
};

const uiTexts = {
  summaryFallback: {
    id: "Ringkasan profesional akan muncul di sini setelah form diisi. Gunakan 3-4 kalimat yang relevan, jelas, dan berfokus pada hasil.",
    en: "Your professional summary will appear here after the form is filled. Use 3-4 concise, relevant, and results-focused sentences.",
    bilingual: "Ringkasan profesional akan muncul di sini setelah form diisi. / Your professional summary will appear here after the form is filled."
  },
  contactsFallback: {
    id: "Email • Telepon • Lokasi • LinkedIn",
    en: "Email • Phone • Location • LinkedIn",
    bilingual: "Email • Telepon / Phone • Lokasi / Location • LinkedIn"
  },
  experienceEmpty: {
    id: "Pengalaman kerja akan tampil di sini.",
    en: "Work experience will appear here.",
    bilingual: "Pengalaman kerja akan tampil di sini. / Work experience will appear here."
  },
  experienceHint: {
    id: "Tambahkan deskripsi pencapaian agar pengalaman lebih kuat untuk recruiter.",
    en: "Add measurable achievements to make this experience stronger for recruiters.",
    bilingual: "Tambahkan deskripsi pencapaian agar pengalaman lebih kuat untuk recruiter. / Add measurable achievements to make this experience stronger for recruiters."
  },
  educationEmpty: {
    id: "Riwayat pendidikan akan tampil di sini.",
    en: "Education history will appear here.",
    bilingual: "Riwayat pendidikan akan tampil di sini. / Education history will appear here."
  },
  educationDetailFallback: {
    id: "Detail pendidikan akan muncul di sini.",
    en: "Education details will appear here.",
    bilingual: "Detail pendidikan akan muncul di sini. / Education details will appear here."
  },
  skillsEmpty: {
    id: "Tambahkan skill utama agar CV lebih kaya kata kunci ATS.",
    en: "Add your main skills to enrich ATS keywords in the CV.",
    bilingual: "Tambahkan skill utama agar CV lebih kaya kata kunci ATS. / Add your main skills to enrich ATS keywords in the CV."
  },
  projectsEmpty: {
    id: "Tambahkan proyek unggulan jika relevan.",
    en: "Add featured projects if relevant.",
    bilingual: "Tambahkan proyek unggulan jika relevan. / Add featured projects if relevant."
  },
  certificationsEmpty: {
    id: "Tambahkan sertifikasi jika ada.",
    en: "Add certifications if available.",
    bilingual: "Tambahkan sertifikasi jika ada. / Add certifications if available."
  },
  languagesEmpty: {
    id: "Tambahkan bahasa yang Anda kuasai.",
    en: "Add the languages you speak.",
    bilingual: "Tambahkan bahasa yang Anda kuasai. / Add the languages you speak."
  },
  unnamedCompany: {
    id: "Nama perusahaan",
    en: "Company name",
    bilingual: "Nama perusahaan / Company name"
  },
  unnamedInstitution: {
    id: "Institusi",
    en: "Institution",
    bilingual: "Institusi / Institution"
  },
  unnamedDegree: {
    id: "Program studi / jurusan",
    en: "Degree / Program",
    bilingual: "Program studi / jurusan / Degree / Program"
  },
  unnamedRole: {
    id: "Posisi",
    en: "Role",
    bilingual: "Posisi / Role"
  },
  unnamedPeriod: {
    id: "Periode",
    en: "Period",
    bilingual: "Periode / Period"
  },
  unnamedYear: {
    id: "Tahun",
    en: "Year",
    bilingual: "Tahun / Year"
  },
  titleFallback: {
    id: "Posisi / Job Title",
    en: "Position / Job Title",
    bilingual: "Posisi / Job Title"
  }
};

const defaultSectionOrder = sectionConfigs.map((section) => section.key);

const defaultData = {
  fullName: "Nama Lengkap",
  jobTitle: "Posisi / Job Title",
  jobTitleEn: "",
  email: "",
  phone: "",
  location: "",
  website: "",
  github: "",
  portfolio: "",
  instagram: "",
  summary: "",
  summaryEn: "",
  cvLanguage: "id",
  template: "classic",
  photoDataUrl: "",
  sectionOrder: [...defaultSectionOrder],
  skills: ["Komunikasi", "Problem Solving", "Manajemen Waktu"],
  projects: "",
  certifications: "",
  languages: "",
  experiences: [
    {
      role: "Senior UI/UX Designer",
      company: "PT Inovasi Digital",
      startDate: "Jan 2022",
      endDate: "Sekarang",
      details:
        "Memimpin redesign dashboard internal untuk 5 tim lintas fungsi.\nMeningkatkan completion rate onboarding sebesar 21% melalui perbaikan alur UX.\nBerkolaborasi dengan product manager dan engineer untuk memastikan handoff lebih akurat."
    }
  ],
  education: [
    {
      institution: "Universitas Indonesia",
      degree: "S1 Desain Komunikasi Visual",
      startDate: "2016",
      endDate: "2020",
      details: "Lulus dengan fokus pada desain interaksi dan komunikasi visual digital."
    }
  ]
};

const form = document.getElementById("cvForm");
const cvPreview = document.getElementById("cvPreview");
const experienceList = document.getElementById("experienceList");
const educationList = document.getElementById("educationList");
const skillList = document.getElementById("skillList");
const skillInput = document.getElementById("skillInput");
const photoInput = document.getElementById("photoInput");
const photoMeta = document.getElementById("photoMeta");
const previewPhotoWrap = document.getElementById("previewPhotoWrap");
const previewPhoto = document.getElementById("previewPhoto");
const activeTemplateBadge = document.getElementById("activeTemplateBadge");
const activeLanguageBadge = document.getElementById("activeLanguageBadge");
const sectionOrderList = document.getElementById("sectionOrderList");
const workspace = document.querySelector(".workspace");
const previewPanel = document.querySelector(".preview-panel");
const previewToggleBtn = document.getElementById("previewToggleBtn");
const formPreviewToggleBtn = document.getElementById("formPreviewToggleBtn");
const originalDocumentTitle = document.title;
let previewCollapsedBeforePrint = null;

let state = loadState();
let draggedSectionKey = null;

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return structuredClone(defaultData);
    const parsed = JSON.parse(saved);
    return {
      ...structuredClone(defaultData),
      ...parsed,
      template: templateLabels[parsed.template] ? parsed.template : defaultData.template,
      cvLanguage: languageLabels[parsed.cvLanguage] ? parsed.cvLanguage : defaultData.cvLanguage,
      photoDataUrl: parsed.photoDataUrl || "",
      sectionOrder: normalizeSectionOrder(parsed.sectionOrder),
      experiences: parsed.experiences?.length ? parsed.experiences : structuredClone(defaultData.experiences),
      education: parsed.education?.length ? parsed.education : structuredClone(defaultData.education),
      skills: parsed.skills?.length ? parsed.skills : structuredClone(defaultData.skills)
    };
  } catch (error) {
    return structuredClone(defaultData);
  }
}

function normalizeSectionOrder(order) {
  if (!Array.isArray(order)) return [...defaultSectionOrder];
  const valid = order.filter((key) => defaultSectionOrder.includes(key));
  const missing = defaultSectionOrder.filter((key) => !valid.includes(key));
  return [...valid, ...missing];
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getCurrentLanguage() {
  return state.cvLanguage;
}

function getText(bundleKey) {
  return uiTexts[bundleKey]?.[getCurrentLanguage()] ?? "";
}

function getSectionHeading(key) {
  return sectionTexts[key]?.[getCurrentLanguage()] ?? key;
}

function textOrFallback(value, fallback) {
  return value?.trim() ? value.trim() : fallback;
}

function listFromTextarea(value) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function createEmptyExperience() {
  return {
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    details: ""
  };
}

function createEmptyEducation() {
  return {
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
    details: ""
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildRepeatCard(type, index, values) {
  const template = document.getElementById(`${type}Template`);
  const node = template.content.firstElementChild.cloneNode(true);
  node.dataset.index = index;

  node.querySelectorAll("[data-field]").forEach((input) => {
    const key = input.dataset.field;
    input.value = values[key] ?? "";
    input.addEventListener("input", (event) => {
      state[type === "experience" ? "experiences" : "education"][index][key] = event.target.value;
      saveState();
      renderPreview();
    });
  });

  node.querySelector(".remove-btn").addEventListener("click", () => {
    const collectionKey = type === "experience" ? "experiences" : "education";
    state[collectionKey].splice(index, 1);
    if (!state[collectionKey].length) {
      state[collectionKey].push(type === "experience" ? createEmptyExperience() : createEmptyEducation());
    }
    rerenderEditors();
  });

  return node;
}

function renderSectionOrderManager() {
  sectionOrderList.innerHTML = "";

  state.sectionOrder.forEach((key, index) => {
    const row = document.createElement("div");
    row.className = "order-item";
    row.dataset.sectionKey = key;
    row.draggable = true;
    row.addEventListener("dragstart", handleOrderDragStart);
    row.addEventListener("dragover", handleOrderDragOver);
    row.addEventListener("drop", handleOrderDrop);
    row.addEventListener("dragend", handleOrderDragEnd);

    const info = document.createElement("div");
    info.className = "order-item__info";

    const handle = document.createElement("span");
    handle.className = "order-item__handle";
    handle.textContent = "⋮⋮";
    handle.setAttribute("aria-hidden", "true");

    const label = document.createElement("span");
    label.className = "order-item__label";
    label.textContent = getSectionHeading(key);

    const controls = document.createElement("div");
    controls.className = "order-item__controls";

    const upButton = document.createElement("button");
    upButton.type = "button";
    upButton.className = "order-btn";
    upButton.textContent = "Naik";
    upButton.disabled = index === 0;
    upButton.addEventListener("click", () => moveSection(key, -1));

    const downButton = document.createElement("button");
    downButton.type = "button";
    downButton.className = "order-btn";
    downButton.textContent = "Turun";
    downButton.disabled = index === state.sectionOrder.length - 1;
    downButton.addEventListener("click", () => moveSection(key, 1));

    info.appendChild(handle);
    info.appendChild(label);
    controls.appendChild(upButton);
    controls.appendChild(downButton);
    row.appendChild(info);
    row.appendChild(controls);
    sectionOrderList.appendChild(row);
  });
}

function moveSection(key, direction) {
  const currentIndex = state.sectionOrder.indexOf(key);
  const nextIndex = currentIndex + direction;
  if (currentIndex < 0 || nextIndex < 0 || nextIndex >= state.sectionOrder.length) return;

  [state.sectionOrder[currentIndex], state.sectionOrder[nextIndex]] = [state.sectionOrder[nextIndex], state.sectionOrder[currentIndex]];
  saveState();
  renderSectionOrderManager();
  reorderPreviewSections();
}

function moveSectionToIndex(key, targetIndex) {
  const currentIndex = state.sectionOrder.indexOf(key);
  if (currentIndex < 0 || targetIndex < 0 || targetIndex >= state.sectionOrder.length || currentIndex === targetIndex) return;

  state.sectionOrder.splice(currentIndex, 1);
  state.sectionOrder.splice(targetIndex, 0, key);
  saveState();
  renderSectionOrderManager();
  reorderPreviewSections();
}

function handleOrderDragStart(event) {
  const row = event.currentTarget;
  draggedSectionKey = row.dataset.sectionKey;
  row.classList.add("is-dragging");
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", draggedSectionKey);
  }
}

function handleOrderDragOver(event) {
  event.preventDefault();
  const row = event.currentTarget;
  if (row.dataset.sectionKey !== draggedSectionKey) {
    row.classList.add("drag-over");
  }
}

function handleOrderDrop(event) {
  event.preventDefault();
  const targetRow = event.currentTarget;
  const targetKey = targetRow.dataset.sectionKey;
  const sourceKey = draggedSectionKey || event.dataTransfer?.getData("text/plain");
  targetRow.classList.remove("drag-over");

  if (!sourceKey || sourceKey === targetKey) return;
  const targetIndex = state.sectionOrder.indexOf(targetKey);
  moveSectionToIndex(sourceKey, targetIndex);
}

function handleOrderDragEnd() {
  draggedSectionKey = null;
  sectionOrderList.querySelectorAll(".order-item").forEach((item) => {
    item.classList.remove("is-dragging", "drag-over");
  });
}

function syncTemplateButtons() {
  document.querySelectorAll("[data-template-option]").forEach((button) => {
    const isActive = button.dataset.templateOption === state.template;
    button.classList.toggle("active", isActive);
  });
  activeTemplateBadge.textContent = templateLabels[state.template];
}

function syncPhotoMeta(message) {
  if (message) {
    photoMeta.textContent = message;
    return;
  }

  photoMeta.textContent = state.photoDataUrl
    ? `Foto profil aktif dan akan ikut tampil di preview serta file PDF. Maksimum file upload ${MAX_PHOTO_SIZE_MB} MB.`
    : `Belum ada foto yang dipilih. Maksimum file upload ${MAX_PHOTO_SIZE_MB} MB.`;
}

function syncLanguageControls() {
  form.cvLanguage.value = state.cvLanguage;
  activeLanguageBadge.textContent = languageLabels[state.cvLanguage];
  document.documentElement.lang = state.cvLanguage === "en" ? "en" : "id";
}

function syncPreviewPanelState() {
  if (!previewPanel || !previewToggleBtn || !workspace || !formPreviewToggleBtn) return;
  const collapsed = previewPanel.classList.contains("is-collapsed");
  workspace.classList.toggle("preview-collapsed", collapsed);
  previewToggleBtn.textContent = collapsed ? "Expand Preview" : "Collapse Preview";
  previewToggleBtn.setAttribute("aria-expanded", String(!collapsed));
  formPreviewToggleBtn.textContent = "Expand Preview";
  formPreviewToggleBtn.setAttribute("aria-expanded", String(!collapsed));
}

function setPreviewCollapsed(collapsed) {
  if (!previewPanel) return;
  previewPanel.classList.toggle("is-collapsed", collapsed);
  syncPreviewPanelState();
}

function rerenderEditors() {
  experienceList.innerHTML = "";
  educationList.innerHTML = "";
  skillList.innerHTML = "";

  state.experiences.forEach((item, index) => {
    experienceList.appendChild(buildRepeatCard("experience", index, item));
  });

  state.education.forEach((item, index) => {
    educationList.appendChild(buildRepeatCard("education", index, item));
  });

  state.skills.forEach((skill, index) => {
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.innerHTML = `<span>${escapeHtml(skill)}</span>`;

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.setAttribute("aria-label", `Hapus skill ${skill}`);
    removeBtn.textContent = "×";
    removeBtn.addEventListener("click", () => {
      state.skills.splice(index, 1);
      saveState();
      rerenderEditors();
    });

    chip.appendChild(removeBtn);
    skillList.appendChild(chip);
  });

  syncFormFields();
  saveState();
  renderPreview();
}

function syncFormFields() {
  form.fullName.value = state.fullName;
  form.jobTitle.value = state.jobTitle;
  form.jobTitleEn.value = state.jobTitleEn;
  form.email.value = state.email;
  form.phone.value = state.phone;
  form.location.value = state.location;
  form.website.value = state.website;
  form.github.value = state.github;
  form.portfolio.value = state.portfolio;
  form.instagram.value = state.instagram;
  form.summary.value = state.summary;
  form.summaryEn.value = state.summaryEn;
  form.projects.value = state.projects;
  form.certifications.value = state.certifications;
  form.languages.value = state.languages;
  syncTemplateButtons();
  syncPhotoMeta();
  syncLanguageControls();
  renderSectionOrderManager();
}

function renderPreviewList(target, items, emptyMessage) {
  target.innerHTML = "";
  if (!items.length) {
    const li = document.createElement("li");
    li.className = "muted-empty";
    li.textContent = emptyMessage;
    target.appendChild(li);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function updatePreviewPhoto() {
  if (state.photoDataUrl) {
    previewPhoto.src = state.photoDataUrl;
    cvPreview.classList.add("has-photo");
    previewPhotoWrap.setAttribute("aria-hidden", "false");
  } else {
    previewPhoto.removeAttribute("src");
    cvPreview.classList.remove("has-photo");
    previewPhotoWrap.setAttribute("aria-hidden", "true");
  }
}

function buildContactItems() {
  const currentLanguage = getCurrentLanguage();
  const labels = {
    email: currentLanguage === "en" ? "Email" : "Email",
    phone: currentLanguage === "en" ? "Phone" : "Telepon",
    location: currentLanguage === "en" ? "Location" : "Lokasi",
    website: currentLanguage === "en" ? "LinkedIn / Website" : "LinkedIn / Website",
    github: "GitHub",
    portfolio: "Portfolio",
    instagram: currentLanguage === "en" ? "Social" : "Sosial"
  };

  const icons = {
    email: "✉",
    phone: "☎",
    location: "⌂",
    website: "🔗",
    github: "⌘",
    portfolio: "◧",
    instagram: "◎"
  };

  return [
    { key: "email", value: state.email },
    { key: "phone", value: state.phone },
    { key: "location", value: state.location },
    { key: "website", value: state.website },
    { key: "github", value: state.github },
    { key: "portfolio", value: state.portfolio },
    { key: "instagram", value: state.instagram }
  ]
    .filter((item) => item.value?.trim())
    .map((item) => ({
      label: labels[item.key],
      value: item.value.trim(),
      icon: icons[item.key] || "•"
    }));
}

function getDisplayJobTitle() {
  const idTitle = state.jobTitle.trim();
  const enTitle = state.jobTitleEn.trim();

  if (state.cvLanguage === "en") return textOrFallback(enTitle || idTitle, getText("titleFallback"));
  if (state.cvLanguage === "bilingual") {
    const values = [idTitle, enTitle].filter(Boolean);
    return values.length ? [...new Set(values)].join(" / ") : getText("titleFallback");
  }
  return textOrFallback(idTitle || enTitle, getText("titleFallback"));
}

function getSummaryHtml() {
  const idSummary = state.summary.trim();
  const enSummary = state.summaryEn.trim();

  if (state.cvLanguage === "en") {
    return `<p>${escapeHtml(textOrFallback(enSummary || idSummary, getText("summaryFallback")))}</p>`;
  }

  if (state.cvLanguage === "bilingual") {
    const parts = [];
    if (idSummary) parts.push(`<p>${escapeHtml(idSummary)}</p>`);
    if (enSummary) parts.push(`<p>${escapeHtml(enSummary)}</p>`);
    if (!parts.length) parts.push(`<p>${escapeHtml(getText("summaryFallback"))}</p>`);
    return parts.join("");
  }

  return `<p>${escapeHtml(textOrFallback(idSummary || enSummary, getText("summaryFallback")))}</p>`;
}

function updateHeadings() {
  sectionConfigs.forEach((section) => {
    const heading = document.getElementById(section.headingId);
    if (heading) heading.textContent = getSectionHeading(section.key);
  });
}

function reorderPreviewSections() {
  state.sectionOrder.forEach((key) => {
    const section = document.getElementById(sectionConfigs.find((item) => item.key === key)?.sectionId);
    if (section) cvPreview.appendChild(section);
  });
}

function renderPreview() {
  cvPreview.className = `cv-preview template-${state.template}`;

  document.getElementById("previewName").textContent = textOrFallback(state.fullName, "Nama Lengkap");
  document.getElementById("previewTitle").textContent = getDisplayJobTitle();
  document.getElementById("previewSummary").innerHTML = getSummaryHtml();

  const contacts = buildContactItems();
  const contactTarget = document.getElementById("previewContacts");
  contactTarget.innerHTML = contacts.length
    ? contacts
        .map(
          (item) =>
            `<span class="contact-pill" data-icon="${escapeHtml(item.icon)}">${escapeHtml(item.label)}: ${escapeHtml(item.value)}</span>`
        )
        .join("")
    : `<span>${escapeHtml(getText("contactsFallback"))}</span>`;

  const experienceTarget = document.getElementById("previewExperiences");
  experienceTarget.innerHTML = "";
  state.experiences
    .filter((item) => item.role || item.company || item.details)
    .forEach((item) => {
      const wrapper = document.createElement("article");
      wrapper.className = "cv-item";
      const bullets = listFromTextarea(item.details);
      wrapper.innerHTML = `
        <div class="cv-item__head">
          <div>
            <div class="cv-item__title">${escapeHtml(textOrFallback(item.role, getText("unnamedRole")))}</div>
            <div class="cv-item__subtitle">${escapeHtml([item.company].filter(Boolean).join(" • ") || getText("unnamedCompany"))}</div>
          </div>
          <div class="cv-item__date">${escapeHtml([item.startDate, item.endDate].filter(Boolean).join(" - ") || getText("unnamedPeriod"))}</div>
        </div>
        ${
          bullets.length
            ? `<ul class="plain-list">${bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>`
            : `<p class="muted-empty">${escapeHtml(getText("experienceHint"))}</p>`
        }
      `;
      experienceTarget.appendChild(wrapper);
    });

  if (!experienceTarget.children.length) {
    experienceTarget.innerHTML = `<p class="muted-empty">${escapeHtml(getText("experienceEmpty"))}</p>`;
  }

  const educationTarget = document.getElementById("previewEducations");
  educationTarget.innerHTML = "";
  state.education
    .filter((item) => item.institution || item.degree || item.details)
    .forEach((item) => {
      const wrapper = document.createElement("article");
      wrapper.className = "cv-item";
      wrapper.innerHTML = `
        <div class="cv-item__head">
          <div>
            <div class="cv-item__title">${escapeHtml(textOrFallback(item.institution, getText("unnamedInstitution")))}</div>
            <div class="cv-item__subtitle">${escapeHtml(textOrFallback(item.degree, getText("unnamedDegree")))}</div>
          </div>
          <div class="cv-item__date">${escapeHtml([item.startDate, item.endDate].filter(Boolean).join(" - ") || getText("unnamedYear"))}</div>
        </div>
        <p>${escapeHtml(textOrFallback(item.details, getText("educationDetailFallback")))}</p>
      `;
      educationTarget.appendChild(wrapper);
    });

  if (!educationTarget.children.length) {
    educationTarget.innerHTML = `<p class="muted-empty">${escapeHtml(getText("educationEmpty"))}</p>`;
  }

  const previewSkills = document.getElementById("previewSkills");
  previewSkills.innerHTML = "";
  if (state.skills.length) {
    state.skills.forEach((skill) => {
      const tag = document.createElement("div");
      tag.className = "chip";
      tag.innerHTML = `<span>${escapeHtml(skill)}</span>`;
      previewSkills.appendChild(tag);
    });
  } else {
    previewSkills.innerHTML = `<span class="muted-empty">${escapeHtml(getText("skillsEmpty"))}</span>`;
  }

  renderPreviewList(document.getElementById("previewProjects"), listFromTextarea(state.projects), getText("projectsEmpty"));
  renderPreviewList(
    document.getElementById("previewCertifications"),
    listFromTextarea(state.certifications),
    getText("certificationsEmpty")
  );
  renderPreviewList(document.getElementById("previewLanguages"), listFromTextarea(state.languages), getText("languagesEmpty"));

  toggleSection("summarySection", Boolean(state.summary.trim() || state.summaryEn.trim()));
  toggleSection("experienceSection", Boolean(state.experiences.some((item) => item.role || item.company || item.details)));
  toggleSection("educationSection", Boolean(state.education.some((item) => item.institution || item.degree || item.details)));
  toggleSection("skillsSection", Boolean(state.skills.length));
  toggleSection("projectsSection", Boolean(listFromTextarea(state.projects).length));
  toggleSection("certificationsSection", Boolean(listFromTextarea(state.certifications).length));
  toggleSection("languagesSection", Boolean(listFromTextarea(state.languages).length));

  updateHeadings();
  syncTemplateButtons();
  syncLanguageControls();
  renderSectionOrderManager();
  reorderPreviewSections();
  updatePreviewPhoto();
}

function toggleSection(id, visible) {
  document.getElementById(id).style.display = visible ? "block" : "none";
}

function getPrintTitle() {
  return " ";
}

function getPdfFileName() {
  const fullName = textOrFallback(state.fullName, "").trim();
  const baseName = fullName ? `${fullName} - CV` : "CV";
  return baseName.replace(/[\\/:*?"<>|]+/g, "").trim() + ".pdf";
}

function preparePrintTitle() {
  document.title = getPrintTitle();
}

function restorePrintTitle() {
  document.title = originalDocumentTitle;
}

function enablePrintExportMode() {
  document.body.classList.add("print-mode");
  cvPreview.classList.add("pdf-export", "print-export");
}

function disablePrintExportMode() {
  document.body.classList.remove("print-mode");
  cvPreview.classList.remove("pdf-export", "print-export");
}

function expandPreviewForPrintIfNeeded() {
  if (!previewPanel) return;
  const collapsed = previewPanel.classList.contains("is-collapsed");
  previewCollapsedBeforePrint = collapsed;
  if (collapsed) {
    setPreviewCollapsed(false);
  }
}

function restorePreviewAfterPrintIfNeeded() {
  if (!previewPanel || previewCollapsedBeforePrint === null) return;
  setPreviewCollapsed(previewCollapsedBeforePrint);
  previewCollapsedBeforePrint = null;
}

function waitForAnimationFrame(count = 2) {
  return new Promise((resolve) => {
    const step = () => {
      if (count <= 0) {
        resolve();
        return;
      }
      count -= 1;
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

async function waitForImages(root) {
  const images = [...root.querySelectorAll("img")].filter((image) => image.getAttribute("src"));
  await Promise.all(
    images.map(
      (image) =>
        new Promise((resolve) => {
          if (image.complete) {
            resolve();
            return;
          }
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
        })
    )
  );
}

async function waitForStableCvLayout(root = cvPreview) {
  if (document.fonts?.ready) {
    try {
      await document.fonts.ready;
    } catch (error) {
      // abaikan jika browser tidak mendukung sinkronisasi font penuh
    }
  }

  await waitForImages(root);
  await waitForAnimationFrame(3);
  void root.offsetHeight;
  await waitForAnimationFrame(2);
}

async function printCV() {
  expandPreviewForPrintIfNeeded();
  enablePrintExportMode();
  await waitForStableCvLayout();
  preparePrintTitle();
  window.print();
}

async function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function resizeImage(dataUrl, maxDimension = 1400) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      let { width, height } = image;
      const scale = Math.min(1, maxDimension / Math.max(width, height));
      width = Math.round(width * scale);
      height = Math.round(height * scale);

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext("2d");
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, width, height);
      context.drawImage(image, 0, 0, width, height);

      resolve(canvas.toDataURL("image/jpeg", 0.92));
    };
    image.onerror = reject;
    image.src = dataUrl;
  });
}

async function handlePhotoUpload(event) {
  const [file] = event.target.files || [];
  if (!file) return;

  if (file.size > MAX_PHOTO_SIZE_BYTES) {
    syncPhotoMeta(`Ukuran foto melebihi batas ${MAX_PHOTO_SIZE_MB} MB. Silakan pilih file yang lebih kecil.`);
    photoInput.value = "";
    return;
  }

  try {
    syncPhotoMeta("Sedang memproses foto...");
    const rawDataUrl = await readFileAsDataURL(file);
    state.photoDataUrl = await resizeImage(rawDataUrl);
    saveState();
    renderPreview();
    syncPhotoMeta(`Foto "${file.name}" berhasil digunakan. Maksimum file upload ${MAX_PHOTO_SIZE_MB} MB.`);
  } catch (error) {
    syncPhotoMeta("Foto gagal diproses. Silakan coba file gambar lain.");
  } finally {
    photoInput.value = "";
  }
}

function setTemplate(templateName) {
  state.template = templateName;
  saveState();
  renderPreview();
}

async function downloadPDF(triggerButton) {
  if (typeof window.html2pdf === "undefined") {
    await printCV();
    return;
  }

  const originalLabel = triggerButton?.textContent;
  if (triggerButton) {
    triggerButton.disabled = true;
    triggerButton.textContent = "Menyiapkan PDF...";
  }

  const sandbox = document.createElement("div");
  sandbox.style.position = "fixed";
  sandbox.style.left = "-10000px";
  sandbox.style.top = "0";
  sandbox.style.width = "210mm";
  sandbox.style.padding = "0";
  sandbox.style.background = "#ffffff";
  sandbox.style.zIndex = "-1";

  const clone = cvPreview.cloneNode(true);
  clone.classList.add("pdf-export");
  clone.style.boxShadow = "none";
  clone.style.borderRadius = "0";
  clone.style.minHeight = "auto";
  clone.style.width = "100%";

  sandbox.appendChild(clone);
  document.body.appendChild(sandbox);

  try {
    await waitForStableCvLayout(clone);
    await window.html2pdf()
      .set({
        filename: getPdfFileName(),
        margin: [6, 6, 6, 6],
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["css", "legacy"], avoid: [".cv-header", ".cv-item", ".cv-photo-wrap"] }
      })
      .from(clone)
      .save();
  } finally {
    sandbox.remove();
    if (triggerButton) {
      triggerButton.disabled = false;
      triggerButton.textContent = originalLabel;
    }
  }
}

function handleBasicFieldChange(event) {
  const { name, value } = event.target;
  state[name] = value;
  saveState();
  renderPreview();
}

form.querySelectorAll("input[name], textarea[name], select[name]").forEach((field) => {
  const eventName = field.tagName === "SELECT" ? "change" : "input";
  field.addEventListener(eventName, handleBasicFieldChange);
});

document.querySelectorAll("[data-template-option]").forEach((button) => {
  button.addEventListener("click", () => setTemplate(button.dataset.templateOption));
});

document.querySelectorAll("[data-add='experience']").forEach((button) => {
  button.addEventListener("click", () => {
    state.experiences.push(createEmptyExperience());
    rerenderEditors();
  });
});

document.querySelectorAll("[data-add='education']").forEach((button) => {
  button.addEventListener("click", () => {
    state.education.push(createEmptyEducation());
    rerenderEditors();
  });
});

document.getElementById("addSkillBtn").addEventListener("click", () => {
  const values = skillInput.value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  values.forEach((skill) => {
    if (!state.skills.includes(skill)) state.skills.push(skill);
  });

  skillInput.value = "";
  saveState();
  rerenderEditors();
});

skillInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addSkillBtn").click();
  }
});

photoInput.addEventListener("change", handlePhotoUpload);
document.getElementById("removePhotoBtn").addEventListener("click", () => {
  state.photoDataUrl = "";
  saveState();
  renderPreview();
  syncPhotoMeta();
});

window.addEventListener("beforeprint", () => {
  expandPreviewForPrintIfNeeded();
  enablePrintExportMode();
  preparePrintTitle();
});

window.addEventListener("afterprint", () => {
  disablePrintExportMode();
  restorePreviewAfterPrintIfNeeded();
  restorePrintTitle();
});

document.getElementById("printTopBtn").addEventListener("click", printCV);
// document.getElementById("downloadPdfBtn").addEventListener("click", (event) => downloadPDF(event.currentTarget)); //commented on 15-JUN-2026
document.getElementById("downloadPdfBtn").addEventListener("click", (event) => printCV(event.currentTarget));
document.getElementById("downloadPdfTopBtn").addEventListener("click", (event) => downloadPDF(event.currentTarget));
document.getElementById("scrollToFormBtn").addEventListener("click", () => {
  document.getElementById("formStart").scrollIntoView({ behavior: "smooth", block: "start" });
});

if (previewToggleBtn && previewPanel) {
  previewToggleBtn.addEventListener("click", () => {
    setPreviewCollapsed(!previewPanel.classList.contains("is-collapsed"));
  });
}

if (formPreviewToggleBtn && previewPanel) {
  formPreviewToggleBtn.addEventListener("click", () => {
    setPreviewCollapsed(false);
  });
}

document.getElementById("resetBtn").addEventListener("click", () => {
  const confirmed = window.confirm("Reset semua data CV dan kembali ke template awal?");
  if (!confirmed) return;
  state = structuredClone(defaultData);
  saveState();
  rerenderEditors();
});

syncPreviewPanelState();
rerenderEditors();