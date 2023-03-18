import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { GenresComponent } from './pages/genres/genres.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: 'movie-detail/:id',
        component: MovieDetailComponent
    },
    {
        path: 'genres',
        component: GenresComponent
    },
    {
        path: 'movies/genres/:genreId',
        component: MoviesComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
