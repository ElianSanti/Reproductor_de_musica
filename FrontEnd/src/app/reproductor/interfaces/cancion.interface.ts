export interface GeneralMusic {
    headers: Headers;
    results: Result[];
}

export interface Headers {
    status:        string;
    code:          number;
    error_message: string;
    warnings:      string;
    results_count: number;
    next:          string;
}

export interface Result {
    id:                    string;
    name:                  string;
    duration:              number;
    artist_id:             string;
    artist_name:           string;
    artist_idstr:          string;
    album_name:            string;
    album_id:              string;
    license_ccurl:         string;
    position:              number;
    releasedate:           Date;
    album_image:           string;
    audio:                 string;
    audiodownload:         string;
    prourl:                string;
    shorturl:              string;
    shareurl:              string;
    waveform:              string;
    image:                 string;
    musicinfo:             Musicinfo;
    audiodownload_allowed: boolean;
}

export interface Musicinfo {
    vocalinstrumental: string;
    lang:              string;
    gender:            string;
    acousticelectric:  string;
    speed:             Speed;
    tags:              Tags;
}

export enum Speed {
    High = "high",
}

export interface Tags {
    genres:      Genre[];
    instruments: string[];
    vartags:     string[];
}

export enum Genre {
    Funk = "funk",
    Pop = "pop",
    Rock = "rock",
}