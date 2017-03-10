import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-box',
  templateUrl: './mini-box.component.html',
  styleUrls: ['./mini-box.component.css']
})
export class MiniBoxComponent implements OnInit {
  @Input("coords") coordinates;
  constructor() { }

  ngOnInit() {
    
  }
}
