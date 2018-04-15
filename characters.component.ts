import { Component, OnInit } from '@angular/core';
import { MarvelDataService } from '.././marvel-data/marvel-data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  private isLoaded: boolean = false;
  private characters: any;

  constructor(private marvelService: MarvelDataService) { }

  ngOnInit() {
    this.marvelService.getCharacters().subscribe((res)=>{
       this.characters = res.data.results;
       this.isLoaded = true;
    });
  }

}
