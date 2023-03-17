import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDB } from '../models/movie';
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
                    return of(res.results.slice(0, 12));
                })
            );
    }
    getTvshows() {
        return this.http
            .get<MovieDB>(`${this.baseURL}/tv/popular?api_key=${this.apiKey}`)
            .pipe(
                switchMap((res) => {
                    return of(res.results.slice(0, 12));
                })
            );
    }
}
