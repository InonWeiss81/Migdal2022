import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Migdal2022';
  modalOpen: boolean = false;

  ngOnInit () {
    if (!sessionStorage.getItem('modalChecked')) {
      this.modalOpen = true;
    }
  }

  openModal() {
    this.modalOpen = false;
    setTimeout(() => {
      this.modalOpen = true;
    }, 100);
    
  }

  constructor() {

  }

}
