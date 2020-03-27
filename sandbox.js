const ul = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipe = (recipe) =>{
    let time = recipe.created_at.toDate();
    let html = `
        <li>
        <div> ${recipe.title} </div>
        <div>${time}</div>
        </li>
    `;
    // console.log(html);
    ul.innerHTML += html;
}

db.collection('recipes').get().then( snippet=>{
    //snippet will have all the documents of arrays in docs object
    snippet.docs.forEach( doc => {
        // console.log(doc.data());//data has properties title,author & date
        //so create function outside and call here
        addRecipe(doc.data());

    });
}).catch( err =>{
    console.log(err);
});

//add event listener
form.addEventListener('submit', e => {
    e.preventDefault();

    //create a recipe object that have properties i.e title and created_at

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    }

    //create collection reference and pass object
    db.collection('recipes').add(recipe).then(() =>{
        console.log('recipe has been added!');
    }).catch(err =>{ console.log(err)});

});