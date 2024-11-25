function sumAll() {
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += argments[i];
        return sum;
    }
    document.getElementById("demo").innerHTML = sumAll(1, 123, 500, 115, 44, 88);
    var value = Math.sin(45);
    document.write("Sin is :" + value + "<br>");
    var value1 = Math.cos(45);
    document.write("Cos is :" + value1 + "<br>");
    var value2 = Math.tan(45);
    document.write("Tan is :" + value2 + "<br>");
}
