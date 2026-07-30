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

        document
            .getElementById("nextBtn")
            .classList.add("show");

    },1000);

});

document.getElementById("nextBtn").onclick = function () {

     document.getElementById("foodList").style.display = "flex";

};


function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        4 + Math.random() * 4 + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 350);
