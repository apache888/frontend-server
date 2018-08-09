import {Component} from '@angular/core';
import {FileService} from '././userfiles/file.service';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // selectedFile: File = null;
  // errorMessage: string;
  //
  // constructor(private router: Router, private _http: HttpClient) {
  // }
  //
  // onFileSelected(event) {
  //   this.selectedFile = <File>event.target.files[0];
  // }
  //
  // onSubmit() {
  //   const fd = new FormData();
  //   fd.append('file', this.selectedFile, this.selectedFile.name);
  //   return this._http.post(environment.REST_API_URL + '/files', fd)
  //     .subscribe(
  //       () => this.gotoFileList(),
  //       error => this.errorMessage = <any> error);
  // }
  //
  // gotoFileList() {
  //   this.router.navigate(['/file-list']);
  // }
}
