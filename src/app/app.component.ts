import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { LlamadoService } from './llamado.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Indicadores económicos en Chile';
  type = '';
  date = '';
  value = '';
  
  constructor(private llamadoService: LlamadoService){
      
}
do(){
this.llamadoService.dateInspect = this.date;
this.llamadoService.typeInspect = this.type;
this.value = this.llamadoService.valueUf;
this.llamadoService.searchIndicator();

}

}