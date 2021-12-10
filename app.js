import { renderGoblin } from './render-utils.js';

const goblinForm = document.querySelector('#goblin-form');
const goblinDataSection = document.querySelector('#goblin-data-section');
const defeatedGoblinSection = document.querySelector('#defeated-goblin-section');
const defeatedGoblinCount = document.querySelector('defeated-goblin-count');
const fighterContainer = document.querySelector('#fighter-container');

console.log(goblinForm, goblinDataSection, defeatedGoblinSection, fighterContainer);

const goblinArray = [
    {
        goblinName: 'xoo',
        goblinHP: 3
    },
    {
        goblinName: 'xyy',
        goblinHP: 3
    }
];

let goblinName;
let goblinHP = 3;

let defeatedGoblins = 0;
let defeatedArray = [];
let fighterHP = 13;
// console.log(goblinArray, defeatedGoblinCount, fighterHP);

goblinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(goblinForm);
    goblinName = data.get('name');
    // console.log(goblinName);

    goblinForm.reset();

    const goblinObject = {
        goblinName,
        goblinHP
    };

    goblinArray.push(goblinObject);
    displayGoblins();
});



function displayGoblins() {
    // console.log(goblinArray);
    goblinDataSection.textContent = '';

    for (let goblin of goblinArray) {

        const goblinEl = renderGoblin(goblin);
    
        goblinEl.addEventListener('click', () => {
            let strike = Math.floor(Math.random() * 10);
            // console.log(strike);
            if (strike > 4) {
                alert(`You have struck ${goblin.goblinName}!!`);
                goblin.goblinHP--;
                // console.log(goblin);
            } else if (strike < 4) {
                alert(`You tried to strike ${goblin.goblinName} and missed, ${goblin.goblinName} has attacked you!!`);
                fighterHP--;
                // console.log(goblin);
            } else {
                alert(`You tried to strike ${goblin.goblinName} and missed, ${goblin.goblinName} has attacked you... but missed!!`);
                // console.log(goblin);
            }
            if (goblin.goblinHP === 0) {
                defeatedGoblins++;
                // defeatedGoblinCount.textContent = defeatedGoblins;
            }
            // console.log(defeatedGoblins);
            displayGoblins();
        });

        goblinDataSection.append(goblinEl);
    
    }

}

displayGoblins();
