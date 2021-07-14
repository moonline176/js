let json = `[{"id":1,"first_name":"Kermy","last_name":"Reucastle","email":"kreucastle0@csmonitor.com","gender":"Female"},
{"id":2,"first_name":"Nicola","last_name":"Blue","email":"nblue1@geocities.jp","gender":"Non-binary"},
{"id":3,"first_name":"Parke","last_name":"Mueller","email":"pmueller2@europa.eu","gender":"Male"},
{"id":4,"first_name":"Issie","last_name":"Beckey","email":"ibeckey3@1688.com","gender":"Male"},
{"id":5,"first_name":"Katrinka","last_name":"Espinel","email":"kespinel4@eventbrite.com","gender":"Genderfluid"},
{"id":6,"first_name":"Casey","last_name":"Peert","email":"cpeert5@imdb.com","gender":"Genderfluid"},
{"id":7,"first_name":"Felipe","last_name":"MacFadzan","email":"fmacfadzan6@smugmug.com","gender":"Agender"},
{"id":8,"first_name":"Honey","last_name":"Litel","email":"hlitel7@guardian.co.uk","gender":"Agender"},
{"id":9,"first_name":"Larisa","last_name":"Pheazey","email":"lpheazey8@blogs.com","gender":"Genderfluid"},
{"id":10,"first_name":"Carolyne","last_name":"Withers","email":"cwithers9@nymag.com","gender":"Agender"}]`

let data = JSON.parse(json);
console.log(data);

let tableTag = document.createElement('table');
tableTag.setAttribute('border', '1');

createHeader2();
for (let row of data) {
    let trTag = document.createElement('tr');
    trTag.setAttribute('id',row.id);
    trTag.onmouseover = changeColor; // click event가 발생할때 실행할 function이름.
    trTag.onmouseout = originColor;
    trTag.onclick = mc;

    for (let field in row) {
        let tdTag = document.createElement('td');
        let text = document.createTextNode(row[field]);
        tdTag.appendChild(text); // 10~12 : td를 만드는 코드    
        trTag.appendChild(tdTag);
    }
    let btn = document.createElement('button');
    btn.onclick = delRow;
    let del = document.createTextNode('del');
    btn.appendChild(del);
    let tdTag = document.createElement('td');
    tdTag.appendChild(btn);
    trTag.appendChild(tdTag);
    tableTag.appendChild(trTag);
}
document.getElementById('show').appendChild(tableTag);

function changeColor() {
    this.style.backgroundColor = 'yellow';
}

function originColor() {
    this.style.backgroundColor = '';
}

function clickFunc(){
    this.style.backgroundColor = 'yellow';
}



function createHeader2() {
    let title = ['id', 'first_name', 'last_name', 'email', 'gender', 'Del']
    let tr = document.createElement('tr');
    for (let field of title) { // 배열일 경우에는 for..of
        let td = document.createElement('th');
        let text = document.createTextNode(field);
        td.appendChild(text);
        tr.appendChild(td);
    }
    tableTag.appendChild(tr);
}

function createHeader() {
    let row = data[0]; // {id:? , first_name:? , last_name:?}
    let tr = document.createElement('tr');
    for (let field in row) {
        let td = document.createElement('th');
        let text = document.createTextNode(field);
        td.appendChild(text);
        tr.appendChild(td);
    }
    tableTag.appendChild(tr);
}

function delRow(e) { //
    // alert('delete');
    e.stopPropagation(); // 이벤트전파 차단.
    // 데이터 삭제... id를 기준으로 데이터삭제
    let id = this.parentNode.parentNode.childNodes[0].childNodes[0].nodeValue;
    console.log(id);
    this.parentNode.parentNode.remove();

    //실제 데이터 삭제
    for(let i=0; i <data.length; i++){
        if(data[i].id == parseInt(id)) { // 6 ==='6' > true
            data.splice(i,1); // 배열메소드 ..splice()
            break;
        }
    }
    console.log(data);
}

function modRow(){
    let id = document.getElementById('eid').value; //Id항목의 id value속성
    let findTr = document.getElementById(id);
    findTr.childNodes[1].childNodes[0].nodeValue = document.getElementById('first_name').value;
    findTr.childNodes[2].childNodes[0].nodeValue = document.getElementById('last_name').value;
    findTr.childNodes[3].childNodes[0].nodeValue = document.getElementById('email').value;
    findTr.childNodes[4].childNodes[0].nodeValue = document.getElementById('gender').value;
}

function addRow(){
    let id = document.getElementById('eid').value;
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let arr = [id,first_name,last_name,email,gender];

    let trTag = document.createElement('tr');
    trTag.onmouseover = changeColor; // click event가 발생할때 실행할 function이름.
    trTag.onmouseout = originColor; 
    for(let f of arr){
        let tdTag = document.createElement('td');
        let text = document.createTextNode(f);
        tdTag.appendChild(text);
        trTag.appendChild(tdTag);
    }
    document.getElementsByTagName('table')[0].appendChild(trTag);
    let btn = document.createElement('button');
    btn.onclick = delRow;
    let del = document.createTextNode('del');
    btn.appendChild(del);
    let tdTag = document.createElement('td');
    tdTag.appendChild(btn);
    trTag.appendChild(tdTag);
    tableTag.appendChild(trTag);
}

function mc(){
    let inputs = document.getElementsByTagName('input');
    for(let i=0; i<inputs.length; i++){
        inputs[i].value = this.childNodes[i].childNodes[0].nodeValue;
    }
}