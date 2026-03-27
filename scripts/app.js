import { createNumbers } from "./createNumbers.js";
import { sortNumber } from "./sortNumbers.js";
import { renderList } from "./renderList.js";
import { addNumberChosen } from "./addNumberChosen.js";
import { renderResult } from "./renderResult.js";

// ======================
// ELEMENTOS DO DOM
// ======================
const containerNumber = document.querySelector(".listNumber");
const btnStart = document.querySelector(".btnStart");
const btnReset = document.querySelector(".btnReset");
const feedBackNumber = document.querySelector(".feedBack p");

// ======================
// ESTADO
// ======================
let list = createNumbers();
let listChosen = [];
let listSort = [];

// ======================
// FUNÇÕES
// ======================
function feedBack(){
    return `${listChosen.length} de 50.`;
}

// ======================
// EVENTOS
// ======================

// DOM carregado
window.addEventListener("DOMContentLoaded", () => {
    renderList(list, containerNumber);
});

// clique na lista
containerNumber.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if(!btn) return;

    const id = Number(btn.dataset.id); 

    // 🔥 validação ANTES de adicionar
    const alreadyExists = listChosen.some(el => Number(el.num) === id);

    if(listChosen.length === 50 && !alreadyExists){
        alert("Você já escolheu todos os números...");
        return;
    }

    // adiciona/remove
    listChosen = addNumberChosen(listChosen, id);

    const index = list.findIndex(el => el.num === id);
    if(index !== -1){
        list[index].status = !list[index].status;
    }

    renderList(list, containerNumber);

    feedBackNumber.textContent = feedBack();
});

// botão de jogar
btnStart.addEventListener("click", () => {

    if(listChosen.length < 50){
        alert("Escolha os 50 números.");
        return
    }

    listSort = sortNumber();

    const result = listChosen.map(element => {
        
        const acertou = listSort.some(el => el.num === Number(element.num));

        if(acertou){
            return {
                ...element,
                status: true
            };
        }

        return element;
    });

    const numHits = result.filter(el => el.status === true);

    btnStart.disabled = true

    renderResult(result, containerNumber);

    feedBackNumber.textContent = `Acertos ${numHits.length} números.`;
});

// resetar jogo
btnReset.addEventListener("click", () => {
    btnStart.disabled = false
    listChosen = [];
    listSort = [];
    list = createNumbers();

    renderList(list, containerNumber);

    feedBackNumber.textContent = feedBack();
});