// // console.log('aske amar mon valo nei');
// document.getElementById('text-bold').addEventListener('click', function(){
//     const inputText = document.getElementById('input-text');
//     inputText.style.fontWeight = 'bold';
//     const inputTextIs = inputText.value;
//     // inputTextIs.style.fontStyle = 'italic';
//     inputText.value = '';
// })

// function changeFontStyle() {
//     var textarea = document.getElementById("input-text");
//     // textarea.style.fontFamily = "Times New Roman, serif";
//     textarea.style.fontWeight = 'bold';
//     // textarea.style.position = 'relative';
//     // textarea.style.overflow = 'hidden';
//     // textarea.style.resize = 'none';
// }


const textarea = document.getElementById("input-text");
const button = document.getElementById("text-bold");

  button.addEventListener("click", function() {
  if (textarea.style.fontWeight === "bold") {
    textarea.style.fontWeight = "normal";
  } else {
    textarea.style.fontWeight = "bold";
  }
  });


// onclick="changeFontStyle()"

document.getElementById('text-italic').addEventListener('click', function(){
  const textarea = document.getElementById('input-text');
  if(textarea.style.fontStyle === "italic"){
    textarea.style.fontStyle = "normal";
  }
  else{
    textarea.style.fontStyle = "italic";
  }
})

document.getElementById('text-underline').addEventListener('click', function(){
  const textarea = document.getElementById('input-text');
  if(textarea.style.textDecoration === 'underline'){
    textarea.style.textDecoration = 'none';
  }
  else{
    textarea.style.textDecoration = 'underline';
  }
})