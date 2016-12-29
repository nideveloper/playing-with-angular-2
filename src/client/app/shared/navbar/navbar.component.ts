import { Component } from '@angular/core';
import {Router} from '@angular/router'

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent { 

  constructor(private router:Router){ }

  search(query:string) {
    this.router.navigate(['/search/'+query]);
  }
}
