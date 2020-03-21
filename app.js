const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e=>{
    e.preventDefault();

    let userScore = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //user answers are in array we will have to use forEach method
    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[0]){
            userScore += 25;
        }
    });
    //show result
    //remove the hidden class
    //use windows object scrollTo() with x,y coordinates to take to the top
    scrollTo(0,0);
    result.classList.remove('d-none');
    

    let output=0;
    const stopTimer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === userScore){
            clearInterval(stopTimer);
        }else{
            output++;
        }
    }, 10);

});



//interval and animating the numbers
//keep in mind to stop this function as it keeps going .....


// let i=0;
// const stopTimer = setInterval(() => {
//     console.log('hello');

//     i++;
//     if(i===5){
//         clearInterval(stopTimer);
//         console.log('stopped!!! :)');
//     }

// }, 100);