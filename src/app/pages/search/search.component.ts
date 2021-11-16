import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //Para leer URL importamos el servicio en el constructor + Inyeccion del servicio
  constructor(private route: ActivatedRoute, public productoService: ProductosService) { }

  //Llamamos la instruccion para obtener parametros a buscar
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      //leer parametros
      // console.log(params['termino']+" parametro leido")
      this.productoService.buscarProducto(params['termino'])
    })
  }

}
