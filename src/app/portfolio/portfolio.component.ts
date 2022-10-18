import { Component, HostListener, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { ITools } from '../tools';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  // items: ITools[] = [];
  items = [{"id": 1, "programmingLanguage": "Java", "description": "Java programming language", "imageUrl": "../../assets/img/java.png"},{"id": 2, "programmingLanguage": "Node","description": "Node programming language", "imageUrl": "../../assets/img/node.png" }];

  sub!: Subscription;
  errorMessage = '';

  // constructor(private apiService: ApiService) { 

  //   this.sub = this.apiService.getTools().subscribe({
  //     next: item => {
  //       this.items = item
          
  //     },
  //     error: err => this.errorMessage = err
  //   })
  // }


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
