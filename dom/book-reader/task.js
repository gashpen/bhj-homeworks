let fontSize = document.querySelectorAll(".font-size");
let book = document.querySelector(".book");

fontSize = Array.from(fontSize);
fontSize.forEach(element=>{
    element.addEventListener("click",function(e){
       fontSize.forEach(element=>{
        element.classList.remove("font-size_active");
       });
       element.classList.add("font-size_active");
       e.preventDefault();
       if(fontSize.findIndex(el => el.classList.contains("font-size_active")) === 0){
            book.classList.add("book_fs-small")
       };
       if(fontSize.findIndex(el => el.classList.contains("font-size_active")) === 1){
        book.classList.remove("book_fs-small");
        book.classList.remove("book_fs-big");
       };
       if(fontSize.findIndex(el => el.classList.contains("font-size_active")) === 2){
        book.classList.add("book_fs-big")
       }
    });
    
});