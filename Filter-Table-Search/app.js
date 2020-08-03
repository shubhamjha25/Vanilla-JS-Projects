const searchFunction = () => {
    let filterValue = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tableRow = myTable.getElementsByTagName('tr');

    for(var i=0; i<tableRow.length; i++) {
        let td = tableRow[i].getElementsByTagName('td')[0]; 

        if(td) {
            let tdValue = td.textContent || td.innerHTML;
            if(tdValue.toUpperCase().indexOf(filterValue) > -1) {
                tableRow[i].style.display = "";
            }
            else {
                tableRow[i].style.display = "none";
            }
        }
    }
}