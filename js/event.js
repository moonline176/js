//event.js
console.log(this);

function changeValue() {
    // id="num3" value속성을 읽어와서 그 값의 upperCase 변환.
    let elem = document.getElementById("num3").value;
    // console.log(elem);
    // console.log(elem.toUpperCase());
    document.getElementById('num3').value = elem.toUpperCase();
}

let obj = {
    name: "Hong",
    hobby: ["running", "eating", "sleeping"],
    pet: [{
        dog: "뚱순이"
    }, {
        cat: "야옹이"
    }, {
        cockroach: "바퀴"
    }]
}

console.log(obj.name);
console.log(obj.hobby[0]);
console.log(obj['hobby'][1]); // ['']로도 사용 가능
console.log(obj.pet[0].dog);
console.log(obj.pet[1].cat);
console.log(obj.pet[2].cockroach);

// 요소를 생성 ------------------------------------------------
let fruits = ['Apple', 'Orange', 'Mango', 'Melon']

function addFruit(){
    let addVal = document.getElementById('add').value;
    fruits[fruits.length] = addVal;
    document.getElementById('add').value = null;
    removeFromDoc();
    createElements();
}

function createElements(e) { //createElements() : 요소생성
    //let ulTag = document.getElementsByTagName('ul'); // document ul태그를 찾는 역할
    let ulTag = document.createElement('ul');
    ulTag.setAttribute('id', 'fruit');

    for (let fruit of fruits) {
        let liTag = document.createElement('li'); // <li></li>
        liTag.appendChild(document.createTextNode(fruit)); // .createTextNode()는 선택한 요소에 텍스트를 추가
        ulTag.appendChild(liTag); //첫번째 ul태그를 찾아 liTag를 입력
    }
    document.body.appendChild(ulTag);
}

function removeFromDoc() {
    if (document.getElementById('fruit')) { // 0,null,false 이외의 값은 전부 true
        document.getElementById('fruit').remove();
    }
    // <ul id='fruit'></ul>
}