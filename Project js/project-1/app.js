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
    // console.log(data); 
    if(data.length === 0){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes", JSON.stringify(data));
    }
   
}

addBtn.addEventListener("click", function () {
    addNote()   
});

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
<div class="tool">
    <i class="remove fa-solid fa-trash"></i>
    <i class="save fa-solid fa-floppy-disk"></i>
</div>
<textarea>${text}</textarea>`;
 
note.querySelector(".remove").addEventListener(
    "click", function(){
        note.remove()
        saveNotes();
    }
)

note.querySelector(".save ").addEventListener(
    "click", function(){
        saveNotes()
    }
)


main.appendChild(note);
}

(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        console.log(lsNotes);
        lsNotes.forEach(
            (lsNotes) => {
                addNote(lsNotes)
            }
        )
        if(lsNotes.length === 0){
            localStorage.removeItem("notes")
        }else{
            addNote();
        }
    }
)()