import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  @HostBinding('custom-about-bg.hover-active') isHoverActive = false;

  @HostListener('mouseenter') onMouseEnter(){
    this.isHoverActive = true;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.isHoverActive = false;

  }

  ngOnInit(): void {
  }

}
