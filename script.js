function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("show");

  var otherDropdownId = dropdownId === "myDropdown" ? "skillsDropdown" : "myDropdown";
  var otherDropdown = document.getElementById(otherDropdownId);
  if (otherDropdown.classList.contains('show') && dropdown.classList.contains('show')) {
      otherDropdown.classList.remove('show');
  }
}

// Close the dropdowns if the user clicks outside
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}

function animateProgressBar(progressBar, targetWidth) {
  let width = 0;
  const progressBarElement = progressBar.querySelector(".progress");

  const interval = setInterval(() => {
      if (width >= targetWidth) {
          clearInterval(interval);
      } else {
          width++;
          progressBarElement.style.width = width + "%";
      }
  }, 10); // Adjust the interval for smoother animation
}

document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-bar");
  const targetWidths = [90, 85, 80, 70]; // Adjust the target widths accordingly

  progressBars.forEach((progressBar, index) => {
      animateProgressBar(progressBar, targetWidths[index]);
  });
});
