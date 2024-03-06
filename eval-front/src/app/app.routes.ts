import { Routes } from '@angular/router';
import { ListEventComponent } from './list-event/list-event.component';
import { AddEventComponent } from './add-event/add-event.component';

export const routes: Routes = [
    { path: 'add', component: AddEventComponent },
    { path: "list", component: ListEventComponent },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
];
