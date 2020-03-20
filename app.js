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
    result.classList.remove('d-none');
    result.querySelector('span').textContent = `${userScore}%`;
});