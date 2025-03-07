export function DrawCircleGraph(userdata) {
    const circle = `
        <svg width="400" height="300">
            ${Circle(userdata)}
        </svg>
    `
    return circle
}

function Circle(userdata) {
    const auditRatio = userdata.auditRatio;
    const Up = userdata.totalUp
    const Down = userdata.totalDown
    const Total = Up + Down
    const Radius = 100
    const Air = 2 * Math.PI * Radius
    const TUp = (((Up*100)/Total) * Air) / 100
   
    return`
            <text x="35%", y="40" fill="white"> Audit Ratio = ${(auditRatio).toFixed(1)}</text>
            <circle cx="200" cy="180" r="${Radius}" stroke-width="10" stroke="blueviolet" fill="none"/>
            <circle cx="200" cy="180" r="${Radius}" stroke-width="10" stroke="blue" fill="none" stroke-dasharray="${TUp} ${Air}" transform="rotate(-90 200 180)"/>
            <text x="40%" y="60%" fill="blue">Up : ${(Up/1000000).toFixed(2)}</text>
            <text x="40%" y="65%" fill="blueviolet">Down : ${(Down/1000000).toFixed(2)}</text>
    `;
}