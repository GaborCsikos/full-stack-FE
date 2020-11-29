import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Contact, CONTACTS } from '../entity/contact';

@Component({
  selector: 'app-contact-crud',
  templateUrl: './contact-crud.component.html',
  styleUrls: ['./contact-crud.component.css']
})
export class ContactCrudComponent implements OnInit {
  contacts: Contact[] = CONTACTS;
  contact: FormGroup;
  currentId: number;

  constructor() { }

  ngOnInit() {
  }
  editContact(contact: Contact) {
    this.contact = new FormGroup({
      name: new FormControl(contact.name),
      value: new FormControl(contact.value),
      type: new FormControl(contact.type)
    });
    this.currentId = contact.id;

  }

  saveContact() {
    const index = this.contacts.findIndex(contact => contact.id === this.currentId);
    if (index === -1) {
      this.contacts.push(this.contact.value);
      this.contact = null;
    } else {
      this.contacts[index] = this.contact.value;
    }
    this.contact = null;
    this.currentId = null;
  }

  cancelContact() {
    this.contact = null;
    this.currentId = null;
  }

  addContact() {
    const contactToAdd: Contact = {
      id: null,
      name: null,
      value: null,
      type: null
    };

    this.contact = new FormGroup({
      name: new FormControl(contactToAdd.name),
      value: new FormControl(contactToAdd.value),
      type: new FormControl(contactToAdd.type)
    });
    this.currentId = null;
  }

  deleteContact(contact: Contact){
    this.contacts.forEach( (item, index) => {
      if (item === contact) { this.contacts.splice(index, 1); }
    });
    this.currentId = null;
  }

}
