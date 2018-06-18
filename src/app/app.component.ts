import { Component, OnInit } from '@angular/core';
<<<<<<< origin/service-juancarlos

=======
import { Http, Response} from '@angular/http';
import { LlamadoService } from './llamado.service';
>>>>>>> local


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< origin/service-juancarlos

     constructor() {}

     


=======
  title = 'Indicadores económicos en Chile';
  type = '';
  date = '';
  value = '';
    
  constructor(private llamadoService: LlamadoService){
  }
    
>>>>>>> local
}