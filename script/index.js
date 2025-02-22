import { HomeView } from "./views/homeView.js";
import { FirstTokenValue, LogingView } from "./views/loginView.js";

const Token = localStorage.getItem("token")

if (!Token || (Token !== FirstTokenValue && FirstTokenValue !== undefined)) {
    document.body.innerHTML = ''
    document.body.append(LogingView())
}else {
    document.body.append(await HomeView())
}