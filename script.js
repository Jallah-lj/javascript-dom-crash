const form = document.getElementById("list-form");
const input = document.querySelector(".list-input");
const list = document.querySelector(".name-list");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const task = input.value.trim();

    if(task === ""){

        alert("Please enter a task.");

        return;

    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>
        <button class="delete-btn">Delete</button>
    `;

    list.appendChild(li);

    input.value = "";

    input.focus();

});

list.addEventListener("click", function(e){

    if(e.target.classList.contains("delete-btn")){

        e.target.parentElement.remove();

    }

});