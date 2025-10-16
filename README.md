# Roulette — Jeu de pari sur les couleurs
##  Description

**Simulation de Roulette** est une application web interactive simulant une roulette composée de 37 numéros allant de 0 à 36 :

-  L’utilisateur choisit une couleur (Rouge ou Noir).  
- L’application tire numéro aléatoire entre 0 et 36.  
-  Si la couleur correspond, le joueur double sa mise. 
-  Sinon, il perd sa mise.
-  Si le numéro 0 sort, le joueur perd automatiquement (0 est vert).

> Une authentification simple est nécessaire pour accéder à l’application.

---

##  Règles du jeu

- Mise : le joueur choisit un montant à miser.
- Tirage : un nombre aléatoire entre 0 et 36 est généré.  
- Gain : si la couleur est correcte, la mise est doublée.

---

##  Fonctionnalités principales

- Choix de la couleur (Rouge ou Noir)
- Saisie de la mise par l’utilisateur
- Génération aléatoire d’un nombre entre 0 et 36
- Gestion spéciale du numéro 0 (perte automatique)
- Calcul automatique du résultat (gagné ou perdu)
- Affichage dynamique du numéro tiré et de la couleur

---

## Interface utilisateur

- Un champ pour entrer la mise
- Deux boutons pour choisir la couleur (Rouge / Noir)
- Un bouton pour lancer le tirage
- Une zone de résultat affichant :
  Le numéro tiré 
  La couleur correspondante
  Le résultat final

---

##  Démonstration

 [Voir la vidéo de démonstration](https://youtu.be/Kr7TSCvz64M)

---

##  Installation et exécution

1. **Cloner le projet**
   ```bash
   git clone https://github.com/Spirituel-Franchesco/Jeu-de-la-Roulette-Web.git
