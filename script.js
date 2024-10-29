let btn = document.querySelector(".slider")
let curr = 'light'
btn.addEventListener("click",()=>{
    if(curr==='light'){
        document.querySelector("body").style.backgroundColor = "black"
        curr = 'black'
    }else{
        document.querySelector("body").style.backgroundColor = "white"
        curr='light'
    }
})