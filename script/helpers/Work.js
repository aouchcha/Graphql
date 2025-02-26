export function ExtractData(trans, skills, projects) {
    const Arr = Array.from(trans).reverse()
    const Arr2 = Array.from(skills)
    const Names = Array.from(projects).reverse()

    if (Arr.length == 0 && Arr2.length == 0 && Names.length == 0) {
        document.body.innerHTML = ''
        document.body.innerHTML = '<h1>There is no data to see</h1>'
        setTimeout(() => {
            localStorage.removeItem('token')
            document.body.innerHTML = ''
            location.href = "/"
        }, 2000)
        // document.body.append(LogingView())
        return
        
    }
    console.log({Names});
    
    const Top_project_XP_name =  Names[0].object.name
    //Store Unique Skills with ignoring duplicate
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
    
    Temp = Temp.sort((a,b) => b.amount - a.amount).slice(0,5)
    let TopSkills = ``
    for(let i=0; i<Temp.length;i++) {
        TopSkills += `<li>${Temp[i].type} = ${Temp[i].amount}%</li>`
    }
    const initialValue = 0;
    const XpAmount = Arr.reduce((accumulator, currentValue) => accumulator + currentValue.amount, initialValue);
    const TopXpProject = Arr.sort((a,b) => b.amount - a.amount)
    return {Top_project_XP_name, TopSkills, XpAmount, TopXpProject}
}

export function FormatFixer(amount) {
    if (amount >= 1000000) {
        return `${(amount/1000000).toFixed()}Mb`
    }else if (amount >= 1000) {
        return `${(amount/1000).toFixed()}kb`
    }else {
        return `${(amount).toFixed()}B`
    }
}