import { renderDefeated, renderGoblin } from './render-utils.js';

const goblinForm = document.querySelector('#goblin-form');
const goblinDataSection = document.querySelector('#goblin-data-section');
const defeatedGoblinCount = document.querySelector('#defeated-goblin-count');
const defeatedGoblinSection = document.querySelector('#defeated-goblin-section');
const HP = document.querySelector('#fighter-hp');

let goblinArray = [
    {
        goblinName: 'xoo',
        goblinHP: Math.ceil(Math.random() * 3)
    },
    {
        goblinName: 'xyy',
        goblinHP: Math.ceil(Math.random() * 3)
    },
    {
        goblinName: 'xrr',
        goblinHP: Math.ceil(Math.random() * 3)
    }
];

let goblinName;
let defeatedGoblins = 0;
let fighterHP = 13;
let defeatedArr = [];

goblinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(goblinForm);
    goblinName = data.get('name');

    goblinForm.reset();

    const goblinObject = {
        goblinName,
        goblinHP: Math.ceil(Math.random() * 3)
    };

    goblinArray.push(goblinObject);
    displayGoblins();
});

function displayGoblins() {
    goblinDataSection.textContent = '';
    defeatedGoblinCount.textContent = defeatedGoblins;
    if (fighterHP === 0) {
        gameOver();
        alert('The goblins have defeated you.');
        HP.textContent = 'Game Over';
        setTimeout(() => {
            HP.textContent = `${fighterHP} hp`;
        }, 1500);
    } else {
        HP.textContent = `${fighterHP} hp`;
    }

    for (let goblin of goblinArray) {

        const goblinEl = renderGoblin(goblin);
    
        goblinEl.addEventListener('click', () => {
            let strike = Math.floor(Math.random() * 10);
            if (strike > 4) {
                goblin.goblinHP--;
                alert(`You have struck ${goblin.goblinName}!!`);
            } else if (strike < 4) {
                fighterHP--;
                alert(`You tried to strike ${goblin.goblinName} and missed, ${goblin.goblinName} has attacked you!!`);
            } else {
                alert(`You tried to strike ${goblin.goblinName} and missed, ${goblin.goblinName} has attacked you... but missed!!`);
            }
            if (goblin.goblinHP === 0) {
                defeatedArr.push(goblin);
                defeatedGoblins++;
            }
            displayGoblins();
        });

        goblinDataSection.append(goblinEl);
    }

    defeatedGoblinSection.textContent = '';
    for (let defeated of defeatedArr) {
        const defeatedEl = renderDefeated(defeated);
        defeatedGoblinSection.append(defeatedEl);

    }
}

function gameOver() {
    goblinArray = [
        {
            goblinName: 'xoo',
            goblinHP: 3
        },
        {
            goblinName: 'xyy',
            goblinHP: 3
        }
    ];
    
    goblinName = '';
    defeatedGoblins = 0;
    fighterHP = 13;
}

displayGoblins();
