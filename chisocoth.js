function xuly() {
    var h = document.getElementById('so1').value;
    var w = document.getElementById('so2').value;
    var bmi = parseInt(w)/ (parseFloat(h) * parseFloat(h));
    document.getElementById('ketqua').innerHTML = "chỉ số BMI là:" +bmi;

   
    if (bmi < 18){
    document.write("Underweight");
    }else if (bmi < 25.0){
    document.write("Normal");
    }else if (bmi < 30.0){
    document.write("Overweight");
}else{
    document.write("Obese");
}
}