projects.vkmpart3 = {
  styles: ['mac', 'c64'],
  bodycls: 'c64',
  ui: ['show-key', 'code'],
  emu: 'c64',
  emucls: 'c64',
  use: 'macbook',
  usecls: 'mac',

  sequences: [
    {
      name: "second row", sequence: [
        { use: { zone: 'r2' } },
        { use: { zone: 'r2', key: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ] } },
        { use: { zone: 'r2', key: [ 'backtick', 'minus', 'equal' ] } },
        { use: { zone: 'r2', key: 'delete' } },
      ]
    },
    {
      name: 'second row review', sequence: [
        {
          emu: [
            {key: '1', cls: 'o-m3'}, {key: '2', cls: 'o-m3'}, {key: '3', cls: 'o-m3'}, {key: '4', cls: 'o-m3'},
            {key: '5', cls: 'o-m3'}, {key: '6', cls: 'o-m3'}, {key: '7', cls: 'o-m3'}, {key: '8', cls: 'o-m3'},
            {key: '9', cls: 'o-m3'}, {key: '0', cls: 'o-m3'}
          ],
          use: [
            {key: '1', cls: 'o-b'}, {key: '2', cls: 'o-b'}, {key: '3', cls: 'o-b'}, {key: '4', cls: 'o-b'},
            {key: '5', cls: 'o-b'}, {key: '6', cls: 'o-b'}, {key: '7', cls: 'o-b'}, {key: '8', cls: 'o-b'},
            {key: '9', cls: 'o-b'}, {key: '0', cls: 'o-b'}
          ]
        },
        { emu: [
            { key: '1', cls: 'o-t3' }, { key: 'at', cls: 'o-tm3' }, { key: '3', cls: 'o-t3' }, { key: '4', cls: 'o-t3' },
            { key: '5', cls: 'o-t3' }, { key: 'uparr', cls: 'o-tm3' }, { key: '6', cls: 'o-t3' }, { key: 'asterisk', cls: 'o-tm3' },
            { key: '8', cls: 'o-t3' }, { key: '9', cls: 'o-t3' }
          ],
          use: [
            { key: '1', cls: 'o-t' }, { key: '2', cls: 'o-t' }, { key: '3', cls: 'o-t' }, { key: '4', cls: 'o-t' },
            { key: '5', cls: 'o-t' }, { key: '6', cls: 'o-t' }, { key: '7', cls: 'o-t' }, { key: '8', cls: 'o-t' },
            { key: '9', cls: 'o-t' }, { key: '0', cls: 'o-t' }
          ]
        },
        { emu: [ 'plus', 'minus', 'gbp', 'home', 'del' ], use: [ 'minus', 'equal', 'delete' ] },
      ]
    },
    {
      name: 'backtick 1', sequence: [
        { use: { key: 'backtick', cls: 'o-b' } },
        { use: [ 'shift', { key: 'backtick', cls: 'o-t' } ] },
        { use: 'backtick' },
        { showKey: '&larr;', emu: 'ltarr' },
        { showKey: '&larr;', emu: 'ltarr', use: { key: 'backtick', cls: 'o-b' } },
        { showKey: '&pound;', emu: { key: 'gbp', cls: 'o-tm3' } },
        { showKey: '&pound;', emu: { key: 'gbp', cls: 'o-tm3' }, use: [ 'shift', { key: 'backtick', cls: 'o-t' } ] },
      ]
    },
    {
      name: 'backtick 2', sequence: [
        { showKey: '&larr;', code: 'grave ? ? ????', emu: 'ltarr', use: { key: 'backtick', cls: 'o-b' }, grid: 'hide', rcode: 'hide' },
        { showKey: '&larr;', code: 'grave ? ? ????', emu: 'ltarr', use: { key: 'backtick', cls: 'o-b' }, grid: { vis: 'show', row: 7, col: 1 }, rcode: 'hide'},
        { showKey: '&larr;', code: 'grave 7 1 ????', emu: [ 'shift', 'ltarr' ], grid: 'hide', rcode: 'hide' },
        { showKey: '&larr;', code: 'grave 7 1 ????', emu: 'ltarr', use: { key: 'backtick', cls: 'o-b' }, grid: 'hide', rcode: 'hide', flags: 0 },
        { showKey: '&larr;', code: 'grave 7 1 0', emu: 'ltarr', use: { key: 'backtick', cls: 'o-b' }, grid: 'hide', rcode: 'hide' },
      ]
    },
    {
      name: 'tilde 1', sequence: [
        { use: [ 'shift', { key: 'backtick', cls: 'o-t' } ] },
        { emu: [ 'stop', 'home' ] },
        { emu: { key: 'stop', cls: 'o-b' }, use: 'esc' },
        { emu: [ 'shift', { key: 'stop', cls: 'o-t' } ], use: [ 'shift', 'esc' ] },
        { emu: 'stop', use: 'esc', flags: 8 },
        { code: 'Escape 7 7 8', emu: 'stop', use: 'esc', grid: 'hide', rcode: 'hide' },
        { use: [ 'shift', { key: 'backtick', cls: 'o-t' } ] },
        { showKey: '&pound;', emu: { key: 'gbp', cls: 'o-tm3' }, use: [ 'shift', { key: 'backtick', cls: 'o-t' } ] },
        { showKey: '&pound;', emu: { key: 'gbp', cls: 'o-tm3' }, use: [ 'shift', { key: 'backtick', cls: 'o-t' } ], flags: 'show' },
        { showKey: '&pound;', emu: { key: 'gbp', cls: 'o-tm3' }, use: [ 'shift', { key: 'backtick', cls: 'o-t' } ], flags: 128 },
        { showKey: '&pound;', code: 'grave ? ? 128', emu: { key: 'gbp', cls: 'o-tm3' }, use: [ 'shift', { key: 'backtick', cls: 'o-t' } ], grid: { vis: 'show', row: 6, col: 0 }, rcode: 'hide' },
        { showKey: '&pound;', code: 'grave 6 0 128', emu: { key: 'gbp', cls: 'o-tm3' }, use: [ 'shift', { key: 'backtick', cls: 'o-t' } ], grid: 'hide', rcode: 'hide' },
      ]
    },
    {
      name: 'tilde 2', sequence: [
        { showKey: '&pound;', code: 'grave 7 1 0,grave 6 0 128', emu: { key: 'gbp', cls: 'o-tm3' }, use: [ 'shift', { key: 'backtick', cls: 'o-t' } ], grid: 'hide', rcode: 'hide', flags: 'show' },
        { showKey: '&pound;', code: 'grave 7 1 0,grave 6 0 128', emu: { key: 'gbp', cls: 'o-tm3' }, use: [ 'shift', { key: 'backtick', cls: 'o-t' } ], grid: 'hide', rcode: 'hide', flags: 32 },
        { code: 'grave 7 1 32,grave 6 0 128', emu: [ 'ltarr', { key: 'gbp', cls: 'o-tm3' } ], use: 'backtick', grid: 'hide', rcode: 'hide' },
      ]
    },
    {
      name: 'tilde 3', sequence: [
        { showKey: '&larr;', code: 'grave 7 1 0', emu: 'ltarr', use: { key: 'backtick', cls: 'o-b' }, grid: 'hide' },
        { showKey: '&pound;', code: 'asciitilde 6 0 0', emu: { key: 'gbp', cls: 'o-tm3' }, use: [ 'shift', { key: 'backtick', cls: 'o-t' } ], grid: 'hide', rcode: 'hide' },
      ]
    },
    {
      name: 'tilde 4', sequence: [
        {bodycls: 'zoomin'},
        {bodycls: 'dozoom-gbp', emu: 'gbp' },
        {showKey: '&#xe069;', emu: { key: 'gbp', cls: 'o-b3r'} },
        {showKey: '&#xe069;', bodycls: '-dozoom-gbp', emu: [ 'shift', { key: 'gbp', cls: 'o-b3r'} ]},
        {showKey: '&pound;', bodycls: '-zoomin', code: 'asciitilde 6 0 0', emu: [ 'shift', { key: 'gbp', cls: 'o-tm3' } ], use: [ 'shift', { key: 'backtick', cls: 'o-t' } ], grid: 'hide', rcode: 'hide' },
        {showKey: '&pound;', code: 'asciitilde 6 0 0', emu: [ 'shift', { key: 'gbp', cls: 'o-tm3' } ], use: [ 'shift', { key: 'backtick', cls: 'o-t' } ], grid: 'hide', rcode: 'hide', flags: 'show' },
        {showKey: '&pound;', code: 'asciitilde 6 0 0', emu: [ 'shift', { key: 'gbp', cls: 'o-tm3' } ], use: [ 'shift', { key: 'backtick', cls: 'o-t' } ], grid: 'hide', rcode: 'hide', flags: 16 },
        {showKey: '&pound;', code: 'asciitilde 6 0 16', emu: { key: 'gbp', cls: 'o-tm3' }, use: [ 'shift', { key: 'backtick', cls: 'o-t' } ], grid: 'hide', rcode: 'hide' },
      ]
    },
    { name: "number 1", sequence: [
        {showKey: '1', emu: '1', grid: { vis: 'show', row: 7, col: 0 } },
        {showKey: '1', code: '1 7 0 0', emu: { key: '1', cls: 'o-m3'}, use: { key: '1', cls: 'o-b' }, grid: 'hide' },
        {showKey: '!', code: 'exclam 7 0 ????', emu: [ 'shift', { key: '1', cls: 'o-t3' } ], use: [ 'shift', { key: '1', cls: 'o-t' } ], grid: 'hide', rcode: 'skip' },
        {showKey: '!', code: 'exclam 7 0 ????', emu: [ 'shift', { key: '1', cls: 'o-t3' } ], use: [ 'shift', { key: '1', cls: 'o-t' } ], grid: 'hide', rcode: 'skip', flags: 1 },
        {showKey: '!', code: 'exclam 7 0 1', emu: [ 'shift', { key: '1', cls: 'o-t3' } ], use: [ 'shift', { key: '1', cls: 'o-t' } ], grid: 'hide' },
        {showKey: '!', code: 'exclam 7 0 8', emy: [ 'shift', { key: '1', cls: 'o-t3' } ], use: [ 'shift', { key: '1', cls: 'o-t' } ], grid: 'hide', rcode: 'skip', flags: 8 }
      ]
    },
    { name: 'numbers', sequence: [
        { code: '1 7 0 0' },
        { code: 'exclam 7 0 1' },
        {showKey: '2', code: '2 7 3 0', emu: { key: '2', cls: 'o-m3' }, use: { key: '2', cls: 'o-b' } },
        {showKey: '@', code: 'at 5 6 1', emu: { key: 'at', cls: 'o-tm3' }, use: [ 'shift', { key: '2', cls: 'o-t' } ] },
        {showKey: '3', code: '3 1 0 0', emu: { key: '3', cls: 'o-m3' }, use: { key: '3', cls: 'o-b' } },
        {showKey: '#', code: 'numbersign 1 0 1', emu: [ 'shift', { key: '3', cls: 'o-t3' } ], use: [ 'shift', { key: '3', cls: 'o-t' } ] },
        {showKey: '4', code: '4 1 3 0', emu: { key: '4', cls: 'o-m3' }, use: { key: '4', cls: 'o-b' } },
        {showKey: '$', code: 'dollar 1 3 1', emu: [ 'shift', { key: '4', cls: 'o-t3' } ], use: [ 'shift', { key: '4', cls: 'o-t' } ] },
        {showKey: '5', code: '5 2 0 0', emu: { key: '5', cls: 'o-m3' }, use: { key: '5', cls: 'o-b' } },
        {showKey: '%', code: 'percent 2 0 1', emu: [ 'shift', { key: '5', cls: 'o-t3' } ], use: [ 'shift', { key: '5', cls: 'o-t' } ] },
        {showKey: '6', code: '6 2 3 0', emu: { key: '6', cls: 'o-m3' }, use: { key: '6', cls: 'o-b' } },
        {showKey: '&uarr;', code: 'asciicircum 6 6 16', emu: { key: 'uparr', cls: 'o-tm3' }, use: [ 'shift', { key: '6', cls: 'o-t' } ] },
        {showKey: '7', code: '7 3 0 0', emu: { key: '7', cls: 'o-m3' }, use: { key: '7', cls: 'o-b' } },
        {showKey: '&', code: 'ampersand 2 3 1', emu: [ 'shift', { key: '6', cls: 'o-t3' } ], use: [ 'shift', { key: '7', cls: 'o-t' } ] },
        {showKey: '8', code: '8 3 3 0', emu: { key: '8', cls: 'o-m3' }, use: { key: '8', cls: 'o-b' } },
        {showKey: '*', code: 'asterisk 6 1 16', emu: { key: 'asterisk', cls: 'o-tm3' }, use: [ 'shift', { key: '8', cls: 'o-t' } ] },
        {showKey: '9', code: '9 4 0 0', emu: { key: '9', cls: 'o-m3' }, use: { key: '9', cls: 'o-b' } },
        {showKey: '(', code: 'parenleft 3 3 1', emu: [ 'shift', { key: '8', cls: 'o-t3' } ], use: [ 'shift', { key: '9', cls: 'o-t' } ] },
        {showKey: '0', code: '0 4 3 0', emu: { key: '0', cls: 'o-m3' }, use: { key: '0', cls: 'o-b' } },
        {showKey: ')', code: 'parenright 4 0 1', emu: [ 'shift', { key: '9', cls: 'o-t3' } ], use: [ 'shift', { key: '0', cls: 'o-t' } ] },
        {showKey: '-', code: 'minus 5 3 0', emu: { key: 'minus', cls: 'o-tm3' }, use: { key: 'minus', cls: 'o-b' } },
      ]
    },
    { name: 'underscore 1', sequence: [
        {showKey: '&#xe064;', emu: [ 'cbm', { key: 'at', cls: 'o-b3l' } ], use: [ 'shift', { key: 'minus', cls: 'o-t' } ] },
        {showKey: '&#xe064;', emu: [ 'cbm', { key: 'at', cls: 'o-b3l' } ], use: [ 'shift', { key: 'minus', cls: 'o-t' } ], flags: 'show' },
        {showKey: '&#xe064;', emu: [ 'cbm', { key: 'at', cls: 'o-b3l' } ], use: [ 'shift', { key: 'minus', cls: 'o-t' } ], flags: 2048 },
        {showKey: '&#xe064;', code: 'underscore 5 6 2048', emu: [ 'cbm', { key: 'at', cls: 'o-b3l' } ], use: [ 'shift', { key: 'minus', cls: 'o-t' } ], rcode: 'hide' },
      ]
    },
    { name: 'underscore 2', sequence: [
        {showKey: '&#xe064;', code: 'underscore 5 6 2048', emu: [ 'shift', 'cbm', { key: 'at', cls: 'o-b3l' } ], use: [ 'shift', { key: 'minus', cls: 'o-t' } ], grid: 'hide', rcode: 'hide' },
        { emu: [ 'shift', 'cbm' ] },
        {showKey: '&#xe064;', code: 'underscore 5 6 2048', emu: [ 'shift', 'cbm', { key: 'at', cls: 'o-b3l' } ], use: [ 'shift', { key: 'minus', cls: 'o-t' } ], grid: 'hide', rcode: 'hide', flags: 'show' },
        {showKey: '&#xe064;', code: 'underscore 5 6 2048', emu: [ 'shift', 'cbm', { key: 'at', cls: 'o-b3l' } ], use: [ 'shift', { key: 'minus', cls: 'o-t' } ], grid: 'hide', rcode: 'hide', flags: 2048 },
        {showKey: '&#xe064;', code: 'underscore 5 6 2048', emu: [ { key: 'at', cls: 'o-b3l' } ], use: [ 'shift', { key: 'minus', cls: 'o-t' } ], grid: 'hide', rcode: 'hide', flags: 16 },
        {showKey: '&#xe064;', code: 'underscore 5 6 2048', emu: [ 'cbm', { key: 'at', cls: 'o-b3l' } ], use: [ 'shift', { key: 'minus', cls: 'o-t' } ], grid: 'hide', rcode: 'hide', flags: 2064 },
        {showKey: '&#xe064;', code: 'underscore 5 6 2064', emu: [ 'cbm', { key: 'at', cls: 'o-b3l' } ], use: [ 'shift', { key: 'minus', cls: 'o-t' } ], grid: 'hide', rcode: 'hide' },
      ]
    },
    {
      name: 'rest of row', sequence: [
        {showKey: '=', code: 'equal 6 5 0', emu: 'equal', use: { key: 'equal', cls: 'o-b' }, rcode: 'hide' },
        {showKey: '+', code: 'plus 5 0 16', emu: { key: 'plus', cls: 'o-tm3' }, use: [ 'shift', { key: 'equal', cls: 'o-t' } ], rcode: 'hide' },
        { use: 'delete' },
        { emu: { key: 'del', cls: 'o-b' }, use: 'delete' },
        { emu: [ 'shift', { key: 'del', cls: 'o-t' } ], use: [ 'shift', 'delete' ] },
        { code: 'BackSpace 0 0 8', emu: { key: 'del', cls: 'o-b' }, use: 'delete', rcode: 'hide' },
        { code: 'BackSpace 0 0 8', emu: [ 'shift', { key: 'del', cls: 'o-t' } ], use: [ 'shift', 'delete' ], grid: 'hide', rcode: 'hide' },
      ]
    },
    {
      name: 'full row', sequence: [
        {showKey: '&larr;', code: 'grave 7 1 0', emu: 'ltarr', use: { key: 'backtick', cls: 'o-b' }, grid: { cls: 'ct' } },
        {showKey: '&pound;', code: 'asciitilde 6 0 16', emu: { key: 'gbp', cls: 'o-tm3' }, use: [ 'shift', { key: 'backtick', cls: 'o-t' } ], grid: { cls: 'ct' } },
        {showKey: '1', code: '1 7 0 0', emu: { key: '1', cls: 'o-m3'}, use: { key: '1', cls: 'o-b' }, grid: { cls: 'ct' } },
        {showKey: '!', code: 'exclam 7 0 1', emu: [ 'shift', { key: '1', cls: 'o-t3' } ], use: [ 'shift', { key: '1', cls: 'o-t' } ], grid: { cls: 'ct' } },
        {showKey: '2', code: '2 7 3 0', emu: { key: '2', cls: 'o-m3' }, use: { key: '2', cls: 'o-b' } },
        {showKey: '@', code: 'at 5 6 1', emu: { key: 'at', cls: 'o-tm3' }, use: [ 'shift', { key: '2', cls: 'o-t' } ] },
        {showKey: '3', code: '3 1 0 0', emu: { key: '3', cls: 'o-m3' }, use: { key: '3', cls: 'o-b' } },
        {showKey: '#', code: 'numbersign 1 0 1', emu: [ 'shift', { key: '3', cls: 'o-t3' } ], use: [ 'shift', { key: '3', cls: 'o-t' } ] },
        {showKey: '4', code: '4 1 3 0', emu: { key: '4', cls: 'o-m3' }, use: { key: '4', cls: 'o-b' } },
        {showKey: '$', code: 'dollar 1 3 1', emu: [ 'shift', { key: '4', cls: 'o-t3' } ], use: [ 'shift', { key: '4', cls: 'o-t' } ] },
        {showKey: '5', code: '5 2 0 0', emu: { key: '5', cls: 'o-m3' }, use: { key: '5', cls: 'o-b' } },
        {showKey: '%', code: 'percent 2 0 1', emu: [ 'shift', { key: '5', cls: 'o-t3' } ], use: [ 'shift', { key: '5', cls: 'o-t' } ] },
        {showKey: '6', code: '6 2 3 0', emu: { key: '6', cls: 'o-m3' }, use: { key: '6', cls: 'o-b' } },
        {showKey: '&uarr;', code: 'asciicircum 6 6 16', emu: { key: 'uparr', cls: 'o-tm3' }, use: [ 'shift', { key: '6', cls: 'o-t' } ] },
        {showKey: '7', code: '7 3 0 0', emu: { key: '7', cls: 'o-m3' }, use: { key: '7', cls: 'o-b' } },
        {showKey: '&', code: 'ampersand 2 3 1', emu: [ 'shift', { key: '6', cls: 'o-t3' } ], use: [ 'shift', { key: '7', cls: 'o-t' } ] },
        {showKey: '8', code: '8 3 3 0', emu: { key: '8', cls: 'o-m3' }, use: { key: '8', cls: 'o-b' } },
        {showKey: '*', code: 'asterisk 6 1 16', emu: { key: 'asterisk', cls: 'o-tm3' }, use: [ 'shift', { key: '8', cls: 'o-t' } ] },
        {showKey: '9', code: '9 4 0 0', emu: { key: '9', cls: 'o-m3' }, use: { key: '9', cls: 'o-b' } },
        {showKey: '(', code: 'parenleft 3 3 1', emu: [ 'shift', { key: '8', cls: 'o-t3' } ], use: [ 'shift', { key: '9', cls: 'o-t' } ] },
        {showKey: '0', code: '0 4 3 0', emu: { key: '0', cls: 'o-m3' }, use: { key: '0', cls: 'o-b' } },
        {showKey: ')', code: 'parenright 4 0 1', emu: [ 'shift', { key: '9', cls: 'o-t3' } ], use: [ 'shift', { key: '0', cls: 'o-t' } ] },
        {showKey: '-', code: 'minus 5 3 0', emu: { key: 'minus', cls: 'o-tm3' }, use: { key: 'minus', cls: 'o-b' } },
        {showKey: '&#xe064;', code: 'underscore 5 6 2064', emu: [ 'cbm', { key: 'at', cls: 'o-b3l' } ], use: [ 'shift', { key: 'minus', cls: 'o-t' } ] },
        {showKey: '=', code: 'equal 6 5 0', emu: 'equal', use: { key: 'equal', cls: 'o-b' } },
        {showKey: '+', code: 'plus 5 0 16', emu: { key: 'plus', cls: 'o-tm3' }, use: [ 'shift', { key: 'equal', cls: 'o-t' } ] },
        { code: 'BackSpace 0 0 8', emu: 'del', use: 'delete' },
      ]
    },
    { name: 'colors', sequence: [
        { emu: [
          { key: '1', cls: 'o-b3' }, { key: '2', cls: 'o-b3' }, { key: '3', cls: 'o-b3' }, { key: '4', cls: 'o-b3' },
          { key: '5', cls: 'o-b3' }, { key: '6', cls: 'o-b3' }, { key: '7', cls: 'o-b3' }, { key: '8', cls: 'o-b3' },
          { key: '9', cls: 'o-b3' }, { key: '0', cls: 'o-b3' },
        ] }
      ]
    }
  ]
}