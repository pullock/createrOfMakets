let numButtonElement;
let numChoseElementBut;
function createElemButton(){
    let block = document.querySelector('#workField');

    if (numButtonElement === 0 || numButtonElement > 0){
        numButtonElement++;
    } else {
        numButtonElement = 0;
    }
    let div = document.createElement('div');
    div.classList.add('emptyButtonElement');
    div.setAttribute('id', 'idNumButtonElement' + numButtonElement);
    div.setAttribute('onclick', 'menuEditButtonElement(' + numButtonElement + ')');
    div.style.zIndex = 25;
    let menu = '<div class="innerMass"><div class="outBlockTop" id="outBlockTopBut' + numButtonElement + '"><div class="sqTopLeft" id="sqTopLeftBut' + numButtonElement + '"></div><div class="sqTopRight" id="sqTopRightBut' + numButtonElement + '"></div></div>' +
    '<div class="boxBlock">' +
    '<div class="outBlockLeft" id="outBlockLeftBut' + numButtonElement + '"></div>' +
    '<div class="getHere">' + 
    '<div class="newItem" id="basicBlockBut' + numButtonElement + '">' +
    '<div id="placeForTextBut' + numButtonElement + '" class="placeForText" onclick="changeTextInButInput()"></div>' +
    '</div>' +
    '</div>' +
    '<div class="outBlockRight" id="outBlockRightBut' + numButtonElement + '"></div>' +
    '</div>' +
    '<div class="outBlockBottom" id="outBlockBottomBut' + numButtonElement + '"><div class="sqBotLeft" id="sqBotLeftBut' + numButtonElement + '"></div><div class="sqBotRight" id="sqBotRightBut' + numButtonElement + '"></div></div>' +
    '</div>';
    div.innerHTML = menu;
    block.appendChild(div);
    
    let tuchPlace = document.querySelector('#idNumButtonElement' + numButtonElement);
    tuchPlace.style.position = 'absolute';
    document.querySelector("#placeForTextBut" + numButtonElement).innerHTML = 'Текст';
    
    let topLeft = document.querySelector('#sqTopLeftBut' + numButtonElement);
    let topRight = document.querySelector('#sqTopRightBut' + numButtonElement);
    let left = document.querySelector('#sqBotLeftBut' + numButtonElement);
    let right = document.querySelector('#sqBotRightBut' + numButtonElement);
    
    let basic = document.querySelector("#basicBlockBut" + numButtonElement);
    
    tuchPlace.onmousedown = function(e){
        let innerBlock = document.querySelector("#placeForTextBut" + numButtonElement);
        let arrTextBlocks = document.querySelectorAll(".emptyButtonElement");
        let column = document.querySelectorAll(".column");
        
        for (let i = 0; i < column.length; i++){
            column[i].style.display = 'block';
        }
        
        workFieldScale('back', '.emptyButtonElement', '');
        workFieldSelectContrl = true;
        
        for (let i = 0; i < arrTextBlocks.length; i++){
            arrTextBlocks[i].style.height = arrTextBlocks[i].offsetHeight;
            arrTextBlocks[i].style.width = arrTextBlocks[i].offsetWidth;
        }
        
        $('.emptyButtonElement').resize();
        $(".column").draggable({ snap: false, snapTolerance: 3});
        $(".emptyButtonElement").draggable({ snap: true, snapTolerance: 3, containment: "#workField", scroll: false });
        
        document.onmouseup = function() {
            document.onmouseup = null;
            for (let i = 0; i < arrTextBlocks.length; i++){
                arrTextBlocks[i].style.height = 'auto';
                arrTextBlocks[i].style.width = 'auto';
            }
            for (let i = 0; i < column.length; i++){
                column[i].style.display = 'none';
            }
        }
    }
    
    document.addEventListener('keyup', function(event) {
        let tuchPlace = document.querySelector('#idNumButtonElement' + numButtonElement);
        if (event.keyCode == 46) {
            tuchPlace.parentNode.removeChild(tuchPlace);
        }
    });
}

