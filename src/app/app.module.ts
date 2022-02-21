import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  imports: [CommonModule, BrowserModule.withServerTransition({ appId: 'jan-app' })],
  declarations: [AppComponent, HomeComponent, TruncatePipe],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
