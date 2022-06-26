function resetAllChoses(){
    selectTextButtonIsSelect = false;
    selectButButtonIsSelect = false;
    
    nullAllForAll();
}

function nullAllForAll(){
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
}

function menuWorkFiled(){
    let data = '<div id="rightTopBlock">' +
        '<div id="firstBlockRight">Настройки</div>' +
        '<div id="secondBlockRight">' +
            '<div class="line">РАЗМЕР</div><br>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(0), workFieldSize(\'laptop\', \'\', \'\')"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Монитор</span></div></div>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(1), workFieldSize(\'mobile\', \'\', \'\')"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Смартфон</span></div></div>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(2)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Другое</span></div></div>' +
            '<input type="text" maxlength="5" name="widthMonitor" value="" onkeyup="workFieldSize(\'\', document.querySelectorAll(\'.sizeCheck\')[0].value, document.querySelectorAll(\'.sizeCheck\')[1].value)" class="sizeCheck">&#160;<span class="colorText">×</span>&#160;<input type="text" maxlength="5" name="heighMonitor" value="" onkeyup="workFieldSize(\'\', document.querySelectorAll(\'.sizeCheck\')[0].value, document.querySelectorAll(\'.sizeCheck\')[1].value)" class="sizeCheck"><br><br>' +
            '<div class="line">ЦВЕТ</div><br>' +
            '<div class="displayWrap">' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
            '</div>' +
        '</div>' +
    '</div>';
    document.querySelector('#rightMenu').innerHTML = data;
}
menuWorkFiled();

let selectButButtonIsSelect = false;
function menuCreateButton(){
    if (selectButButtonIsSelect == false){
        resetAllChoses();
        let data = '<div id="rightTopBlock">' +
            '<div id="firstBlockRight">Настройки</div>' +
            '<div id="secondBlockRight">' +
                '<div class="line">РАЗМЕР</div><br>' +
                '<div class="flex"><div class="radioBlock" onclick="radioSwitch(0), changeParamBut(1)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>L</span></div></div>' +
                '<div class="flex"><div class="radioBlock" onclick="radioSwitch(1), changeParamBut(2)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>M</span></div></div>' +
                '<div class="flex"><div class="radioBlock" onclick="radioSwitch(2), changeParamBut(3)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>S</span></div></div>' +
                '<div class="line">ВИД КНОПКИ</div><br>' +
                '<div class="flex"><div class="radioBlock" onclick="radioSwitchTypeFunc(0), changeParamBut(\'color\')"><div class="radioBlockType"></div></div><div class="textRadio"><span>Главная</span></div></div>' +
                '<div class="flex"><div class="radioBlock" onclick="radioSwitchTypeFunc(1), changeParamBut(\'basic\')"><div class="radioBlockType"></div></div><div class="textRadio"><span>Второстепенная</span></div></div>' +
                '<div class="line">ЦВЕТ</div><br>' +
                '<div class="displayWrap">' +
                    '<div class="colorRound" onclick="choseColorButton(1)"></div>' +
                    '<div class="colorRound" onclick="choseColorButton(2)"></div>' +
                    '<div class="colorRound" onclick="choseColorButton(3)"></div>' +
                    '<div class="colorRound" onclick="choseColorButton(4)"></div>' +
                    '<div class="colorRound" onclick="choseColorButton(5)"></div>' +
                    '<div class="colorRound" onclick="choseColorButton(6)"></div>' +
                    '<div class="colorRound" onclick="choseColorButton(7)"></div>' +
                    '<div class="colorRound" onclick="choseColorButton(8)"></div>' +
                    '<div class="colorRound" onclick="choseColorButton(9)"></div>' +
                    '<div class="colorRound" onclick="choseColorButton(10)"></div>' +
                '</div>' +
            '</div>' +
        '</div>';
        document.querySelector('#rightMenu').innerHTML = data;
        selectButButtonIsSelect = true;
    }
}

let selectTextButtonIsSelect = false;
function selectTextButton(){
    if (selectTextButtonIsSelect == false){
        resetAllChoses();
        let data = '<div id="rightTopBlock">' +
            '<div id="firstBlockRight">Настройки</div>' +
            '<div id="secondBlockRight">' +
                '<div class="line">РАЗМЕР</div><br>' +
                '<div class="flex"><div class="radioBlock" onclick="radioSwitch(0), choseSizeOfFont(1)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Заголовок</span></div></div>' +
                '<div class="flex"><div class="radioBlock" onclick="radioSwitch(1), choseSizeOfFont(2)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Обычный</span></div></div>' +
                '<div class="flex"><div class="radioBlock" onclick="radioSwitch(2), choseSizeOfFont(3)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Мелкий</span></div></div>' +
                '<div class="line">ЦВЕТ</div><br>' +
                '<div class="displayWrap">' +
                    '<div class="colorRound" onclick="choseColorText(1)"></div>' +
                    '<div class="colorRound" onclick="choseColorText(2)"></div>' +
                    '<div class="colorRound" onclick="choseColorText(3)"></div>' +
                    '<div class="colorRound" onclick="choseColorText(4)"></div>' +
                    '<div class="colorRound" onclick="choseColorText(5)"></div>' +
                    '<div class="colorRound" onclick="choseColorText(6)"></div>' +
                    '<div class="colorRound" onclick="choseColorText(7)"></div>' +
                    '<div class="colorRound" onclick="choseColorText(8)"></div>' +
                    '<div class="colorRound" onclick="choseColorText(9)"></div>' +
                    '<div class="colorRound" onclick="choseColorText(10)"></div>' +
                '</div>' +
            '</div>' +
        '</div>';
        document.querySelector('#rightMenu').innerHTML = data;
        selectTextButtonIsSelect = true;
    }
}

function editImageMenu(){
    let data = '<div id="rightTopBlock">' +
    '<div id="firstBlockRight">Настройки</div>' +
    '</div>';
    document.querySelector('#rightMenu').innerHTML = data;
}

function editImagePhoto(){
    let data = '<div id="rightTopBlock">' +
        '<div id="firstBlockRight">Настройки</div>' +
        '<div id="secondBlockRight">' +
            '<div class="line">РАЗМЕР</div><br>' +
            '<input type="text" maxlength="5" name="widthMonitor" class="sizeCheck">&#160;<span class="colorText">×</span>&#160;<input type="text" maxlength="5" name="heighMonitor" class="sizeCheck">' +
        '</div>' +
    '</div>';
    document.querySelector('#rightMenu').innerHTML = data;
}

/*
function editFormObject(){
    let data = '<div id="rightTopBlock">' +
        '<div id="firstBlockRight">Настройки</div>' +
        '<div id="secondBlockRight">' +
            '<div class="line">РАЗМЕР</div><br>' +
            '<input type="text" maxlength="5" name="widthMonitor" class="sizeCheck">&#160;<span class="colorText">×</span>&#160;<input type="text" maxlength="5" name="heighMonitor" class="sizeCheck"><br><br>' +
            '<div class="line">ВИД</div><br>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(0)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Круг</span></div></div>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(1)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Квадрат</span></div></div>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(2)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Треугольник</span></div></div>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(4)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Линия</span></div></div>' +
            '<div class="line">ЦВЕТ</div><br>' +
            '<div class="displayWrap">' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
            '</div>' +
        '</div>' +
    '</div>';
    document.querySelector('#rightMenu').innerHTML = data;
}
*/

function editButtonText(){
    let data = '<div id="rightTopBlock">' +
        '<div id="firstBlockRight">Настройки</div>' +
        '<div id="secondBlockRight">' +
            '<div class="line">ВИД</div><br>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(0)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>С галочкой</span></div></div>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(1)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Пустой</span></div></div>' +
            '<div class="line">ЦВЕТ</div><br>' +
            '<div class="displayWrap">' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
            '</div>' +
        '</div>' +
    '</div>';
    document.querySelector('#rightMenu').innerHTML = data;
}

function createCheckBox(){
    let data = '<div id="rightTopBlock">' +
        '<div id="firstBlockRight">Настройки</div>' +
        '<div id="secondBlockRight">' +
            '<div class="line">ЦВЕТ</div><br>' +
            '<div class="displayWrap">' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
            '</div>' +
        '</div>' +
    '</div>';
    document.querySelector('#rightMenu').innerHTML = data;
}

function editRadioCheck(){
    let data = '<div id="rightTopBlock">' +
        '<div id="firstBlockRight">Настройки</div>' +
        '<div id="secondBlockRight">' +
            '<div class="line">ВИД</div><br>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(0)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Вкл</span></div></div>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(1)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Выкл</span></div></div>' +
            '<div class="line">ЦВЕТ</div><br>' +
            '<div class="displayWrap">' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
            '</div>' +
        '</div>' +
    '</div>';
    document.querySelector('#rightMenu').innerHTML = data;
}

function editTextInputPlace(){
    let data = '<div id="rightTopBlock">' +
        '<div id="firstBlockRight">Настройки</div>' +
        '<div id="secondBlockRight">' +
            '<div class="line">ВИД</div><br>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(0)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Обыйчный</span></div></div>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(1)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Заблокированный</span></div></div>' +
            '<div class="line">НАЗВАНИЕ</div><br>' +
            '<input type="text" maxlength="30" name="nameTextInput" class="sizeTextName"><br><br>' +
            '<div class="line">ЦВЕТ</div><br>' +
            '<div class="displayWrap">' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
            '</div>' +
        '</div>' +
    '</div>';
    document.querySelector('#rightMenu').innerHTML = data;
}

