import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  childDescription='';

  @Output()  childClick=new EventEmitter<any>();


  @Input() parentDescription='';
  // @Input() isParentChecked:boolean | undefined;



  onCLickChildButton(){
    this.childDescription="child Button Triggered";
    this.childClick.emit(this.childDescription);
  }
  onCheckChildCheckBox(event:any){
    if(event.target.checked===true){
      this.childDescription="Child CheckBox Triggered"
      this.childClick.emit(this.childDescription);
    }else{
      this.childDescription="Child CheckBox Un--Triggered"
      this.childClick.emit(this.childDescription);
    }
  }
}
