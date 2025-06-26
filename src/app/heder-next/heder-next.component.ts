import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-heder-next',
  imports: [],
  templateUrl: './heder-next.component.html',
  styleUrl: './heder-next.component.scss',
})
export class HederNextComponent {


  nameLabel: string = 'Name:';
  surNameLabel: string = 'Surname:';
  ageLabel: string = 'Age:';
  buttonLabbel: string = 'Save';
  SurnameIsDissable = true;
  AgeIsDissable = false;

   text = ''; 

  showMyValue(value: String) {
    console.log(value);
  }

  onKeyUp(event: KeyboardEvent) {
    console.log('${event.key}')
}
onClicked(event:Event){
  console.log("double click");
}




}

