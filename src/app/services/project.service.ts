import { Injectable } from '@angular/core';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { FirebaseApp } from '@angular/fire/app';
import { addDoc, getDocs, collection } from 'firebase/firestore';
import Project from 'src/app/Models/project.model';
import { switchMap } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private db: Firestore;
  

  constructor(private afApp: FirebaseApp) {
    this.db = getFirestore(afApp); 
  }

  async addProject(projecData: Project) {
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
    await getDocs(collection(this.db, 'projects')).then((doc)=>
    {
      doc.forEach((doc)=>
      {
        return doc.data();
      })
    }
    )
    
    
  }
}


