/**
 * GifItem entity
 * @class GifItem
 * @description
 * This class is used to represent a gif item.
 * @property {string} id - The gif id.
 * @property {string} title - The gif title.
 * @property {string} username - The gif username.
 * @property {string} imageUrl - The gif image url.
 * @author Janiel Franz Escalante
 */
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
