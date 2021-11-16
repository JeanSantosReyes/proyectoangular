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

  descripcionproducto: DescripcionProducto = {};
  id: string;

  //Para leer URL importamos el servicio en el constructor + Inyeccion del servicio
  constructor(private route: ActivatedRoute, public productoService: ProductosService) { }

  //Llamamos la instruccion para obtener parametros al seleccionar un item/producto
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // console.log(params)
      this.productoService.getProductos(params['id'])
        .subscribe((producto: DescripcionProducto) => {
          // console.log(producto);
          this.id = params['id'];
          // console.log(`assets/productos/${this.getId}/pic-1.jpg`)
          this.descripcionproducto = producto;
        })
    })
  }

}
