import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isCollapsed = false;
 
  
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['vi', 'en']);
    translate.setDefaultLang('vi');
  }

  switchLang(lang: string) {
    console.log(lang);
    this.translate.use(lang);
  }

  ngOnInit(): void {
  }

}
