export function renderGoblin(goblinData) {
    const goblinContainer = document.createElement('div');
    const goblinEmoji = document.createElement('span');
    const goblinName = document.createElement('span');
    const goblinHP = document.createElement('span');

    goblinContainer.classList.add('goblin-container');
    goblinEmoji.classList.add('goblin', 'emoji');
    goblinName.classList.add('goblin');
    goblinHP.classList.add('goblin');

    goblinEmoji.textContent = '👹';
    goblinName.textContent = goblinData.goblinName;
    goblinHP.textContent = `${goblinData.goblinHP} hp`;

    goblinContainer.append(goblinEmoji, goblinName, goblinHP);
    return goblinContainer;
}

export function renderDefeatedGoblins(defeatedData) {
    // const defeatedContainer = document.createElement('div');
    // const defeatedCount = document.createElement('span');
    // const defeatedEmoji = document.createElement('span');

    // defeatedContainer.classList.add('defeated-goblin-container');

    // defeatedContainer.textContent = #;
    // defeatedEmoji.textContent = '💀';
}

export function renderFighter() {
    
}