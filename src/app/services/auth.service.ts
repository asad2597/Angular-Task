import { Injectable } from '@angular/core';
import IUser from '../Models/user.model';
import {
  getAuth,
  createUserWithEmailAndPassword,
  Auth,
  onAuthStateChanged,
  signOut,
} from '@angular/fire/auth';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { FirebaseApp } from '@angular/fire/app';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { filter, map, of, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private auth: Auth;
  private db: Firestore;
  private uid = '';
  private redirect = false;
  isAuthenticated = false;
  

  //constructor....
  constructor(private afApp: FirebaseApp, private router: Router, private route: ActivatedRoute) {
    this.auth = getAuth(afApp);
    this.db = getFirestore(afApp);

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.isAuthenticated = true;
        this.uid = user.uid;
      } else {
        this.isAuthenticated = false;
      }
      //router navigationEnd data...
      this.router.events.pipe(
        filter(e => e instanceof NavigationEnd),
        map(e => this.route.firstChild),
        switchMap(route => route?.data ?? of({authOnly:false}))
      ).subscribe(data=>{
        this.redirect = data.authOnly ?? false
      })
    });
  }

  //Register new user....
  async createUser(userData: IUser) {
    const userCred = await createUserWithEmailAndPassword(
      this.auth,
      userData.email as string,
      userData.password as string
    );

    await setDoc(doc(this.db, 'users', userCred.user.uid), {
      name: userData.name,
      eamil: userData.email,
    });
    return userCred;
  }

  getUid(): string {
    return this.uid;
  }

  //logout user....
  public async logout() {
    
    await signOut(this.auth);
    if(this.redirect){
      await this.router.navigateByUrl('/');
    }
    
  }
}
