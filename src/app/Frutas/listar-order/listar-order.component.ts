import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Frutas } from '../../Modelo/Frutas';
import { Nutritions } from '../../Modelo/Nutritions';

@Component({
  selector: 'app-listar-order',
  templateUrl: './listar-order.component.html',
  styleUrls: ['./listar-order.component.css']
})
export class ListarOrderComponent implements OnInit {

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

  orderlocalStorage: string = localStorage.getItem("order")!;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {


    this.service.getXOrder(this.orderlocalStorage).subscribe(data => {
      
      if (data != null) {
  
        console.log(this.orderlocalStorage);
        console.warn("ok");
        this.frutas = data;
  
      } else {
        console.error("esta null");
      }
  
    })

  }


  CaracO(fruta:Frutas) {

    console.log(fruta.name);
    this.service.getCarac(fruta.name).subscribe(datac => { 
    console.log(datac);
    this.frutasMod = datac;    
    })

  }




}
