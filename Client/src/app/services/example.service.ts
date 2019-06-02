import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import 'rxjs/observable/of';
import { BaseService } from './base.service';
import { AppConfig } from '../config/config';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ExampleService extends BaseService{

    // Ejemplo de como hacer un GET a la API
    exampleGet(param): Observable<any>  {

        // Le paso un parametro
        let params = new HttpParams();
        params = params.append('parametro', param);

        return this.http.get(this.pathAPI + '/db').map(function (res) {
          return res as number || null;
        });
    }

}