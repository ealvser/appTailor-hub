import { Component } from '@angular/core';
import { ApijobsService } from '../../services/apijobs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  countries:any[]=[];

  constructor(private country: ApijobsService) {}

  buscar(termino:string){
      console.log(termino);
      this.country.getCountry(termino)
        .subscribe((data:any) =>{
          console.log(data);
          this.countries = data;
        });
  }

}
