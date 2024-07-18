window.onload = function () {
    let output = document.getElementById('output');
    let input = document.getElementById('inputText');
    var mas = [];

    function random(min, max) { //рандом
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    input.addEventListener('keydown', function (event) { //ввод-вывод массива
        if (event.keyCode == 13) {
            let t = input.value * 1;
            if (!isNaN(t) && (t <= 1000) && (t >= -1000)) {
                mas[mas.length] = t;
            }
            input.value = '';
            output.innerHTML = `${mas}`;
        }
    });

    document.getElementById('random').addEventListener('click', function () { //вывод случайных элементов массива
        for (let i = 0; i < 10; i++) {
            mas[i] = random(-1000, 1000);
        }
        output.innerHTML = `${mas}`;
    });

    document.getElementById('delMas').addEventListener('click', function () { //удалить массив
        mas = [];
        output.innerHTML = `${mas}`;
    });

    document.getElementById('delLast').addEventListener('click', function () { //удалить последний элемент
        mas.length = mas.length - 1;
        output.innerHTML = `${mas}`;
    });

    function longestSequence(mas) { //нахождение одинаковых элементов в цепочке + нахождение самой длинной из цепочек
        var count = 0;
        var per = -1;
        var maxCount = 1;
        var maxPer = mas[0];
        output.innerHTML = '';
        for (let i = 0; i < mas.length; i++) {
            if (mas[i] == maxPer) {
                count++;
            }
            if (count > maxCount) {
                maxCount = count;
                per = maxPer;
            }
            if (mas[i] != maxPer) {
                count = 1;
                maxPer = mas[i];
            }
        }
        return per;
    }

    document.getElementById('start').addEventListener('click', function () {
        output.innerHTML = '';
        let elem = longestSequence(mas);
        console.log(elem);
        if (elem != -1) { //проверка есть ли цепочка длиной больше 1
            for (let i = 0; i < mas.length; i++) {
                if (elem == mas[i]) {
                    output.innerHTML += "<i style = 'background-color: yellow;'>" + mas[i] + "</i>" + ",";
                } else {
                    output.innerHTML += mas[i] + ",";
                }
            }
        } else {
            output.innerHTML = "<i style = 'background-color: yellow;'>" + mas[0] + "</i>" + ",";
            for (let j = 1; j < mas.length; j++) {
                output.innerHTML += mas[j] + ",";
            }
        }
    });

}