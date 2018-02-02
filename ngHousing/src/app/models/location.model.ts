import { Contact } from './contact.model';

export class Location {
  contact: Contact;
  lat: number;
  lng: number;
  address: string;
  label?: string;
  draggable: boolean;
}
