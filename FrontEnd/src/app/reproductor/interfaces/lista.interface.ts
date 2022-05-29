export interface ListaContent{
    ok:     boolean;
    Listas: Lista;
    Lista:  Lista;
    Cancion: Song;
}

export interface Lista {
    _id?:         string;
    name:        string;
    description: string;
    songs:       Song[];
}

export interface Song {
    title:  string;
    artist: string;
    album:  string;
    year:   string;
    img:    string;
    url:    string;
}