import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contactform';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public contact : Contact;
  constructor() { 
    this.contact = new Contact( "",  "",  "",  "", false );
  }

  ngOnInit(): void {
    
  }


  onSubmit(values: any):void {
    console.log(values);
  }

}
