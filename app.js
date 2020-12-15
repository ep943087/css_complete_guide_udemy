const button = document.querySelector("button");
const side = document.querySelector("aside");

button.addEventListener('click',e=>{
    if(side.classList.contains("open")){
        side.classList.remove("open");
        button.innerHTML = "&gt;&gt;";
    } else{
        side.classList.add("open");
        button.innerHTML = "&lt;&lt;";
    }
});