let form = document.getElementById("form");
let result = document.getElementById("result");

// function triangleDeterminator(event) {
//     event.preventDefault();
//     let side1 = parseInt(document.getElementById("side1").value);
//     let side2 = parseInt(document.getElementById("side2").value);
//     let side3 = parseInt(document.getElementById("side3").value);
//     if ((side1 === side2) && (side1 === side3)) {
//         return output("Equilateral Triangle");
//     }
//     else if ((side1 === 0) || (side1 === 0) || (side2 === 0)) {
//         return output("Not a triangle");
//     }
//     else if ((side1 !== side2) && (side1 !== side3)) {
//         return output("Scalene Triangle");
//     }
//     else {
//         return output("Isosceles Triangle");
//     }
// }

function arrayInator(e) {
    e.preventDefault();
    let side1 = parseInt(document.getElementById("side1").value);
    let side2 = parseInt(document.getElementById("side2").value);
    let side3 = parseInt(document.getElementById("side3").value);
    let sideArray = [side1, side2, side3];
    let counter = 0;

    sideArray.forEach((item) => {
        if ((sideArray[0] !== 0) && (sideArray[1] !== 0) && (sideArray[2] !== 0)) {
            if (side1 === item) {
                ++counter;
            }
        }

    });
    
    if (counter === 3) {
        return output("equilateral Triangle");
    }
    else if (counter === 2) {
        return output("isosceles Triangle");
    }
    else if (counter === 1) {
        return output("scalene Triangle");
    }
    else {
        return output("scalene Triangle");
    }
}

function output(data) {
    return result.innerHTML = data;
}

form.addEventListener("submit", arrayInator);
