import { Lige, LigesResponseFromApi } from "../interfaces/LigeInterface";

export const getByLige = () => {
    return fetchByLige().then(mapFromApiToSubs)
}

export const fetchByLige = async (): Promise<Lige> => {
    return await fetch('https://www3.appsnumeric.net/mlb/api_beisbol_cac.php?liga=MLB').then((res) => res.json())
}

const mapFromApiToSubs = (apiResponse: Lige):
    Lige => {
    const {
            date,
            liga,
            ligaName,
            origin,
            w_img,
            total,
            live,
            series,
            lang,
            games,
        } = apiResponse
    
        return {
            date,
            liga,
            ligaName,
            origin,
            w_img,
            total,
            live,
            series,
            lang,
            games,
        }
}