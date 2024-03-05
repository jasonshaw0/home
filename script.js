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
  const targetWidths = [90, 90, 85, 70]; // Adjust the target widths accordingly

  progressBars.forEach((progressBar, index) => {
    animateProgressBar(progressBar, targetWidths[index]);
  });
});

function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

function toggleDropdown() {
      var dropdownContent = document.getElementById("dropdownContent");
      var arrowIcon = document.getElementById("arrowIcon");

      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        arrowIcon.classList.remove("rotate-up");
      } else {
        dropdownContent.style.display = "block";
        arrowIcon.classList.add("rotate-up");
      }
    }
