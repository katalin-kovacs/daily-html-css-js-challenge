//add active class to nav a elements when they are clicked
document.addEventListener("DOMContentLoaded", () => {
  let mainNav = document.getElementById("main-nav");

  if (mainNav) {
    mainNav.addEventListener("click", (event) => {
      // Check if the clicked element is an <a> tag
      if (event.target.tagName === "A") {
        // Remove "active" class from all links
        let links = mainNav.getElementsByTagName("a");
        for (let i = 0; i < links.length; i++) {
          links[i].classList.remove("active");
        }

        // Add "active" class to the clicked link
        event.target.classList.add("active");
      }
    });
  }
});

// add snowfall effect
document.addEventListener("DOMContentLoaded", () => {
  const snowfallContainer = document.getElementById("snowfall");

  // Function to create a snowflake element
  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`; // Vary the animation duration for a natural look
    snowflake.style.animationDelay = `-${Math.random()}s`; // Randomize the animation start time
    snowfallContainer.appendChild(snowflake);
  }

  // Function to generate a specified number of snowflakes
  function generateSnowflakes(numSnowflakes) {
    for (let i = 0; i < numSnowflakes; i++) {
      createSnowflake();
    }
  }

  // Generate 100 snowflakes (you can adjust this number)
  generateSnowflakes(20);
});
