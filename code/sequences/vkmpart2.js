projects.vkmpart2 = {
  styles: ['mac', 'c64'],
  bodycls: 'c64',
  ui: ['show-key','code'],
  emu: 'c64',
  emucls: 'c64',
  use: 'macbook',
  usecls: 'mac',

  sequences: [
    {
      name: "Keyboard Matrix", sequence: [
        { showKey: '0', emu: '0' },
        { showKey: '0', emu: '0' , grid: 'show' },
        { showKey: '0', emu: '0', grid: { vis: 'show', row: 4 } },
        { showKey: '0', emu: '0', grid: { vis: 'show', col: 3 } }
      ]
    },
    {
      name: "First Row", sequence: [
        { use: { zone: 'r1' } },
        { use: { zone: 'r1', key: 'esc' } },
        { use: { zone: 'r1', key: [ 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12' ] } },
        { use: { zone: 'r1', key: 'power' } },
      ]
    },
    {
      name: "esc to STOP", sequence: [
        { use: 'esc' },
        { emu: 'stop', use: 'esc' }
      ]
    },
    {
      name: 'RUN STOP 1', sequence: [
        {emu: 'stop'},
        {emu: 'stop', grid: {vis: 'show'}},
        {emu: 'stop', grid: {vis: 'show', col: 7, row: 7}},
        {code: 'Escape 7 7 ????', emu: 'stop', use: 'esc', grid: 'hide', rcode: 'hide'},
        {code: 'Escape 7 7 ????', emu: 'stop', use: 'esc', grid: 'hide', flags: 'show', rcode: 'hide'},
        {code: 'Escape 7 7 ????', emu: 'stop', use: 'esc', grid: 'hide', flags: 8, rcode: 'hide'},
      ]
    },
    {
      name: 'RUN STOP 2', sequence: [
        {emu: { key: 'stop', cls: 'o-b' }, use: 'esc' },
        {emu: [ 'shift', { key: 'stop', cls: 'o-t' } ], use: [ 'shift', 'esc' ] },
        {code: 'Escape 7 7 8', emu: 'stop', use: 'esc', grid: 'hide', flags: 8, rcode: 'hide'},
        {code: 'Escape 7 7 8', emu: 'stop', use: 'esc', grid: 'hide', rcode: 'hide' },
      ]
    },
    {
      name: 'fn key', sequence: [
        { use: 'f1' },
        { use: [ 'fn', 'f1' ] }
      ]
    },
    { name: 'f1', sequence: [
        {code: 'F1 ? ? 8', emu: 'f1', use: [ 'fn', 'f1' ], rcode: 'hide', grid: 'hide' },
        {code: 'F1 ? ? 8', emu: 'f1', use: [ 'fn', 'f1' ], rcode: 'hide', grid: { vis: 'show', row: 0, col: 4 } },
        {code: 'F1 0 4 8', emu: 'f1', use: [ 'fn', 'f1' ], rcode: 'hide', grid: 'hide' },
        {code: 'F1 0 4 8', emu: { key: 'f1', cls: 'o-tm3' }, use: [ 'fn', 'f1' ], rcode: 'hide', flags: 8, grid: 'hide' },
        {code: 'F1 0 4 8', emu: [ 'shift', { key: 'f1', cls: 'o-b3' } ], use: [ 'fn', 'shift', 'f1' ], rcode: 'hide', grid: 'hide' },
        {code: 'F1 0 4 8', emu: [ 'shift', { key: 'f1', cls: 'o-b3' } ], use: [ 'fn', 'f2' ], rcode: 'hide', grid: 'hide' },
        {code: 'F1 0 4 ?', emu: { key: 'f1', cls: 'o-tm3' }, use: [ 'fn', 'f1' ], rcode: 'hide', flags: 0, grid: 'hide' },
        {code: 'F1 0 4 0', emu: { key: 'f1', cls: 'o-tm3' }, use: [ 'fn', 'f1' ], rcode: 'hide', grid: 'hide' },
        {code: 'F1 0 4 0', emu: { key: 'f1', cls: 'o-tm3' }, use: [ 'fn', 'shift', 'f1' ], rcode: 'hide', grid: 'hide' },
      ]
    },
    {
      name: 'f2', sequence: [
        {use: [ 'fn', 'f2' ] },
        {emu: { key: 'f1', cls: 'o-b3' } },
        {emu: [ 'shift', { key: 'f1', cls: 'o-b3' } ] },
        {code: 'F2 0 4 ????', emu: [ 'shift', { key: 'f1', cls: 'o-b3' } ], use: [ 'fn', 'f2' ], grid: 'hide', rcode: 'hide' },
        {code: 'F2 0 4 ????', emu: [ 'shift', { key: 'f1', cls: 'o-b3' } ], use: [ 'fn', 'f2' ], grid: 'hide', rcode: 'hide', flags: 'show' },
        {code: 'F2 0 4 ????', emu: [ 'shift', { key: 'f1', cls: 'o-b3' } ], use: [ 'fn', 'f2' ], grid: 'hide', rcode: 'hide', flags: 1 },
        {code: 'F2 0 4 1', emu: [ 'shift', { key: 'f1', cls: 'o-b3' } ], use: [ 'fn', 'f2' ], grid: 'hide', rcode: 'hide' },
        {code: 'F2 0 4 1', emu: [ 'shift', { key: 'f1', cls: 'o-b3' } ], use: [ 'fn', 'shift', 'f2' ], grid: 'hide', rcode: 'hide' },
      ]
    },
    {
      name: "function keys", sequence: [
        {code: 'F1 0 4 0', grid: 'hide'},
        {code: 'F2 0 4 1', grid: 'hide'},
        {code: 'F3 0 5 0', emu: {key: 'f3', cls: 'o-tm3'}, use: ['fn', 'f3']},
        {code: 'F4 0 5 1', emu: [ 'shift', {key: 'f3', cls: 'o-b3'} ], use: ['fn', 'f4']},
        {code: 'F5 0 6 0', emu: {key: 'f5', cls: 'o-tm3'}, use: ['fn', 'f5']},
        {code: 'F6 0 6 1', emu: [ 'shift', {key: 'f5', cls: 'o-b3'} ], use: ['fn', 'f6']},
        {code: 'F7 0 3 0', emu: {key: 'f7', cls: 'o-tm3'}, use: ['fn', 'f7']},
        {code: 'F8 0 3 1', emu: [ 'shift', {key: 'f7', cls: 'o-b3'} ], use: ['fn', 'f8']},
      ]
    },
    {
      name: 'RESTORE 1', sequence: [
        {use: [ 'fn', 'f9', 'f10', 'f11', 'f12' ]},
        {emu: 'restore', use: [ 'fn', 'f9' ]},
        {emu: 'restore', use: [ 'fn', 'f9' ], grid: 'show'},
      ]
    },
    {
      name: 'RESTORE 2', sequence: [
        {code: 'F9 -3 0', emu: 'restore', use: [ 'fn', 'f9' ], rcode: 'hide', grid: 'hide'},
      ]
    },
    {
      name: 'HOME 1', sequence: [
        {emu: { key:'home', cls: 'o-b' } },
        {emu: [ 'shift', { key:'home', cls: 'o-t' } ] },
        {emu: { key:'home', cls: 'o-b' }, use: [ 'fn', 'f12' ] },
        {emu: [ 'shift', { key:'home', cls: 'o-t' } ], use: [ 'fn', 'f11' ] },
      ]
    },
    {
      name: 'HOME 2', sequence: [
        {emu: [ 'shift', { key: 'home', cls: 'o-t' } ], use: [ 'fn', 'f10' ] },
        {emu: { key: 'home', cls: 'o-b' }, use: [ 'fn', 'f12' ] },
        {use: [ 'fn', 'f10', 'f12' ] },
        {emu: 'home', grid: { vis: 'show', row: 6, col: 3 } },
        {code: 'F12 6 3 ????', emu: 'home', use: [ 'fn', 'f12' ], flags: 8, grid: 'hide', rcode: 'hide' },
        {code: 'F12 6 3 8', emu: 'home', use: [ 'fn', 'f12' ], grid: 'hide', rcode: 'hide' },
        {code: 'F12 6 3 8', emu: { key: 'home', cls: 'o-b' }, use: [ 'fn', 'f12' ], grid: 'hide', rcode: 'hide' },
        {code: 'F12 6 3 8', emu: [ 'shift', { key: 'home', cls: 'o-t' } ], use: [ 'fn', 'shift', 'f12' ], grid: 'hide', rcode: 'hide' },
      ]
    },
    { name: 'full row', sequence: [
        {code: 'Escape 7 7 8', emu: 'stop', use: 'esc', grid: 'hide' },
        {code: 'F1 0 4 0', emu: { key: 'f1', cls: 'o-tm3' }, use: [ 'fn', 'f1' ], grid: 'hide' },
        {code: 'F2 0 4 1', emu: [ 'shift', { key: 'f1', cls: 'o-b3' } ], use: [ 'fn', 'f2' ], grid: 'hide' },
        {code: 'F3 0 5 0', emu: {key: 'f3', cls: 'o-tm3'}, use: ['fn', 'f3'], grid: 'hide'},
        {code: 'F4 0 5 1', emu: [ 'shift', {key: 'f3', cls: 'o-b3'} ], use: ['fn', 'f4'], grid: 'hide'},
        {code: 'F5 0 6 0', emu: {key: 'f5', cls: 'o-tm3'}, use: ['fn', 'f5'], grid: 'hide'},
        {code: 'F6 0 6 1', emu: [ 'shift', {key: 'f5', cls: 'o-b3'} ], use: ['fn', 'f6'], grid: 'hide'},
        {code: 'F7 0 3 0', emu: {key: 'f7', cls: 'o-tm3'}, use: ['fn', 'f7'], grid: 'hide'},
        {code: 'F8 0 3 1', emu: [ 'shift', {key: 'f7', cls: 'o-b3'} ], use: ['fn', 'f8'], grid: 'hide'},
        {code: 'F9 -3 0', emu: 'restore', use: [ 'fn', 'f9' ], grid: 'hide'},
        {code: 'F12 6 3 8', emu: 'home', use: [ 'fn', 'f12' ], grid: 'hide' },
      ]
    },
  ]
}

