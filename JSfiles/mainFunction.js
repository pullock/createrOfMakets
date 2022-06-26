function workFieldSize(gadget, width, height){
    let workField = document.querySelector('#workField');
    let fonLocation = document.querySelector('#fonLocation');
    let grid;
    if (gadget == "mobile"){
        workField.style.width = '320px';
        workField.style.height = '640px';
        fonLocation.style.width = 900 + 200 + 'px';
        fonLocation.style.height = 640 + 200 + 'px';
        fonLocation.style.paddingTop = '100px';
        grid = '<div class="column"></div>' +
        '<div class="column"></div>' +
        '<div class="column"></div>' +
        '<div class="column"></div>' +
        '<div class="column"></div>' +
        '<div class="column"></div>';
        
        document.querySelector('#flexGrid').innerHTML = grid;
        for (let i = 0; i < 6; i++){
            document.querySelectorAll('.column')[i].style.width = '40px';
            document.querySelectorAll('.column')[i].style.margin = '0 4px';
        }
    } else if (gadget == 'laptop'){
        workField.style.width = '1440px';
        workField.style.height = '900px';
        fonLocation.style.width = 2040 + 200 + 'px';
        fonLocation.style.height = 900 + 200 + 'px';
        fonLocation.style.paddingTop = '100px';
        grid = '<div class="column"></div>' +
        '<div class="column"></div>' +
        '<div class="column"></div>' +
        '<div class="column"></div>' +
        '<div class="column"></div>' +
        '<div class="column"></div>' +
        '<div class="column"></div>' +
        '<div class="column"></div>' +
        '<div class="column"></div>' +
        '<div class="column"></div>' +
        '<div class="column"></div>' +
        '<div class="column"></div>';
        
        document.querySelector('#flexGrid').innerHTML = grid;
        for (let i = 0; i < 12; i++){
            document.querySelectorAll('.column')[i].style.width = '88px';
            document.querySelectorAll('.column')[i].style.margin = '0 8px';
        }
    } else if (document.querySelectorAll('.radioBlockInner')[2].style.display == 'block'){
        workField.style.width = width + 'px';
        workField.style.height = height + 'px';
        fonLocation.style.width = Number(width) + 200 + 'px';
        fonLocation.style.height = Number(height) + 200 + 'px';
        fonLocation.style.paddingTop = '100px';
    }
}

let fieldSize = 10;
let checkSize = fieldSize;
function workFieldScale(size, plus, minus){
    let workField = document.querySelector('#workField');
    let fonLocation = document.querySelector('#fonLocation');
    let getSize = document.querySelector('#getSize');
    let rangeSize = document.querySelector('#rangeSize');
    let data = 0;
    
    if (size == 'back'){
        getSize.innerHTML = '100%';
        workField.style.transform = 'scale(1)';
        fieldSize = 10;
        $( plus ).trigger( "focus" ) 
        return false;
    }
    
    if (plus == '1' && fieldSize < 20){
        fieldSize++;
    } else if (minus == '1' && fieldSize > 1){
        fieldSize--;
    } else if (size != ''){
        fieldSize = size;
    }
    
    if (size < 10 && plus == '' && minus == ''){
        data = '0.' + size;
    } else if (size > 10 && size < 20 && plus == '' && minus == ''){
        data = '1.' + (size - 10);
    } else if (size == 10 && plus == '' && minus == ''){
        data = 1;
    } else if (plus == '' && minus == '') {
        data = 2;
    }
    
    if (size == '' && fieldSize < 20 && fieldSize > 10 ){
        data = '1.' + (fieldSize - 10);
        size = fieldSize;
    } else if (size == '' && fieldSize < 10 && fieldSize > 1){
        data = '0.' + fieldSize;
        size = fieldSize;
    } else if (size == '' && fieldSize == 10){
        data = 1;
        size = 10;
    }
    
    if (size == '' && plus == ''){
        size = 1;
        data = '0.' + 1;
    } else if (size == '' && minus == ''){
        size = 20;
        data = 2;
    }
    rangeSize.value = size;
    getSize.innerHTML = size + '0%';
    workField.style.transform = 'scale(' + data + ')';
    
    if (checkSize < size){
        workField.style.marginTop = Number(workField.style.marginTop.replace('px', '')) + 50 + 'px';
        workField.style.marginBottom = Number(workField.style.marginBottom.replace('px', '')) + 20 + 'px';
        fonLocation.style.width = fonLocation.offsetWidth + 150 + 'px';
        fonLocation.style.height = fonLocation.offsetHeight + 150 + 'px';
    } else if (checkSize > size){
        workField.style.marginBottom = Number(workField.style.marginBottom.replace('px', '')) - 20 + 'px';
        workField.style.marginTop = Number(workField.marginTop.replace('px', '')) - 50 + 'px';
        fonLocation.style.width = fonLocation.offsetWidth - 150 + 'px';
        fonLocation.style.height = fonLocation.offsetHeight - 150 + 'px';
    }
    checkSize = size;
}

