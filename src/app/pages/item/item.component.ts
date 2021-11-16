import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  //Para leer URL importamos el servicio en el constructor
  constructor(private route: ActivatedRoute) { }

  //Llamamos la instruccion para obtener parametros
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      console.log(params)
    })
  }

}
