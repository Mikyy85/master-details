export class Article {
  public id:number;
  public title:string;
  public author: string;
  public text:string;

  public attivo?:boolean

  constructor(id:number, title:string, author:string, text:string, attivo:boolean | null) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.text = text;

    this.attivo = attivo === true ? true : false;
  }

  

}


export class Author {
  private id_autore:number;
  private nominativo:string;

  constructor(id_autore:number, nominativo:string) {
    this.id_autore = id_autore;
    this.nominativo = nominativo;
  }

  getAutore() {
    return {
      id:this.id_autore,
      nominativo:this.nominativo
    }
  }
}