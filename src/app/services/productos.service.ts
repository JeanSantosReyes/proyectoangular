import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = []; //arreglo vacio

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise<void>((resolve, reject) => {
      this.http.get('https://angular-html-25cf9.firebaseio.com/productos_idx.json')
        .subscribe((resp: any) => {
          // console.log(resp);
          this.productos = resp;
          this.cargando = false;
          resolve();
          /* setTimeout(() => {
            this.cargando = false;
          },1000); */
        });
    });
  }

  getProductos(id: string) {
    return this.http.get(`https://angular-html-1e165-default-rtdb.firebaseio.com/productos/${id}.json`)
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      //cargar productos
      this.cargarProductos().then(() => {
        //ejecutar despues de tener los productos
        //agregar filtro
        this.filtrarProdudcto(termino);
      })
    } else {
      //agregar filtro
      this.filtrarProdudcto(termino);
    }
  }

  private filtrarProdudcto(termino: string) {
    // console.log(this.productos)
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase(); //pasar todo a minuscula
    this.productos.forEach(prod => {
      const titulolower = prod.titulo.toLocaleLowerCase();//pasar todo a minuscula
      //buscar o filtrar por titulo y categoria
      if (prod.categoria.indexOf(termino) >= 0 || titulolower.indexOf(termino) >= 0) {
        this.productoFiltrado.push(prod);
      }
    });
  }
}
