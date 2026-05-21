# Mini Pomodoro Timer 🍅

## Description
Une application web interactive de gestion du temps inspirée de la méthode "Pomodoro" qui consiste à alterner des cycles de travail de 25 minutes et des pauses de 5 minutes pour optimiser la productivité des salariés.

## Fonctions implémentées
### Fonctionnalités obligatoires
- Afficher un compte à rebours au format MM:SS
- Gestion des modes travail (25 min) et pause (5min)
- Ajouter 3 boutons (start, pause et reset)
- Basculer automatiquement de mode Travail vers Pause et inversement quand le timer atteint 00:00
- Affichage clair du mode actif (Texte et couleur de fond)

### Fonctionnalités bonus
- Bonus 1 : Jouer un son de cloche à la fin de chaque cycle ('new Audio().play')
- Bonus 5 : Thème visuel qui change selon le mode ('document.title')

## Journal de bord et explications du code

### Etape 1 : Mise en place des variables et du setInterval
- Création d'une variable 'tempsRestant' à 1500 secondes pour établir la durée
- Utilisation du 'setInterval()' pour appeler une fonction de décrémentation chaque seconde
- Utilisation de la console du navigateur ('console.log') pour suivre le décompte

### Etape 2 : Création de la formule de calcul et d'affichage
- Regroupement des conditions de décrémentation dans la fonction 'decompte' pour qu'elle puisse être exécutée à répétition par 'setInterval'
- Création de la fonction 'mettreAJourAffichage()' avec 'Math.floor' et '%' pour convertir toutes les secondes en minutes et que l'on puisse tout voir
- Ajout d'une fonctionnalité quand on interagit avec le bouton Start 'if (chrono !==null)' pour que plusieurs minuteurs ne se lancent pas plusieurs fois si on clique plusieurs fois dessus
- Un nettoyage de mon code HTML car j'avais doublé l'identifiant '#statut' pour 'Travail' et 'Pause' 🤡

### Etape 3 : Ajout des contrôles des boutons 'Start', 'Pause' et 'Reset'
- Pour le bouton 'Start' : déclenche un 'SetInterval' lié à la fonction de décompte avec une sécurité pour éviter de multiplier le minuteur au clic répété
- Pour le bouton 'Pause' : utilisation de 'clearInterval' pour arrêter instantanément la répétition du décompte
- Pour le bouton 'Reset' : interrompt le minuteur et réinitialise la variable 'tempsRestant' à la valeur initiale (1500s)

### Etape 4 : Basculement automatique et modification du style dans le JS
- Ajout d'une condition 'if/else' dans la fonction 'decompte' pour que lorsque 'tempsRestant' arrive à 0, le script vérifie l'état de la variable 'estEnTravail'
- Ajout automatique de la durée 300 secondes pour la pause et 1500 secondes pour le travaom
- utilisation de innerText pour changer de statut et de style.backgroundColor pour mettre une couleur en arrière plan sur la page
- ajout de plusieurs 'mettreAjourAffichage()'

### Etape 5 : Intégration du bonus et mise en page CSS
- Bonus 1 : alerte sonore de cloche avec l'utilisation de 'Audio' et la déclencher avec '.play()' quand 'tempsRestant' atteint 0
- Bonus 5 : liaison de 'document.title' dans la fonction de rafraîchissement pour permettre à l'utilisateur de suivre son chrono même s'il change d'onglet
- mise en page de la page dans le style.css