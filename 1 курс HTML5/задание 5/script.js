function cos(x,y){
    return y/(Math.cos( Math.pow(y, 10) + Math.pow(10, x)));
}

window.onload = function () {
    document.getElementById("but").addEventListener('click', function(){
        var x = document.getElementById("X");
        var y = document.getElementById("Y");
        document.getElementById('res').innerHTML = cos(x.value - 0, y.value - 0);
		document.getElementById('x1').innerHTML = x.value;
		document.getElementById('y1').innerHTML = y.value;
    });
}