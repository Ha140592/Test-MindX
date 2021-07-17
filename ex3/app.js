let colors = [
    {hexcode : "#C0C0C0" },
    {hexcode : "#DFFF00" },
    {hexcode : "#FFBF00" },
    {hexcode : "#FF7F50" },
    {hexcode : "#DE3163" },
    {hexcode : "#9FE2BF" },
    {hexcode : "#40E0D0" },
    {hexcode : "#6495ED" },
    {hexcode : "#CCCCFF" },
    {hexcode : "#CD5C5C" },
    {hexcode : "#F08080" },
    {hexcode : "#FA8072" },
    {hexcode : "#E9967A" },
    {hexcode : "#FFA07A" },
]
let pickColorBtn = document.getElementById('pick-color');
let copyColorBtn = document.getElementById('copy-color');
let bodyWeb = document.getElementById('body')
let showColor = document.getElementById('show-color')
pickColorBtn.addEventListener('click', changeBackground)
function changeBackground() {
    let randomColor = Math.floor(Math.random() * colors.length);
    console.log(randomColor);
    showColor.value = colors[randomColor].hexcode;

    bodyWeb.style.backgroundColor = colors[randomColor].hexcode;
}
copyColorBtn.addEventListener('click', copyHexcode)
function copyHexcode() {
   localStorage.setItem('color',`${showColor.value}`);
   alert(`Copy ${showColor.value}`);
}

