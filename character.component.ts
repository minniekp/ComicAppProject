import { Component, OnInit } from '@angular/core';
import { MarvelDataService } from '.././marvel-data/marvel-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  private isLoaded: boolean = false;
  private character: any;
  private id: number;

  constructor(private marvelService: MarvelDataService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string id to number

      this.marvelService.getCharacterById(this.id).subscribe((res) => {
          this.character = res.data.results;
          this.isLoaded = true;
      });
    });
  }

}
