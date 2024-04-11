window.addEventListener('DOMContentLoaded', async () => {
    const mainEl = document.querySelector('main')

    const token = sessionStorage.getItem('token')
    // if(!token) {
    //     document.location.href = '/login.html'
    //     return
    // }
    if(token){
        
    
    const user = await fetch(`/users/current`, {
        headers: {
            'Authorization': `${token}`
        }
    })
        .then(async response => {
            if(response.ok){
                return response.json()
            }
            throw await response.json()
        })
        .catch(error => {
            mainEl.innerText = error.message
        })

    if(user) {
        mainEl.innerText = 'Bonjour ' + user.username
    }
} else {
    // rajoute bouton de connexion qui va vers la page login
   

}

// lister mes posts
})