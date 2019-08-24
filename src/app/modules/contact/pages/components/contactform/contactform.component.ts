import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ContactsService } from '../../../service/contacts.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  angForm: FormGroup;
  returnUrl: string;

  constructor(private cs: ContactsService, private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router) {
      this.createForm();
    }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/contact';
  }

  createForm(){
    this.angForm = this.fb.group({
      contact_name: ['', Validators.required],
      contact_inquiry: ['', Validators.required],
      contact_phonenumber: ['', Validators.required],
      contact_message: ['', Validators.required]
    })
  }

  addContact(contact_name, contact_inquiry, contact_phonenumber, contact_message){
    this.cs.addContact(contact_name, contact_inquiry, contact_phonenumber, contact_message);
    this.router.navigateByUrl(this.returnUrl);
  }

}
