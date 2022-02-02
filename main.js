window.onload = () => {
  window.location.href = "https://bryantobing.com";
};

if (localStorage.getItem("theme") === "dark") {
  document.body.id = "dark";
} else {
  document.body.removeAttribute("id");
}

const setDarkMode = (boolean) => {
  if (boolean) {
    document.body.id = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
    document.body.removeAttribute("id");
  }
};
