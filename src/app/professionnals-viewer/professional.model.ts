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
    types: string[] = [];
    subscribed: boolean = false;
    events: Event[] = [];
    relative_url: string = "";
}