const checked = document.querySelectorAll(".interests_active");
const interest = document.querySelectorAll(".interest__check");
const selectedInterests = document.querySelectorAll( '.interest__check:checked' );

interest.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(element.checked === true){
            element.closest(".interest").querySelectorAll(".interest__check").forEach((element)=>{
                element.checked = true;
          })
        }
        if(element.checked === false){
            element.closest(".interest").querySelectorAll(".interest__check").forEach((element)=>{
                element.checked = false;
          });
        };
    });
});
