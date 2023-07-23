import { Pipe, PipeTransform } from '@angular/core';
import IProject from '../Models/project.model';

@Pipe({
  name: 'searchProject'
})
export class SearchProjectPipe implements PipeTransform {

  transform(projects: IProject[], title: string): IProject[] | boolean{
  
    title = title.toLowerCase();
    const result =  projects.filter(res=>{
      res.title.toLowerCase();
      return res.title === title
    })
    if(title && result.length==0){
      return false
    }
    return result;
  }
  // {
  //   title: 'noResult',
  //   framework: '',
  //   budget: 0,
  //   duration: 0,
  //   details: '',
  //   status: false,
  //   uid: ''
  // }
}
