function calculate_SGPA() {
    var credit1 = parseFloat(document.getElementById("credit1").value);
    var mark1 = parseFloat(document.getElementById("marks1").value);

    var credit2 = parseFloat(document.getElementById("credit2").value);
    var mark2 = parseFloat(document.getElementById("marks2").value);

    var credit3 = parseFloat(document.getElementById("credit3").value);
    var mark3 = parseFloat(document.getElementById("marks3").value);

    var credit4 = parseFloat(document.getElementById("credit4").value);
    var mark4 = parseFloat(document.getElementById("marks4").value);

    var credit5 = parseFloat(document.getElementById("credit5").value);
    var mark5 = parseFloat(document.getElementById("marks5").value);

    var credit6 = parseFloat(document.getElementById("credit6").value);
    var mark6 = parseFloat(document.getElementById("marks6").value);

    var credit7 = parseFloat(document.getElementById("credit7").value);
    var mark7 = parseFloat(document.getElementById("marks7").value);

    var credit8 = parseFloat(document.getElementById("credit8").value);
    var mark8 = parseFloat(document.getElementById("marks8").value);

    var total_credit = credit1 + credit2 + credit3 + credit4 + credit5 + credit6 +credit7 + credit8;
    var total_marks = (credit1 * mark1) + (credit2 * mark2) + (credit3 * mark3) + (credit4 * mark4) + (credit5 * mark5) + (credit6 * mark6) + (credit7 * mark7) + (credit8 * mark8);

    var SGPA = (total_marks / total_credit).toFixed(2);

    document.getElementById("result").innerText = `Your SGPA is: ${SGPA}`;

    // const form=document.getElementById("formdata");
    // form.reset();
}
