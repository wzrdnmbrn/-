function xt (t, M){ //M*f(t/M)
    return M*5*Math.sin(t/M) + Math.cos(5*t/M);
}
function yt(t, M){ //M*sqrt(g(t/M))
    return M*Math.sqrt(9 + Math.sin(t/M)/Math.cos(t/M));
}

window.onload = function () {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
	//координаты
    function xc(x){ 
        return (x + canvas.width/2);
    }
    function yc(y){ 
        return (-y + canvas.height/2);
    }
	//очистка
    function clear(){ 
        ctx.fillStyle = "#b1d2f1"
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
	
	function OXY(){
        ctx.beginPath();
        ctx.strokeStyle = 'black'; 
        ctx.moveTo(0, canvas.height/2);
        ctx.lineTo(canvas.width, canvas.height/2);
        ctx.moveTo(canvas.width/2, 0);
        ctx.lineTo(canvas.width/2, canvas.height);
        ctx.stroke();
    }
	OXY();

    function printGraph(Fx, Fy, M){ 
        var dt = canvas.width/100000; 
        ctx.beginPath();
        for (let t = -100; t < 100; t = t + dt){
			if (!isNaN(Fx(t,M)) && !isNaN(Fy(t,M)) && !isNaN(Fx(t+dt,M)) && !isNaN(Fy(t+dt,M))) { 
				ctx.moveTo(xc(Fx(t,M)),yc(Fy(t,M)));
				ctx.lineTo(xc(Fx(t+dt,M)),yc(Fy(t+dt,M)));
			}
        }
        ctx.stroke();
    }

    document.getElementById('button').addEventListener('click',function(){
        var M = document.getElementById('inputM').value;
        if (!isNaN(M) && M > 0){
            clear();
            OXY();
            printGraph(xt,yt,M);
			document.getElementById('inputM').value = "";
        }
    });
}