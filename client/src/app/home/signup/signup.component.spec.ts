import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { compileDirective } from '@angular/core/src/render3/jit/directive';

describe('signUp', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],   
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
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create signUp Component', () => {
    expect(component).toBeTruthy();
  });

  it('should have title as Sign Up and Start Learning!', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('Sign Up and Start Learning!');
  });

  it('should render the SignUp button', async(() => {
    // spyOn(component, 'signUp');
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('#signUp');
    expect(button.textContent).toContain('Sign Up');
  }));

  it('should render the close button', async(() => {
    spyOn(component, 'close');
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('#close');
    expect(button.textContent).toContain('Close');
  }));

  // it('should call the signUp method when button is clicked', async(() => {
  //     spyOn(component, 'signUp');
  //     let button = fixture.debugElement.nativeElement.querySelector('#signUp');
  //     button.click();
  //     // need to wait for the event to process 
  //     fixture.detectChanges();
  //     expect(component.signUp).toHaveBeenCalled();
  // }));

  // it('should call the close method when button is clicked', () => {
  //   spyOn(component, 'close')
  //   let button = fixture.debugElement.nativeElement.querySelector('#close');
  //   button.click();
  //   // need to wait for the event to process 
  //   fixture.detectChanges();
  //   expect(component.close).toHaveBeenCalled();
  // });
});
