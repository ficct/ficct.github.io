import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clarity-faculty';
  option = 'acerca';

  cambiar(o:string): void{
    this.option=o;
    console.log(this.option);
  }

}
