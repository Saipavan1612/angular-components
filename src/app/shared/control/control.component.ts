import { Component, ElementRef, HostBinding, HostListener, Input, ViewEncapsulation, inject } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)' : 'onClick()'
  } 
})
export class ControlComponent {
  //@HostBinding('class') className = 'control';
  // @HostListener('click')  onClick() {
  //   console.log('Clicked !!!');
  // }
  @Input({required:true}) label!:string;


  private ele = inject(ElementRef);

  onClick() {
    console.log('Clicked !!!');
    console.log(this.ele);

  }

}
