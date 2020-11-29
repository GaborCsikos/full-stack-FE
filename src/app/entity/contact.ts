export const CONTACTS = [
    {
      id: 0,
      name: 'Mobile phone',
      value: '+36301114445',
      type: 'Primary'
    },
    {
      id: 1,
      name: 'Email',
      value: 'something@example.com',
      type: 'Secondary'
    },
    {
      id: 2,
      name: 'Facebook link',
      value: 'Here could be the ling',
      type: 'Information only'
    }
  ];

export interface Contact {
    id: number;
    name: string;  // can be enum
    value: string;
    type: string; // can be enum
}
