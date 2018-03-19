import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Myapp';
  textoRecebido: string;

  meuTexto = 'teste testasd asd asdasd asd asd asd ';

  defineTexto(texto) {
    this.textoRecebido = texto;
  }
}
