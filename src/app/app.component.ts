import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router'
import { ServiceService } from '../app/Service/service.service'
import { Frutas } from './Modelo/Frutas';
import { Nutritions } from './Modelo/Nutritions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  filterFamily = '';
  frutas: Frutas[] = []
  frutasG: Frutas[] = []
  frutasO: Frutas[] = []
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

  title = 'Frutas';

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.CargarFamily();
    this.CargarGenus();
    this.CargarOrder();
  }

  
  
  CargarFamily() {
    this.service.getFamily()
      .subscribe(data => {
        const frutasNoDuplicadas: Frutas[] = [];
         //let frutasUnicas = data.filter(data =>data.family );
         data.forEach(p=>{
          if(frutasNoDuplicadas.findIndex(pd => pd.family === p.family) === -1){
            frutasNoDuplicadas.push(p);
          }
         });
//console.log(frutasNoDuplicadas);
        this.frutas = frutasNoDuplicadas;
      })
  }


  CargarGenus() {
    this.service.getGenus()
      .subscribe(data => {
        
        const frutasNoDuplicadasG: Frutas[] = [];
         //let frutasUnicas = data.filter(data =>data.family );
         data.forEach(pG=>{
          if(frutasNoDuplicadasG.findIndex(pdG => pdG.genus === pG.genus) === -1){
            frutasNoDuplicadasG.push(pG);
          }
         });
//console.log(frutasNoDuplicadas);
        this.frutasG = frutasNoDuplicadasG;
        
        //this.frutasG = data;
      })
  }

  CargarOrder() {
    this.service.getOrder()
      .subscribe(data => {
        
        const frutasNoDuplicadasO: Frutas[] = [];
         //let frutasUnicas = data.filter(data =>data.family );
         data.forEach(pO=>{
          if(frutasNoDuplicadasO.findIndex(pdO => pdO.order === pO.order) === -1){
            frutasNoDuplicadasO.push(pO);
          }
         });
//console.log(frutasNoDuplicadas);
        this.frutasO = frutasNoDuplicadasO;
        
        //this.frutasO = data;
      })
  }

  refresh(){
    
  }

  onChange(e: any, status:String) {
    //console.log("x");
    
    //console.log(e.target.value);
    
    if(status == "Family"){
      //window.location.reload();
      console.log("F");
      localStorage.removeItem('family');
      localStorage.setItem("family", e.target.value); 
      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['Listar']);
      //this.router.navigate(['Listar']);

    }else if (status == "Genus"){
      //window.location.reload();
      console.log("G");
      localStorage.removeItem('genus');
      localStorage.setItem("genus", e.target.value);
      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['ListarG']); 
      //this.router.navigate(['ListarG']);
      

    }else if(status == "Order"){
      //window.location.reload();
      console.log("O");
      localStorage.removeItem('order');
      localStorage.setItem("order", e.target.value);    
      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['ListarO']);
      //this.router.navigate(['ListarO']);
    }
    
    //window.location.reload();
  }

}
