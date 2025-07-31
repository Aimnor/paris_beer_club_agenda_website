import { importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, NgModule } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app'; // Import your root component
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CalendarViewer } from './calendar-viewer/calendar-viewer';
import { ProfessionnalsViewer } from './professionnals-viewer/professionnals-viewer';
import { FieldViewer } from './professionnals-viewer/field-viewer';
import { DayPilotModule } from "@daypilot/daypilot-lite-angular";
import { ProfessionnalViewer } from './professionnals-viewer/professionnal-viewer';

@NgModule({
    declarations: [
        App,
        CalendarViewer,
        ProfessionnalViewer,
        ProfessionnalsViewer,
        FieldViewer
    ],
    imports: [
        BrowserModule,
        DayPilotModule,
        HttpClientModule,
        RouterOutlet
    ],
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        importProvidersFrom(HttpClientModule)
    ],
    bootstrap: [App]
})
export class AppModule {

}