import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  imports: [CommonModule, BrowserModule.withServerTransition({ appId: 'jan-app' }), AppRoutingModule],
  declarations: [AppComponent, HomeComponent, ResumeComponent, TooltipDirective, TruncatePipe],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
