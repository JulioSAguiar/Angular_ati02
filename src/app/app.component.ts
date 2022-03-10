import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ex04';

  alertar1(e: any) {
    console.log('Pacote 1 adquirido')
    console.log(e)
  }

  alertar2(e: any) {
    console.log('Pacote 2 adquirido')
    console.log(e)
  }

  alertar3(e: any) {
    console.log('Pacote 3 adquirido')
    console.log(e)
  }
}