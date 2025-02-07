projects.vkmpart1b = {
  styles: ['mac', 'c64' ],
  bodycls: 'c64',
  ui: [ ],
  emu: 'c64',
  emucls: 'c64',
  use: 'macbook',
  usecls: 'mac',

  sequences: [
    {
      name: 'Extra Keys', sequence: [
        { use: [ 'minus', 'equal' ], emu: [ 'plus', 'minus', 'gbp' ] },
        { use: [ 'semicolon', 'quote' ], emu: [ 'colon', 'semicolon', 'equal' ] },
        { emu: [ 'gbp', 'equal' ] }
      ],
    }
  ]
}

