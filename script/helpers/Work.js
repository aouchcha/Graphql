export function ExtractData(Data) {
    const Arr = Array.from(Data).reverse()
    let Top_project_XP = Arr[0].amount
    let Top_project_XP_name = ''
    let LastFiveProjectValidate = ``
    for (let i=0; i<Arr.length; i++) {
        if (Arr[i].amount > Top_project_XP) {
            Top_project_XP = Arr[i].amount
            Top_project_XP_name =  Arr[i].path.split("/")[3].replaceAll("-", " ")
        }
        
        const name = Arr[i].path.split("/")[3].replaceAll("-", " ")
        if (i<5) {
            LastFiveProjectValidate += `
                <li>${name}</li>
            `
        }
    }
    const initialValue = 0;
    const XpAmount = Arr.reduce((accumulator, currentValue) => accumulator + currentValue.amount, initialValue);
    const TopXpProject = Arr.sort((a,b) => b.amount - a.amount)
    return {Top_project_XP, Top_project_XP_name, LastFiveProjectValidate, XpAmount, TopXpProject}
}

export function FormatFixer(amount) {
    if (amount >= 1000000) {
        return `${(amount/1000000).toFixed()}Mb`
    }else if (amount >= 1000) {
        return `${(amount/1000).toFixed()}kb`
    }else {
        return `${(amount/100).toFixed()}B`
    }
}