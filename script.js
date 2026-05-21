// - LES VARIABLES 
// le temps de travail : 25 minutes --> 1500 secondes
let tempsRestant = 1500;
// pour stocker setInterval
let chrono = null;
let estEnTravail = true;

// BONUS 1 : Jouer un son de cloche à la fin de chaque cycle
const sonCloche = new Audio("./son/dragon-studio-goat-sound-390298.mp3");
sonCloche.volume = 0.8;


// - RELIER AU HTML
const affichageTimer = document.getElementById('timer');
const boutonStart = document.getElementById('start');
const boutonPause = document.getElementById('pause');
const boutonReset = document.getElementById('reset');
// Pour switcher en mode Travail/Pause
const ongletTravail = document.getElementById('onglet-travail');
const ongletPause = document.getElementById('onglet-pause');


// - LES FONCTIONS
// Pour transformer les secondes au format MM:SS
function mettreAJourAffichage() {
    // Pour récupérer les minutes = à 60 secondes
    let minutes = Math.floor(tempsRestant / 60);
    // le reste correspond aux secondes 
    let secondes = tempsRestant % 60;

// Si les secondes ou minutes sont inférieures à 10, on rajoute 0 devant 
    if (secondes < 10) {
        secondes = "0" + secondes;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

// On écrit le résultat directement dans la div HTML
affichageTimer.innerText = minutes + ":" + secondes;

// la fonction bonus 5 : thème visuel qui change selon le mode
document.title = minutes + ":" + secondes + "- Pomodoro";
}

// Pour passer manuellement du mode Travail au mode Pause
function basculerDeMode() {
    if (estEnTravail === true) {
        estEnTravail = false;
        tempsRestant = 300;
        document.body.style.backgroundColor = "#11998e";

        ongletPause.className = "onglet-pause actif";
        ongletTravail.className = "onglet-travail inactif";
    }else {
        estEnTravail = true;
        tempsRestant = 1500;
        document.body.style.backgroundColor = "#ff6b6b";

        ongletTravail.classList.add('actif');
        ongletPause.classList.remove('actif');

    }
    mettreAJourAffichage();

    }


// La fonction pour que le setInterval s'exécute toutes les secondes
function decompte() {
    if (tempsRestant > 0) {
        // pour descendre d'une seconde
        tempsRestant = tempsRestant - 1;
        mettreAJourAffichage();
    } else {
        // BONUS 1 : le son de cloche se joue à la fin du timer
        sonCloche.play();
        // Switcher de mode automatiquement
        basculerDeMode();
        // le temps est fini, on change de mode
        if (estEnTravail === true) {
            estEnTravail = false;
            // 300 secondes = 5 minutes
            tempsRestant = 300;
            affichageStatut.innerText = "☕ Pause";
            document.body.style.backgroundColor = "#11998e"
        } else {
            estEnTravail = true;
            tempsRestant = 1500;
            affichageStatut.innerText = "🍅 Travail";
            document.body.style.backgroundColor = "#ff6b6b"
        }
     
        mettreAJourAffichage();
    }
}

// LES EVENEMENTS au CLIC des BOUTONS
ongletTravail.addEventListener('click', function() {
    if (estEnTravail === false) {
    clearInterval(chrono);
    chrono = null;
    basculerDeMode();
    }
})

// Clic manuel mode Pause
ongletPause.addEventListener('click', function() {
    if (estEnTravail === true) {
        clearInterval(chrono);
        chrono = null;
        basculerDeMode();
    }
});
// Bouton Start
boutonStart.addEventListener('click', function() {
    // si le chrono est déjà en marche alors on ne fait rien
    if (chrono !== null) {
        return;
    }
    // sinon on lance le chrono, la fonction 'decompte' toutes les 1000ms (1 seconde)
    chrono = setInterval(decompte, 1000);
});

// Bouton Pause
boutonPause.addEventListener('click', function(){
    // on stoppe le minuteur en cours
    clearInterval(chrono);
    // on remet le compteur à null
    chrono = null;
});

// Bouton Reset
boutonReset.addEventListener('click', function(){
// le chrono s'arrête si il est en marche
    clearInterval(chrono);
    chrono = null;
// forcer le retour en mode travail
    estEnTravail = true;
    tempsRestant = 1500;
    affichageStatut.innerText = "🍅 Travail";
    document.body.style.backgroundColor = "#ff6b6b"
    ongletTravail.classList.add('actif');
    ongletPause.classList.remove('actif');

// pour actualiser la page pour afficher 25:00
    mettreAJourAffichage();
});

mettreAJourAffichage();
document.body.style.backgroundColor = "#ff6b6b";

