import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IMAGE_SIZE } from 'src/app/constant/images-size';
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

    readonly imageSize = IMAGE_SIZE;
    currentSlideIndex: number = 0;

    constructor() {}

    ngOnInit(): void {
        setInterval(() => {
            this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
        }, 3000);
    }
}
