import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Inyeccion del servicio
  constructor(public _servicio: InfoPaginaService, public router: Router) { }

  ngOnInit(): void {
  }

  //Luego de dar enter busca el producto
  buscarProducto(termino: string) {
    if(termino.length<1){
      return;
    }
    // console.log(termino)
    this.router.navigate(['/search', termino])
  }

}
