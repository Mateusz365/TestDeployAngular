import { Component } from '@angular/core';

@Component({
  selector: 'app-main-body',
  imports: [],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.scss',
})
export class MainBodyComponent {
  title = 'Mój drugi komponent';

  nameInputLabel = 'Imie/Name';
  surnameInputLabel = 'Nazwisko/Surname';
  inputIsDissabled = true;

  valueName: String = '';

  clickMyButton() {
    if (this.inputIsDissabled == true) {
      this.inputIsDissabled = false;
    }
  }

  clickMyButton2() {
    if (this.inputIsDissabled == false) {
      this.inputIsDissabled = true;
    }
  }

  showMyNameValue(message: String) {
    this.valueName = message;
    console.log(this.valueName);
  }

  monitor(message: string) {
    if (message.length > 0) {
      console.log(`Hello ${message}, how old are you?`);
    }
  }

  clickMyButtonSave(e: Event) {
    if (this.valueName.length > 0) {
      console.log(`Witaj ${this.valueName} miło cie poznać`);
    }
  }
}
