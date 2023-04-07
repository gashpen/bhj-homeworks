let checkboxes = document.querySelectorAll('.interest__check');
let checked = document.querySelectorAll(".interests_active");

 
checkboxes = Array.from(checkboxes)

for(let i = 0; i < checkboxes.length;i++){
    checkboxes[i].addEventListener('click',function(){
        if(checkboxes[i].checked){
            
        }
    })
}