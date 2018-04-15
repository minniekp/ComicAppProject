import { Component, OnInit } from '@angular/core';
import { MarvelDataService } from '.././marvel-data/marvel-data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  private isLoaded: boolean = false;
  private comic: any;
  private id: number;

  constructor(private marvelService: MarvelDataService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string id to number

      this.marvelService.getComicById(this.id).subscribe((res) => {
          this.comic = res.data.results;
          this.isLoaded = true;
      });
    });
  }

  //navigate to creators page with comicsId as optional parameter
  loadCreators(id:number){
     this.router.navigate(['/creators'], {queryParams: { cid : id } })
  }

}
