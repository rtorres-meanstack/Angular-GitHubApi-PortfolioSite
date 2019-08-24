import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  uri = '/contacts'
  constructor(private http: HttpClient) { }

  addContact(contact_name, contact_inquiry, contact_phonenumber, contact_message){
    const obj = {
      contact_name: contact_name,
      contact_inquiry: contact_inquiry,
      contact_phonenumber: contact_phonenumber,
      contact_message: contact_message
    };
    console.log(obj);
    this.http.post(`${this.uri}/create`, obj)
        .subscribe(res => console.log('Done'));
  }
}
