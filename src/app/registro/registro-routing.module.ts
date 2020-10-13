import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegistroPage } from './registro.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AngularFireAuthModule],
  exports: [RouterModule],
})
export class RegistroPageRoutingModule {}
