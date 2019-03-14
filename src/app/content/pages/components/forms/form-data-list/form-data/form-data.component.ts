import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
import { MatSnackBar } from '@angular/material';
declare let jsPDF: any;
@Component({
  selector: 'm-user-select-list',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit {
  tableKey;
  displayedColumns: string[];
  dataSource;
  keyFileds = [];
  selection = new SelectionModel<any>(true, []);
  selectedtableKey = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  tableData = [];
  dataToBePrint = [];
  newData = [];
  expotedTableKey = [];
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createTable();
  }
  createTable() {
    let data: any = {
      "data": [{ "textField2": "weew", "textArea2": "4234234234", "checkbox2": true, "radio2": "", "number2": 323423, "submit": true, "textField21": "weew", "textArea21": "4234234234", "checkbox21": true, "radio21": "", "number21": 323423, "submit1": true },
      { "textField2": "abc", "textArea2": "98876576", "checkbox2": true, "radio3": "", "number": 32342309, "submit": true, "textField21": "iyuiui", "textArea21": "4234234234", "checkbox21": true, "radio21": "", "number21": 323423, "submit1": true }
      ]
    }
    let first_data = data['data'][0];
    this.keyFileds = Object.keys(first_data);
    this.displayedColumns = this.keyFileds;
    this.tableKey = this.keyFileds;
    this.tableData = data['data'];
    this.newData = data['data'];
    this.dataSource = new MatTableDataSource<any>(data['data']);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 200)
  }

  selectedTab(tab) {
    if (tab.index === 0) {
      this.dataSource.sort = this.sort;
    }
  }
  

  modifyTable() {
    this.displayedColumns = this.tableKey;
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 200)
    this.modifyTableData();
    this.snackBar.open('Modify Table Successfully', '', {
      duration: 3000
    });
  }

  modifyTableData() {
    this.newData = [];
    for (let i = 0; i < this.tableData.length; i++) {
      let json = {};
      this.tableKey.forEach(element => {
        json[element] = this.tableData[i][element]
      });
      this.newData.push(json);
    }
  }
  exportCsv() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'table data',
      headers: this.tableKey,
      nullToEmptyString: true,
    };
    new Angular5Csv(this.newData, 'My Report', options);

  }
  exportPdf() {
    var col = this.tableKey;
    var rows = [];
    this.newData.forEach((element, key) => {
      var temp = [];
      Object.keys(element).forEach((value) => {
        temp.push(element[value]);
      })
      rows.push(temp);
    });
    console.log(rows);
    var doc: any = new jsPDF('p', 'pt');
    doc.autoTable(col, rows);
    doc.save('table.pdf');
  }
  moveToButtom() {
    if (this.selectedtableKey) {
      let index = this.expotedTableKey.indexOf(this.selectedtableKey)
      if (index + 1 < this.expotedTableKey.length) {
        let preIndexValue = this.expotedTableKey[index + 1];
        let tabledata = JSON.parse(JSON.stringify(this.expotedTableKey));
        tabledata.splice(index + 1, 1, this.expotedTableKey[index]);
        tabledata.splice(index, 1, preIndexValue);
        console.log("tabledata", tabledata)
        this.expotedTableKey = JSON.parse(JSON.stringify(tabledata));
        this.tableKey = JSON.parse(JSON.stringify(tabledata));

      }
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  clear(val) {
    this.applyFilter('')
    return val.value = '';
  }
  moveToTop() {
    if (this.selectedtableKey) {
      let index = this.expotedTableKey.indexOf(this.selectedtableKey)
      if (index > 0) {
        let preIndexValue = this.expotedTableKey[index - 1];
        let tabledata = JSON.parse(JSON.stringify(this.expotedTableKey));
        tabledata.splice(index - 1, 1, this.expotedTableKey[index]);
        tabledata.splice(index, 1, preIndexValue);
        this.expotedTableKey = JSON.parse(JSON.stringify(tabledata));
        this.tableKey = tabledata;
      }
    }
  }
  popTableData() {
    console.log("this.selectedtableKey", this.selectedtableKey)
    if (this.selectedtableKey) {
      this.expotedTableKey.splice(this.expotedTableKey.indexOf(this.selectedtableKey), 1)
      // this.tableKey.splice(this.expotedTableKey.indexOf(this.selectedtableKey), 1)
    }
  }
  pushTableData() {
    this.expotedTableKey = this.tableKey;
  }
}
