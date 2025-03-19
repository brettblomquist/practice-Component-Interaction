import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() inputText: String = '';

  message:String='';

  sendMessage(){
    this.outputValue.emit(this.message);
  }

  @Output() outputValue: EventEmitter<String> = new EventEmitter<String>()
}
