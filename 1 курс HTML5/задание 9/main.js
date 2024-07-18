window.onload = function () {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 600;

    function xc(x) { //перевод x
        return (x + canvas.width / 2);
    }
    function yc(y) { //перевод y
        return (-y + canvas.height / 2);
    }

    const Points = {
        x1: -300, y1: 0,
        x2: -100, y2: 50,
        x3: 0, y3: 100,
        x4: 100, y4: 50,
        x5: 0, y5: 300
    }
    const lines = {
        l1: function (x) { return (x + 300) / 4 }, //p1 -> p2
        l2: function (x) { return (x + 200) / 2 }, //p2 -> p3
        l3: function (x) { return (-x + 200) / 2 }, //p3 -> p4
        l4: function (x) { return -(5 * x - 600) / 2 }, //p4 -> p5
        l5: function (x) { return x + 300 }  //p5 -> p1
    }

    function OXY() {
        ctx.beginPath();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.stroke();
    }


    function Polygon(point) {
        ctx.beginPath();
        ctx.fillStyle = 'lightyellow';
        ctx.moveTo(xc(point.x1), yc(point.y1));
        ctx.lineTo(xc(point.x2), yc(point.y2));
        ctx.lineTo(xc(point.x3), yc(point.y3));
        ctx.lineTo(xc(point.x4), yc(point.y4));
        ctx.lineTo(xc(point.x5), yc(point.y5));
        ctx.lineTo(xc(point.x1), yc(point.y1));
        ctx.fill();
    }
    Polygon(Points);
    OXY();

    function PrintCycle(x, y, r) {
        ctx.beginPath();
        ctx.fillStyle = "lightgreen";
        ctx.arc(xc(x), yc(y), r, 0, Math.PI * 2, true);
        ctx.fill();
    }

    function drawIntersection(x, y, r, point, line) {
        let count = 0;
        let dt = 0.5;
        for (let i = point.x1; i <= point.x4; i++) {
            for (let j = point.y1; j <= point.y5; j++) {
                if ((((j >= line.l1(i)) && (j >= line.l2(i))) || (j >= line.l3(i))) && (j <= line.l4(i)) && (j <= line.l5(i)) && ((Math.pow((x - i), 2) + Math.pow((y - j), 2) <= r * r))) {
                    count++;
                    ctx.beginPath();
                    ctx.strokeStyle = "red";
                    ctx.moveTo(xc(i), yc(j));
                    ctx.lineTo(xc(i + dt), yc(j + dt));
                    ctx.stroke();
                }
            }
        }
        return count;
    }

    function clear() {
        ctx.fillStyle = "lightgray"
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        Polygon(Points);
    }

    document.getElementById('button').addEventListener('click', function () { //Нажатие на кнопку
        let x = document.getElementById('x').value * 1 || 0;
        let y = document.getElementById('y').value * 1 || 0;
        let r = document.getElementById('r').value * 1 || 10;
        clear();
        PrintCycle(x, y, r);
        let result = drawIntersection(x, y, r, Points, lines);
        OXY();
        document.getElementById('result').value = result;
    });
}