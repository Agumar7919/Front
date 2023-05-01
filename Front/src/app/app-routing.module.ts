import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ButtonloginComponent } from './components/buttonlogin/buttonlogin.component';

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: ButtonloginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
