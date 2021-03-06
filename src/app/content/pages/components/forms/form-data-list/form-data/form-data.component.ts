import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../../../core/services/api.service';
import { environment } from '../../../../../../../environments/environment'
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
  formId = '';
  canShow: boolean;
  data: any;
  getDataList:any;
  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private _change: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.formId = this.route.snapshot.paramMap.get("id");
   this.getDataList = this.apiService.getTypeRequest(`${environment["data_url"]}/getAllDataByFormId`, this.formId).subscribe(res => {
      if (res && res['response'].length) {
        this.canShow = true;
        let dataToBesubmit = [];
        res['response'].forEach((value) => {
          let data = {}
          value.data.forEach(val => {
            data[val.label] = val.value;
          })
          dataToBesubmit.push(data);
        })
        this.data = res['response'];
        this.createTable(dataToBesubmit);
        this._change.detectChanges();
      }
      else {
        this.canShow = false
      }
    })
  }
  onTableKeyChange(){}

  createTable(dataToBesubmit) {
    let data: any = {
      "data": dataToBesubmit
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
    if (this.selectedtableKey) {
      this.expotedTableKey.splice(this.expotedTableKey.indexOf(this.selectedtableKey), 1)
    }
  }
  pushTableData() {
    this.expotedTableKey = this.tableKey;
  }

  ngOnDestroy() {
    this.getDataList.unsubscribe();
  }
}
