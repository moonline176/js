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

let obj = JSON.parse(json);
console.log(obj);

for(let row of obj) {
    console.log(row);
}

createTable();
function createTable(){            
    let tableTag = document.createElement('table');
    tableTag.setAttribute('border','1');
    for(let row of obj){
        let trTag = document.createElement('tr');
        for(let field in row){
            let tdTag = document.createElement('td');
            if(field == 'name')
            tdTag.style.backgroundColor = "skyblue";
            let text = document.createTextNode(row[field]);
            tdTag.appendChild(text); // 10~12 : td를 만드는 코드    
            trTag.appendChild(tdTag); 
        }
        tableTag.appendChild(trTag);
    }
    document.getElementById('show').appendChild(tableTag);
}

