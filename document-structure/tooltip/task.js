const hasToolTip = document.querySelectorAll(".has-tooltip");

hasToolTip.forEach(element=>{
    element.addEventListener("click",(e)=>{
        element.innerHTML += `<div class="tooltip tooltip_active">${element.title}</div>`
        e.preventDefault()
    })
})