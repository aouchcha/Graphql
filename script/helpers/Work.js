export function ExtractData(trans, skills) {
    const Arr = Array.from(trans).reverse()
    const Arr2 = Array.from(skills)
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
    let Temp = [];
    for(let i = 0; i < Arr2.length; i++) {
        let found = false;
        for(let j = 0; j < Temp.length; j++) {
            if(Arr2[i].type === Temp[j].type) {
                if(Arr2[i].amount > Temp[j].amount) {
                    Temp[j] = Arr2[i];
                }
                found = true;
                break;
            }
        }
        
        if(!found) {
            Temp.push(Arr2[i]);
        }
    }
    console.log(Temp);
    Temp = Temp.sort((a,b) => b.amount - a.amount).slice(0,5)
    let TopSkills = ``
    for(let i=0; i<Temp.length;i++) {
        TopSkills += `<li>${Temp[i].type} = ${Temp[i].amount}%</li>`
    }
    const initialValue = 0;
    const XpAmount = Arr.reduce((accumulator, currentValue) => accumulator + currentValue.amount, initialValue);
    const TopXpProject = Arr.sort((a,b) => b.amount - a.amount)
    return {Top_project_XP, Top_project_XP_name, TopSkills, XpAmount, TopXpProject}
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