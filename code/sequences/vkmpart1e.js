projects.vkmpart1e = {
  styles: [ 'mac', 'c64' ],
  bodycls: 'c64',
  ui: [ 'show-key' ],
  emu: 'c64',
  emucls: 'c64',
  use: 'macbook',
  usecls: 'mac',

  sequences: [
    { name: 'Zone Sequence', sequence: [
        { zone: 'core' },
        { zone: 'num' },
        { zone: 'sym' },
        { zone: 'act' },
        { zone: 'fn' },
        { zone: 'trans' },
        { zone: [ 'core', 'num', 'sym', 'act', 'fn', 'trans' ] }
      ]
    },
    {
      name: 'Zoomed Key Sequence', sequence: [
        {bodycls: 'zoomin'},
        {bodycls: 'dozoom-g'},
        {showKey: 'G', emu: 'g'},
        {emu: {key: 'g', cls: 'o-b3'}},
        {showKey: '&#xe065', emu: {key: 'g', cls: 'o-b3l'}},
        {showKey: '&#xe047;', emu: {key: 'g', cls: 'o-b3r'}},
        {bodycls: '-dozoom-g'},
        {bodycls: '-zoomin'},
      ]
    },
    {
      name: 'PETSCII challenge', sequence: [
        {showKey: 'Q', emu: 'q', use: 'q'},
        {showKey: '&#xe06b;', emu: [ 'shift', { key: 'q', cls: 'o-b3r' } ], use: [ 'shift', 'q' ] },
        {showKey: '&#xe051;', emu: [ 'cbm', { key: 'q', cls: 'o-b3l' } ] },
        {showKey: '+', emu: 'plus', use: [ 'shift',  { key: 'equal', cls: 'o-t' } ] },
        {showKey: '&#xe066;', emu: { key: 'plus', cls: 'o-b3l' } },
        {showKey: '&#xe05b;', emu: { key: 'plus', cls: 'o-b3r' } },
      ]
    },
    {
      name: 'Core Keys Sequence', sequence: [
        {zone: 'core'},
        {showKey: 'Q', emu: 'q', use: 'q'},
        {showKey: 'W', emu: 'w', use: 'w'},
        {showKey: 'E', emu: 'e', use: 'e'},
        {showKey: 'R', emu: 'r', use: 'r'},
        {showKey: 'T', emu: 't', use: 't'},
        {showKey: 'Y', emu: 'y', use: 'y'},
        {showKey: 'V', emu: 'v', use: 'v'},
        {showKey: 'B', emu: 'b', use: 'b'},
        {showKey: 'N', emu: 'n', use: 'n'},
        {showKey: 'M', emu: 'm', use: 'm'},
        {emu: 'space', use: 'space'},
      ]
    },
    {
      name: 'Number Keys Sequence', sequence: [
        {zone: 'num'},
        {showKey: '1', emu: {key: '1', cls: 'o-m3'}, use: {key: '1', cls: 'o-b'}},
        {showKey: '2', emu: {key: '2', cls: 'o-m3'}, use: {key: '2', cls: 'o-b'}},
        {showKey: '3', emu: {key: '3', cls: 'o-m3'}, use: {key: '3', cls: 'o-b'}},
        {showKey: '4', emu: {key: '4', cls: 'o-m3'}, use: {key: '4', cls: 'o-b'}},
        {showKey: '5', emu: {key: '5', cls: 'o-m3'}, use: {key: '5', cls: 'o-b'}},
        {showKey: '6', emu: {key: '6', cls: 'o-m3'}, use: {key: '6', cls: 'o-b'}},
        {showKey: '7', emu: {key: '7', cls: 'o-m3'}, use: {key: '7', cls: 'o-b'}},
        {showKey: '8', emu: {key: '8', cls: 'o-m3'}, use: {key: '8', cls: 'o-b'}},
        {showKey: '9', emu: {key: '9', cls: 'o-m3'}, use: {key: '9', cls: 'o-b'}},
        {showKey: '0', emu: {key: '0', cls: 'o-m3'}, use: {key: '0', cls: 'o-b'}},
      ]
    },
    {
      name: 'Shifted Number Keys Sequence', sequence: [
        {zone: 'num'},
        {showKey: '!', emu: ['shift', {key: '1', cls: 'o-t3'}], use: ['shift', {key: '1', cls: 'o-t'}]},
        {showKey: '#', emu: ['shift', {key: '3', cls: 'o-t3'}], use: ['shift', {key: '3', cls: 'o-t'}]},
        {showKey: '$', emu: ['shift', {key: '4', cls: 'o-t3'}], use: ['shift', {key: '4', cls: 'o-t'}]},
        {showKey: '%', emu: ['shift', {key: '5', cls: 'o-t3'}], use: ['shift', {key: '5', cls: 'o-t'}]},
        {showKey: '&amp;', emu: ['shift', {key: '6', cls: 'o-t3'}], use: ['shift', {key: '7', cls: 'o-t'}]},
        {showKey: '(', emu: ['shift', {key: '8', cls: 'o-t3'}], use: ['shift', {key: '9', cls: 'o-t'}]},
        {showKey: ')', emu: ['shift', {key: '9', cls: 'o-t3'}], use: ['shift', {key: '0', cls: 'o-t'}]},
        {showKey: '@', emu: 'at', use: ['shift', {key: '2', cls: 'o-t'}]},
        {showKey: '*', emu: 'asterisk', use: ['shift', {key: '8', cls: 'o-t'}]},
        {showKey: '&uarr;', emu: { key: 'uparr', cls: 'o-tm3'}, use: ['shift', {key: '6', cls: 'o-t'}]},
      ]
    },
    {
      name: 'Symbol Keys Sequence', sequence: [
        {zone: 'sym'},
        {showKey: ',', emu: {key: 'comma', cls: 'o-b'}, use: {key: 'comma', cls: 'o-b'}},
        {showKey: '<', emu: ['shift', {key: 'comma', cls: 'o-t'}], use: ['shift', {key: 'comma', cls: 'o-t'}]},
        {showKey: '.', emu: {key: 'period', cls: 'o-b'}, use: {key: 'period', cls: 'o-b'}},
        {showKey: '>', emu: ['shift', {key: 'period', cls: 'o-t'}], use: ['shift', {key: 'period', cls: 'o-t'}]},
        {showKey: '/', emu: {key: 'slash', cls: 'o-b'}, use: {key: 'slash', cls: 'o-b'}},
        {showKey: '?', emu: ['shift', {key: 'slash', cls: 'o-t'}], use: ['shift', {key: 'slash', cls: 'o-t'}]},
        {showKey: '-', emu: {key: 'minus', cls: 'o-tm3'}, use: {key: 'minus', cls: 'o-b'}},
        {showKey: '=', emu: 'equal', use: {key: 'equal', cls: 'o-b'}},
        {showKey: '+', emu: {key: 'plus', cls: 'o-tm3'}, use: ['shift', {key: 'equal', cls: 'o-t'}]},
        {showKey: ';', emu: {key: 'semicolon', cls: 'o-b'}, use: {key: 'semicolon', cls: 'o-b'}},
        {showKey: ':', emu: {key: 'colon', cls: 'o-b'}, use: ['shift', {key: 'semicolon', cls: 'o-t'}]},
        {showKey: '[', emu: ['shift', {key: 'colon', cls: 'o-t'}], use: {key: 'ltbracket', cls: 'o-b'}},
        {showKey: ']', emu: ['shift', {key: 'semicolon', cls: 'o-t'}], use: {key: 'rtbracket', cls: 'o-b'}},
        {showKey: "'", emu: ['shift', {key: '7', cls: 'o-t3'}], use: {key: 'quote', cls: 'o-b'}},
        {showKey: '"', emu: ['shift', {key: '2', cls: 'o-t3'}], use: ['shift', {key: 'quote', cls: 'o-t'}]},
        {showKey: '&#xe064;', emu: ['cbm', {key: 'at', cls: 'o-b3l'}], use: ['shift', {key: 'minus', cls: 'o-t'}]},
        {showKey: '&#xe04d;', emu: ['shift', {key: 'm', cls: 'o-b3r'}], use: {key: 'backslash', cls: 'o-b'}},
        {showKey: '&#xe05b;', emu: ['shift', {key: 'minus', cls: 'o-b3r'}], use: ['shift', {key: 'backslash', cls: 'o-t'}] },
      ]
    },
    {
      name: 'Function Keys Sequence', sequence: [
        {zone: 'fn'},
        {showKey: '', emu: {key: 'f1', cls: 'o-tm3'}, use: ['fn', 'f1']},
        {showKey: '', emu: ['shift', {key: 'f1', cls: 'o-b3'}], use: ['fn', 'f2']},
        {showKey: '', emu: {key: 'f3', cls: 'o-tm3'}, use: ['fn', 'f3']},
        {showKey: '', emu: ['shift', {key: 'f3', cls: 'o-b3'}], use: ['fn', 'f4']},
        {showKey: '', emu: {key: 'f5', cls: 'o-tm3'}, use: ['fn', 'f5']},
        {showKey: '', emu: ['shift', {key: 'f5', cls: 'o-b3'}], use: ['fn', 'f6']},
        {showKey: '', emu: {key: 'f7', cls: 'o-tm3'}, use: ['fn', 'f7']},
        {showKey: '', emu: ['shift', {key: 'f7', cls: 'o-b3'}], use: ['fn', 'f8']},
      ]
    },
    {
      name: 'Action Keys Sequence', sequence: [
        {zone: 'act'},
        {showKey: '', emu: 'return', use: 'return'},
        {showKey: '', emu: {key: 'del', cls: 'o-b'}, use: 'delete'},
        {showKey: '', emu: ['shift', {key: 'del', cls: 'o-t'}], use: ['shift', 'delete']},
        {showKey: '', emu: ['shift', {key: 'down', cls: 'o-tm3'}], use: {key: 'updown', cls: 'o-t'}},
        {showKey: '', emu: {key: 'down', cls: 'o-bm3'}, use: {key: 'updown', cls: 'o-b'}},
        {showKey: '', emu: ['shift', {key: 'right', cls: 'o-tm3'}], use: 'left'},
        {showKey: '', emu: {key: 'right', cls: 'o-bm3'}, use: 'right'},
        {showKey: '', emu: 'restore', use: ['fn', 'f9']},
        {showKey: '', emu: {key: 'home', cls: 'o-b'}, use: ['fn', 'f12']},
        {showKey: '', emu: ['shift', {key: 'home', cls: 'o-t'}], use: ['fn', 'f11']},

        {showKey: '', emu: {key: 'stop', cls: 'o-b'}, use: 'esc'},
        {showKey: '', emu: ['shift', {key: 'stop', cls: 'o-t'}], use: ['shift', 'esc']},
      ]
    },
    {
      name: 'Transforming Keys Sequence', sequence: [
        {zone: 'trans'},
        {showKey: '', emu: 'ltshift', use: 'ltshift'},
        {showKey: '', emu: 'rtshift', use: 'rtshift'},
        {showKey: '', emu: 'shiftlock', use: 'capslock'},
        {showKey: '', emu: 'ctrl', use: 'control'},
        {showKey: '', emu: 'cbm', use: 'ltoption'},
      ]
    },
    {
      name: 'Remapped Keys Sequence', sequence: [
        {emu: [
          { key: 'plus', cls: 'o-b3' },
          { key: 'minus', cls: 'o-b3l' },
          { key: 'gbp', cls: 'o-b3' },
          { key: 'at', cls: 'o-b3r' },
          { key: 'asterisk', cls: 'o-b3' },
          { key: 'uparr', cls: 'o-b3' }
        ] },
        {emu: { key: 'at', cls: 'o-b3r' } },
        {emu: [
            { key: 'o', cls: 'o-b3r' },
            { key: 'p', cls: 'o-b3r' },
            { key: 'at', cls: 'o-b3r' },
            { key: 'l', cls: 'o-b3r' }
        ] },
        {showKey: '&#xe07a;', emu: [ 'shift', { key: 'at', cls: 'o-b3r' } ], use: [ 'shift', { key: 'semicolon', cls: 'o-t' } ] },
        {showKey: '&#xe07a;', emu: [ 'shift', { key: 'at', cls: 'o-b3r' } ], use: [ 'option', 'semicolon' ] },
        {showKey: '&#xe05b;', emu: [ 'shift', { key: 'plus', cls: 'o-b3r' } ], use: [ 'option', 'equal' ] },
        {showKey: '&#xe040;', emu: [ 'shift', { key: 'asterisk', cls: 'o-b3r' } ], use: [ 'option', 'minus' ] },
        {emu: [ {key: 'gbp', cls: 'o-b3r' }, { key: 'asterisk', cls: 'o-b3l' } ] },
        {showKey: '&#xe069;', emu: [ 'shift', { key: 'gbp', cls: 'o-b3r' } ], use: [ 'shift', { key: 'ltbracket', cls: 'o-t' } ] },
        {showKey: '&#xe05f;', emu: [ 'cbm', { key: 'asterisk', cls: 'o-b3l' } ], use: [ 'option', 'ltbracket' ] },
        {emu: [ {key: 'plus', cls: 'o-b3l' }, { key: 'minus', cls: 'o-b3l' }, { key: 'gbp', cls: 'o-b3l' } ] },
        {showKey: '&#xe05c;', emu: [ 'cbm', { key: 'minus', cls: 'o-b3l' } ], use: [ 'shift', { key: 'rtbracket', cls: 'o-t' } ] },
        {showKey: '&#xe068;', emu: [ 'cbm', { key: 'gbp', cls: 'o-b3l' } ], use: [ 'option', 'rtbracket' ] },
        {showKey: '&#xe066;', emu: [ 'cbm', { key: 'plus', cls: 'o-b3l' } ], use: [ 'option', 'quote' ] },
        {showKey: '&pi;', emu: [ 'shift', { key: 'uparr', cls: 'o-b3' } ], use: [ 'option', 'backslash' ] },
      ]
    },
    {
      name: 'Missing Keys Sequence', sequence: [
        {showKey: '&larr;', emu: 'ltarr', use: {key: 'backtick', cls: 'o-b'}},
        {showKey: '&pound;', emu: { key: 'gbp', cls: 'o-tm3' }, use: ['shift', {key: 'backtick', cls: 'o-t'}]},
      ]
    },
    {
      name: 'Tab Key Sequence', sequence: [
        {showKey: ' ', emu: 'space', use: 'tab'},
        {showKey: '', emu: {key: 'right', cls: 'o-tm3'}, use: ['shift', 'tab']},
      ]
    }
  ]
}