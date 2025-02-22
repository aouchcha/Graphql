import { LogIn } from "../api/signin.js"
import { HomeView } from "./homeView.js"
export let FirstTokenValue

export function LogingView() {
    const LoginPage = `
        <header>
            <h1>Graphql</h1>
        </header>
        <div class="Error"></div>
        <div class="Form">
            <p>Username</p>
            <input type="text" name="username" id="username">
            <p>PassWord</p>
            <input type="password" name="pass" id="pass">
            <br>
            <button id="submit">Submit</button>
        </div>
    `
    const LoginDoc = document.createRange().createContextualFragment(LoginPage)
    
    // console.log(LoginDoc.querySelector('#submit'), LoginDoc);
    console.log(localStorage.getItem("token") === FirstTokenValue);
    
    subbut(LoginDoc)
    return LoginDoc
}

function subbut(Doc) {
    const submit_button = Doc.querySelector('#submit')
    console.log(submit_button);
    document.addEventListener('click', async (e) => {
        if (e.target.closest('#submit')) {
            console.log(e.target);
            const username = document.querySelector('#username')
            const pass = document.querySelector('#pass')
            const Err = document.querySelector('.Error')
            console.log({"username":username.value, "pass":pass.value, "Heelo":Err.innerHTML});
            
            const Token = await LogIn(username.value, pass.value, Err)
            if (Token) {
                document.body.innerHTML = ''
                FirstTokenValue = Token
                localStorage.setItem("token", Token)
                document.body.append(HomeView())
            }
        }

    })
}