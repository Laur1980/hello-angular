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
import { LearnNgif } from './learn.ngif/learnngif.component';
import { LearnngswitchcaseComponent } from './learnngswitchcase/learnngswitchcase.component';
import { LearnngforComponent } from './learnngfor/learnngfor.component';
import { LearnngstyleComponent } from './learnngstyle/learnngstyle.component';
import { LearntraversalComponent } from './learntraversal/learntraversal.component';
import { InputFormatDirective } from './input-format.directive';
import { LearncustomdirectiveComponent } from './learncustomdirective/learncustomdirective.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UselessPipe } from './useless.pipe';
import { ContactForm2Component } from './contact-form2/contact-form2.component';
import { TemplateformassignmentComponent } from './templateformassignment/templateformassignment.component';

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
    LikeComponent,
    LearnNgif,
    LearnngswitchcaseComponent,
    LearnngforComponent,
    LearnngstyleComponent,
    LearntraversalComponent,
    InputFormatDirective,
    LearncustomdirectiveComponent,
    ZippyComponent,
    ContactFormComponent,
    UselessPipe,
    ContactForm2Component,
    TemplateformassignmentComponent
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
