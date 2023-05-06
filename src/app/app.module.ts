import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LogoapComponent } from './components/logoap/logoap.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component'
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    LogoapComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    SkillsComponent,
    NewSkillComponent,
    EditSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
