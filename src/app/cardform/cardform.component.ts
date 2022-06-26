import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.scss']
})
export class CardformComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)]),
    cardNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)]),
    expiration: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[0-9]{4}[\/][0-9]{2}[\/][0-9]{2}$/)]),
    securityCode: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)])
  })
  constructor() { }

  ngOnInit(): void {
  }
  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }
  onSubmit() {

  }
  resetForm() {
    this.cardForm.reset();
  }

}
