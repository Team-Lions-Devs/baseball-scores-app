export interface Lige {
    date: sting,
    liga: string,
    ligaName: string,
    origin: string,
    w_img: boolean,
    total: number,
    live: number,
    series: boolean,
    lang: null,
    games: Array<Object>
}

export type LigesResponseFromApi = Array<{
    date: sting,
    liga: string,
    ligaName: string,
    origin: string,
    w_img: boolean,
    total: number,
    live: number,
    series: boolean,
    lang: null,
    games: Array<Object>
}>