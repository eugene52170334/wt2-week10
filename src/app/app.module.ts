import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { CoronaComponent } from "./corona/corona.component";
import { CoronaDetailComponent } from "./corona/corona-detail.component";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import Theme from "@nativescript/theme";
import { ShellComponent } from "./shell/shell.component";

Theme.setMode(Theme.Light); // Or Theme.Light
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
        ReactiveFormsModule,
        
    ],
    declarations: [
        AppComponent,
        CoronaComponent,
        CoronaDetailComponent,
        LoginComponent,
        ShellComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
