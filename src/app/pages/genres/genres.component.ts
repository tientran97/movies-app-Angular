import { Component, OnInit } from '@angular/core';
import { Genres } from 'src/app/models/genres';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
    selector: 'genres',
    templateUrl: './genres.component.html',
    styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
    genres: Genres[] = [];
    constructor(private moviesSerVice: MoviesService) {}

    ngOnInit(): void {
        this.moviesSerVice
            .getMovieGenres()
            .subscribe((genres) => (this.genres = genres));
    }
}
