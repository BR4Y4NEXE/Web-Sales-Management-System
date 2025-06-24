import { Component, OnInit } from '@angular/core';
import { BackgroundService } from './services/background.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('backgroundChange', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'ConsultarDatos';
  background: string = 'background-cliente'; // Inicializamos la propiedad background

  constructor(private backgroundService: BackgroundService) {}

  ngOnInit() {
    this.backgroundService.background$.subscribe(bg => {
      this.background = bg;
    });
  }
}
