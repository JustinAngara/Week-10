let first = document.getElementById('first-name');
let last = document.getElementById('last-name');
let email = document.getElementById('email-add');
let numberId=0;

btn.addEventListener("click", function() {
    numberId=createTable([first,last,email],numberId+1);

});

function clearTable(elements){
    elements.map(a=>a.value="");
}


function addRows(x){
    let strTemp = "";
    x.map(a=>
        strTemp+= "\n<td>"+a.value+"</td>"   
    );
    return strTemp;
}

function createTable(x,numberId){
    let table=`
    <tr>
        <th scope="row">${numberId}</th>`+addRows(x)+`
    </tr>
    `;

    $('table').append(table);
    
    clearTable(x);

    return numberId++;
}