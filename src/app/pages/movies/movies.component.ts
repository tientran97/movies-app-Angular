import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { take } from 'rxjs';
@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    movies: Movie[] = [];
    genreId: string | null = null;
    searchValue: string = '';
    constructor(
        private movieService: MoviesService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
            if (genreId) {
                this.genreId = genreId;
                this.getMoviesByGenre(genreId, 1);
            } else {
                this.getPageMovies(1);
            }
        });
    }

    getPageMovies(page: number, searchKeyword?: string) {
        this.movieService
            .searchMovies(page, searchKeyword)
            .subscribe((movies) => {
                this.movies = movies;
            });
    }

    getMoviesByGenre(genreId: string, page: number) {
        this.movieService
            .getMoviesWithGenre(genreId, page)
            .subscribe((movies) => {
                this.movies = movies;
            });
    }
    paginate(event: any) {
        const pageNumber = event.page + 1;
        if (this.genreId) {
            this.getMoviesByGenre(this.genreId, pageNumber);
        }

        this.getPageMovies(pageNumber, this.searchValue);
    }

    searchInput() {
        this.getPageMovies(1, this.searchValue);
    }
}
