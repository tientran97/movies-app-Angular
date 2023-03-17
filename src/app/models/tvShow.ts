export interface TvShow {
    adult: boolean;
    backdrop_path: string;
    gerne_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    name: string;
    title: string;
    bugget: number;
    genres: Genres[];
    homepage: string;
    imdb_id: string;
    production_companies: {
        name: string;
        id: number;
        logo_parth: string;
        origin_country: string;
    };
    production_countries: {
        iso_3166_1: string;
        name: string;
    };
    revenue: number;
    runtime: number;
    spoken_language: {
        iso_639_1: string;
        name: string;
    };
    status: string;
    taglineL: string;
}

export interface TvShowDto {
    page: number;
    results: TvShow[];
    total_result: number;
    total_pages: number;
}
export interface Genres {
    id: number;
    name: string;
}
