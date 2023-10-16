function add() {
    var num1, num2, val;
    num1 = parseInt(document.getElementById("id1").value);
    num2 = parseInt(document.getElementById("id2").value);
    val=num1+num2;
    document.getElementById('ans').value = val;
}
function sub() {
    var num1, num2, val;
    num1 = parseInt(document.getElementById("id1").value);
    num2 = parseInt(document.getElementById("id2").value);
    val=num1-num2;
    document.getElementById('ans').value = val;
}
function multi() {
    var num1, num2, val;
    num1 = parseInt(document.getElementById("id1").value);
    num2 = parseInt(document.getElementById("id2").value);
    val=num1*num2;
    document.getElementById('ans').value = val;
}
function divide() {
    var num1, num2, val;
    num1 = parseInt(document.getElementById("id1").value);
    num2 = parseInt(document.getElementById("id2").value);
    val=num1/num2;
    document.getElementById('ans').value = val;
}

function load(){
    document.location.reload()
}