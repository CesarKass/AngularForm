import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {
  contactForm !: FormGroup;
  // campo = new FormControl();
  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit(): void {
    console.log(this.contactForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      name : ['', [Validators.required, Validators.minLength(3)]],
      email : ['', [Validators.required, Validators.minLength(3)]],
      dep : ['', [Validators.required]],
      coment : ['', [Validators.required, Validators.minLength(5)]],
      checkR : ['', [Validators.required]]
    })
  }

}