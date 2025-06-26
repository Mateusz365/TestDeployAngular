import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  firstName = "Mateusz";
  age=10;
  listOfName: String[] = ['Mateusz','Aleksandra']; //tablice JS/TS są dynamiczne
  i="Mateusz"
  isEditable: boolean = true


  myLabel="My First Label";
  
  
  //metody klasy
  show(){
    console.log(this.firstName)
    console.log(this.age)
  }
}

let i=3

const pi = 3.14


// for(let i=0; i<10; i++){
//   console.log(i);
// }

// Typowanie dynamiczne bez typu
let dataFromAPI: any 
  dataFromAPI=1
  dataFromAPI=new Date();
  dataFromAPI='Moje imie';

type Animal = 'Lion' | 'Elephant'
let x:Animal = 'Elephant'

type OnOff = 'On' | 'Off';
let isOn:OnOff = 'Off';

type Kostka = 1|2|3|4|5|6;
let NowaKostka:Kostka = 2

