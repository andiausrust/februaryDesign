import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'https://newsapi.org/v2';
  apiKey = '7d22bbde03cf4a3997cc998357372f50';

  totalPosts = null;
  pages: any;

  constructor(private http: HttpClient) {}

  getTopNews(cat) {
    return this.http.get(
        `${this.url}/top-headlines?category=${cat}&country=us&apiKey=${
            this.apiKey
        }`
    ).pipe(map((res: any) => res.articles));
  }

  getSportSources() {
    return this.http
        .get(
            `${this.url}/sources?category=sports&language=en&apiKey=${this.apiKey}`
        )
        .pipe(map((res: any) => res.sources));
  }

  getRandomUser() {
    return this.http
        .get(
            `https://randomuser.me/api?results=20`
        )
        .pipe(map((res: any) => res.results));
  }
}
