// onFocus onBlur
let searchInputBox=document.getElementById("search_icons");
// event handler
function searchIcons(){
    searchInputBox.style.outline = "2px solid skyblue";
    searchInputBox.style.outlineOffset = "3px";
}
// onBlur event
function removeSearchOutline() {
    searchInputBox.style.outline = "none";
}