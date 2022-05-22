import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError: boolean = false;
 
  constructor(private paisService: PaisService) { }

  getClassCSS(region: string): string{
    return (region === this.regionActiva) 
    ? 'btn btn-primary me-1 mb-1 animate__animated animate__rubberBand'
    : 'btn btn-outline-primary me-1 mb-1'
  }

  activarRegion(region: string){

    if(region === this.regionActiva){return} //evitar que vuelva a cargar el elemento al hacer clic

    this.regionActiva = region
    this.paises = [] //limpiar el arrigle para que sea más rápido
    this.paisService.buscarRegion(region).subscribe((paises) => {
      this.paises = paises
    });
  }




}
