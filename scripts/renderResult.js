export function renderResult(result, containerNumber){
    containerNumber.textContent = "";

    const frag = document.createDocumentFragment();

    result.forEach(el => {
        const btn = document.createElement("button");
        btn.textContent = el.num,
        btn.className = "btnNumber";

        console.log(el.status)

        el.status
        ? btn.classList.add("acerto")
        : btn.classList.remove("acerto")
        
       frag.appendChild(btn)
        });

     containerNumber.appendChild(frag)   
}