import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

//ANGULAR MATERIAL
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//PRIME NG
@NgModule({
  declarations: [HeaderComponent],
  imports: [MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule],
  exports: [
    HeaderComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
