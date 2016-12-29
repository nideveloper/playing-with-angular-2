import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { BlogModule } from './blog/blog.module';
import { BlogPostModule } from './blog-post/blog-post.module';
import { BlogCategoryModule } from './category/category.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { SearchModule } from './search/search.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AboutModule, BlogModule, BlogPostModule, BlogCategoryModule, HomeModule, ContactModule, SearchModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
