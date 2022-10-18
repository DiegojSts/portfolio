import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if(id){
      this.getToolId(id);
    }
  }

  getToolId(id: number): void{
    this.apiService.getToolsById(id).subscribe({
      next: tool => this.tool = tool,
      error: err => this.errorMessage = err
    })
  }

}
