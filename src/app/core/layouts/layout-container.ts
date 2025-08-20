import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ClassicComponent } from './classic';
import { ModernLayoutComponent } from './modern';
import { LayoutService, LayoutType } from './layout.service';

@Component({
    selector: 'layout-container',
    template: `
         @if (layoutValue === layoutTypes.Classic) {
    <classic-layout></classic-layout>
  } @else {
    <!-- <empty-layout></empty-layout> -->
     <modern-layout></modern-layout>
  }
    `,
    standalone:true,
    imports: [ClassicComponent,ModernLayoutComponent]
})

export default class LayoutContainerComponent implements OnInit {
   layoutService=inject(LayoutService);

  cdr=inject(ChangeDetectorRef);
  layoutTypes=LayoutType;
  layoutValue=this.layoutService.layoutType$.value;

  ngOnInit(): void {
    this.layoutService.layoutType$.subscribe((value)=>{
      this.layoutValue=value;
      this.cdr.detectChanges();
    })
    
  }
}