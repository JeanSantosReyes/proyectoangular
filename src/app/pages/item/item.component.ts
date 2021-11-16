import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DescripcionProducto } from 'src/app/interfaces/descripcion-producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: DescripcionProducto;
  id: string;

  //Para leer URL importamos el servicio en el constructor + Inyeccion del servicio
  constructor(private route: ActivatedRoute,
    public productoService: ProductosService) { }

  //Llamamos la instruccion para obtener parametros al seleccionar un item/producto
  ngOnInit(): void {
    this.route.params
    .subscribe(parametros => {
      this.productoService.getProductos(parametros['id'])
        .subscribe((producto: DescripcionProducto) => {
          this.id = parametros['id'];
          this.producto = producto;
        })
    })
  }
}