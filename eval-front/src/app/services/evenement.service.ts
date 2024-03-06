import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { EvenementDTO } from "../models/evenementDTO";
import { EvenementModel } from "../models/evenementModel";

@Injectable({
    providedIn: 'root',
})
export class EvenementService{

    constructor(private apiService: ApiService) { }
    
    addEvent(evenement: EvenementModel): Observable<any>{
        return this.apiService.post('AddEvenementHttpTrigger', evenement);
    }

    getAllEvents(): Observable<EvenementDTO[]>{
        return this.apiService.get('GetAllEvenementHttpTrigger');
    }

    deleteEvenement(id: string): Observable<any>{
        return this.apiService.delete('DeleteEvenementHttpTrigger/' + id);
    }

    editEvenement(evenement: EvenementDTO): Observable<any>{
        return this.apiService.put('EditEvenementHttpTrigger', evenement);
    }
}

