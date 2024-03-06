import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EvenementService } from '../services/evenement.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EvenementModel } from '../models/evenementModel';
import { EvenementDTO } from '../models/evenementDTO';
import { map } from 'rxjs';

@Component({
  selector: 'app-edit-evenement',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './edit-evenement.component.html',
  styleUrl: './edit-evenement.component.css'
})
export class EditEvenementComponent implements OnInit {
  evenement!: EvenementDTO;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private evenementService: EvenementService,
    public activatedRoute: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap
    .pipe(map(() => window.history.state)).subscribe(data=>{
      var newEvent: EvenementDTO = {
        Id: data.Id,
        Titre: data.Titre,
        Description: data.Description,
        Date: data.Date,
        Heure: data.Heure,
        Lieu: data.Lieu
      };
      this.evenement = newEvent;
    })
  }

  evenementForm = this.fb.group({
    id: ['', Validators.required],
    titre: ['', Validators.required],
    description: ['', Validators.required],
    date: [null as Date | null],
    heure: ['', Validators.required],
    lieu: ['', Validators.required],
  });

  onSubmit() {
    var evenement: EvenementDTO = {
      Id: this.evenementForm.value.id as string,
      Titre: this.evenementForm.value.titre as string,
      Description: this.evenementForm.value.description as string,
      Date: this.evenementForm.value.date as Date,
      Heure: this.evenementForm.value.heure as string,
      Lieu: this.evenementForm.value.lieu as string,
    };
    
    this.evenementService.editEvenement(evenement).subscribe( () => this.router.navigate(['/']));
  }
}
