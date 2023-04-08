let value=0;
function increment_1() {
    value++;
    document.getElementById("count").innerHTML=value;
}

function decrement_1() {
    value--;
    document.getElementById("count").innerHTML=value;
}

function increment_5(){
    value +=5;
    document.getElementById("count").innerHTML=value;
}

function decrement_10(){
    value -=10;
    document.getElementById("count").innerHTML=value;
}

function detect(){
    let num=Number(document.getElementById("enter_number").value);
    document.getElementById("btn-style").innerHTML="Increment " + num +" times";
    document.getElementById("enter_number").innerHTML=num;
    value = num;
    document.getElementById("count").innerHTML=value;
}

function reset(){
    value=0;
    document.getElementById("enter_number").value = 0;
    document.getElementById("count").innerHTML = 0;
    document.getElementById("btn-style").innerText="Increment Input Times";
}