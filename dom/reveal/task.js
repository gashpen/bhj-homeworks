const revealElement = document.querySelectorAll(".reveal");

revealElement.forEach(function(elements){
    setInterval(()=>{
        let {top,bottom} = elements.getBoundingClientRect();
        if(top < 900){
            elements.classList.add("reveal_active");
        }
        if(bottom > window.innerHeight || bottom < 0){
            elements.classList.remove("reveal_active");
        }
    },1000);
});


