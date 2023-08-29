function calculate_SGPA() {
    var credit1 = parseFloat(document.getElementById("credit1").value);
    var mark1 = parseFloat(document.getElementById("marks1").value);
    var point1 = getPointFromMark(mark1); // Get points based on the marks
    console.log(point1);

    var credit2 = parseFloat(document.getElementById("credit2").value);
    var mark2 = parseFloat(document.getElementById("marks2").value);
    var point2 = getPointFromMark(mark2);
    console.log(point2);


    var credit3 = parseFloat(document.getElementById("credit3").value);
    var mark3 = parseFloat(document.getElementById("marks3").value);
    var point3 = getPointFromMark(mark3);
    console.log(point3);


    var credit4 = parseFloat(document.getElementById("credit4").value);
    var mark4 = parseFloat(document.getElementById("marks4").value);
    var point4 = getPointFromMark(mark4);
    console.log(point4);


    var credit5 = parseFloat(document.getElementById("credit5").value);
    var mark5 = parseFloat(document.getElementById("marks5").value);
    var point5 = getPointFromMark(mark5);
    console.log(point5);


    var credit6 = parseFloat(document.getElementById("credit6").value);
    var mark6 = parseFloat(document.getElementById("marks6").value);
    var point6 = getPointFromMark(mark6);
    console.log(point6);

    var credit7 = parseFloat(document.getElementById("credit7").value);
    var mark7 = parseFloat(document.getElementById("marks7").value);
    var point7 = getPointFromMark(mark7);
    console.log(point7);

    var credit8 = parseFloat(document.getElementById("credit8").value);
    var mark8 = parseFloat(document.getElementById("marks8").value);
    var point8 = getPointFromMark(mark8);
    console.log(point8);
    



    var total_credit = credit1 + credit2 + credit3 + credit4 + credit5 + credit6 + credit7 + credit8;
    var total_points = (credit1 * point1) + (credit2 * point2) + (credit3 * point3) + (credit4 * point4) + (credit5 * point5) + (credit6 * point6) + (credit7 * point7) + (credit8 * point8);

    // total_credit = total_credit.toFixed(4);
    // total_points = total_points.toFixed(4);

    var SGPA = (total_points / total_credit).toFixed(2);

    document.getElementById("result").innerText = `Your SGPA is: ${SGPA}`;
    var percentage = ((SGPA *10)-SGPA);

    document.getElementById("percentage").innerText = `Your Percentage is: ${percentage}`;

    // Clear the input fields without affecting the result paragraph
    // const form = document.getElementById("sgpaForm");
    // form.reset();

    // const reset1 = document.getElementById("reset");
    // reset1.reset();
}

function getPointFromMark(mark) {
    if (mark >= 90) {
        return 10;
    } else if (mark >= 80) {
        return 9;
    } else if (mark >= 70) {
        return 8;
    } else if (mark >= 60) {
        return 7;
    } else if (mark >= 50) {
        return 6;
    } else if (mark >= 40) {
        return 5;
    } else {
        return 0;
    }
}
