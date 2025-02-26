export function DrawRectGraph(Arr) {
    const RectHeight = 75
    const RectGraph = `
        <svg width="500" height="500">
            ${Rect(Arr.slice(0,5), RectHeight,Arr.slice(0,5))}
        </svg>
    `
    return RectGraph
}

function Rect(Arr, height) {
    let names = []
    for (let i=0; i<Arr.length; i++) {
        const name = Arr[i].path.split("/")[3]
        names.push(name)
    }
    console.log({names, Arr});
    
    let Rect = ``
    let i = 0
    let x = 0
    for (let ele of Arr) {
        const onerect = `
            <rect class="rect" data-rect="${i}" class="rect" x="${x}" y="0" width="${height}" height="${ele.amount/300}" fill="blueviolet"></rect>
            <text id="${i}" class="text" x="${x+35}" y="30" text-anchor="middle" fill="white" font-size="9">${names[i]}</text>
        `
        Rect += onerect
        i++
        x = ((height*i) + (i*30))
    }
    return Rect
} 