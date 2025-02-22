import { GetUserData } from "../api/getdata.js"
import { Trans } from "../querys/TransictionsDataQuery.js"
import { UserData } from "../querys/UserDataQuery.js"
import { FirstTokenValue, LogingView } from "./loginView.js"

export async function HomeView() {
    const Userdata = await GetUserData(UserData, document.querySelector('.Error'),FirstTokenValue)
    let Gender = ""
    if (Userdata.user[0].attrs.gender == "Male") {
        Gender = "Mr"
    }else {
        Gender = "Mme"
    }
    const ProjectDone = Array.from(Userdata.user[0].groups)
    console.log("ProjectDone ===>",ProjectDone);
    
    const Transaction = await GetUserData(Trans, document.querySelector('.Error'),FirstTokenValue)
    const Arr = Transaction.transaction
    const initialValue = 0;
    const XpAmount = Arr.reduce((accumulator, currentValue) => accumulator + currentValue.amount, initialValue);
    console.log(XpAmount);
    
    const app = `
        <header>
            <h1>Graphql</h1>
            <button class="logout">Logout</button>
        </header>
        <div class="Error"></div>
        <div class="profile">
        <div class="BasicInfos">
            <p>Hello ${Gender} : <span>${Userdata.user[0].firstName} ${Userdata.user[0].lastName}</span></p>
            <p>Username : <span>${Userdata.user[0].login}</span></p>
            <p>Campus : ${Userdata.user[0].campus}</p>
            <p>Audit Ratio : ${(Userdata.user[0].auditRatio).toFixed(1)}</p>
        </div>
    </div>
    `
    
    const HomeDoc = document.createRange().createContextualFragment(app)
    LogoutFunctionality(HomeDoc.querySelector('.logout'))
    return HomeDoc
}

function LogoutFunctionality(logout_butt) {
    logout_butt.addEventListener('click', () => {
        localStorage.removeItem('token')
        document.body.innerHTML = ''
        document.body.append(LogingView())
    })

}