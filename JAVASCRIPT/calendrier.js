// Liste des faits ou actions spéciales pour certains jours
const specialDays = {
    4: `<img src="https://static.fnac-static.com/multimedia/Images/FR/NR/c0/5d/9c/10247616/1540-1/tsp20181116081409/Le-Grinch-Je-suis-le-Grinch.jpg" alt="grinch" style="max-width: 100%; border-radius: 10px;">`,
    15: `<img src="https://static.fnac-static.com/multimedia/Images/FR/NR/c0/5d/9c/10247616/1540-1/tsp20181116081409/Le-Grinch-Je-suis-le-Grinch.jpg" alt="grinch" style="max-width: 100%; border-radius: 10px;">`,
    16: `<img src="https://static.fnac-static.com/multimedia/Images/FR/NR/c0/5d/9c/10247616/1540-1/tsp20181116081409/Le-Grinch-Je-suis-le-Grinch.jpg" alt="grinch" style="max-width: 100%; border-radius: 10px;">`,
    22: `<img src="https://static.fnac-static.com/multimedia/Images/FR/NR/c0/5d/9c/10247616/1540-1/tsp20181116081409/Le-Grinch-Je-suis-le-Grinch.jpg" alt="grinch" style="max-width: 100%; border-radius: 10px;">`,
    24: `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" style="color: white; text-decoration: none;">🎁 Joyeux Noël ! Cliquez ici 🎄</a>`,
    3: `<img src="../IMAGES/lyreco.jpg" alt="lyreco" style="max-width: 100%; border-radius: 10px;">`
};

// Liste des facts
const facts = {
    1: "Les océans couvrent environ 71% de la surface terrestre.",
    2: "Le cœur humain bat environ 100 000 fois par jour.",
    5: "Les océans produisent 50% de l’oxygène sur Terre.",
    6: "Le cerveau humain contient environ 86 milliards de neurones.",
    7: "L'océan Pacifique est le plus grand océan du monde.",
    8: "Votre squelette se renouvelle complètement tous les 10 ans.",
    9: "Le sel des océans provient des roches terrestres.",
    10: "Vos yeux peuvent distinguer environ 10 millions de couleurs.",
    11: "Les coraux sont des animaux, pas des plantes.",
    12: "Le foie est le seul organe qui peut se régénérer.",
    13: "Les océans absorbent environ 30% du CO2 produit par l'humain.",
    14: "L'intestin grêle mesure environ 7 mètres.",
    17: "Les récifs coralliens abritent 25% de la vie marine.",
    18: "Le fémur est l'os le plus long et le plus solide.",
    19: "Les courants marins influencent les climats mondiaux.",
    20: "Le sang représente environ 7% du poids du corps.",
    21: "Il existe plus de 3 millions d’épaves sous l’eau.",
    23: "Les océans contiennent plus de 20 millions de tonnes d'or."
};

const today = new Date();
const currentDay = today.getDate();
const days = document.querySelectorAll(".calendar div");

days.forEach(day => {
    const dayNumber = parseInt(day.id.replace("day", ""));
    if (dayNumber <= currentDay) {
        day.classList.add("clickable");
        day.addEventListener("click", () => {
            if (!day.classList.contains("opened")) {
                day.classList.add("opened");
                const content = specialDays[dayNumber] || facts[dayNumber] || "Surprise ! 🎁";
                day.innerHTML = `<span>${content}</span>`;
            }
        });
    }
});