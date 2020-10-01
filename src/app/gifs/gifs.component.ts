import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gifs: any[] = [];

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.getTrendingGifs()
      .subscribe((Response: any) => {
        console.log('Data,response');
        this.gifs= Response.data
        
      });
  }

}
