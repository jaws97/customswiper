import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swiper-app';

  moviesLists = [
    { name: "The Godfather", category: "Crime", director: "Francis Ford Coppola", date: "24 March 1972", runtime: "175 min" },
    { name: "The Dark Knight", category: "Action", director: "Christopher Nolan", date: "18 July 2008", runtime: "152 min" },
    { name: "Schindler's List", category: "War", director: "Steven Spielberg", date: "4 February 1994", runtime: "195 min" },
    { name: "Reservoir Dogs", category: "Crime", director: "Quentin Tarantino", date: "2 September 1992", runtime: "99 min" },
    { name: "Fight Club", category: "Drama", director: "David Fincher", date: "15 October 1999", runtime: "151 min" },
    { name: "The Shining", category: "Horror", director: "Stanley Kubrick", date: "13 June 1980", runtime: "142 min" },
    { name: "Psycho", category: "Horror", director: "Alfred Hitchcock", date: "8 September 1960", runtime: "109 min" },
    { name: "The Usual Suspects", category: "Crime ", director: "Bryan Singer", date: "16 August 1995", runtime: "106 min" },
    { name: "Jurassic Park", category: "ScienceFiction ", director: "Steven Spielberg", date: "11 June 1993", runtime: "127 min" },
    { name: "Titanic", category: "Romance ", director: "James Cameron", date: "18 November 1997", runtime: "194  min" }
  ]

}
