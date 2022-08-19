import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { SidebarComponent } from 'src/app/_layout/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    TranslateModule,
    
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    //NzSiderModule
  ]
})
export class MainModule { }
