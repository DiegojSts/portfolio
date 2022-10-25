import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { IInfo } from '../info';
import { PortolioDetailsComponent } from '../portolio-details/portolio-details.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  items: IInfo[] = [];
  sub!: Subscription;
  errorMessage = '';
  active = true;

  // @ViewChild(PortfolioComponent) portfolioComponent?: PortfolioComponent;

  constructor(private apiService: ApiService) { 

    this.sub = this.apiService.getTools().subscribe({
      next: item => {
        this.items = item
          
      },
      error: err => this.errorMessage = err
    })
  }


  ngOnInit(): void {
  
    const elements = document.querySelectorAll('[data-filter]');
   
    // for(let i = 0; i < elements.length; i++){
    //   elements[i].addEventListener('click', ()=> {
    //     console.log("Oi")
    //     let current = document.getElementsByClassName("filter-active");
    //     current[0].className = current[0].className.replace("filter-active", "");
    //     elements[i].className += "filter-active";
        
        
    //   })
    // }
   
      
  }



  onClick(innerHtmlReference?: Element){
    let element = innerHtmlReference;
    let porfolioContainer= document.getElementById('portfolioContainer');

    let dataFilter = porfolioContainer?.querySelectorAll('[data-filter]').forEach(item => {
      console.log(item.getAttribute('data-filter'));
    });

    
   
    
  }

  status(): void{
    this.active = !this.active;
  }

}
