import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { IInfo } from '../info';

@Component({
  selector: 'app-portolio-details',
  templateUrl: './portolio-details.component.html',
  styleUrls: ['./portolio-details.component.css']
})
export class PortolioDetailsComponent implements OnInit {

  tool: IInfo | undefined;
  errorMessage = '';
  active = false;

  constructor(private route: ActivatedRoute,
    private apiService: ApiService,
    private sharedService: SharedService,
    private router: Router) {
      this.active = true;

  }

  ngOnInit(): void {
    window.onpopstate = () => {
      location.reload();
    }
    this.sharedService.setIsActived(true);
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if(id){
      this.getToolId(id);
    }
  }

  getToolId(id: number): void{

    // this.apiService.getToolsById(id).subscribe({
    //   next: tool => this.tool = tool,
    //   error: err => this.errorMessage = err
    // })

    this.tool = this.apiService.getToolsById(id);
  }

}
