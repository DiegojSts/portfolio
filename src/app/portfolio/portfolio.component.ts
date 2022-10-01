import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {


  constructor() { 

  }


  ngOnInit(): void {
    const elements = document.querySelectorAll('[data-filter]');
   
    for(let i = 0; i < elements.length; i++){
      elements[i].addEventListener('click', ()=> {
        let current = document.getElementsByClassName("filter-active");
        current[0].className = current[0].className.replace("filter-active", "");
        elements[i].className += "filter-active";
        
        
      })
    }
   
      
  }

}
