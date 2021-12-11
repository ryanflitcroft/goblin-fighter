export function renderGoblin(goblinData) {
    const goblinContainer = document.createElement('div');
    const goblinEmoji = document.createElement('span');
    const goblinName = document.createElement('span');
    const goblinHP = document.createElement('span');

    goblinContainer.classList.add('goblin-container');
    goblinEmoji.classList.add('goblin', 'emoji');
    goblinName.classList.add('goblin');
    goblinHP.classList.add('goblin');

    if (goblinData.goblinHP === 0) {
        goblinContainer.classList.add('defeated');
    }

    goblinEmoji.textContent = '👹';
    goblinName.textContent = goblinData.goblinName;
    goblinHP.textContent = `${goblinData.goblinHP} hp`;

    goblinContainer.append(goblinEmoji, goblinName, goblinHP);
    return goblinContainer;
}

export function renderDefeated() {
    const defeated = document.createElement('span');
    defeated.classList.add('defeated-goblin');
    defeated.textContent = '☠️';

    return defeated;
}