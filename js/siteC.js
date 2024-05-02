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

    else if (a < b) {
        let p;
        p = document.getElementById('out');
        out.textContent = 'Эквивалентная емкость не может быть меньше емкости конденсатора';

    }

    else if (a == b) {
        let p;
        p = document.getElementById('out');
        out.textContent = 'Подключение второго конденсатора не требуется';

    }

    else {

        let num = a - b;

        num = (num.toFixed(4));

        if (num > 0) {
            let p;
            p = document.getElementById('out');
            out.textContent = 'Расчет выполнен Cд = ' + num + ' nF';
        }

        else {
            let p;
            p = document.getElementById('out');
            out.textContent = 'Нет расчетных данных или в них допущены ошибки';

        }
    }
}
