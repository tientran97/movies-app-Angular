export interface Movie {
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
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    name: string;
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
        name: string;
    };
    revenue: number;
    runtime: number;
    spoken_language: {
        name: string;
    };
    status: string;
    taglineL: string;
}

export interface MovieDto {
    page: number;
    results: Movie[];
    total_result: number;
    total_pages: number;
}
export interface MovieVideoDto {
    id: number;
    name: string;
    results: MovieVideo[];
}
export interface MovieVideo {
    key: string;
}
export interface MovieImages {
    backdrops: {
        file_path: string;
    }[];
}
export interface Genres {
    id: number;
    name: string;
}

export interface MovieCredits {
    cast: {
        name: string;
        profile_path: string;
    }[];
}
