import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchForm = new FormGroup({
    keywords: new FormControl()
  })
  router = new Router;
  onSearch = ()=>{
    const keywords = this.searchForm.controls.keywords.value
    this.router.navigate(['search'],{queryParams:{keywords : keywords}});
  }
}
