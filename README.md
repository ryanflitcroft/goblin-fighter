# Goblin Fighter
## Project Objectives

```zsh
git checkout -b workOnANewBranch
```

* Essential Goals:

  * on load, display *properties* **name**, **HP** for min. 2 goblin *objects*

  * on *submit* to 'challenge goblin' *form*, create new goblin *object* with key/value **name**, *hp: 3*, display on DOM.

  * on goblin *click*, *alert* user whether or not goblin has hit player, *update state* and DOM display

  * *state* value for number of defeated goblins should be displayed on state change
  
  * *render* new style for defeated goblins, *disable click*

  * when user HP is 0, *alert* game over, *reset state*

  * write **functions** for:

    * **renderGoblin**(*goblin*): *returns DOM* node

    * **displayGoblins**(): *clears DOM* and *appends* goblin data to goblin list DOM node

* Stretch Goals:

  * **tbd**

### HTML SETUP

#### Major sections

1. goblin-input-section:
    * user should be able to submit text input in order to create and display new goblin *object*. Input should take in data to assign  ```goblinObject.name```.

      *note*: by default, ```goblinObject.HP``` should be assign a value 3.

```html
<section class="" id="goblin-input-section>
  <form id="goblin-form">
    <label for="goblin-input">
      <input name="goblin-input" id="goblin-input" required>
    </label>
    <button type="submit" form="goblin-form" value="submit">Submit</button>
  </form>  
</section>
```  

1. goblin-data-section:

    * default goblinObject should be rendered to goblin-data-section on load.

    * on form *submit* event, new goblin object should be rendered to goblin-data-section.

    * each goblinObject should be contained within flexible HTML container element.

    *note*: data rendered should include ```goblinObject.name```, ```goblinObject.HP```, emoji textContent.

```html
<section class="" id="goblin-data-section">
  <!-- goblinObjects be rendered in JS -->
  <div class="goblin-container">
    <span class="goblin">goblinObject.name</span>
    <span class="goblin">goblinObject.HP</span>
    <span class="goblin">emoji textContent</span>
  </div>
  <!-- -->
</section>
```

*note*:

```js
    if (goblinObject.HP === 0) {
      goblinObject.classList.add('defeated');
    }
```

1. defeated-goblin-section:

    * when ```goblinObject.HP``` reaches **0**, state is changed for ```defeatedGoblinCount``` and is displayed in defeated-goblin-section.

    * defeated-goblin-section should include a flexible HTML container element to include textContent reflecting current value in state of ```defeatedGoblinCount```.

```html
<section class="" id="defeated-goblin-section">
  <!-- STRETCH defeatedGoblin rendered in JS -->
  <div class="defeated-goblin-container">
    <span>#</span>
    <span>💀</span>
  </div>
  <!-- -->
</section>
```

1. fighter-section:

    * on load, fighter element should be rendered

    * fighterHP text element should be displayed with current state value of ```fighterHP```.

```html
<section class="fighter-section">
  <!-- STRETCH fighter rendered in JS -->
  <div id="fighter-container">
    <span class="fighter">🤠</span>
    <span class="fighter">#HP#</span>
  </div>
  <!-- -->
</section>
```

### JS SETUP

1. Grab essential DOM elements:

    * #goblin-form

    * #goblin-data-section

    * #defeated-goblin-section

    * #fighter-container

2. addEventListener for:

    * ```goblinForm``` 'submit'

        * creates new ```goblinObject```
        * ```.push()``` to ```goblinArray``` [ {} ]
        * ```renderGoblin()``` to display in goblin-data-section

    * ```goblinObject``` 'click'

        * generates random number to determine whether to decrement state value for ```goblinHP``` or to decrement state value for ```hunterHP```

        * ```alert()``` string to describe change in state that occurred

        * if ```goblinObject.hp``` reaches **0**, increment state value for ```defeatedGoblinCount```, render ```goblinObject``` for ```classList.add('defeated')```

3. Write functions for:

    * **renderGoblin()**:

    * **displayGoblins()**:

    *Stretch Goal*:

    * **renderDefeatedGoblin()**:

    * **renderFighter()**:

*note*: TDD for each pure function