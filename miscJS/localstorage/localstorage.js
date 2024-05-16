var textarea;
var text; const textKey = "text";

function main()
{
    textarea = document.querySelector("textarea");
    loadTextarea();
}
function saveTextarea()
{
    text = textarea.value;
    localStorage.setItem(textKey, text);
}
function loadTextarea()
{
    let readText = localStorage.getItem(textKey);
    textarea.value = readText;
    console.log(readText);
}