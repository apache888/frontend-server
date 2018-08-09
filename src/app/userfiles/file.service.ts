import {Injectable} from '@angular/core';
import {UserFile} from './userfile';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/internal/operators';
import {throwError} from 'rxjs';
import {RenameDto} from './file-edit/file-edit.component';
import {TypeSizeInfoDto} from './file-type-size/file-type-size.component';

@Injectable()
export class FileService {

  errorMessage: string;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private _http: HttpClient) {
  }


  getFiles() {
    return this._http.get(environment.REST_API_URL + '/file-list', {headers: this.headers})
      .pipe(
        catchError(err => this.errorMessage = <any>err));
  }

  deleteFile(file: UserFile) {
    return this._http.delete(environment.REST_API_URL + '/files/' + file.id, {headers: this.headers})
      .pipe(
        catchError(err => this.errorMessage = <any>err));
  }

  getTypeSizes() {
    return this._http.get<TypeSizeInfoDto[]>(environment.REST_API_URL + '/type-size-info', {headers: this.headers})
      .pipe(
        catchError(err => this.errorMessage = <any>err));
  }

  rename(id: string, newName: RenameDto) {
    const body = JSON.stringify(newName);
    return this._http.patch(environment.REST_API_URL + '/files/' + id, body, {headers: this.headers})
      .pipe(
        catchError(err => this.errorMessage = <any>err));
  }

}
