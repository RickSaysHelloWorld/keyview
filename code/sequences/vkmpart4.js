projects.vkmpart4 = {
  styles: ['mac', 'c64'],
  bodycls: 'c64',
  ui: ['show-key', 'code'],
  emu: 'c64',
  emucls: 'c64',
  use: 'macbook',
  usecls: 'mac',

  sequences: [
    { name: "text colors", sequence: [
        { emu: 'ctrl' },
        { emu: 'cbm' },
        { showKey: 's-black|1', emu: [ 'ctrl', '1' ] },
        { showKey: 's-ltblue|7', emu: [ 'cbm', '7' ] }
      ]
    },
    { name: 'control key 1', sequence: [
        { emu: 'ctrl', use: 'control' },
        { code: 'Control_L 7 2 0', emu: 'ctrl', use: 'control', rcode: 'hide' },
      ]
    },
    { name: 'control key 2', sequence: [
        { code: 'Control_L 7 2 ????', emu: 'ctrl', use: 'control', grid: 'hide', rcode: 'hide', flags: 16384 },
        { code: 'Control_L 7 2 16384', emu: 'ctrl', use: 'control', grid: 'hide', rcode: 'hide' },
      ]
    },
    { name: 'commodore key 1', sequence: [
        { emu: [
            'ctrl', { key: '1', cls: 'o-b3' }, { key: '2', cls: 'o-b3' },
            { key: '3', cls: 'o-b3' }, { key: '4', cls: 'o-b3' }, { key: '5', cls: 'o-b3' }, { key: '6', cls: 'o-b3' },
            { key: '7', cls: 'o-b3' }, { key: '8', cls: 'o-b3' }, { key: '9', cls: 'o-b3' }, { key: '0', cls: 'o-b3' },
          ],
          use: [ 'control', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ]
        },
        { emu: [
            'cbm', { key: '1', cls: 'o-b3' }, { key: '2', cls: 'o-b3' },
            { key: '3', cls: 'o-b3' }, { key: '4', cls: 'o-b3' }, { key: '5', cls: 'o-b3' }, { key: '6', cls: 'o-b3' },
            { key: '7', cls: 'o-b3' }, { key: '8', cls: 'o-b3' }, { key: '9', cls: 'o-b3' }, { key: '0', cls: 'o-b3' },
          ]
        },
        { emu: [
            'cbm', { key: '1', cls: 'o-b3' }, { key: '2', cls: 'o-b3' },
            { key: '3', cls: 'o-b3' }, { key: '4', cls: 'o-b3' }, { key: '5', cls: 'o-b3' }, { key: '6', cls: 'o-b3' },
            { key: '7', cls: 'o-b3' }, { key: '8', cls: 'o-b3' }, { key: '9', cls: 'o-b3' }, { key: '0', cls: 'o-b3' },
          ],
          use: [ 'ltoption', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ]
        },
        { emu: 'ctrl', use: 'control', flags: 16384 },
        { emu: 'cbm', use: 'ltoption', flags: 8192 },
        { code: 'Alt_L 7 5 8192', emu: 'cbm', use: 'ltoption', rcode: 'hide' },
      ]
    },
    { name: 'commodore key 2', sequence: [
        {showKey: '1', code: 'exclamdown 7 0 ????', emu: [ 'cbm', '1' ], use: [ 'ltoption', '1' ], rcode: 'hide', grid: { cls: 'ct' } },
        {showKey: '1', code: 'exclamdown 7 0 ????', emu: [ 'cbm', '1' ], use: [ 'ltoption', '1' ], rcode: 'hide', grid: 'hide', flags: 'show' },
        {showKey: '1', code: 'exclamdown 7 0 ????', emu: [ 'cbm', '1' ], use: [ 'ltoption', '1' ], rcode: 'hide', grid: 'hide', flags: 2048 },
        {showKey: 's-orange|1', code: 'exclamdown 7 0 2048', emu: [ 'cbm', '1' ], use: [ 'ltoption', '1' ], rcode: 'hide', grid: 'hide' },
      ]
    },
    { name: 'commodore key 3', sequence: [
        {showKey: 's-orange|1', code: 'exclamdown 7 0 2048', emu: [ 'cbm', '1' ], use: [ 'ltoption', '1' ], grid: { cls: 'ct' } },
        {showKey: 's-brown|2', code: 'trademark 7 3 2048', emu: [ 'cbm', '2' ], use: [ 'ltoption', '2' ] },
        {showKey: 's-pink|3', code: 'sterling 1 0 2048', emu: [ 'cbm', '3' ], use: [ 'ltoption', '3' ] },
        {showKey: 's-dkgray|4', code: 'cent 1 3 2048', emu: [ 'cbm', '4' ], use: [ 'ltoption', '4' ] },
        {showKey: 's-medgray|5', code: 'infinity 2 0 2048', emu: [ 'cbm', '5' ], use: [ 'ltoption', '5' ] },
        {showKey: 's-ltgreen|6', code: 'section 2 3 2048', emu: [ 'cbm', '6' ], use: [ 'ltoption', '6' ] },
        {showKey: 's-ltblue|7', code: 'paragraph 3 0 2048', emu: [ 'cbm', '7' ], use: [ 'ltoption', '7' ] },
        {showKey: 's-ltgray|8', code: 'enfilledcircbullet 3 3 2048', emu: [ 'cbm', '8' ], use: [ 'ltoption', '8' ] },
      ]
    },
    { name: 'plus minus 1', sequence: [
        {emu: [ 'plus', 'minus', 'equal' ], use: [ 'minus', 'equal' ] },
        {showKey: '&#xe040;', emu: [ 'shift', { key: 'asterisk', cls: 'o-b3r' } ], use: 'minus' },
        {showKey: '&#xe05b;', emu: [ 'shift', { key: 'plus', cls: 'o-b3r', } ], use: 'equal' },
        {showKey: '&#xe040;', emu: [ 'shift', { key: 'asterisk', cls: 'o-b3r' } ], use: [ 'ltoption', 'minus' ] },
        {showKey: '&#xe05b;', emu: [ 'shift', { key: 'plus', cls: 'o-b3r', } ], use: [ 'ltoption', 'equal' ] },
        {code: 'endash 6 1 1', showKey: '&#xe040;', emu: [ 'shift', { key: 'asterisk', cls: 'o-b3r' } ], use: [ 'ltoption', 'minus' ], rcode: 'hide' },
        {code: 'endash 6 1 1', showKey: '&#xe040;', emu: [ 'shift', { key: 'asterisk', cls: 'o-b3r' } ], use: [ 'ltoption', 'minus' ], rcode: 'hide', grid: 'hide', flags: 1 },
        {code: 'notequal 5 0 1', showKey: '&#xe05b;', emu: [ 'shift', { key: 'plus', cls: 'o-b3r', } ], use: [ 'ltoption', 'equal' ], rcode: 'hide' },
      ]
    },
    { name: 'plus minus 2', sequence: [
        { emu: 'cbm', use: 'ltoption' },
        { emu: [ 'shift', { key: 'asterisk', cls: 'o-b3r' } ], use: [ 'ltoption', 'minus' ] },
        { emu: [ 'cbm', 'shift', { key: 'asterisk', cls: 'o-b3r' } ], use: [ 'ltoption', 'minus' ] },
        { emu: [ 'cbm', 'shift' ] },
      ]
    },
    { name: 'plus minus 3', sequence: [
        { code: 'Alt_L 7 5 8192', emu: 'cbm', use: 'ltoption', grid: 'hide', rcode: 'hide' },
        { code: 'exclamdown 7 0 2048', emu: [ 'cbm', '1' ], use: [ 'ltoption', '1' ], grid: 'hide', rcode: 'hide' },
        { code: 'exclamdown 7 0 2048', emu: [ 'cbm', '1' ], use: [ 'ltoption', '1' ], grid: 'hide', rcode: 'hide', flags: 2048 },
        { code: 'Alt_L 7 5 0', emu: 'cbm', use: 'ltoption', grid: 'hide', rcode: 'hide' },
      ]
    },
    { name: 'plus minus 4', sequence: [
        { emu: 'cbm' },
        { code: 'Meta_L 7 5 8192', emu: 'cbm', use: 'ltcommand', grid: 'hide', rcode: 'hide' }
      ]
    },
    { name: 'full second row', sequence: [
        {showKey: '&larr;', code: 'grave 7 1 0', emu: 'ltarr', use: { key: 'backtick', cls: 'o-b' }, grid: { cls: 'ct' } },
        {showKey: '&pound;', code: 'asciitilde 6 0 16', emu: { key: 'gbp', cls: 'o-tm3' }, use: [ 'shift', { key: 'backtick', cls: 'o-t' } ], grid: { cls: 'ct' } },
        {showKey: '1', code: '1 7 0 0', emu: { key: '1', cls: 'o-m3'}, use: { key: '1', cls: 'o-b' }, grid: { cls: 'ct' } },
        {showKey: '!', code: 'exclam 7 0 1', emu: [ 'shift', { key: '1', cls: 'o-t3' } ], use: [ 'shift', { key: '1', cls: 'o-t' } ], grid: { cls: 'ct' } },
        {showKey: 's-orange|1', code: 'exclamdown 7 0 2048', emu: [ 'cbm', '1' ], use: [ 'ltoption', '1' ], grid: { cls: 'ct' } },
        {showKey: '2', code: '2 7 3 0', emu: { key: '2', cls: 'o-m3' }, use: { key: '2', cls: 'o-b' } },
        {showKey: '@', code: 'at 5 6 1', emu: { key: 'at', cls: 'o-tm3' }, use: [ 'shift', { key: '2', cls: 'o-t' } ] },
        {showKey: 's-brown|2', code: 'trademark 7 3 2048', emu: [ 'cbm', '2' ], use: [ 'ltoption', '2' ] },
        {showKey: '3', code: '3 1 0 0', emu: { key: '3', cls: 'o-m3' }, use: { key: '3', cls: 'o-b' } },
        {showKey: '#', code: 'numbersign 1 0 1', emu: [ 'shift', { key: '3', cls: 'o-t3' } ], use: [ 'shift', { key: '3', cls: 'o-t' } ] },
        {showKey: 's-pink|3', code: 'sterling 1 0 2048', emu: [ 'cbm', '3' ], use: [ 'ltoption', '3' ] },
        {showKey: '4', code: '4 1 3 0', emu: { key: '4', cls: 'o-m3' }, use: { key: '4', cls: 'o-b' } },
        {showKey: '$', code: 'dollar 1 3 1', emu: [ 'shift', { key: '4', cls: 'o-t3' } ], use: [ 'shift', { key: '4', cls: 'o-t' } ] },
        {showKey: 's-dkgray|4', code: 'cent 1 2 2048', emu: [ 'cbm', '4' ], use: [ 'ltoption', '4' ] },
        {showKey: '5', code: '5 2 0 0', emu: { key: '5', cls: 'o-m3' }, use: { key: '5', cls: 'o-b' } },
        {showKey: '%', code: 'percent 2 0 1', emu: [ 'shift', { key: '5', cls: 'o-t3' } ], use: [ 'shift', { key: '5', cls: 'o-t' } ] },
        {showKey: 's-medgray|5', code: 'infinity 2 0 2048', emu: [ 'cbm', '5' ], use: [ 'ltoption', '5' ] },
        {showKey: '6', code: '6 2 3 0', emu: { key: '6', cls: 'o-m3' }, use: { key: '6', cls: 'o-b' } },
        {showKey: '&uarr;', code: 'asciicircum 6 6 16', emu: { key: 'uparr', cls: 'o-tm3' }, use: [ 'shift', { key: '6', cls: 'o-t' } ] },
        {showKey: 's-ltgreen|6', code: 'section 2 3 2048', emu: [ 'cbm', '6' ], use: [ 'ltoption', '6' ] },
        {showKey: '7', code: '7 3 0 0', emu: { key: '7', cls: 'o-m3' }, use: { key: '7', cls: 'o-b' } },
        {showKey: '&', code: 'ampersand 2 3 1', emu: [ 'shift', { key: '6', cls: 'o-t3' } ], use: [ 'shift', { key: '7', cls: 'o-t' } ] },
        {showKey: 's-ltblue|7', code: 'paragraph 3 0 2048', emu: [ 'cbm', '7' ], use: [ 'ltoption', '7' ] },
        {showKey: '8', code: '8 3 3 0', emu: { key: '8', cls: 'o-m3' }, use: { key: '8', cls: 'o-b' } },
        {showKey: '*', code: 'asterisk 6 1 16', emu: { key: 'asterisk', cls: 'o-tm3' }, use: [ 'shift', { key: '8', cls: 'o-t' } ] },
        {showKey: 's-ltgray|8', code: 'enfilledcircbullet 3 3 2048', emu: [ 'cbm', '8' ], use: [ 'ltoption', '8' ] },
        {showKey: '9', code: '9 4 0 0', emu: { key: '9', cls: 'o-m3' }, use: { key: '9', cls: 'o-b' } },
        {showKey: '(', code: 'parenleft 3 3 1', emu: [ 'shift', { key: '8', cls: 'o-t3' } ], use: [ 'shift', { key: '9', cls: 'o-t' } ] },
        {showKey: '0', code: '0 4 3 0', emu: { key: '0', cls: 'o-m3' }, use: { key: '0', cls: 'o-b' } },
        {showKey: ')', code: 'parenright 4 0 1', emu: [ 'shift', { key: '9', cls: 'o-t3' } ], use: [ 'shift', { key: '0', cls: 'o-t' } ] },
        {showKey: '-', code: 'minus 5 3 0', emu: { key: 'minus', cls: 'o-tm3' }, use: { key: 'minus', cls: 'o-b' } },
        {showKey: '&#xe064;', code: 'underscore 5 6 2064', emu: [ 'cbm', { key: 'at', cls: 'o-b3l' } ], use: [ 'shift', { key: 'minus', cls: 'o-t' } ] },
        {showKey: '=', code: 'equal 6 5 0', emu: 'equal', use: { key: 'equal', cls: 'o-b' } },
        {showKey: '+', code: 'plus 5 0 16', emu: { key: 'plus', cls: 'o-tm3' }, use: [ 'shift', { key: 'equal', cls: 'o-t' } ] },
        {code: 'BackSpace 0 0 8', emu: { key: 'del', cls: 'o-b' }, use: 'delete' },
        {code: 'BackSpace 0 0 8', emu: [ 'shift', { key: 'del', cls: 'o-t' } ], use: [ 'shift', 'delete' ], grid: 'hide', rcode: 'skip' },
        {code: 'Control_L 7 2 16384', emu: 'ctrl', use: 'control' },
        {code: 'Alt_L 7 5 0', emu: 'cbm', use: 'ltoption' },
        {code: 'Meta_L 7 5 8192', emu: 'cbm', use: 'ltcommand', grid: 'hide' },
      ]
    },
    { name: 'tab 1', sequence: [
        { use: 'tab' },
        { emu: 'cbm', use: 'tab' }
      ]
    },
    { name: 'tab 2', sequence: [
        { emu: 'space', use: 'tab' },
        { code: 'Tab 7 4 0', emu: 'space', use: 'tab', grid: { cls: 'ct' } },
        { emu: [ 'shift', { key: 'right', cls: 'o-t' } ], use: [ 'shift', 'tab' ] },
        { code: 'ISO_Left_Tab 0 2 1', emu: [ 'shift', { key: 'right', cls: 'o-t' } ], use: [ 'shift', 'tab' ], grid: { cls: 'ct' } }
      ]
    },
    { name: 'letters 1', sequence: [
        { },
        {showKey: 'Q', code: 'q ? ? 0', emu: 'q', use: 'q', rcode: 'hide', grid: 'hide' },
        {showKey: 'Q', code: 'q ? ? 0', emu: 'q', use: 'q', grid: 'show', rcode: 'hide' },
        {showKey: 'Q', code: 'q ? ? 0', emu: 'q', use: 'q', grid: { vis: 'show', row: 7, col: 6 }, rcode: 'hide' },
        {showKey: 'Q', code: 'q 7 6 0', emu: { key: 'q', cls: 'o-tm3' }, use: 'q', grid: 'hide' },
        {showKey: '&#xe051;', code: 'Q 7 6 1', emu: [ 'shift', { key: 'q', cls: 'o-b3r' } ], use: [ 'shift', 'q' ], grid: 'hide' },
        {showKey: '&#xe051;', code: 'q 7 6 8', emu: [ 'shift', { key: 'q', cls: 'o-b3r' } ], use: [ 'shift', 'q' ], grid: 'hide', rcode: 'skip', flags: 8 },
        {showKey: '&#xe06b;', emu: [ 'cbm', { key: 'q', cls: 'o-b3l' } ], use: [ 'ltoption', 'q' ] },
        { },
        {showKey: '&#xe06b;', code: 'oe 7 6 2048', emu: [ 'cbm', { key: 'q', cls: 'o-b3l' } ], use: [ 'ltoption', 'q' ], grid: 'hide' },
        {showKey: 'W', code: 'w ? ? 0', emu: 'w', use: 'w', grid: { vis: 'show', row: 1, col: 1 }, rcode: 'hide' },
        {showKey: 'W', code: 'w 1 1 0', emu: { key: 'w', cls: 'o-tm3' }, use: 'w', grid: 'hide' },
        {showKey: '&#xe057;', code: 'W 1 1 1', emu: [ 'shift', { key: 'w', cls: 'o-b3r' } ], use: [ 'shift', 'w' ], grid: 'hide' },
        { },
        {showKey: '&#xe073;', code: 'U+2211 1 1 2048', emu: [ 'cbm', { key: 'w', cls: 'o-b3l' } ], use: [ 'ltoption', 'w' ], grid: 'hide' },
      ]
    },
    { name: 'option wall', sequence: [
        {showKey: '&#xe073;', code: 'U+2211 1 1 2048', emu: [ 'cbm', { key: 'w', cls: 'o-b3l' } ], use: [ 'ltoption', 'w' ], grid: 'hide' },
        {showKey: '&#xe073;', code: 'u2211 1 1 2048', emu: [ 'cbm', { key: 'w', cls: 'o-b3l' } ], use: [ 'ltoption', 'w' ], grid: 'hide' },
        {showKey: '&#xe073;', code: 'U2211 1 1 2048', emu: [ 'cbm', { key: 'w', cls: 'o-b3l' } ], use: [ 'ltoption', 'w' ], grid: 'hide' },
        {showKey: '&#xe073;', code: '0x2211 1 1 2048', emu: [ 'cbm', { key: 'w', cls: 'o-b3l' } ], use: [ 'ltoption', 'w' ], grid: 'hide' },
        {showKey: '&#xe073;', code: '0x1002211 1 1 2048', emu: [ 'cbm', { key: 'w', cls: 'o-b3l' } ], use: [ 'ltoption', 'w' ], grid: 'hide' },
        {showKey: '&#xe073;', code: '16785937 1 1 2048', emu: [ 'cbm', { key: 'w', cls: 'o-b3l' } ], use: [ 'ltoption', 'w' ], grid: 'hide' },
        {showKey: '&#xe073;', code: 'w 1 1 ????', emu: [ 'cbm', { key: 'w', cls: 'o-b3l' } ], use: [ 'ltoption', 'w' ], grid: 'hide', rcode:'skip', flags: 512 },
        {showKey: '&#xe073;', code: 'w 1 1 ????', emu: [ 'cbm', { key: 'w', cls: 'o-b3l' } ], use: [ 'ltoption', 'w' ], grid: 'hide', rcode:'skip', flags: 2560 },
        {showKey: '&#xe073;', code: 'w 1 1 2560', emu: [ 'cbm', { key: 'w', cls: 'o-b3l' } ], use: [ 'ltoption', 'w' ], grid: 'hide' },
        {showKey: '&#xe073;', code: 'W 1 1 2560', emu: [ 'cbm', { key: 'w', cls: 'o-b3l' } ], use: [ 'ltoption', 'w' ], grid: 'hide' },
      ]
    }
  ]
}
