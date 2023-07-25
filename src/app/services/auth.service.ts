import { Injectable } from '@angular/core';
import IUser from '../Models/user.model';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, Auth, onAuthStateChanged, signOut} from '@angular/fire/auth';
import {Firestore, doc, getFirestore, setDoc } from '@angular/fire/firestore';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { filter, map, of, switchMap } from 'rxjs';
import { FirebaseApp, getApp } from '@angular/fire/app';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private uid = '';
  private redirect = false;
  isAuthenticated = false;
  

  //constructor....
    constructor(private db: Firestore, 
                private auth: Auth, 
                private router: Router,
                private route: ActivatedRoute
    ){
  
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.isAuthenticated = true;
        this.uid = user.uid!;
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
//SignInWithEmailandPassword.....
  async logIn(email: string, password: string){
    await signInWithEmailAndPassword(
      this.auth, 
      email,
      password
      )
      await this.router.navigateByUrl('/createProjects');
    }


  //logout user....
  public async logout() {
    
    await signOut(this.auth);
    if(this.redirect){
      await this.router.navigateByUrl('/');
    }
    
  }
//to get userid.....
  getUid(): string {
    return this.uid;
  }
}
