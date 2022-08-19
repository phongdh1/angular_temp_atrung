import { CpnHeaderComponent } from './../../_layout/cpn-header/cpn-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { SidebarComponent } from 'src/app/_layout/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgZorroAntdModule } from 'src/app/_share/ng-zorro-ant.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    CpnHeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    TranslateModule,  
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NgZorroAntdModule,
    //NzSiderModule
  ]
})
export class MainModule { }
