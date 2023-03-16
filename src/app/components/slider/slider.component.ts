import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
    selector: 'slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    animations: [
        trigger('slideFade', [
            state('void', style({ opacity: 0 })),
            transition('void <=> *', [animate('1s')])
        ])
    ]
})
export class SliderComponent implements OnInit {
    @Input() items: Movie[] = [];

    currentSlideIndex: number = 0;

    constructor() {}

    ngOnInit(): void {
        setInterval(() => {
            this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
        }, 3000);
    }
}