function menuEditButtonElement(num){
    selectButButtonIsSelect = false;
    menuCreateButton();
    
    for (let i = 0; i < 150; i++){
        let tuchPlace = document.querySelector('#idNumButtonElement' + i);
        
        let topLeft = document.querySelector('#sqTopLeftBut' + i);
        if (topLeft == null){
            break;
        }
        let topRight = document.querySelector('#sqTopRightBut' + i);
        let botLeft = document.querySelector('#sqBotLeftBut' + i);
        let botRight = document.querySelector('#sqBotRightBut' + i);
        
        tuchPlace.style.border = '1px solid hsla(126, 100%, 38%, 0)';
        topLeft.style.border = '1px solid hsla(126, 100%, 38%, 0)';
        topRight.style.border = '1px solid hsla(126, 100%, 38%, 0)';
        botLeft.style.border = '1px solid hsla(126, 100%, 38%, 0)';
        botRight.style.border = '1px solid hsla(126, 100%, 38%, 0)';
        
        topLeft.style.backgroundColor = 'hsla(0, 0%, 100%, 0)';
        topRight.style.backgroundColor = 'hsla(0, 0%, 100%, 0)';
        botLeft.style.backgroundColor = 'hsla(0, 0%, 100%, 0)';
        botRight.style.backgroundColor = 'hsla(0, 0%, 100%, 0)';
    }
    
    let tuchPlace = document.querySelector('#idNumButtonElement' + num);

    let topLeft = document.querySelector('#sqTopLeftBut' + num);
    let topRight = document.querySelector('#sqTopRightBut' + num);
    let botLeft = document.querySelector('#sqBotLeftBut' + num);
    let botRight = document.querySelector('#sqBotRightBut' + num);
    
    tuchPlace.style.border = '1px solid hsla(126, 100%, 38%, 1)';
    topLeft.style.border = '1px solid hsla(126, 100%, 38%, 1)';
    topRight.style.border = '1px solid hsla(126, 100%, 38%, 1)';
    botLeft.style.border = '1px solid hsla(126, 100%, 38%, 1)';
    botRight.style.border = '1px solid hsla(126, 100%, 38%, 1)';
    
    topLeft.style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
    topRight.style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
    botLeft.style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
    botRight.style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
    
    topLeft.style.display = 'block';
    topRight.style.display = 'block';
    botLeft.style.display = 'block';
    botRight.style.display = 'block';
    
    numChoseElementBut = num;
    notField = true;
}

function choseSizeOfFont(numBox){
    let choseElement = document.querySelector("#idNumButtonElement" + numChoseElementBut);
    if (numBox == 1){
        choseElement.style.fontSize = '28px';
        choseElement.style.fontWeight = 'bold';
    } else if (numBox == 2){
        choseElement.style.fontSize = '14px';
        choseElement.style.fontWeight = 'none';
    } else {
        choseElement.style.fontSize = '12px';
        choseElement.style.fontWeight = 'none';
    }
}

