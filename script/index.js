import { HomeView } from "./views/homeView.js";
import { FirstTokenValue, LogingView } from "./views/loginView.js";

const Token = localStorage.getItem("token")
console.log("oui", Token === FirstTokenValue);

if (!Token || (Token !== FirstTokenValue && FirstTokenValue !== undefined)) {
    console.log("ana hna");
    
    document.body.innerHTML = ''
    document.body.append(LogingView())
}else {
    console.log("la ana hna");
    
    document.body.append(await HomeView())
}