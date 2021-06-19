//test
let dodajNowegoButton = document.getElementById("DodajNowegoButton");
let nameCountInput = document.getElementById('nameCount');
let nameCount = Number.parseInt(nameCountInput.value);
let table = document.getElementById('table');

function dodajNowegoButtonClick(){
    let tableRow = document.createElement('tr');
    let firstCol = document.createElement('td');
    let secondCol = document.createElement('td');
    let firstInput = document.createElement('input');
    let secondInput = document.createElement('input');
    let tbody = table.firstElementChild;
    let rows = tbody.querySelectorAll('tr');


    nameCount++;
    firstInput.name = 'name'+nameCount;
    firstInput.placeholder = "Input Name";
    firstInput.type = "text";

    secondInput.name = 'age'+nameCount;
    secondInput.placeholder = "Input age";
    secondInput.type = "text";


    firstCol.appendChild(firstInput);
    secondCol.appendChild(secondInput);
    tableRow.appendChild(firstCol);
    tableRow.appendChild(secondCol);

    //return tableRow;
    tbody.insertBefore(tableRow, rows[rows.length-1]);
    nameCountInput.value = nameCount;
}