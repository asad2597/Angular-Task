import { Injectable } from '@angular/core';

// modal interface....
interface IModal{
  id: string,
  visible: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  private modal: IModal[] = [];
  constructor() { }

  registerModal(id: string){
    this.modal.push({
      id,
      visible: false
    })
  }

  unregister(id: string){
    this.modal = this.modal.filter(
      element => element.id !== id
      )
  }

  closeModal(){
    //this.visible = false;
  }

  //return modal visible status....
  isModalVisible(id: string): boolean{
    return Boolean(this.modal.find(element => element.id === id)?.visible);
  }

  //toggle modal visibility...
  toggleModal(id: string){
    const modal = this.modal.find(element => element.id === id);
    
    if(modal){
      modal.visible = !modal.visible;
    }
  }

}
