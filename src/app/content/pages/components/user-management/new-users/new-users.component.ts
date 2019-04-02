import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Form',
    children: [
      {name: 'Create'},
      {name: 'Read'},
      {name: 'Update'},
      {name: 'Delete'},
    ]
  },{
    name: 'Data',
    children: [
      {name: 'Create'},
      {name: 'Read'},
      {name: 'Update'},
      {name: 'Delete'},
    ]
  },{
    name: 'Report',
    children: [
      {name: 'Create'},
      {name: 'Read'},
      {name: 'Update'},
      {name: 'Delete'},
    ]
  },{
    name: 'User',
    children: [
      {name: 'Create'},
      {name: 'Read'},
      {name: 'Update'},
      {name: 'Delete'},
    ]
  }
];
@Injectable()
export class ChecklistDatabase {

  constructor() {
  
  }
}
@Component({
  selector: 'm-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss'],
  providers: [ChecklistDatabase]
})
export class NewUsersComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private database: ChecklistDatabase
  ) {
    this.dataSource.data = TREE_DATA;
 
  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  ngOnInit() {

  }
}
