import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IUser } from 'app/user/user';

@Injectable()


export class UserService {


    constructor(private http: HttpClient) { }
    fetchUser(): Observable<Object> {
        return this.http.get('/assets/i18n/user-gurucricket.json');
    }
    fUser(): Observable<IUser[]> {
        return this.http.get<IUser[]>('/assets/i18n/user-gurucricket.json');
    }


}
