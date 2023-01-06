import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentDescription='';
  childDescription='';


  onCLickParent(){
      this.parentDescription='Parent button Triggered'
  }

  onChildClick(childvalue:any){
    this.childDescription=childvalue
  }

  onCheckParent(event:any){
    if(event.target.checked===true){
      this.parentDescription='Parent Checkbox Triggered'
    }else{
      this.parentDescription='Parent Checkbox Un---Triggered'
    }
    // this.isParentChecked=!this.isParentChecked
  }
}
