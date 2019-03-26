import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management.component'
import { MaterialModule } from '../../../../material/material.module';
import { NewUsersComponent } from './new-users/new-users.component';
import { UsersComponent } from './users/users.component';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { NewRoleComponent } from './new-role/new-role.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({

  imports: [
    CommonModule,
    MaterialModule,
    MatTreeModule,
    FormsModule,
		ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
        children: [{
          path: '',
          redirectTo: 'users',
          pathMatch: 'full'
        },
        {
          path: 'users',
          component: UsersComponent,
        }],
      },
      {
        path: 'new-users',
        component: NewUsersComponent,
      },
      {
        path: 'new-role',
        component: NewRoleComponent,
      }

    ])
  ],
  declarations: [UserManagementComponent, NewUsersComponent, UsersComponent, NewRoleComponent]
})
export class UserManagementModule { }
