import { Injectable } from '@angular/core';
import { Firestore, deleteDoc, where, addDoc,doc,updateDoc, getDocs, collection,query } 
                                                        from '@angular/fire/firestore';

import IProject from 'src/app/Models/project.model';
import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  //private db: Firestore;
  private projects: IProject[] = [];
  obj = {} as IProject
  private project = new BehaviorSubject<IProject>(this.obj);
  getSelectedproject = this.project.asObservable();

  //...........Custroctor.........
  constructor( private db: Firestore, public auth: AuthService){

    //getting all projects......
    this.getProjectsList().then(qdoc=>{
      
                qdoc.forEach((doc)=>{
                  this.projects.push({
                    docID: doc.id,
                    ...doc.data() as IProject
                  })
                })
            })
    //end of getProjectList()......
  }

 //to add new project in database......
  async addProject(projectData: IProject) {
    
    await addDoc(collection(this.db, 'projects'), {
      title: projectData.title,
      framework: projectData.framework,
      budget: projectData.budget,
      duration: projectData.duration,
      details: projectData.details,
      status: projectData.status,
      uid: projectData.uid,
    });
  }
  //to get projectList from fireStore......
  async getProjectsList() {
    const q = query(collection(this.db , 'projects'),where('uid','==',this.auth.getUid()));
    const querySnapshot = await getDocs(q);
    return querySnapshot
  }
  //udate project......
  async update(id: string, projectData: IProject){
    const docRef = doc(this.db ,'projects', id);
    await updateDoc(docRef ,{
      title: projectData.title,
      framework: projectData.framework,
      budget: projectData.budget,
      duration: projectData.duration,
      details: projectData.details,
      status: projectData.status,
      uid: projectData.uid,
    });
  }

 //delete project.....
 async delete(id:string){
  await deleteDoc(doc(this.db ,'projects', id));
 }

  //getter for projects......
  getProjects(): IProject[]{
    return this.projects;
  }

  setSelectedProject(project: IProject){
    this.project.next(project);
  }
}


