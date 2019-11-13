/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgentHealthComponent } from './agent-health.component';

describe('AgentHealthComponent', () => {
  let component: AgentHealthComponent;
  let fixture: ComponentFixture<AgentHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
