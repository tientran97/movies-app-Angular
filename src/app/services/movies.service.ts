import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDB } from '../models/movie';
import { TvShowDB } from '../models/tvShow';
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
            .get<MovieDB>(
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
            .get<TvShowDB>(`${this.baseURL}/tv/${param}?api_key=${this.apiKey}`)
            .pipe(
                switchMap((res) => {
                    return of(res.results.slice(0, count));
                })
            );
    }
    searchMovies(page: number = 1) {
        return this.http
            .get<MovieDB>(
                `${this.baseURL}/movie/popular?page=${page}&api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }
}
