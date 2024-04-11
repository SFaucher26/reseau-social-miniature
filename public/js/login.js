window.addEventListener('DOMContentLoaded', ()=> {
    const errorSpan = document.querySelector('span.form-error')
const formEl = document.querySelector('form')
formEl.addEventListener('submit', async (event)=>{
event.preventDefault()
//récupération du formulaire
const {username, password} = Object.fromEntries(new FormData(formEl))

//récupère les données du formulaire
const user = await fetch(formEl.action, {
    method: formEl.method,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    // Transforme le json en string / envoie de ce que l'on a récupéré via le formulaire
    body: JSON.stringify({
        username, // username : username
        password  // password : password
    })
})
.then(async response => {
    if(response.ok) {
        return response.json()
    }
    throw await response.json()
})
.catch(error => {
    errorSpan.innerHTML = error.message
})


// si un utilisateur se connecte il est enregistré dans la sessionStorage
if(user){
    console.log('Logged with user', user)
    //Enregistre le user dans une sessionStorage
    sessionStorage.setItem('token', user.token)
    //valable en fonction du navigateur
    // localStorage.setItem('user', user.id)

    // redirige le sur sur la home page
    document.location.href = '/';
} else{
    document.location.href = '/register.html'
}


})

})