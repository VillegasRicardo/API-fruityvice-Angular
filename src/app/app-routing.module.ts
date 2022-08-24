import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Frutas/listar/listar.component';
import { ListarGenusComponent } from './Frutas/listar-genus/listar-genus.component';
import { ListarOrderComponent } from './Frutas/listar-order/listar-order.component'; 

const routes: Routes = [
{path:'Listar', component:ListarComponent},
{path:'ListarG', component:ListarGenusComponent},
{path:'ListarO', component:ListarOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(


    routes, {onSameUrlNavigation: 'reload'}


  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
