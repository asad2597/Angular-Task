//imported modules....
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { SidenavModule } from './side-nav/sidenav-modules/sidenav.module';
//environment import.....
import { environment } from 'src/environments/environment';
//firebase imports....
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore , provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
//imported components....
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AngularFireModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(()=>getFirestore()),
    provideAuth(() => getAuth()),
    UserModule,
    SidenavModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function getDatabase() {
  throw new Error('Function not implemented.');
}

