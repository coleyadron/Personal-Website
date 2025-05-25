document.documentElement.classList.toggle(
    "dark",
    localStorage.getItem("theme") === "dark"
    || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
)
  
function toggleTheme() {
    localStorage.theme = localStorage.getItem("theme") === "dark" ? "light" : "dark"
    console.log(localStorage.theme)
    document.documentElement.classList.toggle("dark", localStorage.theme === "dark")
    document.documentElement.classList.toggle("light", localStorage.theme === "light")
}
