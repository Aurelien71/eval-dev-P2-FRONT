import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Evenement } from "../models/evenement";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class EvenementService{

    constructor(private apiService: ApiService) { }
    
    addEvent(evenement: Evenement): Observable<any>{
        return this.apiService.post('AddEvenementHttpTrigger', evenement);
    }
}

