import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  @Input() movie1:any
  @Input() languages1:string[]

  @Output() language = new EventEmitter<string>();

  onSelect(value:string){
    this.language.emit(value)
  }
}
