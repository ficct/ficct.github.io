import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  constructor() { }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  ngOnInit(): void {
  }

}
