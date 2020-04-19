function calculator() {
    selectedOption = document.getElementById('selection').value;
    if (selectedOption==="1") {

        return  alert(document.getElementById('first-number').value - document.getElementById('second-number').value);
    }

    if (selectedOption==="2") {
        return alert(document.getElementById('first-number').value + document.getElementById('second-number').value);
    }

    if (selectedOption==="3") {
        return alert(document.getElementById('first-number').value * document.getElementById('second-number').value);
    }

    if (selectedOption==="4") {
        return alert(document.getElementById('first-number').value / document.getElementById('second-number').value);
    }
}

