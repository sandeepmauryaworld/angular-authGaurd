import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [

  {
    path:"login", component:LoginComponent},

   {path:"forgot-password", component:ForgotPasswordComponent},
   {path:'', redirectTo:'/login' ,pathMatch:'full'},
   {path:'admin',
   canActivate:[AuthGuard],
   loadChildren:()=>import ('./modules/admin/admin.module').then((m)=>m.AdminModule),},
   {path:"**", component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
