import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'aio-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  isCollapsed = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
