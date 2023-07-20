import { Injectable } from '@angular/core';
import { Firestore, getFirestore, where } from '@angular/fire/firestore';
import { FirebaseApp } from '@angular/fire/app';
import { addDoc, getDocs, collection,query } from 'firebase/firestore';
import IProject from 'src/app/Models/project.model';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private db: Firestore;
  

  constructor(
    private afApp: FirebaseApp,
    public auth: AuthService
    ) {
    this.db = getFirestore(afApp); 
  }

  async addProject(projecData: IProject) {
    await addDoc(collection(this.db, 'projects'), {
      title: projecData.title,
      framework: projecData.framework,
      budget: projecData.budget,
      duration: projecData.duration,
      details: projecData.details,
      status: projecData.status,
      uid: projecData.uid,
    });
  }
  
  async getProjects() {
    const projectList = await getDocs(query(collection(this.db, 'projects'),where(
      'uid','==',this.auth.getUid()
    )));
    
    return projectList;
  }
}


