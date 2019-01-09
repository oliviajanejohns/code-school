import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';
import { CarouselComponent } from './carousel.component';
import { ModalModule } from 'ngx-bootstrap/modal';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CarouselComponent,
        ModalComponent 
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
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create carousel', () => {
    expect(component).toBeTruthy();
  });
});
