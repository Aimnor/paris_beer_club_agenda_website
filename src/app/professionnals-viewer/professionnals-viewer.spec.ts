import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionnalsViewer } from './professionnals-viewer';

describe('ProfessionnalsViewer', () => {
  let component: ProfessionnalsViewer;
  let fixture: ComponentFixture<ProfessionnalsViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionnalsViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionnalsViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
