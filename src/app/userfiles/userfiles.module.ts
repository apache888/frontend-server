import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserfilesRoutingModule } from './userfiles-routing.module';
import { FileAddComponent } from './file-add/file-add.component';
import { FileEditComponent } from './file-edit/file-edit.component';
import { FileListComponent } from './file-list/file-list.component';
import { FileTypeSizeComponent } from './file-type-size/file-type-size.component';
import {FormsModule} from '@angular/forms';
import {FileService} from './file.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserfilesRoutingModule
  ],
  declarations: [
    FileAddComponent,
    FileEditComponent,
    FileListComponent,
    FileTypeSizeComponent],
  providers: [FileService]
})
export class UserfilesModule { }
