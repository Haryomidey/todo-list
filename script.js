
const wrapper = document.querySelector(".wrapper"),
    inputField = document.querySelector(".input-field"),
    addBtn = document.querySelector(".add-btn"),
    ulItem = document.querySelector("ul");


addBtn.addEventListener("click", () => {
    if (inputField.value != "") {
        let liItem = document.createElement("li");
        let button = document.createElement("button");
        let liTextNode = document.createTextNode(inputField.value);

        liItem.appendChild(liTextNode)
        ulItem.appendChild(liItem);
        liItem.appendChild(button);
        button.textContent = "Delete";
        inputField.value = "";
        button.addEventListener("click", () => {
            const liTextNode = button.parentElement;
            liTextNode.remove();

        })
        wrapper.classList.add("wrapper-active");

    }
    else {
        alert("Please Enter Something.");
        return false;
    }
})

