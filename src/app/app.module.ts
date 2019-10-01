import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ AutofocusModule } from 'angular-autofocus-fix';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TodoComponent } from './components/todo/todo.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import{FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutofocusModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