function choseColorButton(numBox){
    let choseElement = document.querySelector("#idNumButtonElement" + numChoseElementBut);
    if (numBox == 1){
        choseElement.style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
        choseElement.style.color = 'hsla(0, 0%, 20%, 1)';
        choseElement.style.border = '1px solid hsla(0, 0%, 20%, 1)';
    } else if (numBox == 2){
        choseElement.style.backgroundColor = 'hsla(232, 10%, 84%, 1)';
        choseElement.style.color = 'hsla(0, 0%, 100%, 1)';
    } else if (numBox == 3){
        choseElement.style.backgroundColor = 'hsla(229, 8%, 73%, 1)';
        choseElement.style.color = 'hsla(0, 0%, 100%, 1)';
    } else if (numBox == 4){
        choseElement.style.backgroundColor = 'hsla(223, 7%, 51%, 1)';
        choseElement.style.color = 'hsla(0, 0%, 100%, 1)';
    } else if (numBox == 5){
        choseElement.style.backgroundColor = 'hsla(164, 82%, 47%, 1)';
        choseElement.style.color = 'hsla(0, 0%, 100%, 1)';
    } else if (numBox == 6){
        choseElement.style.backgroundColor = 'hsla(209, 100%, 63%, 1)';
        choseElement.style.color = 'hsla(0, 0%, 100%, 1)';
    } else if (numBox == 7){
        choseElement.style.backgroundColor = 'hsla(258, 100%, 70%, 1)';
        choseElement.style.color = 'hsla(0, 0%, 100%, 1)';
    } else if (numBox == 8){
        choseElement.style.backgroundColor = 'hsla(14, 100%, 59%, 1)';
        choseElement.style.color = 'hsla(0, 0%, 100%, 1)';
    } else if (numBox == 9){
        choseElement.style.backgroundColor = 'hsla(42, 100%, 52%, 1)';
        choseElement.style.color = 'hsla(0, 0%, 100%, 1)';
    } else if (numBox == 10){
        choseElement.style.backgroundColor = 'hsla(218, 28%, 16%, 1)';
        choseElement.style.color = 'hsla(0, 0%, 100%, 1)';
    }
}

let buttonInputDubleClick = 1;
function changeTextInButInput(){
    let useText = document.querySelector("#placeForTextBut" + numChoseElementBut);
    if (useText != null && buttonInputDubleClick == 2){
        if (useText.innerHTML == 'Текст'){
            useText.innerHTML = '';
        }
        useText.innerHTML = '<input type="text" value="' + useText.innerHTML + '" placeholder="Введите текст..." id="textInputBut' + numChoseElementBut + '">';
    }
    buttonInputDubleClick++;
    setTimeout(()=>{buttonInputDubleClick = 0}, 500);
}

document.addEventListener('keyup', function(event) {
    let tuchPlace = document.querySelector('#textInputBut' + numChoseElementBut);
    if (tuchPlace != null && event.keyCode == 13 && tuchPlace.value != '') {
        document.querySelector("#placeForTextBut" + numChoseElementBut).innerHTML = tuchPlace.value;
    } else if (event.keyCode == 27 && tuchPlace.value != ''){
        document.querySelector("#placeForTextBut" + numChoseElementBut).innerHTML = tuchPlace.value;
    }
});

