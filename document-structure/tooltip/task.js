const hasToolTip = document.querySelectorAll(".has-tooltip");
const newDivTooltip = document.createElement("div");
newDivTooltip.className = "tooltip";

hasToolTip.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        newDivTooltip.classList.toggle("tooltip_active");
        newDivTooltip.innerHTML = `${element.title}`;
        element.before(newDivTooltip);
        newDivTooltip.style.top = `${element.getBoundingClientRect().top + 20}px`;
        newDivTooltip.style.left = `${element.getBoundingClientRect().left}px`;
        e.preventDefault();
    })
})