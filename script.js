const NOTES = [
  // {
  //   bg: "#14a44d",
  //   description:
  //     "my name is saiful from bijulia thakurbari chakulia uttar dinajpur west bengal",
  //   time: "09:45:03 AM",
  // },
];

// Input Area Element
const addBtn = document.getElementById("addBtn");

// Output Area Element
const notesWrapper = document.getElementById("notes_wrapper");
const deleteBtn = document.querySelector(".deleteBtn");

function updateNotesUi() {
  let noteItems = "";
  NOTES.forEach((note, index) => {
    noteItems += `<div
            id="${index}"
            class="note text-white rounded-xl p-4 relative"
            style="background-color: ${note.bg}"
          >
            <div class="actionBtns w-full flex justify-end gap-3">
              <i  class="sendToEditBtn fa-regular fa-pen-to-square"></i>
              <i  class="deleteBtn cursor-pointer text-red-600 fa-solid fa-trash-can"
              ></i>
            </div>
            <div id="des" class="description mt-2">${note.description}</div>
            <span id="time" class="time absolute bottom-1.5 right-2 text-[.6rem] tracking-wider">${note.time}</span>
          </div>`;
  });

  notesWrapper.innerHTML = noteItems;
}
updateNotesUi();
function addNote() {
  let textAreaInput = document.getElementById("text_area_input");
  const colorInput = document.getElementById("color_input");
  const currentTime = new Date();

  // Format the current time
  const formattedTime = currentTime.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  let noteData = {};
  noteData.description = textAreaInput.value;
  noteData.bg = colorInput.value;
  noteData.time = formattedTime;

  NOTES.push(noteData);
  updateNotesUi();
  textAreaInput.value = "";
}

addBtn.addEventListener("click", addNote);

// Delete note
notesWrapper.addEventListener("click", noteActions);

function noteActions(e) {
  const index = e.target.parentElement.parentElement.id;
  if (e.target.classList.contains("sendToEditBtn")) {
    sendToEditBtnfn(index);
  } else if (e.target.classList.contains("deleteBtn")) {
    deleteNote(index)
  }
}
function deleteNote(index) {
    NOTES.splice(index, 1);
    updateNotesUi();
}


function sendToEditBtnfn(index) {
  let textAreaInput = document.getElementById("text_area_input");
  let colorInput = document.getElementById("color_input");

  textAreaInput.value = NOTES[index].description;
  colorInput.value = NOTES[index].bg;
  textAreaInput.setAttribute("editIndex", index);
  addBtn.style.display = "none";
  editBtn.style.display = "block";

}

const editBtn = document.getElementById("editBtn");

editBtn.addEventListener("click", editNote);

function editNote() {
  let textAreaInput = document.getElementById("text_area_input");
  let colorInput = document.getElementById("color_input");

  const index = textAreaInput.getAttribute("editindex");

  NOTES[index].description = textAreaInput.value;
  NOTES[index].bg = colorInput.value;
  NOTES[index].time = "Edited " + NOTES[index].time;
  updateNotesUi();

  textAreaInput.value = "";
  colorInput.value = "";

    addBtn.style.display="block";
    editBtn.style.display="none";
}

