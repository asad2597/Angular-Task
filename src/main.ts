import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { environment } from './environments/environment';
import { getFirestore } from '@angular/fire/firestore';

const app = initializeApp(environment.firebase);

const auth = getAuth(app);


let appInit = false;

onAuthStateChanged(auth, ()=>{

  if(!appInit){

    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
  }

  appInit = true;
})

