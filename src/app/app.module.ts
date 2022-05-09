import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RutinaComponent } from './components/rutina/rutina/rutina.component';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RegistroEmpleadosComponent } from './components/registro_empleados/registro-empleados/registro-empleados.component';
import { AuthService } from './services/auth.service';
import { LoginEmpleadosComponent } from './components/login_empleados/login-empleados/login-empleados.component';
import { AdminComponent } from './components/roles/admin/admin.component';
import { InstructorComponent } from './components/roles/instructor/instructor.component';
import { MasterComponent } from './components/roles/master/master.component';
import { LoginComponent } from './components/roles/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RutinaComponent,
    LoginEmpleadosComponent,
    RegistroEmpleadosComponent,
    AdminComponent,
    InstructorComponent,
    MasterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
