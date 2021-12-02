let a, b, c, slide, i = 0;

document.querySelector("body > pre").innerText.split('\n').forEach(x => {
    a = b;
    b = c;
    c = Number(x);

    let y;
    
    if (a) {
        y = a + b + c;
        if (y > slide) { i += 1 }
    }

    slide = y;
});

console.log('Count', i);