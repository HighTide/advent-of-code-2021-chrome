let x = 0, depth = 0;

document.querySelector("body > pre").innerText.split('\n').forEach(y => {
    let instruction = y.split(' ');
    
    switch (instruction[0]) {
        case 'forward':
            x = x + Number(instruction[1]);
            break;
        case 'down':
            depth = depth + Number(instruction[1]);
            break;
        case 'up':
            depth = depth - Number(instruction[1]);
            break;
        default:
            console.log(instruction);
    }
})

console.log('Depth: ', depth, 'X: ', x, 'Awnser: ', depth * x);