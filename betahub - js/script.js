// script.js
document.getElementById("addButton").addEventListener("click", function() {
    const itemInput = document.getElementById("itemInput");
    const itemText = itemInput.value.trim();

    if (itemText !== "") {
        addItemToList(itemText);
        itemInput.value = ""; // Limpar o campo de input
        itemInput.focus(); // Focar no campo de input
    } else {
        alert("Por favor, insira um item válido.");
    }
});

function addItemToList(text) {
    const ul = document.getElementById("itemList");
    const li = document.createElement("li");

    // Criar o conteúdo do item
    li.innerHTML = `
        ${text} 
        <button onclick="removeItem(this)">X</button>
    `;

    // Adicionar o item à lista
    ul.appendChild(li);
}

function removeItem(button) {
    const li = button.parentElement;
    li.remove(); // Remover o item da lista
}
