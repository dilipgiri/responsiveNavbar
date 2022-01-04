
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const exitButton = document.querySelector(".exit-btn");
    
menuBtn.onclick =() => {
   
    menu.classList.add("active");
    
}
    

     exitButton.onclick = () => {
         menu.classList.remove("active");
       
     }