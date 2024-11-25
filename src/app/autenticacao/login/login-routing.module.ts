import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";

export const LoginRoutes: Routes=[
    {
        path:'formulario',
        children: [{path:'', component: LoginComponent}]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(LoginRoutes)],
    exports: [RouterModule]
})

export class LoginRoutingModule {}
