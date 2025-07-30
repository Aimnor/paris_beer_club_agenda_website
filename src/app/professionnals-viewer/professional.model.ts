import { DayPilot } from "@daypilot/daypilot-lite-angular";

export class Event {
    address: string = "";
    date: string = "";
    link: string = "";
    name: string = "";
}

export class Professional {
    name: string = "";
    display_name: string = "";
    email: string = "";
    phone: string = "";
    address: string = "";
    urls: string[] = [];
    page_type: string = "";
    subscribed: boolean = false;
    events: Event[] = [];
    relative_url: string = "";
}