import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HederNextComponent } from "./heder-next/heder-next.component";
import { MainBodyComponent } from "./main-body/main-body.component";
import { MyPipeComponent } from "./my-pipe/my-pipe.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HederNextComponent, MainBodyComponent, MyPipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'MyFirstProject1';
}
