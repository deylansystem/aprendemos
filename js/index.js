const letters = {
            
    a: [
        { word: "Ardilla", image: "ardilla.png", syllables: ["empieza por", "a", "y termina con", "a"] },
        { word: "Ave", image: "ave.png", syllables: ["empieza por", "a", "y termina con", "e"] },
        { word: "Avión", image: "avion.png", syllables: ["empieza por", "a", "y termina con", "n"] },
        { word: "Aguila", image: "aguila.png", syllables: ["empieza por", "a", "y termina con", "a"] }
    ],
    b: [
        { word: "Burro", image: "burro.png", syllables: ["empieza por", "b", "y termina con", "o"] },
        { word: "Batería", image: "bateria.png", syllables: ["empieza por", "b", "y termina con", "a"] },
        { word: "Ballena", image: "ballena.png", syllables: ["empieza por", "b", "y termina con", "a"] },
        { word: "Búho", image: "buho.png", syllables: ["empieza por", "b", "y termina con", "o"] }
    ],
    c: [
        { word: "Casa", image: "casa.png", syllables: ["empieza por", "c", "y termina con", "a"] },
        { word: "Cama", image: "cama.png", syllables: ["empieza por", "c", "y termina con", "a"] },
        { word: "Caballo", image: "caballo.png", syllables: ["empieza por", "c", "y termina con", "a"] },
        { word: "Cepillo", image: "cepillo.png", syllables: ["empieza por", "c", "y termina con", "o"] }
    ],
    d: [
        { word: "Dado", image: "dado.png", syllables: ["empieza por", "d", "y termina con", "o"] },
        { word: "Dedo", image: "dedo.png", syllables: ["empieza por", "d", "y termina con", "o"] },
        { word: "Delfín", image: "delfin.png", syllables: ["empieza por", "d", "y termina con", "n"] },
        { word: "Dardo", image: "dardo.png", syllables: ["empieza por", "d", "y termina con", "o"] }

    ],
    e: [
        { word: "Elefante", image: "elefante.png", syllables: ["empieza por", "e", "y termina con", "e"] },
        { word: "Erizo", image: "erizo.png", syllables: ["empieza por", "e", "y termina con", "o"] },
        { word: "Estrella", image: "estrella.png", syllables: ["empieza por", "e", "y termina con", "a"] },
        { word: "Excavadora", image: "excavadora.png", syllables: ["empieza por", "e", "y termina con", "a"] }
    ],
    f: [
        { word: "Foca", image: "foca.png", syllables: ["empieza por", "f", "y termina con", "a"] },
        { word: "Flamenco", image: "flamenco.png", syllables: ["empieza por", "f", "y termina con", "o"] },
        { word: "Flor", image: "flor.png", syllables: ["empieza por", "f", "y termina con", "r"] },
        { word: "Fresa", image: "fresa.png", syllables: ["empieza por", "f", "y termina con", "a"] }
    ],
    g: [
        { word: "Gato", image: "gato.png", syllables: ["empieza por", "g", "y termina con", "o"] },
        { word: "Gorila", image: "gorila.png", syllables: ["empieza por", "g", "y termina con", "a"] },
        { word: "Galleta", image: "galleta.png", syllables: ["empieza por", "g", "y termina con", "a"] },
        { word: "Guitarra", image: "guitarra.png", syllables: ["empieza por", "g", "y termina con", "a"] }
    ],
    h: [
        { word: "Halcón", image: "halcon.png", syllables: ["empieza por", "h", "y termina con", "n"] },
        { word: "Hipopótamo", image: "hipopotamo.png", syllables: ["empieza por", "h", "y termina con", "o"] },
        { word: "Huevo", image: "huevo.png", syllables: ["empieza por", "h", "y termina con", "o"] },
        { word: "Helado", image: "helado.png", syllables: ["empieza por", "h", "y termina con", "o"] }
    ],
    i: [
        { word: "Iguana", image: "iguana.png", syllables: ["empieza por", "i", "y termina con", "a"] },
        { word: "Insecto", image: "insecto.png", syllables: ["empieza por", "i", "y termina con", "o"] },
        { word: "Impresora", image: "impresora.png", syllables: ["empieza por", "i", "y termina con", "a"] },
        { word: "Isla", image: "isla.png", syllables: ["empieza por", "i", "y termina con", "a"] }
    ],
    j: [
        { word: "Jirafa", image: "jirafa.png", syllables: ["empieza por", "j", "y termina con", "a"] },
        { word: "Jabalí", image: "jabali.png", syllables: ["empieza por", "j", "y termina con", "i"] },
        { word: "Jabón", image: "jabon.png", syllables: ["empieza por", "j", "y termina con", "n"] },
        { word: "Juguete", image: "juguete.png", syllables: ["empieza por", "j", "y termina con", "e"] }
    ],
    k: [
        { word: "Koala", image: "koala.png", syllables: ["empieza por", "k", "y termina con", "a"] },
        { word: "Kiwi", image: "kiwi.png", syllables: ["empieza por", "k", "y termina con", "i"] },
        { word: "Karaoke", image: "karaoke.png", syllables: ["empieza por", "k", "y termina con", "e"] },
        { word: "Ketchup", image: "ketchup.png", syllables: ["empieza por", "k", "y termina con", "p"] }
    ],
    l: [
        { word: "Lobo", image: "lobo.png", syllables: ["empieza por", "l", "y termina con", "o"] },
        { word: "León", image: "leon.png", syllables: ["empieza por", "l", "y termina con", "n"] },
        { word: "Lápiz", image: "lapiz.png", syllables: ["empieza por", "l", "y termina con", "z"] },
        { word: "Luna", image: "luna.png", syllables: ["empieza por", "l", "y termina con", "a"] }
    ],
    m: [
        { word: "Mono", image: "mono.png", syllables: ["empieza por", "m", "y termina con", "o"] },
        { word: "Mariposa", image: "mariposa.png", syllables: ["empieza por", "m", "y termina con", "a"] },
        { word: "Mamá", image: "mama.png", syllables: ["empieza por", "m", "y termina con", "a"] },
        { word: "Micrófono", image: "microfono.png", syllables: ["empieza por", "m", "y termina con", "o"] }
    ],
    n: [
        { word: "Nutria", image: "nutria.png", syllables: ["empieza por", "n", "y termina con", "a"] },
        { word: "Nariz", image: "nariz.png", syllables: ["empieza por", "n", "y termina con", "z"] },
        { word: "Naranja", image: "naranja.png", syllables: ["empieza por", "n", "y termina con", "a"] },
        { word: "Nube", image: "nube.png", syllables: ["empieza por", "n", "y termina con", "e"] }
    ],
    ñ: [
        { word: "Ñandú", image: "ñandu.png", syllables: ["empieza por", "ñ", "y termina con", "u"] },
        { word: "Ñoqui", image: "ñoquis.png", syllables: ["empieza por", "ñ", "y termina con", "i"] },
        { word: "Ñame", image: "ñame.png", syllables: ["empieza por", "ñ", "y termina con", "e"] }
    ],
    o: [
        { word: "Oso", image: "oso.png", syllables: ["empieza por", "o", "y termina con", "o"] },
        { word: "Oveja", image: "oveja.png", syllables: ["empieza por", "o", "y termina con", "a"] },
        { word: "Oreja", image: "oreja.png", syllables: ["empieza por", "o", "y termina con", "a"] },
        { word: "Ojo", image: "ojo.png", syllables: ["empieza por", "o", "y termina con", "o"] }
    ],
    p: [
        { word: "Pato", image: "pato.png", syllables: ["empieza por", "p", "y termina con", "o"] },
        { word: "Pingüino", image: "pinguino.png", syllables: ["empieza por", "p", "y termina con", "o"] },
        { word: "Papá", image: "papa.png", syllables: ["empieza por", "p", "y termina con", "a"] },
        { word: "Pelota", image: "pelota.png", syllables: ["empieza por", "p", "y termina con", "a"] }
    ],
    q: [
        { word: "Queso", image: "queso.png", syllables: ["empieza por", "q", "y termina con", "o"] },
        { word: "Quince", image: "quince.png", syllables: ["empieza por", "q", "y termina con", "e"] },
        { word: "Quesadilla", image: "quesadilla.png", syllables: ["empieza por", "q", "y termina con", "a"] },
        { word: "Quitamanchas", image: "quitamanchas.png", syllables: ["empieza por", "q", "y termina con", "s"] }
    ],
    r: [
        { word: "Rana", image: "rana.png", syllables: ["empieza por", "r", "y termina con", "a"] },
        { word: "Ratón", image: "raton.png", syllables: ["empieza por", "r", "y termina con", "n"] },
        { word: "Robot", image: "robot.png", syllables: ["empieza por", "r", "y termina con", "t"] },
        { word: "Reloj", image: "reloj.png", syllables: ["empieza por", "r", "y termina con", "j"] }
    ],
    s: [

        { word: "Serpiente", image: "serpiente.png", syllables: ["empieza por", "s", "y termina con", "e"] },
        { word: "Sol", image: "sol.png", syllables: ["empieza por", "s", "y termina con", "l"] },
        { word: "Silla", image: "silla.png", syllables: ["empieza por", "s", "y termina con", "a"] },
        { word: "Sandia", image: "sandia.png", syllables: ["empieza por", "s", "y termina con", "a"] }
    ],
    t: [
        { word: "Tigre", image: "tigre.png", syllables: ["empieza por", "t", "y termina con", "e"] },
        { word: "Tucán", image: "tucan.png", syllables: ["empieza por", "t", "y termina con", "n"] },
        { word: "Tortuga", image: "tortuga.png", syllables: ["empieza por", "t", "y termina con", "a"] },
        { word: "Tiburón", image: "tiburon.png", syllables: ["empieza por", "t", "y termina con", "n"] },
        { word: "Tijera", image: "tijera.png", syllables: ["empieza por", "t", "y termina con", "a"] }
    ],
    u: [
        { word: "Urraca", image: "urraca.png", syllables: ["empieza por", "u", "y termina con", "a"] },
        { word: "Unicornio", image: "unicornio.png", syllables: ["empieza por", "u", "y termina con", "o"] },
        { word: "Uña", image: "uña.png", syllables: ["empieza por", "u", "y termina con", "a"] },
        { word: "Uva", image: "uva.png", syllables: ["empieza por", "u", "y termina con", "a"] }
    ],
    v: [
        { word: "Vaca", image: "vaca.png", syllables: ["empieza por", "v", "y termina con", "a"] },
        { word: "Vikingo", image: "vikingo.png", syllables: ["empieza por", "v", "y termina con", "o"] },
        { word: "Vestido", image: "vestido.png", syllables: ["empieza por", "v", "y termina con", "o"] },
        { word: "Violín", image: "violin.png", syllables: ["empieza por", "v", "y termina con", "n"] }
    ],
    w: [
        { word: "Wombat", image: "wombat.png", syllables: ["empieza por", "w", "y termina con", "t"] },
        { word: "Waffle", image: "waffle.png", syllables: ["empieza por", "w", "y termina con", "e"] },
        { word: "Wifi", image: "wifi.png", syllables: ["empieza por", "w", "y termina con", "i"] },
        { word: "Wok", image: "wok.png", syllables: ["empieza por", "w", "y termina con", "k"] }
    ],
    x: [
        { word: "Xenartro", image: "xenartro.png", syllables: ["empieza por", "x", "y termina con", "o"] },
        { word: "Xilófono", image: "xilofono.png", syllables: ["empieza por", "x", "y termina con", "o"] }
    ],
    y: [
        { word: "Yegua", image: "yegua.png", syllables: ["empieza por", "y", "y termina con", "a"] },
        { word: "Yoyo", image: "yoyo.png", syllables: ["empieza por", "y", "y termina con", "o"] },
        { word: "Yate", image: "yate.png", syllables: ["empieza por", "y", "y termina con", "e"] },
        { word: "Yogur", image: "yogur.png", syllables: ["empieza por", "y", "y termina con", "r"] }
    ],
    z: [
        { word: "Zorro", image: "zorro.png", syllables: ["empieza por", "z", "y termina con", "o"] },
        { word: "Zorrillo", image: "zorrillo.png", syllables: ["empieza por", "z", "y termina con", "o"] },
        { word: "Zapato", image: "zapato.png", syllables: ["empieza por", "z", "y termina con", "o"] },
        { word: "Zumo", image: "zumo.png", syllables: ["empieza por", "z", "y termina con", "o"] }
    ],
    0: [{ word: "CERO", image: "cero.png", syllables: ["empieza por", "C", "y termina con", "o"] }],
    1: [{ word: "Uno", image: "uno.png", syllables: ["empieza por", "U", "y termina con", "o"] }],
    2: [{ word: "Dos", image: "dos.png", syllables: ["empieza por", "D", "y termina con", "s"] }],
    3: [{ word: "Tres", image: "tres.png", syllables: ["empieza por", "T", "y termina con", "s"] }],
    4: [{ word: "Cuatro", image: "cuatro.png", syllables: ["empieza por", "C", "y termina con", "o"] }],
    5: [{ word: "Cinco", image: "cinco.png", syllables: ["empieza por", "C", "y termina con", "o"] }],
    6: [{ word: "Seis", image: "seis.png", syllables: ["empieza por", "S", "y termina con", "s"] }],
    7: [{ word: "Siete", image: "siete.png", syllables: ["empieza por", "S", "y termina con", "e"] }],
    8: [{ word: "Ocho", image: "ocho.png", syllables: ["empieza por", "O", "y termina con", "o"] }],
    9: [{ word: "Nueve", image: "nueve.png", syllables: ["empieza por", "N", "y termina con", "e"] }],
    10: [{ word: "Diez", image: "diez.png", syllables: ["Uno y cero forman, el numero diez", "y empieza por", "D", "y termina con", "z"] }]
};

