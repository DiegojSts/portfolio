import { SharedService } from './../shared.service';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  @ViewChild(PortolioDetailsComponent) pdComponent!: PortolioDetailsComponent;


  items: IInfo[] = [];
  // sub!: Subscription;
  errorMessage = '';
  active = false;


  constructor(private apiService: ApiService, private sharedService: SharedService) {


    // this.sub = this.apiService.getTools().subscribe({
    //   next: item => {
    //     this.items = item

    //   },
    //   error: err => this.errorMessage = err
    // })

    this.items = this.apiService.getTools();
    console.log(this.items)
  }


  ngOnInit(): void {
    this.sharedService.isActive$.subscribe((value: boolean) => {
      this.active = value;
    });

    const elements = document.querySelectorAll('#portfolio-filters li');

    for(let i = 0; i < elements.length; i++){
      elements[i].addEventListener('click', ()=> {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        elements[i].classList.add('active');
      })
    }


  }



  onClick(innerHtmlReference?: Element){

    console.log(innerHtmlReference?.innerHTML)
    let porfolioContainer= document.getElementById('portfolioContainer');

    porfolioContainer?.querySelectorAll('[data-filter]').forEach(item => {

      item.hasAttribute('hidden') ? item.removeAttribute('hidden') : "";

      if(item.getAttribute('data-filter') != innerHtmlReference?.innerHTML){
       item.setAttribute('hidden', 'hidden');
      }
    });
  }

  reset(): void{
    let porfolioContainer= document.getElementById('portfolioContainer');

    porfolioContainer?.querySelectorAll('[data-filter]').forEach(item => {
      item.removeAttribute('hidden');
    });

  }

  status(): void{
    let porfolioContainer= document.getElementById('portfolioContainer');
    let elements = document.querySelectorAll('#portfolio-filters li');

    elements.forEach(item => {
      item.setAttribute('hidden', 'hidden');
    })

    porfolioContainer?.querySelectorAll('[data-filter]').forEach(item => {
      item.setAttribute('hidden', 'hidden');
    })



  }

}
