document.addEventListener("DOMContentLoaded", () => {
  const home = document.getElementById("home-view");
  const addGoal = document.getElementById("add-goal-view");
  const addGoalBtn = document.getElementById("addGoalBtn");
  let isHomeVisible = true;

  addGoalBtn.addEventListener("click", () => {
    if (isHomeVisible) {
      home.style.cssText = "display:none";
      addGoal.style.cssText = "display:block";
      isHomeVisible = !isHomeVisible;
    } else {
      home.style.cssText = "display:block";
      addGoal.style.cssText = "display:none";
      isHomeVisible = !isHomeVisible;
    }
  });
});
