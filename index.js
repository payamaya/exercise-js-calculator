alert('Make a calculation')

const add = (a, b) => a + b
const substract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

const num1 = parseFloat(prompt('Enter first value'))
const num2 = parseFloat(prompt('Enter second value'))

const userInput = prompt(
  'Choose an option between \n1) Addition\n2) Substration\n3) Multiplication\n4) Division '
)

let result

switch (userInput) {
  case '1':
    result = add(num1, num2)
    alert(result)
    break
  case '2':
    result = substract(num1, num2)
    alert(result)
    break
  case '3':
    result = multiply(num1, num2)
    alert(result)
    break
  case '4':
    result = divide(num1, num2)
    alert(result)

    break
  default:
    alert('Invalid input. Please enter a number between 1 and 5.')
    break
}
if (result !== undefined) {
  console.log(`The result is: ${result}`)
}
document.getElementById('refresh').addEventListener('click', function () {
  location.reload()
})
// document.getElementById('demo').innerHTML = result