let currentLetter = null;
let currentWordIndex = 0;
let currentUtterance = null;

const keyboardModal = document.getElementById('keyboardModal');
const keyboardContainer = document.querySelector('.keyboard');
const navButtons = document.getElementById('nav-buttons');
const prevWordBtn = document.getElementById('prevWordBtn');
const nextWordBtn = document.getElementById('nextWordBtn');

function updateDisplay() {
    const wordObj = letters[currentLetter][currentWordIndex];
    const firstLetter = wordObj.word[0];
    const lastLetter = wordObj.word.slice(-1);
    const middleLetters = wordObj.word.slice(1, -1);

    document.getElementById('first-letter').textContent = firstLetter;
    document.getElementById('middle-letters').textContent = middleLetters;
    document.getElementById('last-letter').textContent = lastLetter;
    
    document.getElementById('image-display').src = 'img/' + wordObj.image;
    document.getElementById('image-display').classList.remove('hidden');
    
    navButtons.classList.toggle('hidden', letters[currentLetter].length <= 1);
    
    const syllablesText = wordObj.syllables.join(' - ');
    speak(`${wordObj.word}: ${syllablesText}`);
}

function showWord(letter, index = 0) {
    currentLetter = letter;
    currentWordIndex = index;
    
    if (isNaN(letter)) {
        document.getElementById('letter-display').innerHTML = `
        <span class="text-8xl text-red-600 font-bold">${letter.toUpperCase()}</span>
        <span class="text-5xl text-blue-700 font-semibold">${letter.toLowerCase()}</span>
    `;
    } else {
        document.getElementById('letter-display').innerHTML = `
            <span class="text-8xl text-red-600 font-bold">${letter.toUpperCase()}</span>
        `;
    }
    
    updateDisplay();
}

