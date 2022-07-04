import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  searchPlaceholder: string = 'Search for weather';
  place:string | undefined
  
  @Output() formSubmitEvent = new EventEmitter<string>();

  constructor() { 
  }

  ngOnInit(): void { 
  }

  submitForm() {
    // emit event
    this.formSubmitEvent.emit(this.place);
    //console.log("place ", this.place);
    this.place = '';
  }

}
