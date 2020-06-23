import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CoronaComponent } from "./corona/corona.component";
import { CoronaDetailComponent } from "./corona/corona-detail.component";
import { LoginComponent } from "./login/login.component";
import { ShellComponent } from "./shell/shell.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent},
    { path: "", component : ShellComponent,
    children:[
        { path: "indo", component: CoronaComponent },
        { path: "indo/province", component: CoronaDetailComponent }
    ]}
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
