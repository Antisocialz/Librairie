

let Checkbox = document.querySelector('input[value="other"]');

function addbook(title,author,price,status) {

    if (Checkbox.checked) {
    document.querySelector('#libre').innerHTML += `
    <div class='book green'>
    <img id="imgLivre" src="./img/livre-20d-20or.gif" >
    <h1> &nbsp;&nbsp;// ${title} // ${author} // ${price} // Dispo</h1>
   </div>
    `} else
    document.querySelector('#libre').innerHTML += `
    <div class='book red'>
    <img id="imgLivre" src="./img/livre-20d-20or.gif" >
    <h1>&nbsp;&nbsp;// ${title} // ${author} // ${price} // Pas dispo</h1>
   </div>
    `
};

document.forms.fac.addEventListener('submit',
    function(event) {
        event.preventDefault();
   addbook(
       this.title.value,
       this.author.value,
       this.price.value,
       this.status.value
   )
})




