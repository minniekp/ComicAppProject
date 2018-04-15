import { Component, OnInit } from '@angular/core';
import { MarvelDataService } from '.././marvel-data/marvel-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {
  private isLoaded: boolean = false;
  private comicId: number;
  private creators: any;

  constructor(private marvelService: MarvelDataService, private route: ActivatedRoute) { 
    this.isLoaded = false;
  }

  ngOnInit() {
  
    this.isLoaded = false;

    this.route.queryParams.subscribe(params => {
      //Defaults to 0 if no query params provided
      this.comicId = +params['cid'] || 0;

      if(this.comicId != 0) {
        this.marvelService.getCreatorsByComicId(this.comicId).subscribe((res)=> {
          this.creators = res.data.results;
          this.isLoaded = true;
        });
      }
      else {
        this.marvelService.getCreators().subscribe((res)=>{
          this.creators = res.data.results;
          this.isLoaded = true;
        });
      }
    });
  

}
}
