import { Component, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-my-pipe',
  imports: [],
  templateUrl: './my-pipe.component.html',
  styleUrl: './my-pipe.component.scss',
})
export class MyPipeComponent {
  name = 'madcdsteusz';

  isDisabled = false; //przekazywanie property do HTML

  buttonStats: 'on' | 'off' | 'unknown' = 'off';

  mainlabel: string = 'Default value';

  Person = {
    r: 0,
    g: 0,
    b: 0,
  };

  makeUpperCase() {
    this.name = this.name.toUpperCase();
    console.log(this.name);
  }
  makeLoweCase() {
    this.name = this.name.toLowerCase();
    console.log(`Hello ${this.name}`);
  }

  saveValue2(str: string) {
    this.mainlabel = (
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    ).trim();
  }

}

let per = new MyPipeComponent();
console.log(per.buttonStats)




