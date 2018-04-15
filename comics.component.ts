import { Component, OnInit } from '@angular/core';
import { MarvelDataService } from '.././marvel-data/marvel-data.service';
import { Router, ActivatedRoute } from '@angular/router';
//import { ActivatedRoute } from '@angular/router/src/router_state';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  private isLoaded: boolean = false;
  private characterId: number;
  private comics: any;

  constructor(private marvelService: MarvelDataService, private route: ActivatedRoute) { 
    this.isLoaded = false;
  }

  ngOnInit() {
    this.isLoaded = false;

    this.route.queryParams.subscribe(params => {
      //Defaults to 0 if no query params provided
      this.characterId = +params['cid'] || 0;

      if(this.characterId != 0) {
        this.marvelService.getComicsByCharacterId(this.characterId).subscribe((res)=> {
          this.comics = res.data.results;
          this.isLoaded = true;
        });
      }
      else {
        this.marvelService.getComics().subscribe((res)=>{
          this.comics = res.data.results;
          this.isLoaded = true;
        });
      }
    });

  }

}
