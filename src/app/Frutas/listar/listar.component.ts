import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Frutas } from '../../Modelo/Frutas';
import { Nutritions } from '../../Modelo/Nutritions';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  frutas: Frutas[] = []
  nutritions: Nutritions[] = [];

  nutritionsMod: Nutritions = {
    carbohydrates: "",
    protein: "",
    fat: "",
    calories: "",
    sugar: ""
  }

  frutasMod: Frutas = {
    id: 0,
    genus: "",
    name: "",
    family: "",
    order: "",
    nutritions: this.nutritionsMod
  }

  familylocalStorage: string = localStorage.getItem("family")!;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {

    
    this.service.getXFamily(this.familylocalStorage).subscribe(data => {
      
      if (data != null) {

        console.log(this.familylocalStorage);
        console.warn("ok");
        this.frutas = data;

      } else {
        console.error("esta null");
      }

    })

  }


  Carac(nomFruta:string, frutaForm:Frutas){
    this.service.getCarac(nomFruta).subscribe(datac => {
  
        this.frutasMod = datac;
  
    })

  }



}
