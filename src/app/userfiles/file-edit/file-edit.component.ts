import { Component, OnInit } from '@angular/core';
import {FileService} from '../file.service';
import {ActivatedRoute, Router} from '@angular/router';

export class RenameDto{
  filename: string;
}

@Component({
  selector: 'app-file-edit',
  templateUrl: './file-edit.component.html',
  styleUrls: ['./file-edit.component.css']
})
export class FileEditComponent implements OnInit {

  renameDto: RenameDto = new RenameDto();
  id: string;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router, private fileService: FileService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.renameDto.filename = this.route.snapshot.params['name'];
  }

  onSubmit() {
    console.log(this.renameDto);
    this.fileService.rename(this.id, this.renameDto)
      .subscribe(
      () => this.gotoFileList(),
      error => this.errorMessage = <any> error);
  }

  gotoFileList() {
    this.router.navigate(['/files/list']);
  }

}
