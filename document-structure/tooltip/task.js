const hasToolTip = document.querySelectorAll(".has-tooltip");
const newDivTooltip = document.createElement("div");
newDivTooltip.className = "tooltip";

hasToolTip.forEach((element) => {
    element.addEventListener("click", (e) => {
      hasToolTip.forEach((element) => {
        newDivTooltip.classList.remove("tooltip_active");
      })
      newDivTooltip.classList.add("tooltip_active");
      newDivTooltip.innerHTML = `${element.title}`;
      element.before(newDivTooltip);
      newDivTooltip.style.top = `${element.getBoundingClientRect().top + 20}px`;
      newDivTooltip.style.left = `${element.getBoundingClientRect().left}px`;
      newDivTooltip.style.cursor = "pointer"
      newDivTooltip.addEventListener("click", () => {
        if (newDivTooltip.classList.contains("tooltip_active")) {
          newDivTooltip.classList.remove("tooltip_active");
        }
      })
      e.preventDefault();
    })
  })