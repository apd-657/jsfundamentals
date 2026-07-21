// Program 1
const subjects = ["Tamil", "English", "Maths"];

function printSubject(subject) {
    console.log(`Studying: ${subject}!`);
}

for (const subject of subjects) {
    printSubject(subject);
}

// Program 2
const numbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray(numbers));

// Program 3
function averageArray(arr) {
    if (arr.length === 0) return 0;

    return sumArray(arr) / arr.length;
}

console.log(averageArray(numbers));
