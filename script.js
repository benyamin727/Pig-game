'use strict'

// Selecting Elements

const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const DiceEl = document.querySelector('.dice');

// Starting conditions //

scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
DiceEl.classList.add('hidden');