function editSwitchInputPlace(){
    let data = '<div id="rightTopBlock">' +
        '<div id="firstBlockRight">Настройки</div>' +
        '<div id="secondBlockRight">' +
            '<div class="line">ВИД</div><br>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(0)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Вкл</span></div></div>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(1)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Выкл</span></div></div>' +
            '<div class="line">ЦВЕТ</div><br>' +
            '<div class="displayWrap">' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
            '</div>' +
        '</div>' +
    '</div>';
    document.querySelector('#rightMenu').innerHTML = data;
}

function editSelectInputPlace(){
    let data = '<div id="rightTopBlock">' +
        '<div id="firstBlockRight">Настройки</div>' +
        '<div id="secondBlockRight">' +
            '<div class="line">ВИД</div><br>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(0)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Закрытый</span></div></div>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(1)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Открытый</span></div></div>' +
            '<div class="line">НАЗВАНИЕ</div><br>' +
            '<input type="text" maxlength="30" name="nameTextInput" class="sizeTextName" placeholder="Введите текст..."><br><br>' +
        '</div>' +
    '</div>';
    document.querySelector('#rightMenu').innerHTML = data;
}

function editGroupOfLink(){
    let data = '<div id="rightTopBlock">' +
        '<div id="firstBlockRight">Настройки</div>' +
        '<div id="secondBlockRight">' +
            '<div class="line2">1. КОЛИЧЕСТВО ВКЛАДОК</div><br>' +
            '<div class="line2">2. ОТКРЫТАЯ ВКЛАДКА</div><br>' +
            '<div style="display: flex; margin-left: 7px;"><div class="flex"><div><div></div></div><div class="textRadio"><span>1</span></div></div><div class="flex" style="margin-left: 29px;"><div> <div></div></div><div class="textRadio"><span>2</span></div></div></div>' +
            '<div style="display: flex;"><div class="flex"><div class="radioBlock" onclick="radioSwitch(0)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>1</span></div></div><div class="flex"><div class="radioBlock" onclick="radioSwitch2(0)"><div class="radioBlockInner2"></div></div><div class="textRadio"><span>1</span></div></div></div>' +
            '<div style="display: flex;"><div class="flex"><div class="radioBlock" onclick="radioSwitch(1)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>2</span></div></div><div class="flex"><div class="radioBlock" onclick="radioSwitch2(1)"><div class="radioBlockInner2"></div></div><div class="textRadio"><span>2</span></div></div></div>' +
            '<div style="display: flex;"><div class="flex"><div class="radioBlock" onclick="radioSwitch(2)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>3</span></div></div><div class="flex"><div class="radioBlock" onclick="radioSwitch2(2)"><div class="radioBlockInner2"></div></div><div class="textRadio"><span>3</span></div></div></div>' +
            '<div style="display: flex;"><div class="flex"><div class="radioBlock" onclick="radioSwitch(3)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>4</span></div></div><div class="flex"><div class="radioBlock" onclick="radioSwitch2(3)"><div class="radioBlockInner2"></div></div><div class="textRadio"><span>4</span></div></div></div>' +
            '<div class="line">ЦВЕТ</div><br>' +
            '<div class="displayWrap">' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
            '</div>' +
        '</div>' +
    '</div>';
    document.querySelector('#rightMenu').innerHTML = data;
}

