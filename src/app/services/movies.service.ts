import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    MovieDto,
    Movie,
    MovieVideoDto,
    MovieImages,
    MovieCredits
} from '../models/movie';
import { switchMap, of } from 'rxjs';
import { GenresDto } from '../models/genres';
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

    searchMovies(page: number = 1, searchValue?: string) {
        const param = searchValue ? 'search/movie' : 'movie/popular';
        return this.http
            .get<MovieDto>(
                `${this.baseURL}/${param}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
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
    getMovieGenres() {
        return this.http
            .get<GenresDto>(
                `${this.baseURL}//genre/movie/list?api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.genres);
                })
            );
    }
    getMoviesWithGenre(genreId: string,page:number) {
        return this.http
            .get<MovieDto>(
                `${this.baseURL}/discover/movie?with_genres=${genreId}&page=${page}&api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }
}
