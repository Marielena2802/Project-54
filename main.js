function Calculate(){
    var length=Number(document.getElementById("TextInput1").value);
    var area=length * length;
    var perimeter= 4 * length;
    document.getElementById("AreaLabel").innerHTML=area;
    document.getElementById("PerimeterLabel").innerHTML=perimeter;
}