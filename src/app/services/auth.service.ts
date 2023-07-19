import { Injectable } from '@angular/core';
import IUser from '../Models/user.model';
import { getAuth,createUserWithEmailAndPassword, Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { doc, setDoc } from "firebase/firestore";
import { FirebaseApp } from '@angular/fire/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth;
  private db: Firestore; 
  isAuthenticated= false;
  private uid = '';

  constructor(private afApp: FirebaseApp) {
    this.auth = getAuth(afApp);
    this.db = getFirestore(afApp);
   // this.isAuthenticated = !!this.auth.currentUser;
   onAuthStateChanged(this.auth, (user)=>{
      if(user){
        this.isAuthenticated = true;
        this.uid = user.uid;
      }
      else{
        this.isAuthenticated = false;
      }
   })
   }

 async createUser(userData: IUser){
    const userCred = await createUserWithEmailAndPassword(
      this.auth,
      userData.email as string,
      userData.password as string
    )

    await setDoc(doc(this.db,'users',userCred.user.uid),{
      name: userData.name,
      eamil: userData.email
    })
    return userCred;
  }

  getUid(): string{
    return this.uid;
  }
}
