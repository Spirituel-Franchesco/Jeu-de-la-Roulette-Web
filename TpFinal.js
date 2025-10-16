let balance = 0; 
let betAmount = 0; 
let selectedColor = null; 

const balanceAmount = document.getElementById('balanceAmount');
const betAmountElement = document.getElementById('betAmount');
const redBet = document.querySelector('.bet.red');
const blackBet = document.querySelector('.bet.black');
const addButton = document.querySelector('.btn.action:nth-child(2)');
const withdrawButton = document.querySelector('.btn.action:first-child');
const playButton = document.querySelector('.btn.play');
const cancelButton = document.querySelector('.btn.cancel');

function updateDisplay() {
    balanceAmount.textContent = `${balance}$`;
    betAmountElement.textContent = `${betAmount}$`;
}

addButton.addEventListener('click', () => {
    const amount = parseInt(prompt('Entrez le montant à ajouter :'), 10);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateDisplay();
    } else {
        alert('Veuillez entrer un montant valide.');
    }
});

withdrawButton.addEventListener('click', () => {
    const amount = parseInt(prompt('Entrez le montant à retirer :'), 10);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateDisplay();
    } else {
        alert('Montant invalide ou insuffisant.');
    }
});

function selectColor(color) {
    if (selectedColor === color) {
        alert('Vous avez déjà sélectionné cette couleur.');
        return;
    }

    if (betAmount === 0) {
        const amount = parseInt(prompt('Entrez le montant de votre mise :'), 10);
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
            betAmount = amount;
            selectedColor = color;
            updateDisplay();
        } else {
            alert('Montant invalide ou insuffisant.');
        }
    } else {
        alert('Vous avez déjà placé une mise.');
    }
}

redBet.addEventListener('click', () => selectColor('red'));
blackBet.addEventListener('click', () => selectColor('black'));

cancelButton.addEventListener('click', () => {
    if (betAmount > 0) {
        betAmount = 0;
        selectedColor = null;
        updateDisplay();
    } else {
        alert('Aucune mise à annuler.');
    }
});

playButton.addEventListener('click', () => {
    if (betAmount === 0 || !selectedColor) {
        alert('Veuillez placer une mise avant de jouer.');
        return;
    }

    playButton.disabled = true; 
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 37); 
        let resultColor;

        if (randomNumber === 0) {
            resultColor = 'green';
        } else if (randomNumber % 2 === 0) {
            resultColor = 'red';
        } else {
            resultColor = 'black';
        }

        if (resultColor === selectedColor) {
            balance += betAmount; 
            alert(`Le numéro tiré est ${randomNumber} (${resultColor}). Vous avez gagné !`);
        } else {
            balance -= betAmount; 
            alert(`Le numéro tiré est ${randomNumber} (${resultColor}). Vous avez perdu.`);
        }

        betAmount = 0; 
        selectedColor = null;
        updateDisplay();
        playButton.disabled = false;
    }, 3000);
});

updateDisplay();
