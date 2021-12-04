let length = 0;
let trackers = [];
document.querySelector("body > pre").innerText.split('\n').forEach(x => {
    x.split('').forEach((y, index) => {
        trackers[index] = trackers[index] ? trackers[index] + Number(y) : 0 + Number(y)
    });
    
    length += 1;
})

trackers.forEach((x, index) => {
    trackers[index] = (x / length) > 0.5 ? 1 : 0;
})

let epsilon = parseInt(trackers.toString().replaceAll(',', ''), 2);
let gamma = parseInt(trackers.toString().replaceAll(',', '').replaceAll('0', 'x').replaceAll('1', '0').replaceAll('x', '1'), 2);

console.log('Epsilon: ', epsilon, 'Gamma: ', gamma, 'Awnser: ', epsilon * gamma);