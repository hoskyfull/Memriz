# Memriz: Challenge Your Memory

---

## Premise

Lights on... lights out! Remember that? Maybe you do not but if you do, you might win. Memriz is a game that challenges you memory. The more you win, the harder it gets! 


---

## User Story
Memriz is a game where you can practice your memory elasticity and work your memory muscles! The goal is to rememner the highlighted tiles that will reveal themselves for a moment. The player will see a 6x6 grid, a score and a start/clear button. Once the player clicks 'Start', 3 tiles will light up in a color for 1.50 seconds. The player has to remember which tiles light up and will then click on those tiles. If the player has selected the 3 tiles 3 times succesfully, the player wins. Otherwise if the player selects the wrong wrong one, then the player loses and the points reset. 

---

### Future work

* Include a timer

* Highlight the tiles that the player clicks and do not match the randomly selected ones

* Add extra levels that increase difficulty (e.g:less highlighting time, more tiles added)

* Add a box that will include the number of tiles to be clicked for the current level

* Increase the number of highlited number of tiles

* Improve the alert display to a more sofisticated one

* Maybe add animation to the background

---

### Bugs

There are several bugs to the game that can be worked in the future. 

* Highlighted tiles sometimes do not match code. In other words, game will highlight only 2 instead of 3, even though it does select the boxes (we can see it in the console.log). Seems that when it selects the same tile number/id in the random selection more than once, it does not highlight. Maybe create a for loop that will remove already highlited tiles with a condition of not repeating that same tile. For example: whe it selects a random number/id, the console.log would look like this: "(3) [33, 28, 28]'This is selected tiles'". When it selects the same number/id of the tile, it will not highlight a second the 28 two times but 1 time (highlighting 28 on top twice).

* Clear button does not clear sometimes, having to refresh the page. 

---

## Technologies Used:

* HTML

* CSS

* JavaScript (logic and DOM manipulation)

---

## Wireframes (what game will look like):

<img width="656" alt="PNG image" src="https://user-images.githubusercontent.com/44327404/169831231-2dad25e6-2885-4f22-b3a2-ae03b03ec6f4.png">