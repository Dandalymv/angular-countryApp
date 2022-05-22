import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {


  termino: string = ''
  hayError: boolean = false;
  capitales: Country[] = [];
  mostrarSugerencias: boolean = false;
  paisesSugeridos: Country[] = [];

  constructor(private paisServicio
    : PaisService) { }

  buscar(termino: string){
    this.mostrarSugerencias = false;
    this.hayError = false
    this.termino = termino

    this.paisServicio.buscarCapital(termino).subscribe((capitales) => {
      this.capitales = capitales
      
    },(error) => {
      this.hayError = true
      this.capitales = []
    });
  }

  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino
    this.mostrarSugerencias = true;
    this.paisServicio.buscarCapital(termino).subscribe(paises => 
      this.paisesSugeridos = paises.splice(0,5),
      (err) => this.paisesSugeridos = []  
    )
  }

  buscarSugerido(termino: string){
    this.buscar(termino); 
  }
  


 

}
