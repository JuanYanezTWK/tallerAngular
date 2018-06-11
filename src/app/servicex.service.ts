import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { HttpRequest } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ServicexService {

  constructor(private http: Http) { }
  title = 'Indicadores económicos en Chile';
    dateInspect = '';
    valueUf = '';
    
  searchIndicator() {
    this.http.get('https://mindicador.cl/api/uf/' + this.dateInspect)
    .subscribe(
        (res: Response) => {
          const valueIndicator = res.json();
          console.log(valueIndicator);
          //this.valueUf =  valueIndicator.serie.valor; // res['serie'][0]['valor'];
          this.valueUf = valueIndicator['serie'][0]['valor'];
          //for(let miS of valueIndicator['serie']) {
          //  console.log(miS);
           // console.log(miS['valor']);
         // }
        }, err => {
          console.log('UPS!');
          console.log(err);
        }, () => {
          console.log('¡Servicio Finalizado!');
          // https://angular.io/guide/quickstart
          // https://materializecss.com/
        }
    );
  }
}
