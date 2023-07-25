//imported modules....
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { SidenavModule } from './side-nav/sidenav.module';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ProjectsModule } from './projects/projects.module';
//import { AngularFireModule } from '@angular/fire/compat';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore} from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
//environment import.....
import { environment } from 'src/environments/environment';

//imported components....
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SidenavModule,
    SharedModule,
    ProjectsModule
  
  ],
  providers: [ { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
function getDatabase() {
  throw new Error('Function not implemented.');
}

