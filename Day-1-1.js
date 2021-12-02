let currentH, count = 0;

document.querySelector("body > pre").innerText.split('\n').forEach(x => {
    if (x > currentH) { count += 1; }
    currentH = x;
})

console.log('Count: ', count);