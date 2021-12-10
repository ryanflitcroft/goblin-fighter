import { renderGoblin, displayGoblins, renderDefeatedGoblins, renderFighter} from '';

const goblinForm = document.querySelector('#goblin-form');
const goblinDataSection = document.querySelector('#goblin-data-section');
const defeatedGoblinSection = document.querySelector('#defeated-goblin-section');
const fighterContainer = document.querySelector('#fighter-container');

// console.log(goblinForm, goblinDataSection, defeatedGoblinSection, fighterContainer);

const goblinArray = [
    {
        name: 'xoo',
        HP: 3
    },
    {
        name: 'xyy',
        HP: 3
    }
];

let defeatedGoblinCount = 0;
let fighterHP = 13;

// console.log(goblinArray, defeatedGoblinCount, fighterHP);

goblinForm.addEventListener('submit', (e) => {

});

for (let goblinObject of goblinArray) {

    goblinObject.addEventListener('click', () => {

    });

}

