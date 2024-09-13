import { AfterContentInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterContentInit, OnInit {

  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')

  //@Output() add = new EventEmitter;
  add = output<{ title: string, request: string }>();


  enteredTitle: string = '';
  enteredText: string = '';

  constructor() {

  }

  ngOnInit(): void {
    console.log('ON INIT - NEW TICKET');
    console.log(this.form().nativeElement)
  }

  ngAfterContentInit(): void {
    console.log('AFTER CONTENT INIT');
    console.log(this.form().nativeElement)
  }

  onSubmit() {
    console.log('Submitted');

    console.log(this.enteredTitle);
    console.log(this.enteredText);
    this.add.emit({ title: this.enteredTitle, request: this.enteredText })
    //this.form().nativeElement.reset();

    this.enteredTitle = '';
    this.enteredText = '';
  }
}
