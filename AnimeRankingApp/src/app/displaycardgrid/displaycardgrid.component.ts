import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-displaycardgrid',
  templateUrl: './displaycardgrid.component.html',
  styleUrls: ['./displaycardgrid.component.css']
})
export class DisplaycardgridComponent implements OnInit {

  AnimeData:any;
  selected_card="";
  selectedItem:any;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getAnimeList();
  }
  getAnimeList(){
    this.dataservice.getAnimes().subscribe((res:any)=>{
      this.AnimeData = res.data;
    })
  }
  mouseDown(id:any){
    this.selectedItem = id;
  }
  mouseUp(){
    this.selected_card ="";
  };
}
