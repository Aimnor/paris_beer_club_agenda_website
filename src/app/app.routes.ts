import { Routes } from '@angular/router';
import { CalendarApp } from './calendar';
import { App } from './app';
import { ProfessionalsApp } from './professionnals';

export const routes: Routes = [
    { path: "", component: App },
    { path: "calendar", component: CalendarApp },
    { path: "professionnals", component: ProfessionalsApp }
];
