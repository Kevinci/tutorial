const app = document.getElementById('demo');

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function check() {
    if (result) {
        return result
    }

}
// TODO: write better code
// BUG: test
// ? test
// ! hello
for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] !== 2) {
        app.innerHTML += `<li>${numbers[i]}</li>`;
    }
}

function nummi(num) {
    return num;
}

const result = nummi(numbers[10 - 1]);
console.log(result);

app.innerHTML += result
