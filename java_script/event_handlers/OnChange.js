// oneChange 
let text=document.getElementById("color_text_content");

function changeBodyColor(){
    let colorInput=document.getElementById("color_input_box").value;
    document.body.style.backgroundColor=colorInput;
    text.textContent=` i love ${colorInput} color`;
}