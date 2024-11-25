import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucessoComponent } from './autenticacao/sucesso/sucesso.component';
import { LoginComponent } from './autenticacao/login/components/login/login.component';


export const routes: Routes = [
    { 
    path: '', 
    redirectTo: '/formulario', 
    pathMatch:'full'
    },
    {
        path: 'formulario',
        component: LoginComponent
    },
    {
        path: 'sucesso',
        component : SucessoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
