const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    if (weight === "" || isNaN(weight)) {
        return result.innerHTML="Please enter your weight."
    } else if (height === "" || isNaN(height)) {
        return result.innerHTML="Please enter your height."
    } else {
        height = height/100
        let bmi = (weight/Math.pow(height,2)).toFixed(2)

        if (bmi<18.5) {
            showResult(bmi, "Too Skinny", "yellow")
        } else if (bmi>=18.5 && bmi<=24.9) {
            showResult(bmi, "Nomal", "green")
        } else if (bmi>=25 && bmi<=29.9) {
            showResult(bmi, "Fat", "orange")
        } else {
            showResult(bmi, "Very Fat", "red")
        }
    }
})

function showResult(bmi, message, color) {
    result.style.backgroundColor = color
    return result.innerHTML=`Result : ${bmi} (${message})`
}