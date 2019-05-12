import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()

export class AppConfig {
  private _config: { [key: string]: string };

    constructor() {
      this._config = {
        PathAPI: '/'
      };
    }

    get setting():{ [key: string]: string } {
        return this._config;
    }

    get(key: any) {
        return this._config[key];
    }
};
