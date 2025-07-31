import { Routes } from '@angular/router';
import { HomeApp } from './home';
import { CalendarViewer } from './calendar-viewer/calendar-viewer';
import { ProfessionnalsViewer } from './professionnals-viewer/professionnals-viewer';

export const routes: Routes = [
    { path: "", component: HomeApp },
    { path: "calendar", component: CalendarViewer },
    { path: "professionnals", component: ProfessionnalsViewer }
];
