import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { initializeApp } from "@angular/fire/app";
import { getAuth, onAuthStateChanged } from "@angular/fire/auth";
import { environment } from './environments/environment';

//const app = initializeApp(environment.firebaseConfig);

//const auth = getAuth();


//let appInit = false;

//onAuthStateChanged(auth, ()=>{

  //if(!appInit){

    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
//  }

 // appInit = true;
//})

