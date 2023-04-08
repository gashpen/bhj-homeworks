const checked = document.querySelectorAll(".interests_active");
const interest = document.querySelectorAll(".interest__check");
const selectedInterests = document.querySelectorAll( '.interest__check:checked' );

Array.from(interest).forEach(element=>{
    element.addEventListener("click",()=>{
        if(interest[0].checked === true){
            interest[1].checked = true;
            interest[2].checked = true;
        } else {
            interest[1].checked = false;
            interest[2].checked = false;
        }
        if(interest[3].checked === true){
            interest[4].checked = true;
            interest[5].checked = true;
        } else {
            interest[4].checked = false;
            interest[5].checked = false;  
        }
    })
})
