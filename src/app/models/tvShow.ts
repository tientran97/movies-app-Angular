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
}

export interface TvShowDB {
    page: number;
    results: TvShow[];
    total_result: number;
    total_pages: number;
}
