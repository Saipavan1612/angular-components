import { Component, Input, ViewEncapsulation, input } from '@angular/core';

@Component({
    selector: 'app-dashboard-item',
    standalone: true,
    imports: [],
    templateUrl: './dashboard-item.component.html',
    styleUrl: './dashboard-item.component.css',
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'dashboard-item'
    }
})
export class DashboardItemComponent {
    @Input({ required: true }) image!: { src: string, alt: string };
    // ! => It tells angular to image property won't be undefined in any case

    @Input({ required: true }) title!: string;

    //image = input.required<{src: string, alt: string}>(); USING INPUT SIGNAL
    //title = input.required<string>(); USING INPUT SIGNAL
}
