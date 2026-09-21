const COPY = {
  ru: {
    skip: "К содержанию",
    navExpertise: "Чем занимаюсь",
    navExperience: "Опыт",
    navSkills: "Стек",
    navContact: "Контакты",
    print: "PDF",
    kicker: "Engineering Manager · 10+ лет в разработке",
    role: "Руковожу командами и сам проектирую, как система поедет в прод.",
    lede: "Больше десяти лет пишу код, последние годы ещё и веду людей. Работал в ритейле и финтехе, параллельно развиваю свой AnimeSaver. Мне важно придумать, собрать и довести до рабочего вида — с понятной архитектурой и кодом, который не стыдно оставлять команде.",
    location: "Москва",
    open: "Открыт к предложениям",
    portraitCaption: "mangaka585 · основатель AnimeSaver",
    statYearsValue: "10+",
    statYears: "лет в разработке",
    statTrackValue: "IC → EM",
    statTrack: "инженер, лид, руководитель",
    statDomainValue: "Fintech / Retail",
    statDomain: "Т-Банк · Лемана ПРО · МГУ",
    statFounded: "свой продукт в проде",
    expKicker: "01 — Чем занимаюсь",
    expTitle: "Как я обычно работаю",
    expLede:
      "Беру задачу целиком: разобраться в предметке, спроектировать сервисы, довезти до прода и оставить систему, с которой можно спокойно жить.",
    ex1Title: "Команды",
    ex1Text:
      "Веду разработку: приоритеты, технические развилки, как едем в прод и как растут люди рядом. Руководитель для меня не табличка на двери, а человек, который отвечает за результат команды.",
    ex2Title: "Backend",
    ex2Text:
      "Пишу и проектирую сервисы на Kotlin, Java и TypeScript. Стараюсь, чтобы были понятные границы, честные контракты и данные, которым можно доверять.",
    ex3Title: "Бизнес-процессы",
    ex3Text:
      "Часто работаю там, где много статусов, заявок и интеграций. Camunda помогает не держать весь этот зоопарк в голове и в бесконечных if.",
    ex4Title: "Как это едет в прод",
    ex4Text:
      "Kubernetes, Docker, werf, Jenkins, Grafana, Prometheus. Если нельзя спокойно выкатить и понять, что происходит — для меня это ещё не готово.",
    workKicker: "02 — Опыт",
    workTitle: "Где это было на практике",
    now: "сейчас",
    job1Dates: "ноя 2025 — н.в.",
    job1Place: "Москва",
    job1Company: "Т-Банк",
    job1Title: "Engineering Manager",
    job1Text:
      "В Т-Банке руковожу разработкой. Смотрю и за людьми, и за сервисами: банковские процессы должны оставаться понятными и не разваливаться, когда ими начинают пользоваться.",
    job1p1: "Помогаю принимать технические решения и держать качество поставки",
    job1p2: "Перевожу сложный банковский домен в систему, которую команда может развивать дальше",
    job1p3:
      "До этого здесь же был Team Lead — с февраля по ноябрь 2025, потом стал Engineering Manager",
    job2Dates: "2025 — н.в.",
    job2Place: "по совместительству",
    job2Company: "МГУ имени М. В. Ломоносова",
    job2Title: "Team Lead",
    job2Text:
      "Параллельно веду разработку цифровых сервисов в МГУ. Больше про команду и ясность, чем про то, чтобы всё написать самому.",
    job3Dates: "дек 2021 — янв 2025",
    job3Place: "Москва",
    job3Title: "Software Engineer → Team Lead",
    job3Text:
      "В Лемана ПРО три года делал full-stack платформу, потом принял команду. Из кода и архитектуры по пути не выпал.",
    job3p1: "Сервисы на TypeScript и NestJS, PostgreSQL и MongoDB, API и интеграции",
    job3p2: "Бизнес-процессы на Camunda — от заявки до рабочего сценария",
    job3p3: "Выкатывали в Kubernetes через werf. Командой руководил с сентября 2024 по январь 2025",
    job4Dates: "сен 2019 — н.в.",
    job4Place: "свой продукт",
    job4Title: "Основатель и разработчик",
    job4Text:
      "С 2019 года делаю AnimeSaver. Сам придумал, сам собрал и до сих пор развиваю — живой сервис, не склад экспериментов.",
    skillsKicker: "03 — Стек",
    skillsTitle: "Чем пользовался",
    skillsNote:
      "Собрал то, с чем реально работал в проектах и что указывал в резюме. Где-то это основной инструмент, где-то — то, чем решали конкретную задачу.",
    skillLead: "Управление",
    skillTeam: "Управление командой",
    skillDelivery: "Поставка и качество",
    skillLangs: "Языки",
    skillBack: "Backend",
    skillFront: "Frontend и мобилка",
    skillData: "Данные",
    skillInfra: "Инфраструктура",
    skillTest: "Тесты и качество",
    skillTools: "Инструменты",
    skillSec: "Сетевая безопасность",
    eduKicker: "04 — Образование",
    eduTitle: "Образование",
    eduSchool: "Российский государственный социальный университет",
    eduDegree: "Бакалавр, юриспруденция",
    eduNote:
      "В разработку пришёл сам. Юриспруденция никуда не делась: требования, риски и договорённости читаю так же внимательно, как код.",
    certTitle: "Ещё учился по ходу работы",
    cert1: "Programming Fundamentals in Kotlin — Meta",
    cert2: "Camunda for microservice orchestration",
    cert3: "Full-Stack Web Development with React — Coursera",
    cert4: "Programming for Everybody (Python) — Coursera",
    contactKicker: "05 — Связаться",
    contactTitle: "Написать мне",
    contactLede:
      "Если ищете Engineering Manager или Team Lead, нужен backend или платформа — или просто есть о чём поговорить по делу. Москва, по задаче могу и удалённо.",
    footer: "Александр Татевосян · Engineering Manager · 10+ лет в разработке",
  },
  en: {
    skip: "Skip to content",
    navExpertise: "What I do",
    navExperience: "Experience",
    navSkills: "Stack",
    navContact: "Contact",
    print: "PDF",
    kicker: "Engineering Manager · 10+ years in software",
    role: "I lead teams and still design how the system ships to production.",
    lede: "I have been writing software for more than ten years, and lately I also lead people. Retail, fintech, and my own product, AnimeSaver. I like to invent something, build it, and leave behind architecture and code a team can live with.",
    location: "Moscow",
    open: "Open to opportunities",
    portraitCaption: "mangaka585 · founder of AnimeSaver",
    statYearsValue: "10+",
    statYears: "years in software",
    statTrackValue: "IC → EM",
    statTrack: "engineer, lead, manager",
    statDomainValue: "Fintech / Retail",
    statDomain: "T-Bank · LemanaPRO · MSU",
    statFounded: "own product in production",
    expKicker: "01 — What I do",
    expTitle: "How I usually work",
    expLede:
      "I like to take a problem end to end: understand the domain, design the services, ship them, and leave a system people can keep.",
    ex1Title: "Teams",
    ex1Text:
      "I lead engineering: priorities, technical forks, how we ship, and how people grow. A title on the door means little. Being accountable for the team's result means a lot.",
    ex2Title: "Backend",
    ex2Text:
      "I write and design services in Kotlin, Java, and TypeScript. I care about clear boundaries, honest contracts, and data you can trust.",
    ex3Title: "Business processes",
    ex3Text:
      "I often work where there are statuses, cases, and integrations everywhere. Camunda helps keep that zoo out of anyone's head and out of endless ifs.",
    ex4Title: "How it ships",
    ex4Text:
      "Kubernetes, Docker, werf, Jenkins, Grafana, Prometheus. If we cannot ship calmly and see what is happening, it is not done yet.",
    workKicker: "02 — Experience",
    workTitle: "Where this happened",
    now: "now",
    job1Dates: "Nov 2025 — present",
    job1Place: "Moscow",
    job1Company: "T-Bank",
    job1Title: "Engineering Manager",
    job1Text:
      "At T-Bank I lead engineering. I watch both the people and the services: banking processes should stay understandable and not fall apart once real users show up.",
    job1p1: "I help make technical calls and keep delivery quality from slipping",
    job1p2: "I turn a messy banking domain into a system the team can keep growing",
    job1p3: "I was Team Lead here first, Feb–Nov 2025, then Engineering Manager",
    job2Dates: "2025 — present",
    job2Place: "part-time",
    job2Company: "Lomonosov Moscow State University",
    job2Title: "Team Lead",
    job2Text:
      "I also lead engineering for digital services at MSU. More about the team and clarity than writing every line myself.",
    job3Dates: "Dec 2021 — Jan 2025",
    job3Place: "Moscow",
    job3Title: "Software Engineer → Team Lead",
    job3Text:
      "At LemanaPRO I spent three years on a full-stack platform, then took the team. I did not drop the code or the architecture on the way.",
    job3p1: "TypeScript and NestJS services, PostgreSQL and MongoDB, APIs and integrations",
    job3p2: "Business processes on Camunda — from a case to a working scenario",
    job3p3: "We shipped on Kubernetes with werf. I led the team from Sep 2024 to Jan 2025",
    job4Dates: "Sep 2019 — present",
    job4Place: "own product",
    job4Title: "Founder and engineer",
    job4Text:
      "I have been building AnimeSaver since 2019. I thought it up, built it, and still run it — a live service, not a drawer of experiments.",
    skillsKicker: "03 — Stack",
    skillsTitle: "What I have actually used",
    skillsNote:
      "Things I used on real projects and listed on my résumé. Some of these are daily tools, some I picked up to solve a specific problem.",
    skillLead: "Leadership",
    skillTeam: "Team leadership",
    skillDelivery: "Delivery and quality",
    skillLangs: "Languages",
    skillBack: "Backend",
    skillFront: "Frontend and mobile",
    skillData: "Data",
    skillInfra: "Infrastructure",
    skillTest: "Tests and quality",
    skillTools: "Tools",
    skillSec: "Network security",
    eduKicker: "04 — Education",
    eduTitle: "Education",
    eduSchool: "Russian State Social University",
    eduDegree: "Bachelor's degree, Law",
    eduNote:
      "I came to engineering on my own. The law degree never really left: I still read requirements, risk, and agreements as carefully as code.",
    certTitle: "I kept studying on the job",
    cert1: "Programming Fundamentals in Kotlin — Meta",
    cert2: "Camunda for microservice orchestration",
    cert3: "Full-Stack Web Development with React — Coursera",
    cert4: "Programming for Everybody (Python) — Coursera",
    contactKicker: "05 — Contact",
    contactTitle: "Write to me",
    contactLede:
      "If you need an Engineering Manager or Team Lead, backend or platform work — or you just have something concrete to talk about. Moscow, remote depending on the problem.",
    footer: "Alexander Tatevosyan · Engineering Manager · 10+ years in software",
  },
};

const buttons = document.querySelectorAll(".lang-btn");

function setLang(lang) {
  const dict = COPY[lang] || COPY.ru;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });
  buttons.forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  localStorage.setItem("lang", lang);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

const saved = localStorage.getItem("lang");
const prefersEn = navigator.language && navigator.language.toLowerCase().startsWith("en");
setLang(saved || (prefersEn ? "en" : "ru"));
