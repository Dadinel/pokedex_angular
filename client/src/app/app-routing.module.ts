import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonComponent }  from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent
  },
  {
    path: '**',
    component: PokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}