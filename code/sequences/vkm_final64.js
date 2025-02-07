projects.vkm_final64 = {
  styles: ['mac', 'mapped' ],
  bodycls: 'c64',
  ui: [ ],
  map: 'mapped-c64',
  mapcls: 'mac',

  sequences: [
    { name: 'fifth + sixth row', sequence: [
        { map: { zone: 'r5'} },
        { map: { zone: 'r6'} },
      ]
    },
    { name: 'fifth row', sequence: [
        { map: { zone: 'r5'} },
      ]
    },
    { name: 'sixth row', sequence: [
        { map: { zone: 'r6'} },
      ]
    },
    { name: 'changed from plan', sequence: [
        { },
        { map: [ 'fn', 'f11' ] },
        { map: [ 'fn', { key: 'f12', cls: 'o-t3' }, 'shift' ] },
        { map: [ 'control', 'ltoption' ] },
        { map: 'ltcommand' },
        { map: [ 'control', 'ltshift' ] },
        { map: [ 'ltoption', 'i', 'h', 'n' ] }
      ]
    }
  ]
}
