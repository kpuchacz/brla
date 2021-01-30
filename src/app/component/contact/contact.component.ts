import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  personName: string;

  constructor() {
    console.log('contructor()');
  }

  ngOnInit(): void {
    this.personName = 'Karol Puchacz';
    console.log('ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
