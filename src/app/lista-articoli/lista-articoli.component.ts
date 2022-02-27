import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, NgForm  } from '@angular/forms';
import { Article } from '../models/models';


@Component({
  selector: 'app-lista-articoli',
  templateUrl: './lista-articoli.component.html',
  styleUrls: ['./lista-articoli.component.scss'],
})
export class ListaArticoliComponent implements OnInit {
  articles!: Article[];
  message: string = 'Aggiungere messaggio';
  displayMessage: boolean = false;
  displayTable: boolean = true;
  displayDetails: boolean = false;
  displayAddArticle: boolean = false;
  detailsArticle!: Article;
  displayFormInfo:boolean = false;
  messageForm:string = '';

  // Dati for form validation
  titolo!: string;
  testo!: string;
  autore!: string;
  attivo!: boolean;
  form!: NgForm;
  constructor() {}

  ngOnInit(): void {
    this.articles = [
      new Article(1, 'prova', 'Manzoni', 'jksbjkdvbksjdbvksd', null),
      new Article(2, 'prova1', 'Alessando', 'jksbjkdvbksjdbvksd', null),
      new Article(3, 'prova2', 'Paolo', 'jksbjkdvbksjdbvksd', null),
      new Article(4, 'prova3', 'Piero', 'jksbjkdvbksjdbvksd', true),
    ];
  }

  delateRow(id: number) {
    if (confirm(`Sei sicuro di voler elminare l'Articolo con id ${id}`))
      if (this.searchArticleByID(id) > -1)
        this.articles.splice(this.searchArticleByID(id), 1);
    this.listEmpty();
  }

  listEmpty() {
    if (this.articles.length === 0) this.displayMessage = true;
  }

  searchArticleByID(id: number): number {
    for (let i = 0; i < this.articles.length; i++)
      if (this.articles[i].id === id) return i;
    return -1;
  }

  displayDetail(article: Article) {
    this.detailsArticle = article;
    this.displayTable = false;
    this.displayDetails = true;
    this.displayAddArticle = false;
    this.displayFormInfo = false;
  }

  displayStd() {
    this.displayDetails = false;
    this.displayTable = true;
    this.displayAddArticle = false;
    this.displayFormInfo = false;
  }
  displayField() {
    this.displayDetails = false;
    this.displayTable = false;
    this.displayAddArticle = true;
    this.displayFormInfo = false;
  }

  async validate(form: NgForm) {
    this.form = form;
    const titolo = form.value.titolo;
    const autore = form.value.autore;
    const attivo = form.value.attivo;
    const message = form.value.message;
    if (this.checkData(titolo, autore, message)) {
      this.addArticle(titolo, autore, message, attivo);
      this.showFormMessage("Articolo Aggiunto Con Successo");
      await this.delay(3000);
      this.displayStd();
    } else this.showFormMessage("Errore con l Aggiunta di dati");
  }

  checkData(titolo: string, autore: string, message: string): boolean {
    let checker: boolean = false;

    if (titolo && autore && message) checker = true;

    if (titolo.length > 3 && autore.length > 3 && message.length > 15)
      checker = true;
    else checker = false;
    return checker;
  }

  addArticle(titolo: string, autore: string, message: string, attivo: boolean) {
    const id = this.getID();
    const newArticle: Article = {
      id: id,
      title: titolo,
      author: autore,
      text: message,
      attivo: attivo,
    };
    this.articles.push(newArticle);
  }

  getID(): number {
    return this.articles[this.articles.length - 1].id + 1;
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  showFormMessage(msg:string) {
    this.messageForm = msg;
    this.displayFormInfo = true;
  }
}
