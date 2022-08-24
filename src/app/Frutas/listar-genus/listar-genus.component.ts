import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Frutas } from '../../Modelo/Frutas';
import { Nutritions } from '../../Modelo/Nutritions';

@Component({
  selector: 'app-listar-genus',
  templateUrl: './listar-genus.component.html',
  styleUrls: ['./listar-genus.component.css']
})
export class ListarGenusComponent implements OnInit {

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

  genuslocalStorage: string = localStorage.getItem("genus")!;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {

    this.service.getXGenus(this.genuslocalStorage).subscribe(data => {
      
      if (data != null) {
  
        console.log(this.genuslocalStorage);
        console.warn("ok");
        this.frutas = data;
  
      } else {
        console.error("esta null");
      }
  
    })

  }


  CaracG(nomFruta:string){
    this.service.getCarac(nomFruta).subscribe(datac => {
      
      if (datac != null) {     
        this.frutasMod = datac;
  
      } else {
        console.error("esta null");
      }
  
    })

  }




}
