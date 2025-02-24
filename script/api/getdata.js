import { ErrorComp } from "../Components/ErrorCompo.js";
import { FirstTokenValue } from "../views/loginView.js";

export async function GetUserData(query, Err) {
    const Token = localStorage.getItem('token')
    if (!Token || (Token !== FirstTokenValue && FirstTokenValue !== undefined)) {
        Err.innerHTML = ErrorComp()
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

        const json = await res.json();
        console.log(json.data);
        
        return json.data
        
    } catch (error) {
        console.log("error",error);
    }
}