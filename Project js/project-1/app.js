let addBtn = document.querySelector(".addBtn");
let main = document.querySelector(".main") 


const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    localStorage.setItem("notes", JSON.stringify(data));
}

addBtn.addEventListener("click", function () {
    addNote()   
});

const addNote = () => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
<div class="tool">
    <i class="remove fa-solid fa-trash"></i>
    <i class="save fa-solid fa-floppy-disk"></i>
</div>
<textarea name="" id="" ></textarea>`;

note.querySelector(".remove").addEventListener(
    "click", function(){
        note.remove()
    }
)

note.querySelector(".save ").addEventListener(
    "click", function(){
        saveNotes()
    }
)


main.appendChild(note);
}