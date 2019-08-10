import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { ClienteComponent } from './business/cliente/cliente-form/cliente/cliente.component';
import { ClienteListComponent } from './business/cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './business/cliente/cliente-form/cliente-form.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, ClienteComponent, ClienteListComponent, ClienteFormComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
