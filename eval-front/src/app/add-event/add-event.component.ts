import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EvenementService } from '../services/evenement.service';
import { Router } from '@angular/router';
import { Evenement } from '../models/evenement';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private evenementService: EvenementService
  ) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  evenementForm = this.fb.group({
    titre: ['', Validators.required],
    description: ['', Validators.required],
    date: [null as Date | null],
    heure: ['', Validators.required],
    lieu: ['', Validators.required],
  });

  onSubmit() {
    var evenement: Evenement = {
      titre: this.evenementForm.value.titre as string,
      description: this.evenementForm.value.description as string,
      date: this.evenementForm.value.date as Date,
      heure: this.evenementForm.value.heure as string,
      lieu: this.evenementForm.value.lieu as string,
    };
    
    this.evenementService.addEvent(evenement).subscribe();

    this.router.navigate(['/']);
  }
}