//=================================== ФУНКЦИИ ДЛЯ СОЗДАНИЯ ОБЪЕКТОВ НИЖЕ ЭТОЙ ЧЕРТЫ ===========================================
let numTextElement;
let numChoseElement;
let notField = false;
function createElemButtonText(){
    let block = document.querySelector('#workField');

    if (numTextElement === 0 || numTextElement > 0){
        numTextElement++;
    } else {
        numTextElement = 0;
    }
    let div = document.createElement('div');
    div.classList.add('emptyTextElement');
    div.setAttribute('id', 'idNumTextElement' + numTextElement);
    div.setAttribute('onclick', 'menuEditTextElement(' + numTextElement + ')');
    div.style.zIndex = 25;
    let menu = '<div class="innerMass"><div class="outBlockTop" id="outBlockTop' + numTextElement + '"><div class="sqTopLeft" id="sqTopLeft' + numTextElement + '"></div><div class="sqTopRight" id="sqTopRight' + numTextElement + '"></div></div>' +
    '<div class="boxBlock">' +
    '<div class="outBlockLeft" id="outBlockLeft' + numTextElement + '"></div>' +
    '<div class="getHere">' + 
    '<div class="newItem" id="basicBlock' + numTextElement + '">' +
    '<div id="placeForText' + numTextElement + '" class="placeForText" onclick="changeTextInTextInput()"></div>' +
    '</div>' +
    '</div>' +
    '<div class="outBlockRight" id="outBlockRight' + numTextElement + '"></div>' +
    '</div>' +
    '<div class="outBlockBottom" id="outBlockBottom' + numTextElement + '"><div class="sqBotLeft" id="sqBotLeft' + numTextElement + '"></div><div class="sqBotRight" id="sqBotRight' + numTextElement + '"></div></div>' +
    '</div>';
    div.innerHTML = menu;
    block.appendChild(div);
    
    let tuchPlace = document.querySelector('#idNumTextElement' + numTextElement);
    tuchPlace.style.position = 'absolute';
    document.querySelector("#placeForText" + numTextElement).innerHTML = 'Текст';
    
    let topLeft = document.querySelector('#sqTopLeft' + numTextElement);
    let topRight = document.querySelector('#sqTopRight' + numTextElement);
    let left = document.querySelector('#sqBotLeft' + numTextElement);
    let right = document.querySelector('#sqBotRight' + numTextElement);
    
    let basic = document.querySelector("#basicBlock" + numTextElement);
    
    tuchPlace.onmousedown = function(e){
        let innerBlock = document.querySelector("#placeForText" + numTextElement);
        let arrTextBlocks = document.querySelectorAll(".emptyTextElement");
        let column = document.querySelectorAll(".column");
        
        for (let i = 0; i < column.length; i++){
            column[i].style.display = 'block';
        }
        
        workFieldScale('back', '.emptyTextElement', '');
        workFieldSelectContrl = true;
        
        for (let i = 0; i < arrTextBlocks.length; i++){
            arrTextBlocks[i].style.height = arrTextBlocks[i].offsetHeight;
            arrTextBlocks[i].style.width = arrTextBlocks[i].offsetWidth;
        }
        $(".column").draggable({ snap: false, snapTolerance: 3});
        $(".emptyTextElement").draggable({ snap: true, snapTolerance: 3, containment: "#workField", scroll: false });
        
        document.onmouseup = function() {
            document.onmouseup = null;
            for (let i = 0; i < arrTextBlocks.length; i++){
                arrTextBlocks[i].style.height = 'auto';
                arrTextBlocks[i].style.width = 'auto';
            }
            for (let i = 0; i < column.length; i++){
                column[i].style.display = 'none';
            }
        }
    }
    
    document.addEventListener('keyup', function(event) {
        let tuchPlace = document.querySelector('#idNumTextElement' + numTextElement);
        if (event.keyCode == 46) {
            tuchPlace.parentNode.removeChild(tuchPlace);
        }
    });
}

function menuEditTextElement(num){
    selectTextButtonIsSelect = false;
    selectTextButton();
    
    for (let i = 0; i < 150; i++){
        let tuchPlace = document.querySelector('#idNumTextElement' + i);
        
        let topLeft = document.querySelector('#sqTopLeft' + i);
        if (topLeft == null){
            break;
        }
        let topRight = document.querySelector('#sqTopRight' + i);
        let botLeft = document.querySelector('#sqBotLeft' + i);
        let botRight = document.querySelector('#sqBotRight' + i);
        
        tuchPlace.style.border = '1px solid hsla(126, 100%, 38%, 0)';
        topLeft.style.border = '1px solid hsla(126, 100%, 38%, 0)';
        topRight.style.border = '1px solid hsla(126, 100%, 38%, 0)';
        botLeft.style.border = '1px solid hsla(126, 100%, 38%, 0)';
        botRight.style.border = '1px solid hsla(126, 100%, 38%, 0)';
        
        topLeft.style.backgroundColor = 'hsla(0, 0%, 100%, 0)';
        topRight.style.backgroundColor = 'hsla(0, 0%, 100%, 0)';
        botLeft.style.backgroundColor = 'hsla(0, 0%, 100%, 0)';
        botRight.style.backgroundColor = 'hsla(0, 0%, 100%, 0)';
    }
    
    let tuchPlace = document.querySelector('#idNumTextElement' + num);

    let topLeft = document.querySelector('#sqTopLeft' + num);
    let topRight = document.querySelector('#sqTopRight' + num);
    let botLeft = document.querySelector('#sqBotLeft' + num);
    let botRight = document.querySelector('#sqBotRight' + num);
    
    tuchPlace.style.border = '1px solid hsla(126, 100%, 38%, 1)';
    topLeft.style.border = '1px solid hsla(126, 100%, 38%, 1)';
    topRight.style.border = '1px solid hsla(126, 100%, 38%, 1)';
    botLeft.style.border = '1px solid hsla(126, 100%, 38%, 1)';
    botRight.style.border = '1px solid hsla(126, 100%, 38%, 1)';
    
    topLeft.style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
    topRight.style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
    botLeft.style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
    botRight.style.backgroundColor = 'hsla(0, 0%, 100%, 1)';
    
    topLeft.style.display = 'block';
    topRight.style.display = 'block';
    botLeft.style.display = 'block';
    botRight.style.display = 'block';
    
    numChoseElement = num;
    notField = true;
}

