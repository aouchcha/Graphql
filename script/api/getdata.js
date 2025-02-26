import { ErrorComp } from "../Components/ErrorCompo.js";

export async function GetUserData(query, Err) {
    const Token = localStorage.getItem('token')
    if (!Token) {
        Err.innerHTML = ErrorComp("Unothorized")
        setTimeout(() => {
            Err.innerHTML = ``
            Err.style.display = "none"
        }, 3000)
        document.body.innerHTML = ''
        return
        
    }
    try {
        const res = await fetch('https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Token}`,
            },
            body: JSON.stringify({
                query: query,
            }),
        })
        if (!res.ok) {
            Err.innerHTML = ErrorComp("Faild to fetch data check your connection")
            setTimeout(() => {
                Err.innerHTML = ``
                Err.style.display = "none"
            }, 3000)
            return
        }

        const json = await res.json();
        // console.log(json.data);
        
        return json.data
        
    } catch (error) {
        alert("oui iuu")
        console.log("error",error);
    }
}