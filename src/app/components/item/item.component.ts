import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { IMAGE_SIZE } from 'src/app/constant/images-size';
@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
    @Input() itemData: Movie | null = null;

    readonly imageSize = IMAGE_SIZE
    constructor() {}
    ngOnInit(): void {}
}
