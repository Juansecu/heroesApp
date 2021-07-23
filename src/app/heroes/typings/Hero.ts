export interface Hero {
  id?: string;
  superhero: string;
  publisher: Publisher;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  image_url?: string;
}

export enum Publisher {
  DcComics = 'DC Comics',
  MarvelComics = 'Marvel Comics',
}

export interface PublisherDetails {
  id: Publisher;
  description: string;
}
