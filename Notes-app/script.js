const bgColors = ['#82E8D5', '#A5E882', '#E8DF3A', '#8C82E8', '#FF6BDF'];
let noteIndex = 0;


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
        <i class="fa-solid fa-trash"></i>
        </button>
      <p>${inputValue}</p>
    `;
    newNote.style.backgroundColor = bgColors[noteIndex % bgColors.length];
    noteIndex++;
    notesContainer.prepend(newNote);
    userInput.value = '';

    let closeBtn = newNote.querySelector('.close-btn');
    closeBtn.addEventListener('click', e => {
    e.target.parentElement.parentElement.style.display = 'none';
    })
  }
}

addNoteBtn.addEventListener("click", addNotes);
