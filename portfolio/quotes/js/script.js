function Container() {
    this.id = '';
    this.className = '';
    this.htmlCode = '';
    this.value = '';
}

Container.prototype.render = function () {
    return this.htmlCode;
};

function Form(myId, myClass, myValue) {
    Container.call(this);
    this.id = myId;
    this.className = myClass;
    this.value = myValue;
}

Form.prototype = Object.create(Container.prototype);
Form.prototype.constructor = Form;

Form.prototype.render = function () {
    return this.value;
};

Form.prototype.correction = function () {
    let reg, value = this.value;

    value = value.replace(/[\s|;]'\b/gm,' \`'); // после пробела и ";"
    value = value.replace(/\b'(?=[\s|;])|^'|'$|\b'(?=[\.|\,])/gm,'\`'); //перед пробелом | в начале | в конце | перед ";"

    return value;
};

// JSON
document.getElementById('input_load').onclick = function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'js/text.json', true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            console.log('Ошибка', xhr.status, xhr.statusText);
        } else {
            let fileJson = JSON.parse(xhr.responseText),
                formNew = new Form('formId', 'formClass', fileJson.text);
            document.getElementById('text').value = formNew.render();
        }
    }
};

//Clicking submit
document.getElementById('form').onsubmit = function (e) {
    e.preventDefault();
    let textArea = document.getElementById('text'),
        formNew = new Form('formId', 'formClass', textArea.value);
    textArea.value = formNew.correction();
};