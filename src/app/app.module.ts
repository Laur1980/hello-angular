import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './course.component';
import { CoursesService } from './courses.service';
import { RatingsService } from './ratings.service';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { TestComponent } from './test/test.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { FormatPipe } from './format.pipe';
import { TextToBeFormatedComponent } from './text-to-be-formated/text-to-be-formated.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    TestComponent,
    SummaryPipe,
    FavoriteComponent,
    FormatPipe,
    TextToBeFormatedComponent,
    PanelComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService, // without this D.I. does not work
    RatingsService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }