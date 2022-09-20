const BASE_DIR = "/works/assets/images/";
const GIT = "https://github.com/TenmaChinen/";
const MSG_DEV = "Currently Developing...";
const MSG_NAV = "No Available Yet !";
const MSG_PRI = "Private Project";

const worksInfo = [
  {
    groups: ["Python"],
    title: "Color Pycker",
    desc: "Windows based color picker desktop app. Fast copy the color as hex or rgb.",
    links: { git: GIT + "color-pycker", web: MSG_NAV, doc: MSG_NAV },
    bigLink: "git",
    img: "https://user-images.githubusercontent.com/36393143/185993249-e20266be-75d7-4ac6-a8d9-5c9b000a8eeb.png",
    date: { start: "2022/06/10", end: "2022/06/20" }
  },
  {
    groups: ["Python"],
    title: "Python Desktop Color Notes",
    desc: "Create grouped customizable notes  to improve organization for daily tasks or ideas.",
    links: { git: MSG_NAV, web: MSG_NAV, doc: MSG_NAV },
    bigLink: "git",
    img: BASE_DIR + "color-notes-py.png",
    date: { start: "2021/10/20", end: "2021/11/20" }
  },
  {
    groups: ["Python"],
    title: "ST3 Autoformat Plugin",
    desc: "Automatic format Python code to a morea readable style by a given shortcut.( Not PEP8 standards )",
    links: { git: MSG_NAV, web: MSG_NAV, doc: MSG_NAV },
    bigLink: "git",
    img: BASE_DIR + "st3_autoformat.png",
    date: { start: "2021/08/01", end: "2021/08/29" }
  },
  {
    groups: ["Python"],
    title: "OpenCV Tools Desktop App",
    desc: "Simple toolkit to apply filters and several detection algorithms as contours, lines and much more.",
    links: { git: MSG_NAV, web: MSG_NAV, doc: MSG_NAV },
    bigLink: "git",
    img: "",
    date: { start: "2022/05/20", end: "2022/06/09" }
  },
  {
    groups: ["Python"],
    title: "PySnip",
    desc: "Desktop snipper tool enhancer",
    links: { git: MSG_NAV, web: MSG_NAV, doc: MSG_NAV },
    bigLink: "git",
    img: "",
    date: { start: "2021/07/14", end: "2021/07/16" }
  },
  {
    groups: ["Python", "Android", "Java"],
    title: "Binance Arbitrage Finder",
    desc: "Gathering data from Binance stores and notifies each opportunity in an Android App",
    links: { git: MSG_NAV, web: MSG_NAV, doc: MSG_NAV },
    bigLink: "git",
    img: BASE_DIR + "arbitrage_app.png",
    date: { start: "2020/10/22", end: "2021/03/16" }
  },

  {
    groups: ["Android", "Java"],
    title: "Whatsapp Artists Stickers App",
    desc: "Artists friendly app. Show and organize stickers stored in Google Drive. Customizable whatsapp sticker packages.",
    links: { git: MSG_NAV, web: MSG_NAV, doc: MSG_NAV },
    bigLink: "git",
    img: BASE_DIR + "wha_stickers_app.png",
    date: { start: "2021/08/29", end: "2021/11/25" }
  },
  {
    groups: ["Android", "Java"],
    title: "Color Notes App",
    desc: "Simple and intuitive TODO tasks app using colored notes in Android.",
    links: { git: MSG_NAV, web: MSG_NAV, doc: MSG_NAV },
    img: BASE_DIR + "color-notes-app.png",
    bigLink: "git",
    date: { start: "2019/08/28", end: "2019/09/14" }
  },
  {
    groups: ["Android", "Java"],
    title: "VStack game",
    desc: "Small arcade game, styled as old arcade games, whose goal is to stack blocks on top of each other until reach the top. With several levels.",
    links: { git: MSG_NAV, web: MSG_NAV, doc: MSG_NAV },
    bigLink: "git",
    img: BASE_DIR + "vstack.png",
    date: { start: "2018/09/03", end: "2019/07/15" }
  },
  {
    groups: ["ML", "Python"],
    title: "Trading Classification Bot",
    desc: "Soft trading signal classification based on Multi Layer Perceptron made in Keras.",
    links: { git: MSG_PRI, web: MSG_NAV, doc: MSG_NAV },
    bigLink: "doc",
    img: BASE_DIR + "soft_trade_classify_ann.png",
    date: { start: "2022/06/01", end: "2022/07/01" },
  },
  {
    groups: ["Django", "Python"],
    title: "Color Notes WebApp",
    desc: "TODO customizable task notes based in Django Framework.",
    links: { git: GIT + "webapp-color-notes-django", web: "http://tenma.pythonanywhere.com/", doc: MSG_NAV },
    bigLink: "git",
    img: BASE_DIR + "color-notes-webapp.png",
    date: { start: "2022/07/16", end: "2022/08/29" }
  },
  {
    groups: ["Django", "Python"],
    title: "Automatic Answer Checker",
    desc: "Upload test exam image and automatically retrieves the student score. Based on OpenCV computer vision framework.",
    links: { git: MSG_NAV, web: MSG_NAV, doc: MSG_NAV },
    bigLink: "web",
    img: BASE_DIR + "exam-scanner.png",
    date: { start: "2022/07/24", end: "" }
  },
  {
    groups: ["Django", "Python", "ML"],
    title: "Keras Models Converter",
    desc: "Converts keras neural networks serial models to numpy class file to fast execute without heavy libraries needed.",
    links: { git: MSG_NAV, web: MSG_NAV, doc: MSG_NAV },
    bigLink: "git",
    img: "",
    date: { start: "22/08/20", end: "" }
  },
  {
    groups: ["Arduino", "CPP"],
    title: "Inductance & Capacitance Meter",
    desc: "Resonance frequency based inductometer and capacitor charging time capacitance meter based in Arduino.",
    links: { git: MSG_NAV, web: MSG_NAV, doc: MSG_NAV },
    bigLink: "git",
    img: BASE_DIR + "lc_meter.png",
    date: { start: "2017/05/05", end: "2017/05/05" }
  },
  {
    groups: ["JavaScript"],
    title: "Matrix JS Library ",
    desc: "Small JavaScript library to perform matrix operations.",
    links: { git: GIT + "matrix-js", web: MSG_NAV, doc: GIT + "matrix-js#readme" },
    bigLink: "git",
    img: "https://user-images.githubusercontent.com/36393143/190913289-fe8a3883-98c6-4d98-839c-39ac2672774a.png",
    date: { start: "2022/09/17", end: "2022/09/19" }
  },
  {
    groups: ["Python", "ML", "JavaScript"],
    title: "ANN Models To Numpy - JavaScript",
    desc: "Python app to convert Keras models into Numpy or JavaScript file to easy perform the neural networks feed-forward.",
    links: { git: GIT + "ann-models-2-npy-js", web: MSG_NAV, doc: GIT + "ann-models-2-npy-js#readme" },
    bigLink: "git",
    img: "",
    date: { start: "2022/09/10", end: "2022/09/21" }
  }
];



worksInfo.sort((workInfoA, workInfoB) => {
  const dateA = workInfoA.date.end || workInfoA.date.start;
  const dateB = workInfoB.date.end || workInfoB.date.start;
  return new Date(dateB) - new Date(dateA);
})