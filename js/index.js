const letters = {
            
    a: { word: "Ardilla", image: "ardilla.png", syllables: ["Ardilla", "empieza por", "a", "y termina con", "a"] },
    b: { word: "Burro", image: "burro.png", syllables: ["Burro", "empieza por", "b", "y termina con", "o"] },
    c: { word: "Casa", image: "casa.png", syllables: ["Casa", "empieza por", "c", "y termina con", "a"] },
    d: { word: "Dado", image: "dado.png", syllables: ["Dado", "empieza por", "d", "y termina con", "o"] },
    e: { word: "Elefante", image: "elefante.png", syllables: ["Elefante", "empieza por", "e", "y termina con", "e"] },
    f: { word: "Foca", image: "foca.png", syllables: ["Foca", "empieza por", "f", "y termina con", "a"] },
    g: { word: "Gato", image: "gato.png", syllables: ["Gato", "empieza por", "g", "y termina con", "o"] },
    h: { word: "Helado", image: "helado.png", syllables: ["Helado", "empieza por", "h", "y termina con", "o"] },
    i: { word: "Iguana", image: "iguana.png", syllables: ["Iguana", "empieza por", "i", "y termina con", "a"] },
    j: { word: "Jirafa", image: "jirafa.png", syllables: ["Jirafa", "empieza por", "j", "y termina con", "a"] },
    k: { word: "Koala", image: "koala.png", syllables: ["Koala", "empieza por", "k", "y termina con", "a"] },
    l: { word: "Luna", image: "luna.png", syllables: ["Luna", "empieza por", "l", "y termina con", "a"] },
    m: { word: "Mono", image: "mono.png", syllables: ["Mono", "empieza por", "m", "y termina con", "o"] },
    n: { word: "Nube", image: "nube.png", syllables: ["Nube", "empieza por", "n", "y termina con", "e"] },
    ñ: { word: "Ñandú", image: "nandu.png", syllables: ["Ñandú", "empieza por", "ñ", "y termina con", "u"] },
    o: { word: "Oso", image: "oso.png", syllables: ["Oso", "empieza por", "o", "y termina con", "o"] },
    p: { word: "Pato", image: "pato.png", syllables: ["Pato", "empieza por", "p", "y termina con", "o"] },
    q: { word: "Queso", image: "queso.png", syllables: ["Queso", "empieza por", "q", "y termina con", "o"] },
    r: { word: "Rana", image: "rana.png", syllables: ["Rana", "empieza por", "r", "y termina con", "a"] },
    s: { word: "Sol", image: "sol.png", syllables: ["Sol", "empieza por", "s", "y termina con", "l"] },
    t: { word: "Tortuga", image: "tortuga.png", syllables: ["Tortuga", "empieza por", "t", "y termina con", "a"] },
    u: { word: "Uva", image: "uva.png", syllables: ["Uva", "empieza por", "u", "y termina con", "a"] },
    v: { word: "Vaca", image: "vaca.png", syllables: ["Vaca", "empieza por", "v", "y termina con", "a"] },
    w: { word: "Waffle", image: "waffle.png", syllables: ["Waffle", "empieza por", "w", "y termina con", "e"] },
    x: { word: "Xilófono", image: "xilofono.png", syllables: ["Xilófono", "empieza por", "x", "y termina con", "o"] },
    y: { word: "Yogur", image: "yogur.png", syllables: ["Yogur", "empieza por", "y", "y termina con", "r"] },
    z: { word: "Zebra", image: "zebra.png", syllables: ["Zebra", "empieza por", "z", "y termina con", "a"] },
    0: { word: "CERO", image: "cero.png", syllables: ["Cero", "empieza por", "C", "y termina con", "o"] },
    1: { word: "Uno", image: "uno.png", syllables: ["Uno", "empieza por", "U", "y termina con", "o"] },
    2: { word: "Dos", image: "dos.png", syllables: ["Dos", "empieza por", "D", "y termina con", "s"] },
    3: { word: "Tres", image: "tres.png", syllables: ["Tres", "empieza por", "T", "y termina con", "s"] },
    4: { word: "Cuatro", image: "cuatro.png", syllables: ["Cuatro", "empieza por", "C", "y termina con", "o"] },
    5: { word: "Cinco", image: "cinco.png", syllables: ["Cinco", "empieza por", "C", "y termina con", "o"] },
    6: { word: "Seis", image: "seis.png", syllables: ["Seis", "empieza por", "S", "y termina con", "s"] },
    7: { word: "Siete", image: "siete.png", syllables: ["Siete", "empieza por", "S", "y termina con", "e"] },
    8: { word: "Ocho", image: "ocho.png", syllables: ["Ocho", "empieza por", "O", "y termina con", "o"] },
    9: { word: "Nueve", image: "nueve.png", syllables: ["Nueve", "empieza por", "N", "y termina con", "e"] }
};

