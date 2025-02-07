projects.vkmpart1a = {
  styles: ['mac', 'mapped' ],
  bodycls: 'c64',
  ui: [ 'demo-key' ],
  map: 'mapped-c64-pos',
  mapcls: 'mac',

  sequences: [
    { name: "Messed Up Mappings", sequence: [
        { map: [ '2', '6', '7', '8', '9', '0' ] },
        { map: [ 'shift', { key: '2', cls: 'o-t3' } ], demo: '<i>@</i><b>2</b>' },
        { map: [ 'shift', { key: '8', cls: 'o-t3' } ], demo: '<i>*</i><b>8</b>' },
        { map: [ 'minus', 'equal', 'ltbracket', 'rtbracket', 'semicolon', 'quote', 'backslash' ] },
        { map: 'minus', demo: '<i>_</i><b>-</b>' },
        { map: 'equal', demo: '<i>+</i><b>=</b>' },
      ]
    },
    { name: "Missing Keys", sequence: [
        { map: [ 'option', '3' ] },
        { map: [ 'fn' , 'option', { key: 'updown', cls: 'o-b' } ] }
      ]
    }
  ]
}

