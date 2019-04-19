let
    nameElement = document.getElementById('input_name'),
    phoneElement = document.getElementById('input_phone'),
    emailElement = document.getElementById('input_email'),
    textElement = document.getElementById('message'),
    townElement = document.getElementById('input_town'),
    check = false;


function Container() {
    this.id = '';
    this.className = '';
    this.htmlCode = '';
}

Container.prototype.render = function() {
    return this.htmlCode;
};

function Form(myId, myClass, myName, myPhone, myEmail, myText, myTown) {
    Container.call(this);
    this.id = myId;
    this.className = myClass;
    this.name = myName;
    this.phone = myPhone;
    this.email = myEmail;
    this.text = myText;
    this.town = myTown;
}

Form.prototype = Object.create(Container.prototype);
Form.prototype.constructor = Form;

// Проверка данных
Form.prototype.validate = function (myIds, myTypes) {
    for (let i in myTypes) {
        let myType = myTypes[i],
            myId = 'input_' + myType,
            field = document.getElementById(myId),
            message = document.getElementById('form_error_' + myType),
            reg = /./;

        switch (myType) {
            case "name":
                reg = /^[A-zА-я]+$/;
                break;
            case "phone":
                reg = /^\+[7]{1}\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
                break;
            case "email":
                reg = /^([A-zА-я0-9_-]+\.)*[A-zА-я0-9_-]+@[A-zА-я0-9_-]+(\.[A-zА-я0-9_-]+)*\.[A-zА-я]{2,6}$/;
                break;
        }

        if (field.value.search(reg) == -1) {
            check = false;
            field.style.borderColor = '#F01A00';
            message.innerHTML = 'Неправильно заполнена форма';
        } else {
            field.style.borderColor = '#85c799';
            message.innerHTML = '';
        }
    }
};

//Обрабоьчик кнопки отправить
document.getElementById('form').onsubmit = function (e) {
    check = true;
    let formNew = new Form('formId', 'formClass', document.getElementById('input_name').value,
        document.getElementById('input_phone').value,
        document.getElementById('input_email').value,
        document.getElementById('text').value);
    formNew.validate('input_name', ['name', 'phone', 'email']);
    (!check) ? e.preventDefault() : alert('Форма успешно отправлена!');
};

//Список городов
window.onload = function() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './town.json', true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            console.log('Console: Error', xhr.status, xhr.statusText);
        } else {
            let myItems = JSON.parse(xhr.responseText);
            $('#input_town').autocomplete({
                source: myItems.town,
                minLength: 3
            })
        }
    }
};
$("#input_phone").mask('+7(999)999-9999', {placeholder: '+7(XXX)XXX-XXXX' });

