import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'aio-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  @Input() isCollapsed = false;
  visible = false;

  constructor() { }

  ngOnInit(): void {
  }


}
