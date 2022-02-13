import { Unit } from '../models/Unit';

export const mockUnits: Unit[] = [
  {
    name: 'Swampcalla Shaman',
    subName: 'And Pot-Grot',
    stats: {
      move: '5"',
      save: '5+',
      wounds: '6',
      bravery: '5'
    },
    weapons: [
      {
        name: 'Bogbark Staff',
        range: '3"',
        attacks: '2',
        toHit: '3+',
        toWound: '3+',
        rend: '-1',
        damage: 'D3'
      },
      {
        name: 'Back-up Stabba',
        range: '1"',
        attacks: '2',
        toHit: '4+',
        toWound: '4+',
        rend: '',
        damage: '1'
      }
    ]
  },
  {
    name: 'Gutrippaz',
    stats: {
      move: '5"',
      save: '5+',
      bravery: '5',
      wounds: '2'
    },
    weapons: [
      {
        name: 'Wicked Stickka',
        range: '2"',
        attacks: '2',
        toHit: '4+',
        toWound: '4+',
        rend: '',
        damage: '1'
      },
      {
        name: 'Wicked Hacker',
        range: '1"',
        attacks: '2',
        toHit: '4+',
        toWound: '3+',
        rend: '',
        damage: '1'
      }
    ]
  }
];
