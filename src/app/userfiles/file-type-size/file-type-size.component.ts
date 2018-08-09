import {Component, OnInit} from '@angular/core';
import {FileService} from '../file.service';
import {Router} from '@angular/router';

export class TypeSizeInfoDto {
  type: string;
  size: string;
}

@Component({
  selector: 'app-file-type-size',
  templateUrl: './file-type-size.component.html',
  styleUrls: ['./file-type-size.component.css']
})
export class FileTypeSizeComponent implements OnInit {

  result: TypeSizeInfoDto[];
  errorMessage: string;

  constructor(private router: Router, private fileService: FileService) {
  }

  ngOnInit() {
    this.fileService.getTypeSizes()
      .subscribe(res => this.result = res,
        error => {
          this.router.navigate(['/index']);
          this.errorMessage = <any> error;
        });
  }

}
