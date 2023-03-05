function myFunction() {
    let x = "Açık";
    let y = "btn btn-primary";
    let z = "Cihaz Açık"
    if(document.getElementById("buton").innerHTML != x && document.getElementById("buton").className != y)
    {
    document.getElementById("buton").innerHTML = x;
    document.getElementById("buton").className = y;
    document.getElementById("cihaz").innerHTML = z;
    }
    else
    {
    document.getElementById("buton").innerHTML = "Kapalı";
    document.getElementById("buton").className = "btn btn-dark";
    document.getElementById("cihaz").innerHTML = "Cihaz Kapalı";
    }
    }