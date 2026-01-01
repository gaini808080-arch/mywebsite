// ================= THEME =================
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

// ================= TEXTS =================
const text = {
  // ----- GLOBAL -----
  title: {
    kz: "Менің сайтым",
    ru: "Мой сайт",
    en: "My Website"
  },

  // ----- HOME -----
  hero_title: {
    kz: "Сәлем! Мен Қабиден Нұртай 👋",
    ru: "Привет! Я Кабиден Нуртай 👋",
    en: "Hi! I'm Kabiden Nurtay 👋"
  },
  hero_sub: {
    kz: "Болашақ Frontend Developer | IT-ге қызығатын студент",
    ru: "Будущий Frontend Developer | Студент, увлечённый IT",
    en: "Future Frontend Developer | IT Enthusiast Student"
  },
  hero_btn: {
    kz: "Байланысу",
    ru: "Связаться",
    en: "Contact me"
  },
  skills_title: {
    kz: "Менің дағдыларым",
    ru: "Мои навыки",
    en: "My skills"
  },
  mini_about_title: {
    kz: "Қысқаша",
    ru: "Коротко обо мне",
    en: "About me"
  },
  mini_about_text: {
    kz: "Мен веб-сайт жасауды үйреніп жүрген студентпін және заманауи IT технологияларға қызығамын.",
    ru: "Я студент, изучающий веб-разработку и современные IT-технологии.",
    en: "I am a student learning web development and modern IT technologies."
  },
  cta_title: {
    kz: "Менімен байланысқың келе ме?",
    ru: "Хочешь связаться со мной?",
    en: "Want to get in touch?"
  },
  cta_btn: {
    kz: "Контакт",
    ru: "Контакты",
    en: "Contact"
  },

  // ----- ABOUT -----
  about_title: {
    kz: "Мен туралы",
    ru: "Обо мне",
    en: "About me"
  },
  about_text: {
    kz: "Менің атым Қабиден Нұртай. Мен Атырау индустриялық колледжінің 3-курс студентімін. ЭВМҚ-23 тобында оқимын және IT саласына қатты қызығамын.",
    ru: "Меня зовут Кабиден Нуртай. Я студент 3 курса Атырауского индустриального колледжа, обучаюсь в группе ЭВМҚ-23 и очень интересуюсь IT.",
    en: "My name is Kabiden Nurtay. I am a 3rd-year student at Atyrau Industrial College, studying in the EVMQ-23 group and I am very interested in IT."
  },

  // ----- CONTACT -----
  contact_title: {
    kz: "Байланыс",
    ru: "Контакты",
    en: "Contact"
  },
  send: {
    kz: "Жіберу",
    ru: "Отправить",
    en: "Send"
  }
};

// ================= LANGUAGE =================
function setLang(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    el.innerText = text[el.dataset.key][lang];
  });
  localStorage.setItem("lang", lang);
}

// ================= LOAD =================
window.onload = () => {
  // theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  // language
  setLang(localStorage.getItem("lang") || "kz");
};
