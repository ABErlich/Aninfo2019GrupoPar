import { Injectable } from '@angular/core'
import { AppConfig } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class BaseService{

    protected pathAPI = this.config.setting['PathAPI'];

    constructor(private config: AppConfig, protected http: HttpClient){} 
}
