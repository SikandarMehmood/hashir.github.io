const ul = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipe = (recipe, id) =>{
    
    let time = recipe.created_at.toDate();
    const date = time.toLocaleString();
    let html = `
        <li data-id="${id}">
        <div> ${recipe.title}</div>
         <div>${date}</div>
        <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;
    // console.log(html);
    ul.innerHTML += html;

    
}

//delete doc realtime
const deleteRecipe = (id) =>{
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe =>{
        if(recipe.getAttribute('data-id') === id){
            recipe.remove();
        }
    });
}

/*
    GET DOCUMENT & REALTIME SYNC WITH FIREBASE
*/
db.collection('recipes').onSnapshot( snapshot =>{
    // console.log(snapshot.docChanges());
    snapshot.docChanges().forEach( change => {
        // console.log(change);
        const doc = change.doc;
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id);
        }else if(change.type === 'removed'){
            deleteRecipe(doc.id);
        }
    });
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
        // console.log('recipe has been added!');
    }).catch(err =>{ console.log(err)});

    form.reset();//it reset the form

});

//deleting the document
ul.addEventListener('click', e => {
    // console.log(e);
    if(e.target.tagName === 'BUTTON'){
        const id= e.target.parentElement.getAttribute('data-id');
        // console.log(id);
        db.collection('recipes').doc(id).delete().then(() =>{
            // console.log('id has been deleted');
        }).catch( e =>{
            // console.log(err);
        });
    }
});

// const date = new Date();
// console.log(date);
// console.log(date.toLocaleString());
// console.log(date.getSeconds());