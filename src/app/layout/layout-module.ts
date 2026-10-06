import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { MainLayout } from './main-layout/main-layout';
import { SharedModule } from '../shared/shared-module';

const COMPONENTS = [Header, Footer, MainLayout];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, RouterModule, SharedModule],
  exports: COMPONENTS,
})
export class LayoutModule {}
