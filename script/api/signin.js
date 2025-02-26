import { ErrorComp } from "../Components/ErrorCompo.js"



export async function LogIn(username, pass, Err) {
   try {
    const res = await fetch('https://learn.zone01oujda.ma/api/auth/signin', {
        method: "POST",
        headers : {
            Authorization : `Basic ${btoa(`${username}:${pass}`)}`,
        }
    })
    if (!res.ok) {
        Err.innerHTML = ErrorComp("Unothrized")
        Err.style.display = "flex"
        setTimeout(() => {
            Err.innerHTML = ``
            Err.style.display = "none"
        }, 3000)
        return
    }

    const JWT = await res.json()
    return JWT
    
   } catch (error) {
        console.log(error);
   }
}
