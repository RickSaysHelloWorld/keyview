projects.vkmpart1c = {
  styles: ['mac', 'c64', 'mapped' ],
  bodycls: 'c64',
  ui: [ 'demo-key' ],
  map: 'mapped-c64-vice',
  mapcls: 'mac',

  sequences: [
    {
      name: 'Messed Up Mappings', sequence: [
        { map: 'tab' },
        { map: [ 'f1', 'f2' ] },
        { map: [ 'right', 'left' ] },
        { map: [ 'equal', 'ltbracket', 'rtbracket' ] },
        { map: [ 'shift', { key: 'equal', cls: 'o-t3' } ], demo: { cls: 'c64', html: '+<em><cbm>&#xe066;</cbm><cbm>&#xe05b;</cbm></em>' } }
      ],
    },
  ]
}

