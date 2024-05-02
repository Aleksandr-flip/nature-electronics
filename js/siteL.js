document.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key === 'Enter') {
        alertNum();
    }

    else if (e.keyCode === 32) {
        let findElement1 = document.getElementById('inp1');
        findElement1.value = "";
        let findElement2 = document.getElementById('inp2');
        findElement2.value = "";

    }

});

function alertNum() {
    let a = parseFloat(document.getElementById('inp1').value);
    let b = parseFloat(document.getElementById('inp2').value);
    const out = document.querySelector('.calc-screen p');


    function clearAll() {
        out.textContent = '';
    }

    document.querySelector('.reset').onclick = clearAll;

    document.addEventListener('keydown', function (e) {
        console.log(e.key);

        if (e.keyCode === 32) {
            clearAll();
        }
    });

    if (a < 0 || b < 0 || a == 0 || b == 0) {
        let p;
        p = document.getElementById('out');
        out.textContent = 'Во введенных значениях допущены ошибки';
    }

    else if (a > b) {
        let p;
        p = document.getElementById('out');
        out.textContent = 'Эквивалентная индуктивность не может быть больше индуктивности катушки';

    }

    else if (a == b) {
        let p;
        p = document.getElementById('out');
        out.textContent = 'Подключение второй катушки не требуется';

    }

    else {

        let num = 1 / ((1 / a) - (1 / b));

        num = (num.toFixed(4));

        if (num > 0) {
            let p;
            p = document.getElementById('out');
            out.textContent = 'Расчет выполнен Lд = '+num + ' mH';
        }

        else {
            let p;
            p = document.getElementById('out');
            out.textContent = 'Нет расчетных данных или в них допущены ошибки';

        }
    }
}
