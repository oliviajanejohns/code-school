import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SignupComponent } from './home/signup/signup.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ModalModule.forRoot()
      ],
      declarations: [
        AppComponent,
        SignupComponent
      ],
      providers: [   
        BsModalService,
        BsModalRef
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'code-space'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('code-space');
  });

  it('should render nav', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav').textContent);
  });

  it('should render footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('footer').textContent).toContain('All rights reserved. © Code Space');
  });

  // it('should call OpenModal() when SignUp is called', () => {
  // });
});
