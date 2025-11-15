import { Component, inject, OnInit } from '@angular/core';
import { NewsDto } from '../../data-type/news-data';
import { NewsService } from '../../services/news.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent implements OnInit {
  private readonly newsService = inject(NewsService);
  news!: NewsDto[];

  ngOnInit(): void {
    this.news = this.newsService.fetchNews();
  }
}
