export function renderList(list, container){
    container.textContent = "";

    const fgr = document.createDocumentFragment();

    list.forEach(ele => {
        const btn = document.createElement("button");
        btn.textContent = ele.num;
        btn.dataset.id = ele.num;

        btn.className = "btnNumber";

        ele.status
        ? btn.classList.add("active")
        : btn.classList.remove("active")

        fgr.appendChild(btn)

    });
    container.appendChild(fgr);
};