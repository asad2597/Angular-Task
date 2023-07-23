import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { TabComponent } from 'src/app/shared/tab/tab.component';

@Component({
  selector: 'app-projecttabs-container',
  templateUrl: './projecttabs-container.component.html',
  styleUrls: ['./projecttabs-container.component.scss']
})
export class ProjecttabsContainerComponent {

  @Input() totalProjects = 0;
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>

  constructor(private projectService: ProjectService){}

  ngAfterContentInit(){
    const activeTabs = this.tabs?.filter(tab =>{
      tab.active
    })

    if(!activeTabs || activeTabs.length === 0){
      this.selectTab(this.tabs!.first);
    }
  }

  selectTab(tab: TabComponent){
    this.tabs?.forEach(tab=>{
     tab.active = false;
    })

    tab.active = true;
    //this.totalProjects = this.projectService.getSelectedProjects();
  }
}
