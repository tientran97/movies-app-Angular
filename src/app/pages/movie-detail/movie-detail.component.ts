import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    Movie,
    MovieCredits,
    MovieImages,
    MovieVideo
} from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { IMAGE_SIZE } from 'src/app/constant/images-size';
import { first } from 'rxjs';
@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
    movie: Movie | null = null;
    movieVideos: MovieVideo[] = [];
    movieImages: MovieImages | null = null;
    movieCredits: MovieCredits | null = null;
    movieSimilar: Movie[] = [];
    readonly imageSize = IMAGE_SIZE;

    constructor(
        private route: ActivatedRoute,
        private moviesService: MoviesService
    ) {}

    ngOnInit(): void {
        this.route.params.pipe(first()).subscribe(({ id }) => {
            this.getMovie(id);
            this.getVideo(id);
            this.getImage(id);
            this.getCredits(id);
            this.getMovie(id);
            this.getSimilar(id)
        });
    }
    ngOnDestroy(): void {
        console.clear();
    }

    getMovie(id: string) {
        this.moviesService.getMovieDetail(id).subscribe((movie) => {
            this.movie = movie;
        });
    }
    getVideo(id: string) {
        this.moviesService.getMovieVideos(id).subscribe((video) => {
            this.movieVideos = video;
        });
    }
    getImage(id: string) {
        this.moviesService.getMovieImages(id).subscribe((image) => {
            this.movieImages = image;
        });
    }
    getCredits(id: string) {
        this.moviesService.getMovieCredits(id).subscribe((credits) => {
            this.movieCredits = credits;
        });
    }
    getSimilar(id: string) {
        this.moviesService.getSimilarMovies(id).subscribe((similar) => {
            this.movieSimilar = similar;
            console.log(this.movieSimilar)
        });
    }
}
