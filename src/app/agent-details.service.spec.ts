/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AgentDetailsService } from './agent-details.service';

describe('AgentDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgentDetailsService]
    });
  });

  it('should ...', inject([AgentDetailsService], (service: AgentDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
