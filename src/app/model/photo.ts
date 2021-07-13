export class Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;

  constructor(id: number, albumId: number, title: string, url: string) {
    this.id = id;
    this.albumId = albumId;
    this.title = title;
    this.url = url;
  }
}