function choseSizeOfFont(numBox){
    let choseElement = document.querySelector("#idNumTextElement" + numChoseElement);
    if (numBox == 1){
        choseElement.style.fontSize = '28px';
        choseElement.style.fontWeight = 'bold';
    } else if (numBox == 2){
        choseElement.style.fontSize = '14px';
        choseElement.style.fontWeight = 'none';
    } else {
        choseElement.style.fontSize = '12px';
        choseElement.style.fontWeight = 'none';
    }
}

function choseColorText(numBox){
    let choseElement = document.querySelector("#idNumTextElement" + numChoseElement);
    if (numBox == 1){
        choseElement.style.color = 'hsla(0, 0%, 100%, 1)';
    } else if (numBox == 2){
        choseElement.style.color = 'hsla(232, 10%, 84%, 1)';
    } else if (numBox == 3){
        choseElement.style.color = 'hsla(229, 8%, 73%, 1)';
    } else if (numBox == 4){
        choseElement.style.color = 'hsla(223, 7%, 51%, 1)';
    } else if (numBox == 5){
        choseElement.style.color = 'hsla(164, 82%, 47%, 1)';
    } else if (numBox == 6){
        choseElement.style.color = 'hsla(209, 100%, 63%, 1)';
    } else if (numBox == 7){
        choseElement.style.color = 'hsla(258, 100%, 70%, 1)';
    } else if (numBox == 8){
        choseElement.style.color = 'hsla(14, 100%, 59%, 1)';
    } else if (numBox == 9){
        choseElement.style.color = 'hsla(42, 100%, 52%, 1)';
    } else if (numBox == 10){
        choseElement.style.color = 'hsla(218, 28%, 16%, 1)';
    }
}

let textInputDubleClick = 1;
function changeTextInTextInput(){
    let useText = document.querySelector("#placeForText" + numChoseElement);
    if (useText != null && textInputDubleClick == 2){
        if (useText.innerHTML == 'Текст'){
            useText.innerHTML = '';
        }
        useText.innerHTML = '<input type="text" value="' + useText.innerHTML + '" placeholder="Введите текст..." id="textInput' + numChoseElement + '">';
    }
    textInputDubleClick++;
    setTimeout(()=>{textInputDubleClick = 0}, 500);
}

document.addEventListener('keyup', function(event) {
    let tuchPlace = document.querySelector('#textInput' + numChoseElement);
    if (tuchPlace != null && event.keyCode == 13 && tuchPlace.value != '') {
        document.querySelector("#placeForText" + numChoseElement).innerHTML = tuchPlace.value;
    } else if (event.keyCode == 27 && tuchPlace.value != ''){
        document.querySelector("#placeForText" + numChoseElement).innerHTML = tuchPlace.value;
    }
});