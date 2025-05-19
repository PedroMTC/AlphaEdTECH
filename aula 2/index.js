const btnNumber = document.getElementById("btnNumber");
const btnText = document.getElementById("btnText");

let answerNumber = document.getElementById("answerNumber");
let answerText = document.getElementById("answerText");

btnNumber.addEventListener("click", () => {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    if (n1 > n2) {
        console.log("primeiro valor maior que o segundo");
        answerNumber.textContent = "primeiro valor maior que o segundo";
    } else if (n2 > n1) {
        console.log("segundo valor maior que o primeiro");
        answerNumber.textContent = "segundo valor maior que o primeiro";
    } else {
        console.log("valores iguais");
        answerNumber.textContent = "valores iguais";
    }
});


btnText.addEventListener("click", () => {
    let t1 = String(document.getElementById("t1").value);
    let t2 = String(document.getElementById("t2").value);

    if (t1.length > t2.length) {
        console.log("primeira String maior que a segunda");
        answerText.textContent = "primeira String maior que a segunda";
    } else if (t2.length > t1.length) {
        console.log("segunda String maior que a primeira");
        answerText.textContent = "segunda String maior que a primeira";
    } else {
        console.log("valores iguais");
        answerText.textContent = "valores iguais";
    }
});