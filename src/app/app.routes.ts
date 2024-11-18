import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticacao/login/components';
import { SucessoComponent } from './autenticacao/sucesso/sucesso.component';

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
