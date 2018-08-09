import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FileService} from '../file.service';
import {UserFile} from '../userfile';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  files: any;
  errorMessage: string;

  constructor(private router: Router, private fileService: FileService) {
  }

  ngOnInit() {
    this.fileService.getFiles()
      .subscribe(files => this.files = files,
        error => {
          this.router.navigate(['/index']);
          this.errorMessage = <any> error;
        });
  }

  renameFile(file: UserFile) {
    this.router.navigate(['/files', file.id, 'edit', file.filename]);
  }

  deleteFile(file: UserFile) {
    this.fileService.deleteFile(file)
      .subscribe(() => this.ngOnInit(),
        error => this.errorMessage = <any> error);
  }

}
