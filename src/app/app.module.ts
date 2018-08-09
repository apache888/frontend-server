import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PartsModule} from './parts/parts.module';
import {FileListComponent} from './userfiles/file-list/file-list.component';
import {FileTypeSizeComponent} from './userfiles/file-type-size/file-type-size.component';
import {FileEditComponent} from './userfiles/file-edit/file-edit.component';
import {FileService} from './userfiles/file.service';
import {UserfilesModule} from './userfiles/userfiles.module';
import {Router} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PartsModule,
    UserfilesModule,
    AppRoutingModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
