import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent implements OnInit {
  movies!: Movie[];
  genreId!: number;
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.genreId = +params.get('id')!;
        
        this.movieService.getMovieByGenre(this.genreId)
          .subscribe(g => {
            this.movies = g;
            console.log(this.movies)
          });
      }
    );
  }

}
