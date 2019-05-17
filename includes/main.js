var size=80,even=0,random=0,i;
var letters=[],list=[];
var pairLetter='';
var chars=['A', 'B','H', 'I','O','S','Y', 'Z'];
const main = document.getElementById("MainID");
window.onload=function(){
document.getElementById("BottonBox").onclick =createBoxes; }

function createBoxes() {createLetters();
    for(i=0;i<3;i++,size+=20){
       var box=document.createElement("div");
        main.appendChild(box);
        box.style.height = size + 'px';
        box.style.width = size + 'px';
        box.style.background='black';
        box.style.color='black';
        box.style.cssFloat = "Left";
        box.style.margin = 60 + 'px';
        box.style.display  = "flex";
        box.style.alignItems = "center";
        box.style.textAlign = "center";
        box.style.className= "boxJS";

        var Letter = document.createElement('p');
        Letter.style.margin = 0.25 * size + 'px';
        Letter.style.fontSize = 0.5 * size + 'px';
        Letter.innerHTML = letters[i];
        box.appendChild(Letter);

        box.addEventListener('click', clickOnBox);
        main.appendChild(box);
    }
    letters=[];
}
function createLetters(){
    i=0;
    if (even % 2 == 0) {
        random = Math.floor(Math.random() * chars.length);
        letters.push(chars[random]);
        pairLetter=chars[random];
        random = Math.floor(Math.random() * chars.length);
        letters.push(chars[random]);
        letters.push(chars[random]);
        
    }

    else {
       
        
        random = Math.floor(Math.random() * chars.length);
        letters.push(chars[random]);
        letters.push(chars[random]);
        letters.push(pairLetter);
      
    }
    ++even;
    letters = shuffle(letters);
}
    function shuffle (charsArray) {
        for (i = 0; i < charsArray.length - 1;i++) {
            var j = i + Math.floor(Math.random() * (charsArray.length - i));
            var temp = charsArray[j];
            charsArray[j] = charsArray[i];
            charsArray[i] = temp;
        }
        return charsArray;
    }
    
    function clickOnBox () {
        if (list.length >= 2) {
            clearItems();
        }
        if (!this.className.includes('show')) {
            if (!this.className.includes('correct')) {
                this.className = this.className + 'show';
                list.push(this);
                
                if (list.length == 2) {
                    check();
                }
            }
        }
        else {
            clearItems();
        }
    }
    function clearItems() {
        for (i = 0; i < list.length; ++i) {
            list[i].className = list[i].className.replace('show', '');
        }
        list = [];
    };
    function check(){
        if (compareValues()) {
            for (i = 0; i < list.length; ++i) {
                list[i].className = list[i].className.replace('show', 'correct');console.log(list[i].className);
            }
        }
        else {
            setTimeout(function () {
                clearItems();
            }, 1000);
        }
    }
    function compareValues() {
        var str1 = list[0].innerHTML;
        var str2 = list[1].innerHTML;
    
        var index = str1.indexOf('">');
        var slashIndex = str1.indexOf('</p');
        var fstr1 = str1.substring(index + 2, slashIndex);
    
        index = str2.indexOf('">');
        slashIndex = str2.indexOf('</p');
        var fstr2 = str2.substring(index + 2, slashIndex);
    
        if (fstr1 == fstr2)
            return true;
        return false;
    }