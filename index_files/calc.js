const sumText = document.getElementById("sum_text");
const comission = document.getElementById("comission");
const rangeValue = document.getElementById("rangeValue");
const getBack = document.getElementById("getBack");
sum.addEventListener("input", function () {
    sumText.innerText = Number(this.value);
    rangeValue.innerText = parseInt(this.value);
    comission.innerText = parseInt(this.value) / 100 * 0.3
    getBack.innerText = Number(rangeValue.innerText) + Number(comission.innerText);
});