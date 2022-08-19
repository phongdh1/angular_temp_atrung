import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { ServiceUrl } from '../_share/constants/service-url.constants';
import { BaseApiService } from "./base-api.service";

@Injectable({
    providedIn: 'root',
})


export class ManageService {

    constructor(
        private baseApiService: BaseApiService,
    ) { }

    

}