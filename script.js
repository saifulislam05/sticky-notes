const NOTES = [];

// Input Area Element
const addBtn = document.getElementById("addBtn");

// Output Area Element
const notesWrapper = document.getElementById("notes_wrapper");
const deleteBtn = document.querySelector(".deleteBtn");


function updateNotesUi() {
    let noteItems = "";
    NOTES.forEach((note, index) => {
        noteItems += `<div id=${index} class="note text-white rounded-xl p-4 relative" style="background-color:${note.bg} ;">
                    <i id=${index}
                            class="deleteBtn absolute right-2 top-2 cursor-pointer text-red-600 fa-solid fa-trash-can"></i>
                    <div id="des" class="description">${note.description}</div>
                </div>`;
    });

    notesWrapper.innerHTML = noteItems;

}
updateNotesUi();
function addNote() {
    let textAreaInput = document.getElementById("text_area_input").value;
    const colorInput = document.getElementById("color_input").value;
    let noteData = {};
    noteData.description = textAreaInput;
    noteData.bg = colorInput;
    NOTES.push(noteData);
    updateNotesUi();

    textAreaInput = "";
}

addBtn.addEventListener("click", addNote);

// Delete note 
function deleteNote(e) {
    if (e.target.classList.contains("deleteBtn")) {
        const index = e.target.id;
        NOTES.splice(index, 1)
        updateNotesUi();
    }

}

notesWrapper.addEventListener("click", deleteNote);