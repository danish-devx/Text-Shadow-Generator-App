let text = document.getElementById("text");

let xRange = document.getElementById("xRange");
let yRange = document.getElementById("yRange");
let blurRange = document.getElementById("blurRange");
let colorPicker = document.getElementById("colorPicker");

let cssCode = document.getElementById("cssCode");
let copyBtn = document.getElementById("copyBtn");

function textShadow() {

    let x = xRange.value;
    let y = yRange.value;
    let blur = blurRange.value;
    let color = colorPicker.value;

    let shadow = `${x}px ${y}px ${blur}px ${color}`;

    text.style.textShadow = shadow;

    cssCode.innerText = `text-shadow: ${shadow};`;
}

xRange.addEventListener("input", textShadow);
yRange.addEventListener("input", textShadow);
blurRange.addEventListener("input", textShadow);
colorPicker.addEventListener("input", textShadow);

textShadow();

copyBtn.addEventListener("click", function(){

    navigator.clipboard.writeText(cssCode.innerText);

    Swal.fire({
        title: "Copied!",
        text: "CSS Code successfully copied to clipboard",
        icon: "success",
        confirmButtonText: "OK"
    });

});
