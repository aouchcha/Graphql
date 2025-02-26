import { HomeView } from "./views/homeView.js";
import { LogingView } from "./views/loginView.js";

const Token = localStorage.getItem("token")

if (!Token) {
    document.body.innerHTML = ''
    document.body.append(LogingView())
}else {
    document.body.innerHTML = ''
    document.body.append(await HomeView())
}