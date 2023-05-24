const switchTheme = () => {
  const main = document.querySelector("main");
  const root = document.querySelector(":root");
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#151515");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#fff");
    root.style.setProperty("--primary-color", "#ff0044");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#fdf59c");
    root.style.setProperty("--border-color", "#151515");
    root.style.setProperty("--font-color", "#151515");
    root.style.setProperty("--primary-color", "#b30d39");
    main.dataset.theme = "dark";
  }
};

export default switchTheme;
