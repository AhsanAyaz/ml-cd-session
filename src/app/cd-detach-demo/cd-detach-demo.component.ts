import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cd-detach-demo',
  templateUrl: './cd-detach-demo.component.html',
  styleUrls: ['./cd-detach-demo.component.css']
})
export class CdDetachDemoComponent implements OnInit {

  constructor (private cdRef : ChangeDetectorRef){}
  title = 'Ng Change Detection - ChangeDetectorRef!';
  cdDetached: boolean = false;
  counter = 0;
  intervalDelay = 100;
  counterInterval: any;

  /**
   * @author Ahsan Ayaz
   * Starts the counter and increments by one using an interval
   */
  toggleCounter(){
    if(this.counterInterval){
      this.counter = 0;
      clearInterval(this.counterInterval);
      this.counterInterval = null;
    }
    else{
      this.counterInterval = setInterval(()=>{
        this.counter++;
      },this.intervalDelay)
    }
  }

  /**
   * @author Ahsan Ayaz
   * Toggles the attachment of change detector in the component
   */
  toggeDetachCd(){
    this.cdDetached = !this.cdDetached;
    if(this.cdDetached){
      this.cdRef.detach();
    }
    else{
      this.cdRef.reattach();
    }
  }

  ngOnInit() {
  }

}
