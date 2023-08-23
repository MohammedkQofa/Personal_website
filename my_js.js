let topB = document.getElementById("top");
window.onscroll = function () {
    if(this.scrollY >= 1000){
        console.log(this.scrollY);
        topB.className = 'top_show'
    }
    else{
        topB.className = 'top'
    }
};
topB.onclick = function(){
    window.scrollTo({
        top:0, 
        behavior:"smooth"
    });
};




let vc = document.getElementById("img");
    setInterval(function() {
        setTimeout(theard, 0000);
        setTimeout(second, 3000);
        setTimeout(first, 6000);
    }, 6000);
    function first(){
        vc.style.backgroundImage = "url('web88.jpg')";
    }
    function second(){
        vc.style.backgroundImage = "url('web99.jpg')";
    }
    function theard(){
        vc.style.backgroundImage = "url('web1111.jpg')";
    }

    let textInTop = document.getElementById("text");
    let text = "Front End developer With ReactJS";
    let counter = 0;
    function coud(){
        textInTop.textContent+=text.charAt(counter);
        counter++;
        if(counter==text.length-1){
          clearInterval(text.length-1);
        }
    }
    let counterr= setInterval(coud, 100);



let m = document.getElementById("html")
m.style.width = "80%";
m.style.transition = "5s";
let m1 = document.getElementById("css")
m1.style.width = "50%";
m1.style.transition = "3s";
let m2 = document.getElementById("js")
m2.style.width = "100%";
m2.style.transition = "6s";