let currentUtterance = null;

const openKeyboardBtn = document.getElementById("openKeyboardBtn");
const closeKeyboardBtn = document.getElementById("closeKeyboardBtn");
const keyboardModal = document.getElementById("keyboardModal");
const keyboardContainer = document.querySelector(".keyboard");
const letterDisplay = document.getElementById("letter-display");
const imageDisplay = document.getElementById("image-display");
const wordDisplay = document.getElementById("word-display");

openKeyboardBtn.addEventListener("click", () => {
    keyboardModal.style.display = "flex";
});

closeKeyboardBtn.addEventListener("click", () => {
    keyboardModal.style.display = "none";
});

Object.keys(letters).forEach(letter => {
    let button = document.createElement("button");
    button.classList.add("key");
    button.textContent = letter.toUpperCase();
    button.addEventListener("click", () => {
        const word = letters[letter].word;  // Obtiene la palabra
        const firstLetter = word.charAt(0);  // Primera letra
        const lastLetter = word.charAt(word.length - 1);  // Última letra
        const middleLetters = word.slice(1, -1);  // Letras intermedias
        letterDisplay.textContent = letter.toUpperCase();
        imageDisplay.src = 'img/' + letters[letter].image;
        imageDisplay.classList.remove('hidden');
        wordDisplay.textContent =letters[letter].word;
        imageDisplay.style.display = "block";
        keyboardModal.style.display = "none";

        if (isNaN(letter)) {
        letterDisplay.innerHTML = `
            <span class="text-8xl text-red-600 font-bold">${letter.toUpperCase()}</span>
            <span class="text-5xl text-blue-700 font-semibold">${letter.toLowerCase()}</span>
        `;
        } else {
            letterDisplay.innerHTML = `<span class="text-9xl text-red-600 font-bold">${letter.toUpperCase()}</span>`;
        }


        // Actualiza el contenido de wordDisplay con estilos
        wordDisplay.innerHTML = `
            <span style="filter: drop-shadow(1px 1px 1px grey);" class="text-red-600 m-0 p-0">${firstLetter}</span>
            <span style="filter: drop-shadow(1px 1px 1px grey);">${middleLetters}</span>
            <span style="filter: drop-shadow(1px 1px 1px grey);" class="text-red-600 m-0 p-0">${lastLetter}</span>
        `;
        speak(letter.toUpperCase() + ", " + letters[letter].syllables.join(' ') + ", " + letters[letter].word);
    });
    keyboardContainer.appendChild(button);
});



function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "es-ES";
    speech.rate = 0.6; // Velocidad de la voz
    window.speechSynthesis.speak(speech);
}

document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    if (letters[key]) {
        if (currentUtterance) {
            window.speechSynthesis.cancel();
        }
        displayLetter(key);
        speakLetterAndWord(key);
    }
});

function displayLetter(key) {
    if (letters[key]) {
        letterDisplay.textContent = key.toUpperCase();
        wordDisplay.textContent = letters[key].word;
        imageDisplay.src = letters[key].image;
        imageDisplay.classList.remove('hidden');

        speak(key.toUpperCase() + ", " + letters[key].word);
    }
}