workFieldScale('', '', '');

let workFieldSelectContrl = false;
function workFieldSelect(){
    if (notField == true){
        notField = false;
        return false;
    }
    let workField = document.querySelector('#workField');
    
    if (workFieldSelectContrl == false){
        menuWorkFiled();
        workField.style.border = '2px solid hsla(25, 89%, 59%, 1)';
        workFieldSelectContrl = true;
        resetAllChoses();
        return false;
    } else {
        editImageMenu();
        workField.style.border = '1px solid hsla(0, 0%, 80%, 1)';
        workFieldSelectContrl = false;
        resetAllChoses();
        return false;
    }
}

let contrlName = false;
function setNameDocument(){
    let nameFile = document.querySelector('#nameFile');
    if (nameFile.innerHTML == 'Название документа'){
        nameFile.innerHTML = '';
    }
    if (contrlName == false){
        nameFile.innerHTML = '<input type="text" id="textName" maxlength="30" value="' + nameFile.innerHTML + '" placeholder="Имя документа...">';
    }
    contrlName = true;
}

let textName = document.querySelector('#textName');

document.addEventListener('keyup', function(event) {
  let textNameSet = document.querySelector('#textName');
  if (textNameSet != null && event.keyCode == 13 && textNameSet.value != '') {
      nameFile.innerHTML = textNameSet.value;
  }
  contrlName = false;
});

function radioSwitch(num){
    let radioButton = document.querySelectorAll('.radioBlockInner');
    
    for (let i = 0; i < radioButton.length; i++){
        radioButton[i].style.display = 'none';
    }
    radioButton[num].style.display = 'block';
}

function radioSwitch2(num){
    let radioButton = document.querySelectorAll('.radioBlockInner2');
    
    for (let i = 0; i < radioButton.length; i++){
        radioButton[i].style.display = 'none';
    }
    radioButton[num].style.display = 'block';
}

function radioSwitchTypeFunc(num){
    let radioButton = document.querySelectorAll('.radioBlockType');
    
    for (let i = 0; i < radioButton.length; i++){
        radioButton[i].style.display = 'none';
    }
    
    radioButton[num].style.display = 'block';
}

function selectButton(num){
    let buttonLeftMenu = document.querySelectorAll('.buttonLeftMenu');
    
    for (let i = 0; i < buttonLeftMenu.length; i++){
        buttonLeftMenu[i].style.borderBottom = '1px solid hsla(222, 11%, 15%, 1)';
    }
    
    buttonLeftMenu[num].style.borderBottom = '1px solid hsla(0, 0%, 100%, 1)';
}

function changeParamBut(elemen){
    let buttonUse = document.querySelector('#idNumButtonElement' + numChoseElementBut);
    
    if (elemen == '1'){
        buttonUse.style.width = '140px'
        buttonUse.style.height = '32px';
        buttonUse.style.fontSize = '12px';
    } else if (elemen == '2'){
        buttonUse.style.width = '140px'
        buttonUse.style.height = '48px';
        buttonUse.style.fontSize = '14px';
    } else if (elemen == '3'){
        buttonUse.style.width = '140px'
        buttonUse.style.height = '56px';
        buttonUse.style.fontSize = '16px';
    }
    
    if (elemen == 'basic'){
        buttonUse.style.backgroundColor = 'hsla(222, 11%, 15%, 0)';
        buttonUse.style.color = 'hsla(0, 0%, 20%, 1)';
    } else if (elemen == 'color'){
        buttonUse.style.backgroundColor = 'hsla(14, 100%, 59%, 1)';
        buttonUse.style.color = 'hsla(0, 0%, 100%, 1)';
    }
}