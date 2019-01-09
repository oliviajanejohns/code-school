import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        CarouselComponent,
        SignupComponent,
        LoginComponent
      ],
      imports:[
        ModalModule.forRoot()
      ],
      providers: [   
        BsModalService,
        BsModalRef
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create home component', () => {
    expect(component).toBeTruthy();
  });

  it('should create main container', () => {
   
  });
});
