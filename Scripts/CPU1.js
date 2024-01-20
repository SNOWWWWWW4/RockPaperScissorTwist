// Game variables
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const lizard = document.getElementById('lizard');
const spock = document.getElementById('spock');


//start of One and Done CPU GamePlay
let userChoi;
let compChoi;


function GetUserChoice(){
	rock.addEventListener('click', () => {
		userChoi = "rock";
		rock.classList.Add('shake');
		
	});
	
	paper.addEventListener('click', () => {
		userChoi = "paper";
		paper.classList.add('shake');
		
	});
	
	scissors.addEventListener('click', () => {
		userChoi = "scissors";
		scissors.classList.add('shake');
		
	});
	
	lizard.addEventListener('click', () => {
		userChoi = "lizard";
		lizard.classList.add('shake');
		
	});
	
	spock.addEventListener('click', () => {
		userChoi = "spock";
		spock.classList.add('shake');
		
	});
	console.log(`User choose ${userChoi}`);
}




const both = document.getElementById('both');
const rule = document.getElementById('rule');
const result = document.getElementById('result');
const userScore = document.getElementById('userScore');
const cpuScore = document.getElementById('cpuScore');

const uPoint = 0;
const cPoint = 0;


async function GetCPUChoice() {
	const promise = await fetch("https://rpslsapi.azurewebsites.net/RPSLS");
	const data = await promise.text();
	compChoi = data.toLowerCase();
	console.log (`Computer choose ${compChoi}`);
}


function OneAndDoneCPU (userChoi) {
	
	GetCPUChoice();

	if (userChoi === compChoi) {
		both.innerText = `User Choose: ${userChoi} \n CPU Choose: ${compChoi}`; 

        rule.innerText = `The computer also chose ${compChoi}`;
		result.innerText = "The result is a tie! ";
	} 
    else if (userChoi === "rock"){
		both.innerText = `User Choose: ${userChoi} \n CPU Choose: ${compChoi} `

		if (compChoi === "paper") {
            rule.innerText = "Paper covers rock";
			result.innerText = "You Lose";
			cPoint++;
			cpuScore.innerText = `CPU Score: ${cPoint}`;
		} 
        else if (compChoi === "scissors") {
            rule.innerText = "Rock crushes scissors";
			result.innerText = " You Win!";
			uPoint++;
			userScore.innerText = `Player Score: ${uPoint}`;
		} 
        else if (compChoi === "lizard") {
			rule.innerText = "Rock crushes lizard";
			result.innerText = " You Win!";
			uPoint++;
			userScore.innerText = `Player Score: ${uPoint}`;
		} 
        else {
			rule.innerText = "Spock vaporizes rock";
			result.innerText = "You Lose";
			cPoint++;
			cpuScore.innerText = `CPU Score: ${cPoint}`;
		}

	} 
    else if (userChoi === "paper") {

		both.innerText = `User Choose: ${userChoi} \n CPU Choose: ${compChoi} `

		if (compChoi === "rock") {
			rule.innerText = "Paper covers rock";
			result.innerText = "You Win!";
			uPoint++;
			userScore.innerText = `Player Score: ${uPoint}`;
		} 
        else if (compChoi === "scissors") {
			rule.innerText = "Scissors cut paper";
			result.innerText = " You Lose";
			cPoint++;
			cpuScore.innerText = `CPU Score: ${cPoint}`;
		} 
        else if (compChoi === "lizard") {
			rule.innerText = "Lizard eats paper";
			result.innerText = " You Lose";
			cPoint++;
			cpuScore.innerText = `CPU Score: ${cPoint}`;
		} 
        else {
			rule.innerText = "Paper disproves spock "; 
			result.innerText = " You Win!";
			uPoint++;
			userScore.innerText = `Player Score: ${uPoint}`;
		}

	}
    else if (userChoi === "scissors") {

		both.innerText = `User Choose: ${userChoi} \n CPU Choose: ${compChoi} `

		if (compChoi === "rock") {
			rule.innerText = "Rock crushes scissors";
			result.innerText = "You Lose";
			cPoint++;
			cpuScore.innerText = `CPU Score: ${cPoint}`;
		} 
        else if (compChoi === "paper") {
			rule.innerText = "Scissors cut paper";
			result.innerText = "You Win!";
			uPoint++;
			userScore.innerText = `Player Score: ${uPoint}`;
		} 
        else if (compChoi === "lizard") {
			rule.innerText = "Scissors decapitate lizard"; 
			result.innerText = "You Win!";
			uPoint++;
			userScore.innerText = `Player Score: ${uPoint}`;
		} 
        else {
			rule.innerText = "Spock smashes scissors"; 
			result.innerText = "You Lose";
			cPoint++;
			cpuScore.innerText = `CPU Score: ${cPoint}`;
		}

	} 
    else if (userChoi === "lizard") {

		both.innerText = `User Choose: ${userChoi} \n CPU Choose: ${compChoi} `

		if (compChoi === "rock") {
			rule.innerText = "Rock crushes lizard";
			result.innerText = "You Lose";
			cPoint++;
			cpuScore.innerText = `CPU Score: ${cPoint}`;
		} 
        else if (compChoi === "paper") {
			rule.innerText = "Lizard eats paper";
			result.innerText = "You Win!";
			uPoint++;
			userScore.innerText = `Player Score: ${uPoint}`;
		} 
        else if (compChoi === "scissors") {
			rule.innerText = "Scissors decapitate lizard";
			result.innerText = "You Lose";
			cPoint++;
			cpuScore.innerText = `CPU Score: ${cPoint}`;
		} 
        else {
			rule.innerText = "Lizard poisons spock";
			result.innerText = "You Win!";
			uPoint++;
			userScore.innerText = `Player Score: ${uPoint}`;
		}

	} 
    else if (userChoi === "spock") {

		both.innerText = `User Choose: ${userChoi} \n CPU Choose: ${compChoi} `

		if (compChoi === "rock") {
			rule.innerText = "Spock vaporizes rock";
			result.innerText = "You Win!";
			uPoint++;
			userScore.innerText = `Player Score: ${uPoint}`;
		} 
        else if (compChoi === "paper") {
			rule.innerText = "Paper disproves spock";
			result.innerText = "You Lost";
			cPoint++;
			cpuScore.innerText = `CPU Score: ${cPoint}`;
		} 
        else if (compChoi === "scissors") {
			rule.innerText = "Spock smashes scissors";
			result.innerText = "You Win!";
			uPoint++;
			userScore.innerText = `Player Score: ${uPoint}`;
		} 
        else {
			rule.innerText = "Lizard poisons spock";
			result.innerText = "You Lose";
			cPoint++;
			cpuScore.innerText = `CPU Score: ${cPoint}`;
	    }
	}
}

export {GetUserChoice,GetCPUChoice, OneAndDoneCPU};




		
