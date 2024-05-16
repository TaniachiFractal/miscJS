/** The title of a new note */
var titleInput; var title; const titleKey = "title";
/** The contents of a new note */
var textarea; var text; const textKey = "text";
/** <OL> that shows the notes */
var list;
/** Note counter for localstorage */
var notesCount=0; const notesCount_key = "notesCount";

/** Load objects and read data*/
function main()
{
    loadObjects(); updateNotesCount(); readNotes(); 
}
/** Load objects */
function loadObjects()
{
    titleInput = document.querySelector("input");
    textarea = document.querySelector("textarea");
    list = document.querySelector("ol");
}
/** Read input and textarea */
function readInput()
{
    title = titleInput.value;
    text = textarea.value;
}
/** Save a note to the local storage */
function addNote()
{
    readInput();
    if (text != "") {
        incrementNotesCount();
        localStorage.setItem(titleKey + notesCount, title);
        localStorage.setItem(textKey + notesCount, text);
        readNotes();
    }
    else { alert("Нет текста"); }
}
/** Update notes count*/
function updateNotesCount() {
    notesCount = localStorage.getItem(notesCount_key);
}
/** Increment the notes count */
function incrementNotesCount()
{
    notesCount = localStorage.getItem(notesCount_key);
    notesCount++;
    localStorage.setItem(notesCount_key, notesCount);
}
/** Delete all notes and reset counter */
function clearAllNotes()
{
    notesCount = 0;
    localStorage.clear();
    readNotes();
}
/** Read the notes from localstorage */
function  readNotes()
{
    list.innerHTML = ``;
    for (var i = 1; i <= notesCount; i++)
    {
        let newTitle = localStorage.getItem(titleKey + i);
        let newText = localStorage.getItem(textKey + i);

        let newLi = document.createElement('li');
       
        newLi.innerHTML = `
               <h3>${newTitle}</h3>
                <h4> ${newText}</h4>
        `;

        list.appendChild(newLi);
    }
}