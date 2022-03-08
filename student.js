class SearchableTable {
    constructor(tableData) {
        this.tableData = tableData;
        this.tableBody = document.getElementById('tableBody');
        this.searchBox = document.getElementById('searchBox');
        document.addEventListener('keyup', this.updateTable.bind(this), false);
    }

    loadTableData(searchText = null) {
        return new Promise((resolve) => {
            let tableRows = '';
            for (let row of this.tableData) {
                if (!(searchText) || row.join(' ').includes(searchText)) {
                    let [RollNo, Name,Attendence] = row;
                    tableRows += `<tr class="d-flex">
                        <th class="col-1">${RollNo}</th>
                        <td class="col-1">${Name}</td>
                        <td class="col-1">${Attendence}</td>
                    </tr>`;
                }
            }
            resolve(tableRows);
        });
    }

    init_table() {
        this.loadTableData().then((tableRows) => {
            this.tableBody.innerHTML = tableRows;
        }).catch((err) => {
            console.log(err);
        });
    }

    updateTable() {
        const inputText = this.searchBox.value.trim();
        if (!(inputText.length)) {
            this.init_table();
        } else {
            this.loadTableData(inputText).then((tableRows) => {
                this.tableBody.innerHTML = tableRows;
            }).catch((err) => {
                console.log(err);
            });
        }
    }
}

function getTableData() {
    return [
        ['01', 'Archana', 'Present'],
        ['02', 'Arjun', 'Present'],
        ['03', 'Arun', 'Present'],
        ['04', 'AnuPriya','Absent'],
        ['05', 'Bala', 'Present'],
        ['06', 'Bhavani', 'Present'],
        ['07', 'Chandhini', 'Present'],
        ['08', 'Deepak', 'Absent'],
        ['09', 'Divya', 'Present'],
        ['10','Eshwar', 'Present'],
        ['11', 'Kamalaesh', 'Present'],
        ['12', 'Kamali', 'Absent'],
        ['13', 'Kavitha', 'Present'],
        ['14', 'Latha', 'Present'],
        ['15', 'Meena', 'Present'],
        ['16', 'Meera', 'Present'],
        ['17', 'Mahir', 'Present'],
        ['18', 'Nisha', 'Present'],
        ['19', 'Nithish', 'Present'],
        ['20', 'Pavan', 'Absent'],
        ['21', 'Pradheep', 'Present'],
        ['22', 'Pooja', 'Present'],
        ['23', 'Priya', 'Present'],
        ['24', 'Ramesh', 'Present'],
        ['25', 'Raja', 'Present'],
        ['26', 'Ramya', 'Present'],
        ['27', 'Sahana', 'Present'],
        ['28', 'Siva', 'Present'],
        ['29', 'Tharun', 'Absent'],
        ['30', 'Varun', 'Present'],
    ];
}

function main() {
    let searchableTable;

    document.addEventListener('DOMContentLoaded', () => {
        searchableTable = new SearchableTable(getTableData());
        searchableTable.init_table();
    });
}

main();
