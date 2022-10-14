export function getAuthForm() {
    return `
        <h3 class="form-title">Log in form</h3>
        <button type="button" 
        class="close-btn" 
        data-modal-close>X</button>

        <form action="" class="auth-form">
            <div class="texfield">
                <label for="email-input">E-mail</label>
                <input type="text" id="email-input">

            </div>
            <div class="texfield">
                <label for="password-input">Password</label>
                <input type="text" id="password-input">

            </div>
            <button type="submit" id="submit" class="submit-btn">Log in</button>

        </form>
    `
}

export function authWithEmailAndPassword(email, password) {
    const apiKey = `AIzaSyCHg4J_qzob1qjMAXidJJyR0ERxgFjrLiU`
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => {
        if (r.ok) {
            return alert("pruvi zdarov")
        } else {
            throw new Error(`email is not def`)
        }
        })
        .catch(e => alert(e));

    
}