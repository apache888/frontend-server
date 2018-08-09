import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FileListComponent} from './file-list/file-list.component';
import {FileAddComponent} from './file-add/file-add.component';
import {FileEditComponent} from './file-edit/file-edit.component';
import {FileTypeSizeComponent} from './file-type-size/file-type-size.component';

const routes: Routes = [
  {path: 'files/list', component: FileListComponent},
  {path: 'files/type-size', component: FileTypeSizeComponent},
  {path: 'files/:id/edit/:name', component: FileEditComponent},
  {path: 'files/add', component: FileAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserfilesRoutingModule { }
