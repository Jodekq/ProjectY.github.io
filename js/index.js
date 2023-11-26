// //toggle themes ---------------------------------------- toggle themes
// const darkThemeButton = document.getElementById("dark-theme-button");
// const lightThemeButton = document.getElementById("light-theme-button");
// const greenThemeButton = document.getElementById("green-theme-button");

// // Retrieve the stored theme from localStorage
// const storedTheme = localStorage.getItem('data-theme');

// // If a theme is stored, apply it
// if (storedTheme) {
//   document.body.setAttribute('data-theme', storedTheme);
// }

// darkThemeButton.addEventListener('click', () => {
//   applyTheme('dark');
// });

// lightThemeButton.addEventListener('click', () => {
//   applyTheme('light');
// });

// greenThemeButton.addEventListener('click', () => {
//   applyTheme('green');
// });

// function applyTheme(theme) {
//   document.body.setAttribute('data-theme', theme);
//   // Store the selected theme in localStorage
//   localStorage.setItem('data-theme', theme);
// }

// open mini calc function 

function openWindowMiniWindow(url) {
  var width = 570;
  var height = 350;
  var left = 0; 
  var top = 1; 

  var popup = window.open(url, "_blank", "width=" + width + ", height=" + height + ", left=" + left + ", top=" + top);
  popup.location = url;
}

// clear local storage 
function ClearLocalStorage() {
  localStorage.clear();
}

//menu button 

function menuChange() {
  const sidebar = document.getElementById("sidebar");
  const menubutton = document.getElementById("menu-button");

  if (sidebar.classList.contains("sidebar-small")) {
    sidebar.classList.remove("sidebar-small");
    sidebar.classList.add("sidebar");
    localStorage.setItem("selectedClass", "sidebar");
  } else {
    sidebar.classList.remove("sidebar");
    sidebar.classList.add("sidebar-small");
    localStorage.setItem("selectedClass", "sidebar-small");
  }
}

window.addEventListener("load", function() {
  const selectedClass = localStorage.getItem("selectedClass");
  if (selectedClass) {
    const sidebar = document.getElementById("sidebar");
  }
});

//switch button

