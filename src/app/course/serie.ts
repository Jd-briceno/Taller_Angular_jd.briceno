export class Serie {

  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  webpage: string;
  poster: string;

  constructor(id: number, name: string, channel: string, seasons: number, descriprion: string, webpage: string, poster: string) {

      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons
      this.description = descriprion;
      this.webpage = webpage;
      this.poster = poster;
  }
}

