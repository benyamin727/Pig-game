'use strict'

// Selecting Elements //

const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const DiceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const currentscoreEl0 = document.getElementById('current--0') ;
const currentscoreEl1 = document.getElementById('current--1') ;
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
// Starting conditions //

scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
DiceEl.classList.add('hidden');


let currentscore = 0 ;
const scores = [0 , 0]
let activeplayer = 0 ;

// Rolling dice functionality //

btnRoll.addEventListener('click' , () => {
    const Dice = Math.trunc(Math.random() * 6) + 1;
    console.log(Dice , 'sss');
    DiceEl.classList.remove('hidden');
    DiceEl.src = `dice-${Dice}.png`;

    if (Dice !== 1) {
        currentscore += Dice ;
        document.getElementById(`current--${activeplayer}`).textContent = currentscore ;
    }
    else {
        document.getElementById(`current--${activeplayer}`).textContent = 0 ;
        currentscore = 0 ;
        activeplayer = activeplayer === 0 ? 1 : 0 ;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    }
})

btnHold.addEventListener('click' , () => {
    scores[activeplayer] = currentscore ;
    document.getElementById(`score--${activeplayer}`).textContent = currentscore;

    if (scores [activeplayer] >= 100) {
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')
    }

    else {
        document.getElementById(`current--${activeplayer}`).textContent = 0 ;
        currentscore = 0 ;
        activeplayer = activeplayer === 0 ? 1 : 0 ;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    }
})

