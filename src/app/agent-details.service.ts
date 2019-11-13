import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Agent from './../agent';


@Injectable()
export class AgentDetailsService {
  agents: Agent[] = [
    {
    actor_name: 'Peter Dinklage',
    character_name: 'Tyrion Lannister',
    gender: 'Male',
        status: 'Alive'
    },
    {
    actor_name: 'Sean Bean',
    character_name: 'Ned Stark',
    gender: 'Male',
    status: 'Dead'
    },
    {
    actor_name: 'Emilia Clark',
    character_name: 'Khaleesi',
    gender: 'Female',
    status: 'Alive'
    },
    {
    actor_name: 'Catelyn Stark',
    character_name: 'Michelle Fairley',
    gender: 'Female',
    status: 'Dead'
    }
  ];
  constructor() { }
  getAgentDetails(): Observable<Hero[]> {
    return of(agents);
  }
}
