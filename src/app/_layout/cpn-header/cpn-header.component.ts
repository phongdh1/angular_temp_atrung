import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/app/_share/constants/constants';
import * as _ from 'lodash';  

@Component({
  selector: 'app-cpn-header',
  templateUrl: './cpn-header.component.html',
  styleUrls: ['./cpn-header.component.scss']
})
export class CpnHeaderComponent implements OnInit {

  @Input() isCollapsed = false;
  @Output() changeMenu = new EventEmitter<any>();

  visible = false;

  public dataLang = [
    {
      name: 'Việt Nam',
      code: 'vi',
      icon:'https://img.icons8.com/color/48/000000/vietnam.png'
    },
    {
      name: 'English',
      code: 'en',
      icon:'../../../assets/images/flags/US.svg'
    },

  ]
  public selectedLang : string = '';
  public lIconSelected :string = '';
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(Constants.Language);
    
    const defaultLag = localStorage.getItem('lang') || Constants.Language[0];
    const chooseLag = _.find(this.dataLang, { 'code': defaultLag });
    this.selectedLang = defaultLag;
    this.lIconSelected = chooseLag?.icon || '';
    translate.setDefaultLang(defaultLag);
  }

  switchLang(langCode: any) {    
    const chooseLag = _.find(this.dataLang, { 'code': langCode });
    this.lIconSelected = chooseLag?.icon || '';
    localStorage.setItem('lang', langCode);    
    this.translate.use(langCode);
  }
  ngOnInit(): void {
  }

  switchMenu(){
    this.isCollapsed = !this.isCollapsed;
    this.changeMenu.emit(this.isCollapsed);
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  chooseItem($event: any): void{    
    if($event.target.tagName === 'A'){
      this.close();
    }
  }
}
