import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components";
import { NgModule } from "@angular/core";

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
