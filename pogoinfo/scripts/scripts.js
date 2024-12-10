function hamburgerMenu() {
    const mainnav = document.querySelector("nav")
    const hambutton = document.querySelector("#menu");

    hambutton.addEventListener("click", () => {
        mainnav.classList.toggle("show");
        hambutton.classList.toggle("show");
    });

}
hamburgerMenu();
// ~~~~~~~~~~~~~~~~~~~~Dark Theme ~~~~~~~~~~~~~~~~~~~~~ //
function applyTheme() {
    const lightMode = localStorage.getItem("lightMode") === "true";
    const body = document.body;
    const header = document.querySelector("header");
    const button = document.getElementById("modeToggle");
    

    if (lightMode) {
        body.classList.add("light");
        header.classList.add("light");
        document.querySelectorAll("p, a, legend, li, footer, button, label, #menu").forEach(h => h.classList.add("light")); // Remove light class from headings
        document.querySelectorAll("h1, h2, h3, h4").forEach(h => h.classList.add("light"));
        button.textContent = "Dark Mode"; // Update button text
    } else {
        body.classList.remove("light");
        header.classList.remove("light");
        document.querySelectorAll("p, a, legend, li, footer, button, label, #menu").forEach(h => h.classList.remove("light")); // Remove light class from headings
        document.querySelectorAll("h1, h2, h3, h4").forEach(h => h.classList.remove("light")); // Remove light class from headings
        button.textContent = "Light Mode"; // Update button text
    }
}


function toggleMode() {
    const lightMode = localStorage.getItem("lightMode") === "true";
    localStorage.setItem("lightMode", !lightMode);
    applyTheme();
}
document.getElementById("modeToggle").addEventListener("click", toggleMode);

// Apply the theme on page load
applyTheme();

function displayTime() {
    const current_year = new Date();
    document.getElementById("currentYear").innerHTML = current_year.getFullYear();
    let lastModifiedDate = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = "Last Modified:  " + lastModifiedDate;

}
displayTime();

