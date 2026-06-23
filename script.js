const responses = [
    "Yay! pta tha 💕",
    "Main isse haan hi maan leta hoon phir 😌",
    "Hope restored ✨",
    "Aaj ka din bach gaya 😎",
    "thnks bby: Second Chance 🌸"
];

const answerButtons =
document.querySelectorAll(".answer-btn");

const responseCard =
document.getElementById("response-card");

answerButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        const random =
        responses[
            Math.floor(
                Math.random() * responses.length
            )
        ];

        responseCard.textContent = random;
        responseCard.classList.remove("hidden");

        createHearts(8);
    });

});

function createHearts(count = 12){

    const container =
    document.getElementById("hearts-container");

    for(let i=0;i<count;i++){

        const heart =
        document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML =
        Math.random() > 0.5 ? "💖" : "💕";

        heart.style.left =
        Math.random()*100 + "vw";

        heart.style.top =
        Math.random()*100 + "vh";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        },4000);
    }
}

/* RUNAWAY BUTTON */

const runawayBtn =
document.getElementById("runawayBtn");

const area =
document.querySelector(".runaway-area");

function moveButton(){

    const maxX =
    area.clientWidth - runawayBtn.offsetWidth;

    const maxY =
    area.clientHeight - runawayBtn.offsetHeight;

    const x =
    Math.random() * maxX;

    const y =
    Math.random() * maxY;

    runawayBtn.style.left = x + "px";
    runawayBtn.style.top = y + "px";
}

runawayBtn.addEventListener(
    "mouseenter",
    moveButton
);

runawayBtn.addEventListener(
    "touchstart",
    moveButton
);

runawayBtn.addEventListener(
    "click",
    () => {

        document.getElementById(
            "runawayMessage"
        ).textContent =
        "Arre yaar 😭😂";

        createHearts(15);
    }
);

/* SURPRISE */

const surpriseBtn =
document.getElementById("surpriseBtn");

const surpriseContent =
document.getElementById("surpriseContent");

surpriseBtn.addEventListener(
    "click",
    () => {

        surpriseContent.classList.remove(
            "hidden"
        );

        createHearts(20);
    }
);

const planBtn =
document.getElementById("planBtn");

const negotiateBtn =
document.getElementById("negotiateBtn");

const planCard =
document.getElementById("planCard");

const negotiationCard =
document.getElementById(
    "negotiationCard"
);

planBtn.addEventListener(
    "click",
    () => {

        planCard.classList.remove("hidden");
        negotiationCard.classList.add(
            "hidden"
        );

        createHearts(10);
    }
);

negotiateBtn.addEventListener(
    "click",
    () => {

        negotiationCard.classList.remove(
            "hidden"
        );

        planCard.classList.add("hidden");

        createHearts(15);
    }
);

/* DREAM DATE */

const dreamForm =
document.getElementById("dreamForm");

const dreamInput =
document.getElementById("dreamInput");

const savedDream =
document.getElementById("savedDream");

function loadDream(){

    const saved =
    localStorage.getItem("dreamDateIdea");

    if(saved){

        savedDream.innerHTML =
        `
        <p>💭 Saved Dream Date:</p>
        <p>${saved}</p>
        <br>
        <p>Noted. Mission successful. 🫡💕</p>
        `;
    }
}

loadDream();

dreamForm.addEventListener(
    "submit",
    (e)=>{

        e.preventDefault();

        localStorage.setItem(
            "dreamDateIdea",
            dreamInput.value
        );

        loadDream();

        dreamInput.value = "";

        createHearts(12);
    }
);