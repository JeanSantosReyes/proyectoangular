import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //Inyectar about con el servicio donde obtenemos el JSON de firebase
  constructor(public infoService: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
