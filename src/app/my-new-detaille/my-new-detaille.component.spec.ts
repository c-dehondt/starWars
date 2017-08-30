import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewDetailleComponent } from './my-new-detaille.component';

describe('MyNewDetailleComponent', () => {
  let component: MyNewDetailleComponent;
  let fixture: ComponentFixture<MyNewDetailleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewDetailleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
