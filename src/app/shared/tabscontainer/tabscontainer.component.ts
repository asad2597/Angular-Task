import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabscontainer',
  templateUrl: './tabscontainer.component.html',
  styleUrls: ['./tabscontainer.component.scss']
})
export class TabscontainerComponent implements AfterContentInit{
  
  
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>
  
  

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
    
  }
}
