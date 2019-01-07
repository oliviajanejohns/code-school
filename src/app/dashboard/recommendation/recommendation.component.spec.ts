import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendationComponent } from './recommendation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RecommendationComponent', () => {
  let component: RecommendationComponent;
  let fixture: ComponentFixture<RecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationComponent ],
      imports:[ BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create recommendations component', () => {
    expect(component).toBeTruthy();
  });

  it('should call setTimer after Angular calls ngOnInit', () => {
    spyOn(component, 'setTimer');
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.setTimer).toHaveBeenCalled();
  });

  it('should call delayedTimer after Angular calls setTimer', () => {
    spyOn(component, 'delayedTimer');
    component.setTimer();
    fixture.detectChanges();
    expect(component.delayedTimer).toHaveBeenCalled();
  });
  // it('should create a h2 title', () => {
  //   const fixture = TestBed.createComponent(RecommendationComponent);
  //   const compiled = fixture.debugElement.nativeElement;
  //   fixture.detectChanges();
  //   expect(compiled.questions.h2.header).toContain('Alright, do you have any previous coding experience?');
  // });
});
