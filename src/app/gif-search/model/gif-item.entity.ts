export class GifItem {
  id: string;
  title: string;
  username: string;
  imageUrl: string;

  constructor(id: string, username: string, imageUrl: string, title?: string) {
    this.id = id;
    this.username = username;
    this.imageUrl = imageUrl;
    this.title = title || '';
  }

}
