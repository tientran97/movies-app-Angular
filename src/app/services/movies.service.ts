import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    constructor(private http: HttpClient) {}

    getMovies() {
        return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=d9fc1a3dbcc61f18a54b0e00017e3fc1');
    }
}
