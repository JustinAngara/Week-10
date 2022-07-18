let first = document.getElementById('first-name');
let last = document.getElementById('last-name');
let email = document.getElementById('email-add');
let numberId=0;

btn.addEventListener("click", function() {
    numberId=createTable(first,last,email,numberId+1);
    first.value="";
    last.value="";
    email.value="";
});



function createTable(f,l,e,numberId){
    let table=`
    <tr>
        <th scope="row">${numberId}</th>
        <td>${f.value}</td>
        <td>${l.value}</td>
        <td>${e.value}</td>
    </tr>
    `;

    $('table').append(table);

    return numberId++;
}