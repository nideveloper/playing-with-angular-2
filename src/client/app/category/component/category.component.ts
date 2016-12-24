import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'blog-category',
  templateUrl: 'category.component.html',
  styleUrls: []
})
export class BlogCategoryComponent { 
    public id:number;
    private sub: any;
    public errorMessage:string;
    public doShow:boolean = false;
    
    constructor(private route: ActivatedRoute, private cdRef:ChangeDetectorRef) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.doShow = false; 
            this.id = +params['id']; 
            this.cdRef.detectChanges(); 
            this.doShow = true;
        });        
    }
}
