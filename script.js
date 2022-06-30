'use strict';


let score = 10;
let number = (Math.trunc(Math.random() *20) + 1);
let highscore = 0;


document.querySelector('.check').addEventListener('click', function() {; 

    let guess = Number(document.querySelector('.guess').value); 

    if (!guess) {
        document.querySelector('.message').textContent = 'No number';
    }
    
    else if (guess === number) {
        document.querySelector('.message').textContent = 'CORRECT!!';
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== number) {
        if(score > 1) {
            document.querySelector('.message').textContent = guess > number ? 'too high!!' : 'too low!!';
            score-- ;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'YOU LOST!!!';
            document.querySelector('.score').textContent = 0;
        } 
        
    }});

    
    
    
document.querySelector('.again').addEventListener('click', function() {
    score = 10;
    number = (Math.trunc(Math.random() *20) + 1);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = '10';
    document.querySelector('.guess').value = ' ';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
