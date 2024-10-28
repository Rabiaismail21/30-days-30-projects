let addNoteBtn = document.querySelector(".add-note-btn");
let notesContainer = document.querySelector(".notes-container");

function addNotes() {
  let userInput = document.querySelector(".input-notes");
  let inputValue = userInput.value;

  if (inputValue === "") {
    alert("Enter your notes");
  } else {
    let newNote = document.createElement("div");
    newNote.className = "notes";
    newNote.innerHTML = `
        <button class="close-btn">
            x
        </button>
      <p>${inputValue}</p>
    `;
    notesContainer.prepend(newNote);
    userInput.value = '';

    let closeBtn = newNote.querySelector('.close-btn');
    closeBtn.addEventListener('click', e => {
    e.target.parentElement.style.display = 'none';
    })
  }
}

addNoteBtn.addEventListener("click", addNotes);
