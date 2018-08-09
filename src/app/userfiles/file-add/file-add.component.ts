import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-file-add',
  templateUrl: './file-add.component.html',
  styleUrls: ['./file-add.component.css']
})
export class FileAddComponent implements OnInit {
  selectedFile: File = null;
  errorMessage: string;

  constructor(private router: Router, private _http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onSubmit() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    return this._http.post(environment.REST_API_URL + '/files', fd)
      .subscribe(
        () => this.gotoFileList(),
        error => {this.errorMessage = <any> error;
          this.router.navigate(['/index']);});
  }

  gotoFileList() {
    this.router.navigate(['/files/list']);
  }
}
