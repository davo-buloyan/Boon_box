import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BoxContentComponent } from './box-content/box-content.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'boxImages/:id', component: BoxContentComponent},
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