function speak(text) {
    if (currentUtterance) {
        speechSynthesis.cancel();
    }
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'es-ES';
    currentUtterance.rate = 0.8;
    speechSynthesis.speak(currentUtterance);
}

// Event Listeners
document.getElementById('openKeyboardBtn').addEventListener('click', () => {
    keyboardModal.style.display = 'flex';
});

document.getElementById('closeKeyboardBtn').addEventListener('click', () => {
    keyboardModal.style.display = 'none';
});

prevWordBtn.addEventListener('click', () => {
    currentWordIndex = (currentWordIndex - 1 + letters[currentLetter].length) % letters[currentLetter].length;
    updateDisplay();
});

nextWordBtn.addEventListener('click', () => {
    currentWordIndex = (currentWordIndex + 1) % letters[currentLetter].length;
    updateDisplay();
});

// Generar teclado
Object.keys(letters).forEach(letter => {
    const button = document.createElement('button');
    button.className = 'key';
    button.textContent = letter.toUpperCase();
    button.addEventListener('click', () => {
        showWord(letter);
        keyboardModal.style.display = 'none';
    });
    keyboardContainer.appendChild(button);
});

// Cerrar modal al hacer click fuera
window.addEventListener('click', (e) => {
    if (e.target === keyboardModal) {
        keyboardModal.style.display = 'none';
    }
});
