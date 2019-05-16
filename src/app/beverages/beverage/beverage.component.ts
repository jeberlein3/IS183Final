import { Component, OnInit } from '@angular/core';
import { BeverageService } from '../beverage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {

  beverage: Object;

  constructor(
    private beverageService: BeverageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    const resp = await this.bookService.getBookById(this.activatedRoute.snapshot.params['id']);
    this.book = resp || [];
  }

  async updateBook(book: any) {
    const bookID = book.id;
    const resp = await this.bookService.updateBook(bookID, book);
    if (resp) {
      this.router.navigate(['books']);
    }
  }

}
