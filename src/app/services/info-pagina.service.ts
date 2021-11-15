import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    //leer archivo JSON LOCAL
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        /* .subscribe((resp:any) => {
          // console.log(resp)
          console.log(resp.email);
        }) */
        this.cargada = true;
        this.info = resp;
        // console.log(resp)
      })
  }

  private cargarEquipo() {
    //leer archivo JSON DE FIREBASE
    this.http.get('https://angular-html-1e165-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((res: any) => {
        this.equipo = res;
        // console.log(res)
      })

    /* fetch('https://angular-html-1e165-default-rtdb.firebaseio.com/equipo.json')
    .then(res => res.json())
    .then(data => {
      data.forEach( (team:any) => {
        console.log(team)
      })
    }) */
  }
}