const faqs = [
    {   // Pokemon Ivs
        question: "What are IVs?",
        answer: "IVs, or Individual Values, measure a Pokemon's Attack, Defense, and HP stats. They are randomized for each Pokemon, but if multiple Trainers catch the same Pokemon in the same place, its IVs will be the same for each trainer. IVs affect a Pokemon's CP, and higher CP is always better. This subsequently means that higher IVs are usually recommended. When a Pokemon has maxed out IVs, they are referred to as 4*, hundos, or perfects. These Pokemon do not occur very often, and are sought after by all Trainers.",
    },
    {   // CP of a Pokemon 
        question: "What is a Pokemon's CP?",
        answer: "A Pokemon's CP, or Combat Power, is a sum of its IVs, its base stats (different from IVs), and its power up level. The higher a CP, the more powerful, usually, the Pokemon is. How high a Pokemon's CP is also factors in how much damage a Pokemon can deal, and how much damage it can take. For example. a 1500cp Annihilape will take more damage and deal less damage than a 2500cp Annihilape."
    },
    {   // Mega Pokemon
        question: "What are Mega Pokemon?",
        answer: "Mega Pokemon are a select lot of Pokemon that have a more powerful form that the can evolve into. Trainers can participate in Mega Raids for energy that, once enough is obtained, can be used to Mega Evolve your Pokemon!",
    },
    {   // What are hundos
        question: "I'm playing with my friends, and they keep talking about \"hundos\" and \"perfects\". What are those?",
        answer: "Pokemon referred to as \"hundos\" or \"perfects\" are Pokemon with maxed out IVs, with each one being at 15. ",
    },
    {   // Throwing circle 
        question: "What is the circle on my screen when I'm throwing? What do the colors mean?",
        answer: "The circle on the screen holds the Pokemons hitbox, which you should aim for when throwing. The colors on the circle can range from bright green to deep red. This represents the level of difficulty you will face when catching the Pokemon, with bright green being very easy, yellow meaning slightly more difficult, orange meaning difficult, and red meaning hard.",
    },
    {
        question: "What are Nice Throws, Great Throws, and Excellent Throws?",
        answer: "Nice, Great, and Excellent Throws are all based off of the circle that is seen when throwing a Pokeball. You will see a circle decreasing in size the longer the Pokeball is charging up. Throwing the Pokeball so that it hits on the inside of the circle will result in one of these throws. Nice throws are the easiest, and can be hit on the largest circle. Great throws require a smaller circle and are more difficult, and Excellent Throws are the hardest to hit, requiring a very small circle. Each of these throws give your catch increased XP, with Nice throws giving +20xp, Great throws giving +100xp, and Excellent throws giving +1000xp. ",
    },
    {
        question: "What is the optimal way to throw a PokeBall?",
        answer: "The best way to throw a Pokeball is by making a Curveball Throw. To do this, take whichever finger is most comfortable for throwing, whether it's your index finger or your thumb, and rotate it in a big circle along the bottom half of your screen. When you are ready to throw, release your finger at the 2 o'clock(clockwise) or 10 o'clock(counter-clockwise) point, depending on which direction you are throwing. You should aim to hit the Pokemon on your screen. Depending on how far the Pokemon is from you, you may need to increase or decrease the velocity in which you throw PokeBalls.",
    },
    {
        question: "I am struggling to get a lot of stardust, but I don't have the resources for PVP or raids. What can I do?",
        answer: "Catch everything you see, even if you think it's useless. It might be shiny or it might have perfect stats, but even then, you will get the base amount of stardust and xp. ",
    },
    {
        question: "What is Field Research, and is it important?",
        answer: "Field research tasks are things that are obtained when spinning stops. Normally Trainers are limited to 1 scan task and 3 gameplay tasks. Scanning tasks require you to scan a nearby Pokestop for about 30 seconds. You are required to move around the Pokestop, and there needs to be sufficient light for the camera to pick up your surroundings. Rewards for these scan tasks can me 10 Pokeballs, 5 Great Balls, or 1 Poffin. Gameplay tasks are a little more flexible, ranging from winning 1 raid, catching 15 pokemon of a certain type, or making 5 Great Throws. The rewards from these are also more varied, ranging from Pokeballs, Mega Energy, or encounters with various Pokemon. Pokemon from these encounters will have boosted IVs, giving a greater chance for perfect Pokemon. "
    },
    {
        question: "What is the meta?",
        answer: "The meta is the colloquial term for Pokemon that are top in their class for Raids and PVP. There are several resources that outline what the meta is, so feel free to check those out!"
    }
]

function displayFAQs(faqs) {
    const faqContainer = document.querySelector(".faq-container");

    faqContainer.innerHTML = "";

    faqs.forEach(faq => {
        const faqItem = document.createElement("div");
        faqItem.classList.add("faq");

        const question = document.createElement("h3");
        question.classList.add("question");
        question.textContent = faq.question;

        const answer = document.createElement("p");
        answer.classList.add("answer");
        answer.textContent = faq.answer;


        faqItem.appendChild(question);
        faqItem.appendChild(answer);
        faqContainer.appendChild(faqItem);

        question.addEventListener("click", () => {
            faqItem.classList.toggle("show");


        });




    });


};

function filterFAQs() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const filteredFAQs = faqs.filter(faq => {
        return (
            faq.question.toLowerCase().includes(searchInput) ||
            faq.answer.toLowerCase().includes(searchInput)
        );
    });
    displayFAQs(filteredFAQs);
}
const searchInput = document.getElementById("search");
console.log(searchInput); // This should log the element if it exists
if (searchInput) {
    searchInput.addEventListener("input", filterFAQs);
} else {
    console.log("Element with id 'search' not found");
}

// document.getElementById("search").addEventListener("input", filterFAQs);


displayFAQs(faqs);

