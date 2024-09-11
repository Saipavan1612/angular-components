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

  onSubmit(title: string, request: string) {
    console.log('Submitted');

    console.log(title);
    console.log(request);
    this.add.emit({ title: title, request: request })
    this.form().nativeElement.reset();
  }
}
