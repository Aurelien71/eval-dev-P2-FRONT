import { Routes } from '@angular/router';
import { ListEventComponent } from './list-event/list-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEvenementComponent } from './edit-evenement/edit-evenement.component';

export const routes: Routes = [
    { path: 'add', component: AddEventComponent },
    { path: 'edit', component: EditEvenementComponent },
    { path: "list", component: ListEventComponent },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
];