function editIconMenu(){
    let data = '<div id="rightTopBlock">' +
        '<div id="firstBlockRight">Настройки</div>' +
        '<div id="secondBlockRight">' +
            '<div class="line">РАЗМЕР</div><br>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(0)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Большая</span></div></div>' +
            '<div class="flex"><div class="radioBlock" onclick="radioSwitch(1)"><div class="radioBlockInner"></div></div><div class="textRadio"><span>Маленькая</span></div></div>' +
            '<div class="line">ЦВЕТ</div><br>' +
            '<div class="displayWrap">' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
                '<div class="colorRound"></div>' +
            '</div><br>' +
            '<div class="line">ВИД</div><br>' +
            '<div class="flexWrap">' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.61523 5.99561V6.79304L9.7157 11.0434C10.2857 11.5184 10.6152 12.222 10.6152 12.964V18.5345L12.9091 17.1038C13.3483 16.8298 13.6152 16.3487 13.6152 15.8311V12.964C13.6152 12.222 13.9448 11.5184 14.5148 11.0434L19.6152 6.79304V5.99561H4.61523ZM21.1152 7.49561L15.475 12.1958C15.2471 12.3858 15.1152 12.6672 15.1152 12.964V15.8311C15.1152 16.8664 14.5814 17.8286 13.7029 18.3765L10.2622 20.5226C9.76259 20.8342 9.11523 20.475 9.11523 19.8862V12.964C9.11523 12.6672 8.98341 12.3858 8.75542 12.1958L3.11523 7.49561V5.49561C3.11523 4.94332 3.56295 4.49561 4.11523 4.49561H20.1152C20.6675 4.49561 21.1152 4.94332 21.1152 5.49561V7.49561Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.1152 4.99561H8.11523C7.28681 4.99561 6.61523 5.66718 6.61523 6.49561V18.4956C6.61523 19.324 7.28681 19.9956 8.11523 19.9956H16.1152C16.9437 19.9956 17.6152 19.324 17.6152 18.4956V6.49561C17.6152 5.66718 16.9437 4.99561 16.1152 4.99561ZM8.11523 3.49561C6.45838 3.49561 5.11523 4.83875 5.11523 6.49561V18.4956C5.11523 20.1525 6.45838 21.4956 8.11523 21.4956H16.1152C17.7721 21.4956 19.1152 20.1525 19.1152 18.4956V6.49561C19.1152 4.83875 17.7721 3.49561 16.1152 3.49561H8.11523ZM21.8663 18.4737C22.0022 18.4984 22.1152 18.3837 22.1152 18.2456V6.74561C22.1152 6.60753 22.0022 6.49284 21.8663 6.51752C21.0323 6.66907 20.6152 7.58234 20.6152 8.49563V16.4956C20.6152 17.4089 21.0323 18.3221 21.8663 18.4737ZM2.11523 18.2456C2.11523 18.3837 2.2283 18.4984 2.36415 18.4737C3.19821 18.3221 3.61523 17.4089 3.61523 16.4956V8.49563C3.61523 7.58234 3.19821 6.66907 2.36415 6.51752C2.2283 6.49284 2.11523 6.60753 2.11523 6.74561V18.2456Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.61523 8.49561L4.61523 16.4956C4.61523 17.324 5.28681 17.9956 6.11523 17.9956L18.1152 17.9956C18.9437 17.9956 19.6152 17.324 19.6152 16.4956L19.6152 8.49561C19.6152 7.66718 18.9437 6.99561 18.1152 6.99561L6.11523 6.99561C5.28681 6.99561 4.61523 7.66718 4.61523 8.49561ZM3.11523 16.4956C3.11523 18.1525 4.45838 19.4956 6.11523 19.4956L18.1152 19.4956C19.7721 19.4956 21.1152 18.1525 21.1152 16.4956L21.1152 8.49561C21.1152 6.83875 19.7721 5.49561 18.1152 5.49561L6.11523 5.49561C4.45838 5.49561 3.11523 6.83875 3.11523 8.49561L3.11523 16.4956ZM18.0933 2.74452C18.118 2.60868 18.0033 2.49561 17.8652 2.49561L6.36523 2.49561C6.22716 2.49561 6.11247 2.60868 6.13715 2.74452C6.2887 3.57858 7.20197 3.99561 8.11526 3.99561L16.1153 3.99561C17.0285 3.99561 17.9418 3.57858 18.0933 2.74452ZM17.8652 22.4956C18.0033 22.4956 18.118 22.3825 18.0933 22.2467C17.9418 21.4126 17.0285 20.9956 16.1153 20.9956L8.11525 20.9956C7.20197 20.9956 6.2887 21.4126 6.13715 22.2467C6.11247 22.3825 6.22716 22.4956 6.36523 22.4956L17.8652 22.4956Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" d="M3.11523 9.47392C3.11523 6.74215 5.28017 4.49561 7.98976 4.49561C9.40494 4.49561 10.632 5.24416 11.4828 6.26464C11.7198 6.54891 11.932 6.85917 12.115 7.18823C12.2977 6.85925 12.5098 6.54905 12.7466 6.26482C13.5969 5.24424 14.8236 4.49561 16.2388 4.49561C18.9484 4.49561 21.1133 6.74215 21.1133 9.47392C21.1133 11.8962 19.6046 14.0441 17.8805 15.8115C16.5587 17.1665 15.0061 18.3976 13.7099 19.4253L13.7098 19.4254C13.3068 19.7449 12.9286 20.0448 12.5899 20.3226C12.3134 20.5494 11.9152 20.5494 11.6387 20.3226C11.2999 20.0448 10.9217 19.7449 10.5186 19.4253L10.5186 19.4253C9.2225 18.3976 7.66984 17.1665 6.3481 15.8115C4.624 14.0441 3.11523 11.8962 3.11523 9.47392Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.11523 9.47392C3.11523 6.74215 5.28017 4.49561 7.98976 4.49561C9.40494 4.49561 10.632 5.24416 11.4828 6.26464C11.7198 6.54891 11.932 6.85917 12.115 7.18823C12.2977 6.85925 12.5098 6.54905 12.7466 6.26482C13.5969 5.24424 14.8236 4.49561 16.2388 4.49561C18.9484 4.49561 21.1133 6.74215 21.1133 9.47392C21.1133 11.8962 19.6046 14.0441 17.8805 15.8115C16.5587 17.1665 15.0061 18.3976 13.7099 19.4253C13.3069 19.7449 12.9287 20.0448 12.5899 20.3226C12.3134 20.5494 11.9152 20.5494 11.6387 20.3226C11.2999 20.0448 10.9217 19.7449 10.5186 19.4253C9.22251 18.3976 7.66984 17.1665 6.3481 15.8115C4.624 14.0441 3.11523 11.8962 3.11523 9.47392ZM12.8652 9.99561H11.3652C11.3652 9.01656 10.9736 7.99633 10.3306 7.22515C9.68813 6.45444 8.85249 5.99561 7.98976 5.99561C6.14352 5.99561 4.61523 7.53522 4.61523 9.47392C4.61523 11.2799 5.75795 13.0584 7.42185 14.7641C8.66963 16.0433 10.1104 17.1861 11.3944 18.2045C11.641 18.4 11.8818 18.591 12.1143 18.7775C12.3468 18.591 12.5876 18.4 12.8342 18.2045C14.1181 17.1861 15.5589 16.0433 16.8067 14.7641C18.4706 13.0584 19.6133 11.2799 19.6133 9.47392C19.6133 7.53522 18.0851 5.99561 16.2388 5.99561C15.3762 5.99561 14.5411 6.45436 13.899 7.22497C13.2566 7.99607 12.8652 9.01635 12.8652 9.99561Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" d="M20.1152 4.49561H4.11523C3.56295 4.49561 3.11523 4.94332 3.11523 5.49561V7.49561L8.75542 12.1958C8.98341 12.3858 9.11523 12.6672 9.11523 12.964V19.8862C9.11523 20.475 9.76259 20.8342 10.2622 20.5226L13.7029 18.3765C14.5814 17.8286 15.1152 16.8664 15.1152 15.8311V12.964C15.1152 12.6672 15.2471 12.3858 15.475 12.1958L21.1152 7.49561V5.49561C21.1152 4.94332 20.6675 4.49561 20.1152 4.49561Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.1152 16.8033L12.8097 17.166L17.6152 19.6761V5.49561C17.6152 5.21946 17.3914 4.99561 17.1152 4.99561H7.11523C6.83909 4.99561 6.61523 5.21946 6.61523 5.49561V19.6761L11.4208 17.166L12.1152 16.8033ZM12.1152 18.4956L17.6523 21.3877C18.318 21.7355 19.1152 21.2525 19.1152 20.5013V5.49561C19.1152 4.39104 18.2198 3.49561 17.1152 3.49561H7.11523C6.01066 3.49561 5.11523 4.39104 5.11523 5.49561V20.5013C5.11523 21.2525 5.91242 21.7355 6.57821 21.3877L12.1152 18.4956Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" d="M5.11523 5.49561C5.11523 4.39104 6.01066 3.49561 7.11523 3.49561H17.1152C18.2198 3.49561 19.1152 4.39104 19.1152 5.49561V20.5013C19.1152 21.2525 18.318 21.7355 17.6523 21.3877L12.1152 18.4956L6.57821 21.3877C5.91242 21.7355 5.11523 21.2525 5.11523 20.5013V5.49561Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M18.3559 6.36562L17.4009 5.32363C17.0318 4.92083 16.4076 4.8889 15.9993 5.25194L14.4365 6.64131L16.7347 9.17837L18.2866 7.78549C18.7007 7.41388 18.7318 6.77578 18.3559 6.36562ZM5.61523 14.4838L13.3154 7.638L15.6183 10.1803L8.02198 16.9981H5.61523V14.4838ZM19.4617 5.35214L18.5068 4.31016C17.5838 3.30313 16.0235 3.22332 15.0026 4.13091L4.4508 13.512C4.23736 13.7017 4.11523 13.9737 4.11523 14.2593V17.4981C4.11523 18.0504 4.56295 18.4981 5.11523 18.4981H8.21345C8.46002 18.4981 8.69789 18.407 8.88139 18.2423L19.2885 8.90182C20.3237 7.97279 20.4015 6.37754 19.4617 5.35214ZM20.1152 19.9955H4.11523V21.4955H20.1152V19.9955Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.6115 21.3739V17.4956H15.1115L18.1139 17.4956C19.9051 17.4956 21.2972 15.9361 21.0947 14.1564L20.6138 9.93033C20.3263 7.40393 18.1886 5.4956 15.6459 5.4956L8.61374 5.49561L8.61331 5.4956H7.11331H5.11523C4.01066 5.4956 3.11523 6.39103 3.11523 7.4956V15.4956C3.11523 16.6002 4.01066 17.4956 5.11523 17.4956H7.11331H7.43766L9.55194 22.2379C9.893 23.0029 10.6522 23.4956 11.4898 23.4956C12.6615 23.4956 13.6115 22.5457 13.6115 21.3739ZM15.6459 6.9956L8.61374 6.99561L8.61374 16.4498L10.9219 21.6271C11.0219 21.8512 11.2443 21.9956 11.4898 21.9956C11.8331 21.9956 12.1115 21.7173 12.1115 21.3739V17.4956C12.1115 16.6672 12.783 15.9956 13.6115 15.9956L18.1139 15.9956C19.0095 15.9956 19.7055 15.2159 19.6043 14.326L19.1234 10.0999C18.9222 8.33143 17.4258 6.9956 15.6459 6.9956ZM5.11523 15.9956H7.11331V6.9956H5.11523C4.83909 6.9956 4.61523 7.21946 4.61523 7.4956V15.4956C4.61523 15.7717 4.83909 15.9956 5.11523 15.9956Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.70812 16.9913C4.67667 16.9481 4.64561 16.9046 4.61495 16.8609C4.45828 16.6372 4.31211 16.4057 4.17717 16.1671C4.00252 15.8582 4.26009 15.4956 4.61495 15.4956C4.89554 15.4956 5.17252 15.4802 5.44511 15.4502C5.4607 15.4485 5.47627 15.4467 5.49183 15.4449C5.4919 15.4449 5.49196 15.4449 5.49202 15.4449C9.2209 15.0105 12.1149 11.841 12.1149 7.99561C12.1149 6.66935 11.7707 5.42349 11.1667 4.34252C10.9617 3.97568 11.1787 3.49561 11.5989 3.49561C16.3022 3.49561 20.1149 7.30119 20.1149 11.9956C20.1149 16.69 16.3022 20.4956 11.5989 20.4956C8.76778 20.4956 6.25936 19.1167 4.71094 16.9951C4.71 16.9938 4.70906 16.9925 4.70812 16.9913ZM6.49498 16.7989C7.77501 18.1525 9.58845 18.9956 11.5989 18.9956C15.4764 18.9956 18.6149 15.8589 18.6149 11.9956C18.6149 8.66767 16.286 5.87894 13.162 5.16991C13.456 6.05951 13.6149 7.00986 13.6149 7.99561C13.6149 12.3214 10.5631 15.9344 6.49498 16.7989Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.11523 6.49561H4.11523C3.56295 6.49561 3.11523 6.94332 3.11523 7.49561V21.4956C3.11523 22.0479 3.56295 22.4956 4.11523 22.4956H15.1152C15.6675 22.4956 16.1152 22.0479 16.1152 21.4956V18.4956H20.1152C20.6675 18.4956 21.1152 18.0479 21.1152 17.4956V5.49561C21.1152 3.83875 19.7721 2.49561 18.1152 2.49561H9.11523C8.56295 2.49561 8.11523 2.94332 8.11523 3.49561V6.49561ZM9.61523 6.49561H13.1152C14.7721 6.49561 16.1152 7.83875 16.1152 9.49561V16.9956H19.6152V5.49561C19.6152 4.66718 18.9437 3.99561 18.1152 3.99561H9.61523V6.49561ZM4.61523 20.9956V7.99561H13.1152C13.9437 7.99561 14.6152 8.66718 14.6152 9.49561V20.9956H4.61523Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.11523 12.9849H6.76142L6.44489 13.143L3.61524 14.5566L3.61524 5.4956C3.61523 4.66718 4.28681 3.99561 5.11524 3.99561L15.1152 3.99561C15.9437 3.99561 16.6152 4.66718 16.6152 5.49561V11.4849C16.6152 12.3133 15.9437 12.9849 15.1152 12.9849L7.11523 12.9849ZM7.61524 14.4849L7.61523 17.4813C7.61524 18.3098 8.28681 18.9813 9.11524 18.9813L17.1152 18.9813H17.4925L17.8249 19.1598L20.6152 20.6583V11.4912C20.6152 10.6627 19.9437 9.99115 19.1152 9.99115H18.1152V11.4849C18.1152 13.1417 16.7721 14.4849 15.1152 14.4849L7.61524 14.4849ZM18.1152 8.49115V5.49561C18.1152 3.83875 16.7721 2.49561 15.1152 2.49561H5.11524C3.45838 2.49561 2.11523 3.83875 2.11523 5.4956L2.11524 15.3653C2.11524 16.1085 2.89725 16.592 3.56213 16.2599L6.11523 14.9844V17.4813C6.11523 19.1382 7.45838 20.4813 9.11523 20.4813L17.1152 20.4813L20.6421 22.3753C21.3083 22.7331 22.1152 22.2505 22.1152 21.4943V11.4912C22.1152 9.8343 20.7721 8.49115 19.1152 8.49115H18.1152Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.11523 10.4956H17.1152L12.6664 5.73968C12.362 5.41425 11.8685 5.41425 11.564 5.73968L7.11523 10.4956Z" fill="#D3D4DB"/>' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.11523 14.4956H17.1152L12.6664 19.2515C12.362 19.577 11.8685 19.577 11.564 19.2515L7.11523 14.4956Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.11523 14.4956H17.1152L12.6664 9.73968C12.362 9.41425 11.8685 9.41425 11.564 9.73968L7.11523 14.4956Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.11523 10.4956H17.1152L12.6664 15.2515C12.362 15.577 11.8685 15.577 11.564 15.2515L7.11523 10.4956Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.90283 3.49653C3.89038 3.49592 3.87784 3.49561 3.86523 3.49561C3.45102 3.49561 3.11523 3.83139 3.11523 4.24561V6.01321C3.11523 14.5628 10.0485 21.4933 18.5977 21.4933H20.3656C20.7798 21.4933 21.1156 21.1575 21.1156 20.7433C21.1156 20.7303 21.1153 20.7175 21.1146 20.7047V17.1353C21.1146 16.8253 20.9239 16.5472 20.6346 16.4356L16.3852 14.7959C16.1333 14.6987 15.8486 14.7444 15.6398 14.9156L11.6774 18.1634C9.4998 16.9208 7.68844 15.1098 6.44551 12.9326L9.69508 8.97128C9.86647 8.76236 9.91221 8.4774 9.81484 8.22533L8.17332 3.97626C8.06163 3.68716 7.78363 3.49653 7.47371 3.49653L3.90283 3.49653ZM5.71537 11.4576L8.25804 8.358L6.95943 4.99653L4.61523 4.99653V6.01321C4.61523 7.94447 5.007 9.78428 5.71537 11.4576ZM18.5977 19.9933C16.6664 19.9933 14.8264 19.6017 13.1529 18.8935L16.2528 16.3526L19.6146 17.6498V19.9933H18.5977Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.1155 4.988C16.9179 5.11314 17.6622 5.49578 18.2327 6.08366C19.6628 7.55708 19.6452 9.90555 18.1933 11.3574L17.8962 11.6545L14.4592 15.0915L10.6186 18.9321C9.24072 20.3099 7.00456 20.3027 5.63567 18.9159C4.27553 17.5381 4.28703 15.3193 5.66138 13.9556L11.2931 8.36749C11.8308 7.83395 12.6987 7.83562 13.2343 8.37123C13.7715 8.90834 13.7715 9.77919 13.2343 10.3163L7.32727 16.2234L8.38793 17.284L14.295 11.377C15.4179 10.2541 15.4179 8.43342 14.2949 7.31053C13.1751 6.19078 11.3607 6.18729 10.2365 7.30272L4.60485 12.8908C2.64352 14.837 2.62711 18.0033 4.56816 19.9697C6.52169 21.9487 9.7129 21.9591 11.6792 19.9928L15.5199 16.1521L18.9569 12.7152L19.254 12.4181C21.2855 10.3866 21.31 7.1006 19.3092 5.03898C18.4563 4.16022 17.326 3.60921 16.1155 3.4751V4.988Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.6575 6.01327L10.6297 9.04098L9.56903 7.98034L12.5969 4.95263C14.5471 3.00245 17.7091 3.00244 19.6594 4.95263C21.6097 6.90281 21.6097 10.0647 19.6594 12.0149L16.6316 15.0426L15.5709 13.982L18.5987 10.9542C19.9632 9.58983 19.9632 7.37768 18.5987 6.01327C17.2342 4.64886 15.022 4.64886 13.6575 6.01327ZM7.60032 9.94897L8.661 11.0096L5.63275 14.0377C4.26829 15.4021 4.26829 17.6143 5.63276 18.9787C6.99722 20.3431 9.20946 20.3431 10.5739 18.9787L13.6022 15.9506L14.6629 17.0112L11.6346 20.0393C9.68435 21.9895 6.52234 21.9895 4.57207 20.0393C2.62181 18.0892 2.62181 14.9273 4.57207 12.9771L7.60032 9.94897ZM15.0855 8.4653L8.08549 15.4653L9.14615 16.526L16.1461 9.52596L15.0855 8.4653Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.3652 13.2456V21.4956H12.8652V13.2456H21.1152V11.7456H12.8652V3.49561H11.3652V11.7456H3.11523V13.2456H11.3652Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.25855 10.0937L9.61523 6.36669L9.61523 18.5621L4.23699 14.6777C3.84653 14.3957 3.61523 13.9434 3.61523 13.4617L3.61524 11.3249C3.61524 10.834 3.85552 10.3741 4.25855 10.0937ZM3.40186 8.86236L9.54411 4.58883C10.2071 4.12752 11.1152 4.60197 11.1152 5.40969V8.62172C12.8405 9.06576 14.1152 10.6319 14.1152 12.4957C14.1152 14.3595 12.8405 15.9256 11.1152 16.3697V19.5399C11.1152 20.3557 10.1911 20.8282 9.52974 20.3506L3.35875 15.8937C2.57782 15.3297 2.11523 14.425 2.11523 13.4617V11.3249C2.11523 10.343 2.59581 9.42318 3.40186 8.86236ZM11.1152 14.7877C11.9982 14.4019 12.6152 13.5209 12.6152 12.4957C12.6152 11.4705 11.9982 10.5895 11.1152 10.2037L11.1152 14.7877ZM19.8196 8.69C19.2954 7.49087 18.529 6.413 17.5685 5.52399L18.5875 4.42319C19.6996 5.45258 20.587 6.70064 21.194 8.0891C21.8011 9.47757 22.1147 10.9765 22.1152 12.4919C22.1158 14.0072 21.8032 15.5064 21.1971 16.8953C20.591 18.2842 19.7045 19.5328 18.5931 20.563L17.5734 19.4629C18.5332 18.5732 19.2988 17.4948 19.8223 16.2953C20.3457 15.0958 20.6157 13.8011 20.6152 12.4924C20.6148 11.1837 20.3439 9.88914 19.8196 8.69ZM16.1416 14.7285C15.8365 15.4154 15.3938 16.0324 14.841 16.5416L15.8571 17.645C16.5607 16.997 17.1241 16.2117 17.5125 15.3375C17.9008 14.4633 18.1058 13.5187 18.1149 12.5622C18.124 11.6057 17.937 10.6574 17.5653 9.77602C17.1936 8.8946 16.6453 8.0987 15.9541 7.43746L14.9172 8.52137C15.4603 9.04091 15.8911 9.66626 16.1831 10.3588C16.4752 11.0514 16.6221 11.7964 16.615 12.548C16.6078 13.2995 16.4467 14.0416 16.1416 14.7285Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.61523 6.36669L4.25855 10.0937C3.85552 10.3741 3.61524 10.834 3.61524 11.3249L3.61523 13.4617C3.61523 13.9434 3.84653 14.3957 4.23699 14.6777L9.61523 18.5621L9.61523 6.36669ZM9.54411 4.58883L3.40186 8.86236C2.59581 9.42318 2.11523 10.343 2.11523 11.3249V13.4617C2.11523 14.425 2.57782 15.3297 3.35875 15.8937L9.52974 20.3506C10.1911 20.8282 11.1152 20.3557 11.1152 19.5399V16.3697C12.8405 15.9256 14.1152 14.3595 14.1152 12.4957C14.1152 10.6319 12.8405 9.06576 11.1152 8.62172V5.40969C11.1152 4.60197 10.2071 4.12752 9.54411 4.58883ZM12.6152 12.4957C12.6152 13.5209 11.9982 14.4019 11.1152 14.7877L11.1152 10.2037C11.9982 10.5895 12.6152 11.4705 12.6152 12.4957ZM15.1169 14.4337L17.0513 12.4993L15.1157 10.5558L16.1786 9.49729L18.112 11.4387L20.0545 9.49619L21.1151 10.5569L19.1704 12.5015L21.0958 14.4348L20.033 15.4933L18.1098 13.5622L16.1776 15.4943L15.1169 14.4337Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.61523 6.36644L4.25855 10.0934C3.85552 10.3738 3.61524 10.8337 3.61524 11.3247L3.61523 13.4615C3.61523 13.9431 3.84653 14.3955 4.23699 14.6775L9.61523 18.5618L9.61523 6.36644ZM9.54411 4.58858L3.40186 8.86211C2.59581 9.42294 2.11523 10.3427 2.11523 11.3247V13.4615C2.11523 14.4248 2.57782 15.3295 3.35875 15.8935L9.52974 20.3504C10.1911 20.828 11.1152 20.3555 11.1152 19.5397V16.3694C12.8405 15.9254 14.1152 14.3593 14.1152 12.4955C14.1152 10.6316 12.8405 9.06552 11.1152 8.62148V5.40945C11.1152 4.60172 10.2071 4.12727 9.54411 4.58858ZM12.6152 12.4955C12.6152 13.5206 11.9982 14.4017 11.1152 14.7874L11.1152 10.2035C11.9982 10.5893 12.6152 11.4703 12.6152 12.4955ZM16.1416 14.7283C15.8365 15.4151 15.3938 16.0322 14.841 16.5413L15.8571 17.6447C16.5607 16.9967 17.1241 16.2114 17.5125 15.3372C17.9008 14.463 18.1058 13.5185 18.1149 12.562C18.124 11.6054 17.937 10.6572 17.5653 9.77577C17.1936 8.89435 16.6453 8.09846 15.9541 7.43722L14.9172 8.52112C15.4603 9.04067 15.8911 9.66602 16.1831 10.3586C16.4752 11.0511 16.6221 11.7962 16.615 12.5477C16.6078 13.2993 16.4467 14.0414 16.1416 14.7283Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.11523 10.8957H9.71523V12.4957V14.8957H14.5152V12.4957V10.8957H16.1152H17.7525L12.1152 5.25844L6.47798 10.8957H8.11523ZM8.11523 15.4957V14.0957V12.4957H6.51523H5.02945C4.13854 12.4957 3.69238 11.4186 4.32234 10.7886L11.4081 3.70281C11.7987 3.31228 12.4318 3.31228 12.8223 3.70281L19.9081 10.7886C20.5381 11.4186 20.0919 12.4957 19.201 12.4957H17.7152H16.1152V14.0957V15.4957C16.1152 16.048 15.6675 16.4957 15.1152 16.4957H9.11523C8.56295 16.4957 8.11523 16.048 8.11523 15.4957ZM2.11523 19.4957V16.4957H3.61523V19.4957C3.61523 19.7718 3.83909 19.9957 4.11523 19.9957H20.1152C20.3914 19.9957 20.6152 19.7718 20.6152 19.4957V16.4957H22.1152V19.4957C22.1152 20.6003 21.2198 21.4957 20.1152 21.4957H4.11523C3.01067 21.4957 2.11523 20.6003 2.11523 19.4957Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.11305 5.82745C8.31944 4.48591 9.47375 3.49561 10.8311 3.49561H13.3994C14.7567 3.49561 15.911 4.48591 16.1174 5.82745L16.2202 6.49556H17.6107H19.1152L19.1152 6.4956H20.1152V7.9956H18.9986L18.1638 18.7282C18.0423 20.2901 16.7395 21.4956 15.1728 21.4956H9.05763C7.491 21.4956 6.18814 20.2901 6.06666 18.7282L5.2319 7.99561H4.11523V6.49561H5.11524L5.11523 6.49556H6.61976H8.01026L8.11305 5.82745ZM14.7026 6.49556H9.52791L9.59561 6.05553C9.68942 5.44574 10.2141 4.99561 10.8311 4.99561H13.3994C14.0164 4.99561 14.541 5.44574 14.6349 6.05553L14.7026 6.49556ZM6.73643 7.99561L7.56214 18.6119C7.62289 19.3928 8.27431 19.9956 9.05763 19.9956H15.1728C15.9562 19.9956 16.6076 19.3928 16.6683 18.6119L17.494 7.9956L6.73643 7.99561Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<mask id="path-1-inside-1" fill="white">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M20.6152 14.4956C20.6152 15.3677 20.4844 16.2068 20.2421 16.9956H18.6556C18.9525 16.2192 19.1152 15.3764 19.1152 14.4956C19.1152 12.5284 18.3037 10.7507 16.9973 9.47906L17.9169 8.28347C19.5773 9.83481 20.6152 12.044 20.6152 14.4956ZM16.0748 10.6783C17.0286 11.6674 17.6152 13.013 17.6152 14.4956C17.6152 15.3958 17.3989 16.2455 17.0155 16.9956H15.2379C15.7869 16.3108 16.1152 15.4416 16.1152 14.4956C16.1152 13.4981 15.7501 12.5859 15.1463 11.8854L16.0748 10.6783ZM20.6288 18.4956H12.1152H3.60169C3.20421 18.4956 2.84008 18.2617 2.70526 17.8878C2.32338 16.8286 2.11523 15.6864 2.11523 14.4956C2.11523 8.97276 6.59239 4.49561 12.1152 4.49561C14.163 4.49561 16.067 5.11113 17.6524 6.16725L18.5208 5.03832L19.7097 5.95289L18.8351 7.08987C20.85 8.91929 22.1152 11.5597 22.1152 14.4956C22.1152 15.6864 21.9071 16.8286 21.5252 17.8878C21.3904 18.2617 21.0263 18.4956 20.6288 18.4956ZM14.6152 14.4956C14.6152 15.8763 13.4959 16.9956 12.1152 16.9956C10.7345 16.9956 9.61523 15.8763 9.61523 14.4956C9.61523 13.1149 10.7345 11.9956 12.1152 11.9956C13.4959 11.9956 14.6152 13.1149 14.6152 14.4956ZM8.11523 14.4956C8.11523 15.4416 8.44359 16.3108 8.99255 16.9956H3.98842C3.74608 16.2068 3.61523 15.3677 3.61523 14.4956C3.61523 9.80119 7.42081 5.99561 12.1152 5.99561C13.8187 5.99561 15.4052 6.49672 16.7352 7.35957L13.972 10.9517C13.4171 10.6604 12.7854 10.4956 12.1152 10.4956C9.9061 10.4956 8.11523 12.2865 8.11523 14.4956Z"/>' +
                '</mask>' +
                '<path class="svgImagesColor" d="M20.2421 16.9956V18.4956H21.3504L21.6759 17.4361L20.2421 16.9956ZM18.6556 16.9956L17.2545 16.4598L16.4759 18.4956H18.6556V16.9956ZM16.9973 9.47906L15.8083 8.56449L14.9943 9.62272L15.951 10.5539L16.9973 9.47906ZM17.9169 8.28347L18.941 7.18743L17.7346 6.06029L16.728 7.3689L17.9169 8.28347ZM16.0748 10.6783L17.1545 9.63708L15.9467 8.38454L14.8858 9.76372L16.0748 10.6783ZM17.0155 16.9956V18.4956H17.9333L18.3511 17.6784L17.0155 16.9956ZM15.2379 16.9956L14.0675 16.0574L12.113 18.4956H15.2379V16.9956ZM15.1463 11.8854L13.9573 10.9708L13.2124 11.9392L14.0101 12.8647L15.1463 11.8854ZM2.70526 17.8878L4.11635 17.379L4.11635 17.379L2.70526 17.8878ZM17.6524 6.16725L16.8207 7.4156L17.9869 8.1925L18.8413 7.08181L17.6524 6.16725ZM18.5208 5.03832L19.4353 3.84939L18.2464 2.93482L17.3318 4.12376L18.5208 5.03832ZM19.7097 5.95289L20.8986 6.86745L21.8132 5.67852L20.6243 4.76395L19.7097 5.95289ZM18.8351 7.08987L17.6462 6.17531L16.8032 7.27111L17.8268 8.20042L18.8351 7.08987ZM21.5252 17.8878L22.9363 18.3966L22.9363 18.3966L21.5252 17.8878ZM8.99255 16.9956V18.4956H12.1175L10.1629 16.0574L8.99255 16.9956ZM3.98842 16.9956L2.55455 17.4361L2.88003 18.4956H3.98842V16.9956ZM16.7352 7.35957L17.9241 8.27413L18.9152 6.9858L17.5516 6.10118L16.7352 7.35957ZM13.972 10.9517L13.2747 12.2798L14.3917 12.8663L15.1609 11.8663L13.972 10.9517ZM21.6759 17.4361C21.9616 16.5061 22.1152 15.5186 22.1152 14.4956H19.1152C19.1152 15.2168 19.0071 15.9075 18.8082 16.5551L21.6759 17.4361ZM18.6556 18.4956H20.2421V15.4956H18.6556V18.4956ZM20.0566 17.5315C20.418 16.5867 20.6152 15.5624 20.6152 14.4956H17.6152C17.6152 15.1904 17.4871 15.8517 17.2545 16.4598L20.0566 17.5315ZM20.6152 14.4956C20.6152 12.1071 19.6281 9.94656 18.0435 8.40418L15.951 10.5539C16.9794 11.5549 17.6152 12.9497 17.6152 14.4956H20.6152ZM16.728 7.3689L15.8083 8.56449L18.1862 10.3936L19.1059 9.19803L16.728 7.3689ZM22.1152 14.4956C22.1152 11.6114 20.8923 9.01056 18.941 7.18743L16.8929 9.37951C18.2624 10.6591 19.1152 12.4766 19.1152 14.4956H22.1152ZM14.995 11.7195C15.6901 12.4403 16.1152 13.4167 16.1152 14.4956H19.1152C19.1152 12.6092 18.3671 10.8945 17.1545 9.63708L14.995 11.7195ZM16.1152 14.4956C16.1152 15.153 15.9578 15.7692 15.6799 16.3128L18.3511 17.6784C18.8401 16.7218 19.1152 15.6387 19.1152 14.4956H16.1152ZM15.2379 18.4956H17.0155V15.4956H15.2379V18.4956ZM14.6152 14.4956C14.6152 15.0883 14.4109 15.6291 14.0675 16.0574L16.4083 17.9338C17.1629 16.9925 17.6152 15.7948 17.6152 14.4956H14.6152ZM14.0101 12.8647C14.3882 13.3033 14.6152 13.871 14.6152 14.4956H17.6152C17.6152 13.1252 17.1121 11.8686 16.2824 10.906L14.0101 12.8647ZM14.8858 9.76372L13.9573 10.9708L16.3352 12.7999L17.2637 11.5928L14.8858 9.76372ZM12.1152 19.9956H20.6288V16.9956H12.1152V19.9956ZM3.60169 19.9956H12.1152V16.9956H3.60169V19.9956ZM1.29418 18.3966C1.66271 19.4187 2.6307 19.9956 3.60169 19.9956V16.9956C3.77773 16.9956 4.01745 17.1047 4.11635 17.379L1.29418 18.3966ZM0.615234 14.4956C0.615234 15.8623 0.854305 17.1765 1.29418 18.3966L4.11635 17.379C3.79245 16.4807 3.61523 15.5105 3.61523 14.4956H0.615234ZM12.1152 2.99561C5.76396 2.99561 0.615234 8.14433 0.615234 14.4956H3.61523C3.61523 9.80118 7.42081 5.99561 12.1152 5.99561V2.99561ZM18.484 4.91889C16.66 3.70378 14.468 2.99561 12.1152 2.99561V5.99561C13.858 5.99561 15.4741 6.51847 16.8207 7.4156L18.484 4.91889ZM17.3318 4.12376L16.4634 5.25268L18.8413 7.08181L19.7097 5.95289L17.3318 4.12376ZM20.6243 4.76395L19.4353 3.84939L17.6062 6.22726L18.7951 7.14182L20.6243 4.76395ZM20.024 8.00444L20.8986 6.86745L18.5208 5.03832L17.6462 6.17531L20.024 8.00444ZM23.6152 14.4956C23.6152 11.1192 22.1583 8.08106 19.8434 5.97932L17.8268 8.20042C19.5418 9.75752 20.6152 12.0002 20.6152 14.4956H23.6152ZM22.9363 18.3966C23.3762 17.1765 23.6152 15.8623 23.6152 14.4956H20.6152C20.6152 15.5105 20.438 16.4807 20.1141 17.379L22.9363 18.3966ZM20.6288 19.9956C21.5998 19.9956 22.5678 19.4187 22.9363 18.3966L20.1141 17.379C20.213 17.1047 20.4527 16.9956 20.6288 16.9956V19.9956ZM12.1152 18.4956C14.3244 18.4956 16.1152 16.7047 16.1152 14.4956H13.1152C13.1152 15.0479 12.6675 15.4956 12.1152 15.4956V18.4956ZM8.11523 14.4956C8.11523 16.7047 9.9061 18.4956 12.1152 18.4956V15.4956C11.5629 15.4956 11.1152 15.0479 11.1152 14.4956H8.11523ZM12.1152 10.4956C9.9061 10.4956 8.11523 12.2865 8.11523 14.4956H11.1152C11.1152 13.9433 11.5629 13.4956 12.1152 13.4956V10.4956ZM16.1152 14.4956C16.1152 12.2865 14.3244 10.4956 12.1152 10.4956V13.4956C12.6675 13.4956 13.1152 13.9433 13.1152 14.4956H16.1152ZM10.1629 16.0574C9.8196 15.6291 9.61523 15.0883 9.61523 14.4956H6.61523C6.61523 15.7948 7.06759 16.9925 7.82218 17.9338L10.1629 16.0574ZM3.98842 18.4956H8.99255V15.4956H3.98842V18.4956ZM2.11523 14.4956C2.11523 15.5186 2.26885 16.5061 2.55455 17.4361L5.42228 16.5551C5.22332 15.9074 5.11523 15.2168 5.11523 14.4956H2.11523ZM12.1152 4.49561C6.59239 4.49561 2.11523 8.97276 2.11523 14.4956H5.11523C5.11523 10.6296 8.24924 7.49561 12.1152 7.49561V4.49561ZM17.5516 6.10118C15.9858 5.08541 14.1171 4.49561 12.1152 4.49561V7.49561C13.5203 7.49561 14.8245 7.90802 15.9188 8.61795L17.5516 6.10118ZM15.1609 11.8663L17.9241 8.27413L15.5463 6.445L12.783 10.0372L15.1609 11.8663ZM12.1152 11.9956C12.5367 11.9956 12.9298 12.0987 13.2747 12.2798L14.6692 9.62365C13.9045 9.22213 13.0341 8.99561 12.1152 8.99561V11.9956ZM9.61523 14.4956C9.61523 13.1149 10.7345 11.9956 12.1152 11.9956V8.99561C9.07767 8.99561 6.61523 11.458 6.61523 14.4956H9.61523Z" fill="#D3D4DB" mask="url(#path-1-inside-1)"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.61328 14.9362V3.49561H3.11328V19.7469C3.11328 20.7134 3.89678 21.4969 4.86328 21.4969H21.1145V19.9969H4.86328C4.72521 19.9969 4.61328 19.8849 4.61328 19.7469V17.0575L9.61451 12.0563L12.0842 14.5259C12.3771 14.8188 12.8519 14.8188 13.1448 14.5259L19.6145 8.05632V11.4956H21.1145V6.24561C21.1145 5.8314 20.7787 5.49561 20.3645 5.49561L15.1145 5.49561V6.99561L18.5539 6.99561L12.6145 12.935L10.1448 10.4653C9.85195 10.1724 9.37707 10.1724 9.08418 10.4653L4.61328 14.9362Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.61328 11.7416V3.49561H3.11328V19.7469C3.11328 20.7134 3.89678 21.4969 4.86328 21.4969H21.1145V19.9969H4.86328C4.8548 19.9969 4.84642 19.9964 4.83815 19.9956H5.36444C5.36444 18.0181 5.51597 14.6421 6.13807 11.7809C6.45046 10.3442 6.86919 9.09751 7.4074 8.22789C7.94472 7.35971 8.51087 6.99756 9.11444 6.99756C9.5104 6.99756 9.79891 7.11632 10.0393 7.31707C10.2959 7.53132 10.531 7.86827 10.7446 8.34823C11.166 9.29526 11.4126 10.5736 11.685 11.9862L11.7139 12.1361C11.9865 13.5482 12.293 15.0919 12.8809 16.2777C13.1804 16.8817 13.5737 17.4387 14.1141 17.8456C14.6666 18.2617 15.3333 18.4903 16.1144 18.4903C18.1297 18.4903 19.3701 16.8637 20.088 14.6631C20.818 12.4255 21.1356 9.26949 21.1356 5.49561H19.6356C19.6356 9.22172 19.3176 12.1881 18.662 14.1979C17.9943 16.2446 17.0992 16.9903 16.1144 16.9903C15.6456 16.9903 15.2985 16.8598 15.0164 16.6473C14.722 16.4257 14.4596 16.0849 14.2248 15.6114C13.7444 14.6424 13.4688 13.3128 13.1867 11.8518L13.142 11.6196C12.8848 10.2826 12.609 8.8483 12.115 7.73837C11.8491 7.14089 11.4968 6.57997 11.0008 6.16571C10.4885 5.73795 9.85906 5.49756 9.11444 5.49756C7.77235 5.49756 6.80317 6.35391 6.13192 7.43849C5.46157 8.52163 4.99851 9.96199 4.67232 11.4622C4.65217 11.5549 4.63249 11.648 4.61328 11.7416Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.61328 3.49561V19.7469C4.61328 19.8849 4.72521 19.9969 4.86328 19.9969H7.11453V19.9956V10.4956C7.11453 9.94332 7.56225 9.49561 8.11453 9.49561H11.1145C11.6668 9.49561 12.1145 9.94332 12.1145 10.4956V19.9956V19.9969H14.1145V19.9956V6.49561C14.1145 5.94332 14.5622 5.49561 15.1145 5.49561H18.1145C18.6668 5.49561 19.1145 5.94332 19.1145 6.49561V19.9956V19.9969H21.1145V21.4969H4.86328C3.89678 21.4969 3.11328 20.7134 3.11328 19.7469V3.49561H4.61328ZM8.61453 10.9956V19.9956H10.6145V10.9956H8.61453ZM15.6145 19.9956V6.99561H17.6145V19.9956H15.6145Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.1152 20.9956C16.8097 20.9956 20.6152 17.19 20.6152 12.4956C20.6152 8.05391 17.2084 4.40793 12.8652 4.02824V12.0814C12.8652 12.5455 12.6809 12.9906 12.3527 13.3188L6.65846 19.013C8.13491 20.2505 10.0381 20.9956 12.1152 20.9956ZM6.17482 6.41601C7.53965 5.08223 9.35183 4.20426 11.3652 4.02824V10.8649L6.17482 6.41601ZM5.19813 7.55447C4.20168 8.94691 3.61523 10.6528 3.61523 12.4956C3.61523 14.5728 4.36032 16.4759 5.5978 17.9524L11.0122 12.538L5.19813 7.55447ZM12.1152 22.4956C17.6381 22.4956 22.1152 18.0185 22.1152 12.4956C22.1152 6.97276 17.6381 2.49561 12.1152 2.49561C6.59239 2.49561 2.11523 6.97276 2.11523 12.4956C2.11523 18.0185 6.59239 22.4956 12.1152 22.4956Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.8598 1.49561L12.8598 5.49561L11.3598 5.49561L11.3598 1.49561H12.8598ZM21.1024 4.41225L18.4752 7.54314L17.3262 6.57896L19.9533 3.44807L21.1024 4.41225ZM5.74431 7.54314L3.11719 4.41225L4.26625 3.44807L6.89338 6.57896L5.74431 7.54314ZM16.4455 19.9956L15.4584 10.7825C15.3495 9.76626 14.4919 8.9956 13.4698 8.9956L10.7598 8.99561C9.73774 8.99561 8.88011 9.76626 8.77122 10.7825L7.78411 19.9956H16.4455ZM17.9541 19.9956L16.9499 10.6227C16.7593 8.84425 15.2584 7.4956 13.4698 7.4956L10.7598 7.49561C8.97117 7.49561 7.47031 8.84425 7.27976 10.6227L6.27552 19.9956L5.11481 19.9956V21.4956L6.11481 21.4956L7.62339 21.4956H16.6062H18.1148H19.1148V19.9956H17.9541Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M18.1152 17.2456H6.11523V15.7456H18.1152V17.2456ZM6.11523 13.2456H14.1152V11.7456H6.11523V13.2456ZM6.11523 9.24561H10.1152V7.74561H6.11523V9.24561Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M18.1152 7.74561H6.11523V9.24561H18.1152V7.74561ZM6.11523 11.7456H14.1152V13.2456H6.11523V11.7456ZM6.11523 15.7456H10.1152V17.2456H6.11523V15.7456Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.6152 3.49365H15.1152V4.99365L16.6153 4.99365V19.9999H15.1152V21.4999H19.6152V19.9999H18.1153V4.99365L19.6152 4.99365V3.49365ZM5.83165 17.4958H4.11523L8.32419 7.49579H9.90628L14.1152 17.4958H12.3988L11.2645 14.7244H6.96598L5.83165 17.4958ZM8.78688 10.1958L7.50329 13.3529H10.7272L9.44359 10.1958C9.43052 10.1582 9.40853 10.0976 9.38061 10.0205C9.31292 9.83361 9.21034 9.55041 9.11523 9.26722C9.02013 9.55042 8.91755 9.83361 8.84985 10.0205C8.82193 10.0976 8.79995 10.1582 8.78688 10.1958Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.11523 11.7456H18.1152V13.2456H6.11523V11.7456Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M14.2569 9.47482L13.9083 8.69987L12.1142 4.71192L10.3203 8.69985L9.97169 9.4748L9.12778 9.57419L4.7616 10.0884L8.07401 12.8422L8.79427 13.441L8.57238 14.351L7.55923 18.506L11.38 16.3612L12.1142 15.9491L12.8485 16.3612L16.6702 18.5065L15.6577 14.3507L15.436 13.4409L16.1561 12.8422L19.4685 10.0885L15.1008 9.57419L14.2569 9.47482ZM8.95234 8.08448L3.42913 8.73494C2.55646 8.83771 2.23111 9.93529 2.9068 10.497L7.11508 13.9956L5.82945 19.2682C5.62234 20.1176 6.52813 20.805 7.29049 20.3771L12.1142 17.6693L16.9386 20.3774C17.7009 20.8053 18.6066 20.118 18.3997 19.2687L17.1151 13.9956L21.3233 10.4971C21.999 9.93533 21.6736 8.83774 20.8009 8.73498L15.2762 8.08448L13.0262 3.0829C12.6725 2.29658 11.556 2.29659 11.2023 3.08292L8.95234 8.08448Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" d="M11.2023 3.08292C11.556 2.29659 12.6725 2.29658 13.0262 3.0829L15.2762 8.08448L20.8009 8.73498C21.6736 8.83774 21.999 9.93533 21.3233 10.4971L17.1151 13.9956L18.3997 19.2687C18.6066 20.118 17.7009 20.8053 16.9386 20.3774L12.1142 17.6693L7.29049 20.3771C6.52813 20.805 5.62234 20.1176 5.82945 19.2682L7.11508 13.9956L2.9068 10.497C2.23111 9.93529 2.55646 8.83771 3.42913 8.73494L8.95234 8.08448L11.2023 3.08292Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.11523 4.99561H16.1152C16.3914 4.99561 16.6152 5.21946 16.6152 5.49561V7.49561H7.61523V5.49561C7.61523 5.21946 7.83909 4.99561 8.11523 4.99561ZM18.1152 5.49561V7.49561H19.1152C20.7721 7.49561 22.1152 8.83875 22.1152 10.4956V16.4956C22.1152 18.1525 20.7721 19.4956 19.1152 19.4956H18.1152C18.1152 20.6002 17.2198 21.4956 16.1152 21.4956H8.11523C7.01066 21.4956 6.11523 20.6002 6.11523 19.4956H5.11523C3.45838 19.4956 2.11523 18.1525 2.11523 16.4956V10.4956C2.11523 8.83875 3.45838 7.49561 5.11523 7.49561H6.11523V5.49561C6.11523 4.39104 7.01066 3.49561 8.11523 3.49561H16.1152C17.2198 3.49561 18.1152 4.39104 18.1152 5.49561ZM6.11523 17.9956V13.4956C6.11523 12.9433 6.56295 12.4956 7.11523 12.4956H17.1152C17.6675 12.4956 18.1152 12.9433 18.1152 13.4956V17.9956H19.1152C19.9437 17.9956 20.6152 17.324 20.6152 16.4956V10.4956C20.6152 9.66718 19.9437 8.99561 19.1152 8.99561H5.11523C4.28681 8.99561 3.61523 9.66718 3.61523 10.4956V16.4956C3.61523 17.324 4.28681 17.9956 5.11523 17.9956H6.11523ZM8.11523 19.9956H16.1152C16.3914 19.9956 16.6152 19.7717 16.6152 19.4956V13.9956H7.61523V19.4956C7.61523 19.7717 7.83909 19.9956 8.11523 19.9956Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M10.8311 3.49561C9.47376 3.49561 8.31945 4.48591 8.11306 5.82745L8.01026 6.49561H4.11523C3.01066 6.49561 2.11523 7.39104 2.11523 8.49561V18.4956C2.11523 20.1525 3.45838 21.4956 5.11523 21.4956H19.1152C20.7721 21.4956 22.1152 20.1525 22.1152 18.4956V8.49561C22.1152 7.39104 21.2198 6.49561 20.1152 6.49561H16.2202L16.1174 5.82745C15.911 4.48591 14.7567 3.49561 13.3994 3.49561H10.8311ZM14.7026 6.49561L14.6349 6.05553C14.5411 5.44574 14.0164 4.99561 13.3994 4.99561H10.8311C10.2141 4.99561 9.68943 5.44574 9.59561 6.05553L9.52791 6.49561H14.7026ZM4.11523 7.99561H20.1152C20.3914 7.99561 20.6152 8.21946 20.6152 8.49561V11.4253C18.9608 12.4774 17.0765 13.1796 15.1152 13.5318V13.4956C15.1152 12.391 14.2198 11.4956 13.1152 11.4956H11.1152C10.0107 11.4956 9.11523 12.391 9.11523 13.4956V13.5318C7.15395 13.1796 5.26963 12.4774 3.61523 11.4253V8.49561C3.61523 8.21946 3.83909 7.99561 4.11523 7.99561ZM9.11523 15.0538C7.18199 14.736 5.30924 14.1078 3.61523 13.1692V18.4956C3.61523 19.324 4.28681 19.9956 5.11523 19.9956H19.1152C19.9437 19.9956 20.6152 19.324 20.6152 18.4956V13.1692C18.9212 14.1078 17.0485 14.736 15.1152 15.0538V15.4956C15.1152 16.6002 14.2198 17.4956 13.1152 17.4956H11.1152C10.0107 17.4956 9.11523 16.6002 9.11523 15.4956V15.0538ZM11.1152 12.9956H13.1152C13.3914 12.9956 13.6152 13.2195 13.6152 13.4956V15.4956C13.6152 15.7717 13.3914 15.9956 13.1152 15.9956H11.1152C10.8391 15.9956 10.6152 15.7717 10.6152 15.4956V13.4956C10.6152 13.2195 10.8391 12.9956 11.1152 12.9956Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M15.7437 7.61672C16.0183 7.86079 16.3729 7.99561 16.7402 7.99561H20.1152C20.3914 7.99561 20.6152 8.21946 20.6152 8.49561V17.4956C20.6152 18.324 19.9437 18.9956 19.1152 18.9956H5.11523C4.28681 18.9956 3.61523 18.324 3.61523 17.4956V8.49561C3.61523 8.21946 3.83909 7.99561 4.11523 7.99561H7.49023C7.85761 7.99561 8.2122 7.86079 8.48678 7.61672L9.88429 6.37449C10.1589 6.13042 10.5135 5.99561 10.8808 5.99561H13.3496C13.717 5.99561 14.0716 6.13042 14.3462 6.37449L15.7437 7.61672ZM4.11523 6.49561H7.49023L8.88774 5.25338C9.43689 4.76524 10.1461 4.49561 10.8808 4.49561H13.3496C14.0844 4.49561 14.7936 4.76524 15.3427 5.25338L16.7402 6.49561H20.1152C21.2198 6.49561 22.1152 7.39104 22.1152 8.49561V17.4956C22.1152 19.1525 20.7721 20.4956 19.1152 20.4956H5.11523C3.45838 20.4956 2.11523 19.1525 2.11523 17.4956V8.49561C2.11523 7.39104 3.01066 6.49561 4.11523 6.49561ZM12.1152 10.9956C13.2198 10.9956 14.1152 11.891 14.1152 12.9956C14.1152 14.1002 13.2198 14.9956 12.1152 14.9956C11.0107 14.9956 10.1152 14.1002 10.1152 12.9956C10.1152 11.891 11.0107 10.9956 12.1152 10.9956ZM12.1152 9.49561C14.0482 9.49561 15.6152 11.0626 15.6152 12.9956C15.6152 14.9286 14.0482 16.4956 12.1152 16.4956C10.1822 16.4956 8.61523 14.9286 8.61523 12.9956C8.61523 11.0626 10.1822 9.49561 12.1152 9.49561Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.494 16.9956L16.8836 9.14667C16.7013 6.8038 14.7471 4.99561 12.3971 4.99561H11.8334C9.48341 4.99561 7.52913 6.80379 7.3469 9.14666L6.73643 16.9956L17.494 16.9956ZM5.85142 9.03034L5.2319 16.9956L4.11523 16.9956V18.4956L5.11523 18.4956H6.61976H8.24125C8.68529 20.2208 10.2514 21.4956 12.1152 21.4956C13.9791 21.4956 15.5452 20.2208 15.9892 18.4956H17.6107H19.1152H20.1152V16.9956H18.9986L18.379 9.03035C18.1361 5.90653 15.5304 3.49561 12.3971 3.49561H11.8334C8.7001 3.49561 6.09439 5.90652 5.85142 9.03034ZM14.4072 18.4956L9.82326 18.4956C10.209 19.3786 11.0901 19.9956 12.1152 19.9956C13.1404 19.9956 14.0214 19.3786 14.4072 18.4956Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.3922 18.3795L6.02601 15.5622L8.6622 7.99624C9.43551 5.77683 11.785 4.53881 14.0543 5.155L14.5749 5.29634C16.8442 5.91253 18.2681 8.17514 17.8427 10.489L16.3922 18.3795ZM4.07708 16.5946L4.07952 16.5876L3.11523 16.3255L3.49836 14.8753L4.57426 15.1677L7.24828 7.49316C8.27935 4.53394 11.412 2.88325 14.4378 3.70483L14.9583 3.84618C17.9841 4.66776 19.8826 7.68457 19.3154 10.7698L17.844 18.774L18.9192 19.0662L18.536 20.5165L17.5719 20.2544L17.5711 20.2586L16.1192 19.8644L14.5581 19.4405C13.6846 21.0095 11.8458 21.8448 10.0493 21.357C8.25273 20.8692 7.07245 19.2141 7.09009 17.4127L5.52893 16.9888L4.07708 16.5946ZM8.61342 17.8264C8.75396 18.8041 9.45216 19.6406 10.4327 19.9068C11.4133 20.1731 12.4306 19.8024 13.0348 19.0269L8.61342 17.8264Z" fill="#D3D4DB"/>' +
                '<path class="svgImagesColor" d="M22.1152 12.4956C22.1152 14.7047 20.3244 16.4956 18.1152 16.4956C15.9061 16.4956 14.1152 14.7047 14.1152 12.4956C14.1152 10.2865 15.9061 8.49561 18.1152 8.49561C20.3244 8.49561 22.1152 10.2865 22.1152 12.4956Z" fill="#FF4F12"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor"" fill-rule="evenodd" clip-rule="evenodd" d="M14.6152 11.4956V7.49561C14.6152 6.11489 13.4959 4.99561 12.1152 4.99561C10.7345 4.99561 9.61523 6.11489 9.61523 7.49561V11.4956C9.61523 12.8763 10.7345 13.9956 12.1152 13.9956C13.4959 13.9956 14.6152 12.8763 14.6152 11.4956ZM12.1152 3.49561C9.90609 3.49561 8.11523 5.28647 8.11523 7.49561V11.4956C8.11523 13.7047 9.90609 15.4956 12.1152 15.4956C14.3244 15.4956 16.1152 13.7047 16.1152 11.4956V7.49561C16.1152 5.28647 14.3244 3.49561 12.1152 3.49561ZM8.20202 15.8716C7.02707 15.1379 6.07713 14.0881 5.46008 12.839L4.11523 13.5034C4.85524 15.0014 5.99534 16.262 7.40754 17.1439C8.6092 17.8942 9.96741 18.345 11.3695 18.4639V19.9956H9.11523V21.4956H15.1152V19.9956H12.8695V18.4639C14.2651 18.3456 15.6174 17.8984 16.8152 17.1541C18.2292 16.2753 19.372 15.0171 20.1152 13.5207L18.7718 12.8535C18.1521 14.1012 17.1999 15.1489 16.0234 15.88C14.847 16.6111 13.4924 16.9971 12.1115 16.9956C10.7307 16.9941 9.37688 16.6052 8.20202 15.8716Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M22.1152 5.74561H2.11523V7.24561H22.1152V5.74561ZM6.11523 11.7456H18.1152V13.2456H6.11523V11.7456ZM10.1152 17.7456H14.1152V19.2456H10.1152V17.7456Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.61523 7.96786V17.4956C3.61523 18.324 4.28681 18.9956 5.11523 18.9956H19.1152C19.9437 18.9956 20.6152 18.324 20.6152 17.4956V7.96786L12.621 15.2682C12.3345 15.5297 11.8959 15.5297 11.6095 15.2682L3.61523 7.96786ZM20.5505 5.99561H3.67993L12.1152 13.6987L20.5505 5.99561ZM2.11523 5.49561C2.11523 4.94332 2.56295 4.49561 3.11523 4.49561H21.1152C21.6675 4.49561 22.1152 4.94332 22.1152 5.49561V17.4956C22.1152 19.1525 20.7721 20.4956 19.1152 20.4956H5.11523C3.45838 20.4956 2.11523 19.1525 2.11523 17.4956V5.49561Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.61523 7.96786V17.4956C3.61523 18.324 4.28681 18.9956 5.11523 18.9956H19.1152C19.9437 18.9956 20.6152 18.324 20.6152 17.4956V5.99561H3.67993L12.1224 13.7052L14.1174 11.9347L15.1131 13.0565L12.6131 15.2753C12.326 15.5301 11.8929 15.527 11.6095 15.2682L3.61523 7.96786ZM2.11523 5.49561C2.11523 4.94332 2.56295 4.49561 3.11523 4.49561H21.1152C21.6675 4.49561 22.1152 4.94332 22.1152 5.49561V17.4956C22.1152 19.1525 20.7721 20.4956 19.1152 20.4956H5.11523C3.45838 20.4956 2.11523 19.1525 2.11523 17.4956V5.49561Z" fill="#D3D4DB"/>' +
                '<path class="svgImagesColor" d="M24.1152 12.4956C24.1152 14.7047 22.3244 16.4956 20.1152 16.4956C17.9061 16.4956 16.1152 14.7047 16.1152 12.4956C16.1152 10.2865 17.9061 8.49561 20.1152 8.49561C22.3244 8.49561 24.1152 10.2865 24.1152 12.4956Z" fill="#FF4F12"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.11523 5.99561H11.1152V4.49561H7.11523C5.45838 4.49561 4.11523 5.83875 4.11523 7.49561V17.4956C4.11523 19.1525 5.45838 20.4956 7.11523 20.4956H17.1152C18.7721 20.4956 20.1152 19.1525 20.1152 17.4956V13.4956H18.6152V17.4956C18.6152 18.324 17.9437 18.9956 17.1152 18.9956H7.11523C6.28681 18.9956 5.61523 18.324 5.61523 17.4956V7.49561C5.61523 6.66718 6.28681 5.99561 7.11523 5.99561ZM15.1152 5.9956L17.5546 5.99561L9.0849 14.4653L10.1456 15.5259L18.6152 7.05633V9.49561H20.1152V5.24561C20.1152 4.8314 19.7795 4.49561 19.3652 4.49561L15.1152 4.49561L15.1152 5.9956Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.3056 13.2445L15.5797 14.9704L16.6403 16.0311L19.6455 13.0259C19.9384 12.733 19.9384 12.2581 19.6455 11.9652L16.6403 8.95996L15.5797 10.0206L17.3035 11.7445L4.11523 11.7445L4.11523 13.2445L17.3056 13.2445Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.6115 3.6173V7.49561H15.1115L18.1139 7.49561C19.9051 7.49561 21.2972 9.05506 21.0947 10.8348L20.6138 15.0609C20.3263 17.5873 18.1886 19.4956 15.6459 19.4956L8.61374 19.4956L8.61331 19.4956H7.11331H5.11523C4.01066 19.4956 3.11523 18.6002 3.11523 17.4956V9.49561C3.11523 8.39104 4.01066 7.49561 5.11523 7.49561H7.11331H7.43766L9.55194 2.75335C9.893 1.98836 10.6522 1.49561 11.4898 1.49561C12.6615 1.4956 13.6115 2.44552 13.6115 3.6173ZM15.6459 17.9956L8.61374 17.9956L8.61374 8.5414L10.9219 3.36415C11.0219 3.13999 11.2443 2.99561 11.4898 2.99561C11.8331 2.99561 12.1115 3.27395 12.1115 3.6173V7.49561C12.1115 8.32403 12.783 8.99561 13.6115 8.99561L18.1139 8.99561C19.0095 8.99561 19.7055 9.77534 19.6043 10.6652L19.1234 14.8913C18.9222 16.6598 17.4258 17.9956 15.6459 17.9956ZM5.11523 8.99561H7.11331V17.9956H5.11523C4.83909 17.9956 4.61523 17.7718 4.61523 17.4956V9.49561C4.61523 9.21947 4.83909 8.99561 5.11523 8.99561Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
                '<div><svg class="svgImages" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path class="svgImagesColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.1152 5.99561H5.11523C4.28681 5.99561 3.61523 6.66718 3.61523 7.49561V12.8055L7.11696 9.69286C7.39241 9.44802 7.80493 9.43958 8.09016 9.67295L13.1354 13.8008L14.6652 12.6534C14.9433 12.4448 15.3283 12.4547 15.5954 12.6773L20.6152 16.8605V7.49561C20.6152 6.66718 19.9437 5.99561 19.1152 5.99561ZM20.2337 18.4951L15.0907 14.2093L13.5652 15.3534C13.2892 15.5605 12.9074 15.5524 12.6403 15.3339L7.6354 11.239L3.61523 14.8124V17.4956C3.61523 18.324 4.28681 18.9956 5.11523 18.9956H19.1152C19.5597 18.9956 19.9591 18.8023 20.2337 18.4951ZM5.11523 4.49561C3.45838 4.49561 2.11523 5.83875 2.11523 7.49561V17.4956C2.11523 19.1525 3.45838 20.4956 5.11523 20.4956H19.1152C20.7721 20.4956 22.1152 19.1525 22.1152 17.4956V7.49561C22.1152 5.83875 20.7721 4.49561 19.1152 4.49561H5.11523ZM14.1152 8.99561C14.1152 8.16718 14.7868 7.49561 15.6152 7.49561C16.4437 7.49561 17.1152 8.16718 17.1152 8.99561C17.1152 9.82403 16.4437 10.4956 15.6152 10.4956C14.7868 10.4956 14.1152 9.82403 14.1152 8.99561Z" fill="#D3D4DB"/>' +
                '</svg></div>' +
            '</div>' +
        '</div>' +
    '</div>';
    document.querySelector('#rightMenu').innerHTML = data;
}