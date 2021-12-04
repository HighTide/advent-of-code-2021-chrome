let data = document.querySelector("body > pre").innerText;

let drawNumbers = data.split('\n')[0].split(',').map(x => Number(x));
let bingoCards = data.split('\n').slice(2).join('\n').split('\n\n').map(x => x.split('\n').map(y => Array.from(y.matchAll(/[0-9]{1,2}/gm)).map(z => Number(z))));

function checkBingo(drawn, bingoCard, index) {
    let bingo = false;
    for (let i = 0; i < bingoCard.length; i++) {
        let row = bingoCard[i];
        if (row.length > 1) {
            if (row.every(x => drawn.includes(x))) {
                bingo = true;
                console.log("BINGO ON ROW", row)
                BINGO(bingoCard, index);
                break;
            }
        }

        let col = bingoCard.map(x => x[i]);
        if (col.length > 1) {
            if (col.every(x => drawn.includes(x))) {
                bingo = true;
                console.log("BINGO ON COL", col)
                BINGO(bingoCard, index);
                break;
            }
        }
    }

    return bingo;
}

function BINGO(card, index) {
    // Ignore this card for the rest of the calucations
    ignore.push(index);

    // For the flag we need to get all the numbers not part of the drawn
    let sum = 0;
    card.forEach(row => {
        row.forEach(x => {
            if (!drawn.includes(x)) {
                sum += x;
            }
        });
    });
    console.log("Board Sum: ", sum, "Last number Drawn: ", drawn[drawn.length - 1], "Awnser: ", sum * drawn[drawn.length - 1]);
    //console.log("Ignore: ", ignore);
}

let drawn = [];
let ignore = [];
drawNumbers.forEach(draw => {
    drawn.push(draw);

    // Check the cards for bingo
    bingoCards.forEach((card, index) => {
        if (!ignore.includes(index)) {
            checkBingo(drawn, card, index);
        }
    });
});