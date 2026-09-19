// =========================
// START MOVIE
// =========================

function startMovie() {

    const music = document.getElementById("music");

    music.play().catch(() => {
        console.log("Autoplay blocked");
    });

    document.querySelectorAll(".scene")[1]
        .scrollIntoView({
            behavior: "smooth"
        });

}

// =========================
// AUTO CINEMA SCROLL
// =========================

let autoStarted = false;

function startAutoScenes() {

    if(autoStarted) return;

    autoStarted = true;

    const scenes =
        document.querySelectorAll(".scene");

    let current = 1;

    setInterval(() => {

        if(current < scenes.length){

            scenes[current].scrollIntoView({
                behavior:"smooth"
            });

            current++;

        }

    },12000);

}

document.addEventListener("click",startAutoScenes);

// =========================
// TYPEWRITER LETTER
// =========================

const letterText = `

My Dearest Sehrish ❤️,

Today is not just another day.

Today is the day when the most beautiful part of my life came into this world. ✨

Before you, life was ordinary.

But after you became a part of my journey, every moment started feeling special, every smile became brighter, and every dream became more meaningful.

You are not just someone I love;

You are the reason behind countless smiles, silent prayers, and beautiful memories.

When I think about happiness,
I think of you.

When I think about love,
I think of you.

When I think about my future,
I see only you. ❤️

Your smile has the power to light up my darkest days.

Your presence makes every moment magical.

On your special day, I pray that Allah fills your life with happiness, success, peace and love.

Thank you for being my best friend,
my comfort,
my happiness,
and the most precious person in my life.

I will always care for you.

I will always respect you.

And a part of my heart will always belong to you. ❤️

Happy Birthday,
My Beautiful Sehrish Bakhsh 🎂✨

May this year bring you more joy than ever before.

Forever grateful for every moment we share ❤️

With all my love,

USMAN ALI ❤️

`;

let index = 0;

function typeWriter() {

    const target =
        document.getElementById("typewriter");

    if(!target) return;

    if(index < letterText.length){

        target.innerHTML +=
            letterText.charAt(index);

        index++;

        setTimeout(typeWriter,35);
    }
}

setTimeout(typeWriter,2500);

// =========================
// CINEMATIC FADE EFFECT
// =========================

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform =
            "translateY(0px)";

        }

    });

},{
    threshold:0.25
});

document.querySelectorAll(".scene")
.forEach(scene=>{

    scene.style.opacity="0";
    scene.style.transform=
    "translateY(80px)";
    scene.style.transition=
    "all 1.5s ease";

    observer.observe(scene);

});

// =========================
// FINAL SCENE EFFECT
// =========================

const finalScene =
document.querySelector(".final");

const finalObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

launchHearts();

}

});

},{
threshold:0.5
});

if(finalScene){
finalObserver.observe(finalScene);
}

// =========================
// FLOATING HEARTS
// =========================

function launchHearts(){

for(let i=0;i<40;i++){

const heart =
document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=
Math.random()*100+"vw";

heart.style.bottom="-50px";

heart.style.fontSize=
(Math.random()*20+20)+"px";

heart.style.zIndex="99999";
heart.style.pointerEvents="none";

document.body.appendChild(heart);

let pos=-50;

const move=setInterval(()=>{

pos+=3;

heart.style.bottom=
pos+"px";

heart.style.opacity=
1-(pos/window.innerHeight);

if(pos>
window.innerHeight+200){

clearInterval(move);

heart.remove();

}

},20);

}

}

// =========================
// CINEMA TITLE GLOW
// =========================

setInterval(()=>{

const gold =
document.querySelector(".gold");

if(gold){

gold.style.textShadow=
`0 0 ${
10 + Math.random()*30
}px gold`;

}

},700);

// =========================
// END CREDITS EFFECT
// =========================

function createStars(){

for(let i=0;i<80;i++){

const star =
document.createElement("div");

star.className="star";

star.style.left=
Math.random()*100+"vw";

star.style.top=
Math.random()*100+"vh";

star.style.animationDuration=
(Math.random()*4+2)+"s";

document.body.appendChild(star);

}

}

createStars();
