const NOTES = [
  {
    bg: "#14a44d",
    description:
      "my name is saiful from bijulia thakurbari chakulia uttar dinajpur west bengal",
    time: "09:45:03 AM",
  },
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
              <i id="${index}" class="editBtn fa-regular fa-pen-to-square"></i>
              <i
                id="${index}"
                class="deleteBtn cursor-pointer text-red-600 fa-solid fa-trash-can"
              ></i>
            </div>
            <div id="des" class="description mt-2">${note.description}</div>
            <span id="time" class="time absolute bottom-2 right-2 text-[.6rem]">
              ${note.time}</span
            >
          </div>`;
  });

  notesWrapper.innerHTML = noteItems;
}
updateNotesUi();
function addNote() {
  let textAreaInput = document.getElementById("text_area_input").value;
  const colorInput = document.getElementById("color_input").value;
  const currentTime = new Date();

  // Format the current time
  const formattedTime = currentTime.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  let noteData = {};
  noteData.description = textAreaInput;
  noteData.bg = colorInput;
  noteData.time = formattedTime;

  NOTES.push(noteData);
  updateNotesUi();
  console.log(NOTES);

  textAreaInput = "";
}

addBtn.addEventListener("click", addNote);

// Delete note
function deleteNote(e) {
  if (e.target.classList.contains("deleteBtn")) {
    const index = e.target.id;
    NOTES.splice(index, 1);
    updateNotesUi();
  }
}

notesWrapper.addEventListener("click", deleteNote);
