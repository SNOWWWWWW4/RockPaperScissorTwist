import {GetUserChoice,GetCPUChoice, OneAndDoneCPU} from "./CPU1.js";

const main = document.getElementById('main');
const cpuGameDisplay = document.getElementById('cpuGameDisplay');
// const peopleGameDisplay = document.getElementById('peopleGameDisplay');
// let gameMode = localStorage.getItem("gameMode");

// Start Button Click
const start = document.getElementById('start');
start.addEventListener('click', () => {
  main.style.display = 'none';
  cpuGameDisplay.style.display = 'block';
  
});

//Return Button clicked
const goBack = document.getElementById('goBack');
goBack.addEventListener('click', () => {

	rock.classList.remove('shake');
	paper.classList.remove('shake');
	scissors.classList.remove('shake');
	lizard.classList.remove('shake');
	spock.classList.remove('shake');
    cpuGameDisplay.style.display = 'none';
	
    main.style.display= "flex";

});

const play = document.getElementById('play');
play.addEventListener('click', () => {

	rock.classList.remove('shake');
	paper.classList.remove('shake');
	scissors.classList.remove('shake');
	lizard.classList.remove('shake');
	spock.classList.remove('shake');

	GetCPUChoice();
	GetCPUChoice();
	OneAndDoneCPU();
})

// Styling
// const choiceImg = document.getElementById('choiceImg')
// choiceImg.addEventListener('click', shape);

// Setting game mode??
const One = document.getElementById('One');
const Two = document.getElementById('Two');
const Three = document.getElementById('Three');
const Four = document.getElementById('Four');
const Five = document.getElementById('Five');
const Six = document.getElementById('Six');
const save = document.getElementById('save');



