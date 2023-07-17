// The box:
var box = document.getElementById('box');
// the code in the textarea:
var code = document.getElementById('code');
// copyboard:
var copyboard_text = document.getElementById('copyboard');

// function to change the borders:
function changeTopRight () {
    if (document.getElementById("input_tr").value) {
        box.style.borderTopRightRadius = document.getElementById('input_tr').value + "px";
    } else { box.style.borderTopRightRadius = "0" }
    showTheCode()
}
function changeTopLeft () {
    if (document.getElementById("input_tl").value) {
        box.style.borderTopLeftRadius = document.getElementById('input_tl').value + "px";
    } else { box.style.borderTopLeftRadius = "0" }
    showTheCode()
}
function changeBottomRight () {
    if (document.getElementById("input_br").value) {
        box.style.borderBottomRightRadius = document.getElementById('input_br').value + "px";
    } else { box.style.borderBottomRightRadius = "0" }
    showTheCode()
}
function changeBottomLeft () {
    if (document.getElementById("input_bl").value) {
        box.style.borderBottomLeftRadius = document.getElementById('input_bl').value + "px";
    } else { box.style.borderBottomLeftRadius = "0" }
    showTheCode()
}

// generate the code:
function generateCode () {
    var topRight = box.style.borderTopRightRadius;
    var topLeft = box.style.borderTopLeftRadius;
    var bottomRight = box.style.borderBottomRightRadius;
    var bottomLeft = box.style.borderBottomLeftRadius;

    let everybody_together = []

    if (topRight) { everybody_together[0] = "border-top-right-radius: " + topRight + ";" + "\n" }
    if (topLeft) { everybody_together[1] = "border-top-left-radius: " + topLeft + ";" + "\n" }
    if (bottomRight) { everybody_together[2] = "border-bottom-right-radius: " + bottomRight + ";" + "\n" }
    if (bottomLeft) { everybody_together[3] = "border-bottom-left-radius: " + bottomLeft + ";" + "\n" }

    everybody_together = everybody_together.toString()
    everybody_together = everybody_together.replace(",", "")

    copyboard.value = everybody_together

    return everybody_together;
}

// show the code
function showTheCode () {
    code.value = generateCode()
}

// copyboard function:
function copyCode () {
    // select the text field:
    copyboard_text.select();
    copyboard_text.setSelectionRange(0, 99999); // for mobile devices
    // copy the content of input:
    document.execCommand("copy");
    // alert what was copied:
    alert("The code copied was:\n\n" + copyboard_text.value)
}