import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Frutas } from '../Modelo/Frutas';
import { Nutritions } from '../Modelo/Nutritions'; 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  urlFrutas: string = "https://www.fruityvice.com/api/fruit";

  getFamily() {
    return this.http.get<Frutas[]>(this.urlFrutas+"/all");
  }

  getGenus() {
    return this.http.get<Frutas[]>(this.urlFrutas+"/all");
  }

  getOrder() {
    return this.http.get<Frutas[]>(this.urlFrutas+"/all");
  }

  getCarac(fruta:string){
    return this.http.get<Frutas>(this.urlFrutas+"/"+fruta);
  }


  getXFamily(family:string) {
    return this.http.get<Frutas[]>(this.urlFrutas + "/family/" + family);
  }

  getXGenus(genus:string) {
    return this.http.get<Frutas[]>(this.urlFrutas + "/genus/" + genus);
  }

  getXOrder(order:string) {
    return this.http.get<Frutas[]>(this.urlFrutas + "/order/" + order);
  }



}









