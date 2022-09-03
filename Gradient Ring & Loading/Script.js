let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let percent = document.querySelector("span");

let count = 0;

inner.addEventListener('click',function(){
    setInterval(() =>{
        if(count == 100){
            clearInterval();
            outer.classList.remove('active-loader');
            outer.classList.add('active-loader2');
        }else{
            count++;
            percent.textContent = count + '%';
            outer.classList.add('active-loader');
        }
    },100);
    
});