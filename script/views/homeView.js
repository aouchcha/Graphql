import { GetUserData } from "../api/getdata.js"
import { DrawRectGraph } from "../Components/RectGraphCompo.js"
import { UserData } from "../querys/UserDataQuery.js"
import { LogingView } from "./loginView.js"
import { DrawCircleGraph } from "../Components/CircleGraph.js"
import { ExtractData, FormatFixer } from "../helpers/Work.js"

export async function HomeView() {
    document.body.innerHTML = ''
    const Userdata = await GetUserData(UserData, document.querySelector('.Error'))
    console.log({Userdata});
    
    const data = ExtractData(Userdata.transaction, Userdata.skills, Userdata.projects)
    const app = `
        <header>
            <h1>Graphql</h1>
            <button class="logout">Logout</button>
        </header>
        <div class="Error"></div>
        <div class="profile">
        <div class="BasicInfos">
        <p><span>${Userdata.user[0].login}</span></p><span class="diveder"></span>
        <p><span>${Userdata.user[0].firstName} ${Userdata.user[0].lastName}</span></p><span class="diveder"></span>
        <p><span>${Userdata.user[0].campus}</span></p>
        </div>
        <div class="container">
            <div class="LastProjectDone">
                <h2>My Highest skills :</h2><br>
                    ${data.TopSkills}
            </div>
            <div class="CircleGraph">
                <h2>Audit Transactions :</h2>
                ${DrawCircleGraph(Userdata.user[0])}
            </div>
            <div class="ExtraInfos">
                <p>Total XP : <span>${(data.XpAmount/1000).toFixed()}kB</span></p>
                <p>The Last Validate Project : <span>${data.Top_project_XP_name}</span></p>
            </div>
        </div>
        <div class="GraphsContainer">
            <div class="RectGraph">
                <h2>Top 5 Xp Transactions :</h2>
                ${DrawRectGraph(data.TopXpProject)}
            </div>
            
        </div>
    </div>
    `
    
    const HomeDoc = document.createRange().createContextualFragment(app)
    LogoutFunctionality(HomeDoc.querySelector('.logout'))
    HoverFunctionality(HomeDoc.querySelectorAll('.rect'))
    return HomeDoc
}

function LogoutFunctionality(logout_butt) {
    logout_butt.addEventListener('click', () => {
        localStorage.removeItem('token')
        document.body.innerHTML = ''
        document.body.append(LogingView())
    })
}

function HoverFunctionality(Rects) {
    let ProjectName = ''
    Rects.forEach(Rect => {
        Rect.addEventListener('mouseover', (e) => {
            
            const Id = e.target.getAttribute('data-rect')
            const Xp = parseFloat(e.target.getAttribute('height'))*300
            const Text = document.getElementById(`${Id}`)
            ProjectName = Text.textContent
            Text.textContent = `Project Xp : ${FormatFixer(Xp)}`            
        })
        Rect.addEventListener('mouseout', (e) => {
            const Id = e.target.getAttribute('data-rect');
            const Text = document.getElementById(Id);
            Text.textContent = ProjectName
        });
    });
}