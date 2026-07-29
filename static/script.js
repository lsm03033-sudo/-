const btn = document.getElementById("celebrateBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {

    confetti({
        particleCount:180,
        spread:90,
        origin:{y:0.6}
    });

    setTimeout(()=>{
        confetti({
            particleCount:120,
            angle:60,
            spread:70,
            origin:{x:0,y:0.7}
        });
    },200);

    setTimeout(()=>{
        confetti({
            particleCount:120,
            angle:120,
            spread:70,
            origin:{x:1,y:0.7}
        });
    },400);

    // 1초 후 글자 등장
    setTimeout(()=>{
        message.classList.add("show");
    },1000);

});
