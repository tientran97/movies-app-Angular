import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    MovieDto,
    Movie,
    MovieVideoDto,
    MovieImages,
    MovieCredits
} from '../models/movie';
import { TvShowDto } from '../models/tvShow';
import { switchMap, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    baseURL: string = 'https://api.themoviedb.org/3';
    apiKey: string = 'd9fc1a3dbcc61f18a54b0e00017e3fc1';

    constructor(private http: HttpClient) {}

    getMovies(param: string = 'upcoming', count: number = 12) {
        return this.http
            .get<MovieDto>(
                `${this.baseURL}/movie/${param}?api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results.slice(0, count));
                })
            );
    }

    getTvshows(param: string = 'popular', count: number = 12) {
        return this.http
            .get<TvShowDto>(
                `${this.baseURL}/tv/${param}?api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results.slice(0, count));
                })
            );
    }

    searchMovies(page: number = 1) {
        return this.http
            .get<MovieDto>(
                `${this.baseURL}/movie/popular?page=${page}&api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }

    getMovieDetail(id: string) {
        return this.http.get<Movie>(
            `${this.baseURL}/movie/${id}?api_key=${this.apiKey}`
        );
    }

    getMovieVideos(id: string) {
        return this.http
            .get<MovieVideoDto>(
                `${this.baseURL}/movie/${id}/videos?api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }
    getMovieImages(id: string) {
        return this.http.get<MovieImages>(
            `${this.baseURL}/movie/${id}/images?api_key=${this.apiKey}`
        );
    }
    getMovieCredits(id: string) {
        return this.http.get<MovieCredits>(
            `${this.baseURL}/movie/${id}/credits?api_key=${this.apiKey}`
        );
    }
    getSimilarMovies(id: string) {
        return this.http
            .get<MovieDto>(
                `${this.baseURL}/movie/${id}/similar?api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results.slice(1, 20));
                })
            );
    }
}
