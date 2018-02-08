import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  // 既定はリストコンポーネントを表示
  { path: '', component: ListComponent },
  { path: 'list', component: ListComponent },
  { path: 'grid', component: GridComponent },
  { path: 'card', component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }