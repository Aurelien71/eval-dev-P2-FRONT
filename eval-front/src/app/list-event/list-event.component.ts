import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EvenementService } from '../services/evenement.service';
import { CommonModule } from '@angular/common';
import { EvenementDTO } from '../models/evenementDTO';

@Component({
  selector: 'app-list-event',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent implements OnInit {
  evenements?: EvenementDTO[]
  constructor(
    private router: Router,
    private evenementService: EvenementService
  ) {
  }

  ngOnInit(): void {
    this.evenementService.getAllEvents().subscribe((evenements) => {
      this.evenements = evenements;
    });
  }

  deleteEvenement(id: string) {
    this.evenementService.deleteEvenement(id).subscribe(() => {
      this.evenements = this.evenements?.filter(e => e.Id !== id);
    })
  }
}
