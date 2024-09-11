import { Component, DestroyRef, OnInit, effect, inject, signal } from '@angular/core';

@Component({
     selector: 'app-server-status',
     standalone: true,
     imports: [],
     templateUrl: './server-status.component.html',
     styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
     currentStatus = signal<'online' | 'offline' | 'unknown'>('online');

     //private timout?: ReturnType<typeof setInterval>;

     private destroyRef = inject(DestroyRef);

     constructor() {
          effect(() => {
               //THIS ALLOWS TO RUN CODE WHEN SIGNAL VALUE CHANGES
               console.log(this.currentStatus())
          });
     }

     ngOnInit() {
          console.log('ON INIT')
          const interval = setInterval(() => {
               const rnd = Math.random();
               if (rnd < 0.5) {
                    this.currentStatus.set('online');
               } else if (rnd < 0.9) {
                    this.currentStatus.set('offline');
               } else {
                    this.currentStatus.set('unknown');
               }
               console.log(this.currentStatus);
          }, 5000);

          this.destroyRef.onDestroy(() => {
               clearInterval(interval);
          })
     }

     ngAfterViewInit() {
          console.log('AFTER VIEW INIT')
     }

     // ngOnDestroy() {
     //      clearTimeout(this.timout);
     // }
}
