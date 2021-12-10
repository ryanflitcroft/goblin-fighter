import { renderGoblin } from './render-utils.js';

const goblinForm = document.querySelector('#goblin-form');
const goblinDataSection = document.querySelector('#goblin-data-section');
const defeatedGoblinCount = document.querySelector('#defeated-goblin-count');
const HP = document.querySelector('#fighter-hp');

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
let fighterHP = 13;

goblinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(goblinForm);
    goblinName = data.get('name');

    goblinForm.reset();

    const goblinObject = {
        goblinName,
        goblinHP
    };

    goblinArray.push(goblinObject);
    displayGoblins();
});

function displayGoblins() {
    goblinDataSection.textContent = '';
    defeatedGoblinCount.textContent = defeatedGoblins;
    HP.textContent = `${fighterHP} hp`;
    for (let goblin of goblinArray) {

        const goblinEl = renderGoblin(goblin);
    
        goblinEl.addEventListener('click', () => {
            let strike = Math.floor(Math.random() * 10);
            if (strike > 4) {
                alert(`You have struck ${goblin.goblinName}!!`);
                goblin.goblinHP--;
            } else if (strike < 4) {
                alert(`You tried to strike ${goblin.goblinName} and missed, ${goblin.goblinName} has attacked you!!`);
                fighterHP--;
            } else {
                alert(`You tried to strike ${goblin.goblinName} and missed, ${goblin.goblinName} has attacked you... but missed!!`);
            }
            if (goblin.goblinHP === 0) {
                defeatedGoblins++;
            }
            displayGoblins();
        });

        goblinDataSection.append(goblinEl);
    }
}

displayGoblins();
