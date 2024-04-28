
let opens=document.getElementById("pro");
let closes =document.getElementById("cls");
let contant=document.querySelector(".navigation");


  closes.addEventListener("click",()=>{
 closes.style.background="blue";
 closes.style.borderRadius="10px";
opens.classList.remove("op");
closes.classList.add("op");
contant.classList.add("op");
  })



  opens.addEventListener("click",()=>{

   opens.style.borderRadius="10px";
    opens.style.background="red";
    opens.classList.add("op");
    closes.classList.remove("op");
    contant.classList.remove("op");
  })
