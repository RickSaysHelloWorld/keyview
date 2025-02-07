projects.vkmpart5 = {
  styles: ['mac', 'c64'],
  bodycls: 'c64',
  ui: ['show-key', 'code'],
  emu: 'c64',
  emucls: 'c64',
  use: 'macbook',
  usecls: 'mac',

  sequences: [
    { name: 'option wall', sequence: [
        { use: [ 'ltoption', 'w', 'j', 'k', 'x' ] },
        { emu: 'cbm', use: 'ltoption' },
        { emu: 'cbm' }
      ]
    },
    { name: 'keyswap 1', sequence: [
        { emu: 'cbm', use: 'control' },
        { emu: 'ctrl', use: 'ltoption' },
        { zone: 'num' },
        { emu: [ 'cbm', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ],
          use: [ 'ltoption', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ]
        },
        { emu: [ 'ctrl', { key: '1', cls: 'o-b3' }, { key: '2', cls: 'o-b3' },
                 { key: '3', cls: 'o-b3' }, { key: '4', cls: 'o-b3' }, { key: '5', cls: 'o-b3' }, { key: '6', cls: 'o-b3' },
                 { key: '7', cls: 'o-b3' }, { key: '8', cls: 'o-b3' }, { key: '9', cls: 'o-b3' }, { key: '0', cls: 'o-b3' }
               ],
          use: [ 'ltoption', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ]
        },
        {showKey: 's-orange|1', code: 'exclamdown 7 0 2048', emu: [ 'cbm', '1' ], use: [ 'ltoption', '1' ], grid: { cls: 'ct'}, rcode: 'hide' },
        {showKey: '1', code: 'exclamdown 7 0 ????', emu: [ 'ctrl', '1' ], use: [ 'ltoption', '1' ], grid: 'hide', rcode: 'hide' },
        {showKey: '1', code: 'exclamdown 7 0 ????', emu: [ 'ctrl', '1' ], use: [ 'ltoption', '1' ], grid: 'hide', rcode: 'hide', flags: 4096 },
        {showKey: 's-black|1', code: 'exclamdown 7 0 4096', emu: [ 'ctrl', '1' ], use: [ 'ltoption', '1' ], grid: 'hide' },
        {showKey: 's-white|2', code: 'trademark 7 3 4096', emu: [ 'ctrl', '2' ], use: [ 'ltoption', '2' ] },
        {showKey: 's-red|3', code: 'sterling 1 0 4096', emu: [ 'ctrl', '3' ], use: [ 'ltoption', '3' ] },
        {showKey: 's-cyan|4', code: 'cent 1 3 4096', emu: [ 'ctrl', '4' ], use: [ 'ltoption', '4' ] },
        {showKey: 's-purple|5', code: 'infinity 2 0 4096', emu: [ 'ctrl', '5' ], use: [ 'ltoption', '5' ] },
        {showKey: 's-green|6', code: 'section 2 3 4096', emu: [ 'ctrl', '6' ], use: [ 'ltoption', '6' ] },
        {showKey: 's-blue|7', code: 'paragraph 3 0 4096', emu: [ 'ctrl', '7' ], use: [ 'ltoption', '7' ] },
        {showKey: 's-yellow|8', code: 'enfilledcircbullet 3 3 4096', emu: [ 'ctrl', '8' ], use: [ 'ltoption', '8' ] },
        {showKey: 's-rvs|9', code: 'ordfeminine 4 0 4096', emu: [ 'ctrl', '9' ], use: [ 'ltoption', '9' ] },
        {showKey: '0', code: 'masculine 4 3 4096', emu: [ 'ctrl', '0' ], use: [ 'ltoption', '0' ] },
        {emu: 'ctrl', use: 'ltoption', flags: 16384 },
        {code: 'Alt_L 7 2 16384', emu: 'ctrl', use: 'ltoption' },
      ]
    },
    { name: 'keyswap 2', sequence: [
        { code: 'Control_L 7 5 8192', emu: 'cbm', use: 'control', grid: 'hide', rcode: 'hide', flags: 8192 },
        { code: 'Control_L 7 5 0', emu: 'cbm', use: 'control', grid: 'hide', rcode: 'hide' },
        { showKey: '1', code: '1 7 0 ????', emu: [ 'cbm', '1' ], use: 'control', grid: 'hide', rcode: 'hide', flags: 'true' },
        { showKey: '1', code: '1 7 0 ????', emu: [ 'cbm', '1' ], use: 'control', grid: 'hide', rcode: 'hide', flags: 1024 },
        { showKey: '1', code: '1 7 0 ????', emu: [ 'cbm', '1' ], use: 'control', grid: 'hide', rcode: 'hide', flags: 2048 },
        { showKey: '1', code: '1 7 0 ????', emu: [ 'cbm', '1' ], use: 'control', grid: 'hide', rcode: 'hide', flags: 3072 },
        { showKey: 's-orange|1', code: '1 7 0 3072', emu: [ 'cbm', '1' ], use: [ 'control', '1' ], grid: { cls: 'ct' }, rcode: 'hide' },
      ]
    },
    { name: 'control', sequence: [
        { showKey: '1', code: '1 7 0 0', emu: { key: '1', cls: 'o-m3' }, use: { key: '1', cls: 'o-b'}, grid: 'hide', rcode: 'hide' },
        { showKey: 's-orange|1', code: '1 7 0 0,1 7 0 3072', emu: [ 'cbm', '1' ], use: [ 'control', '1' ], grid: 'hide', rcode: 'hide' },
        { showKey: '1', code: '1 7 0 ????,1 7 0 3072', emu: { key: '1', cls: 'o-m3' }, use: { key: '1', cls: 'o-b' }, grid: 'hide', rcode: 'hide', flags: 'true' },
        { showKey: '1', code: '1 7 0 ????,1 7 0 3072', emu: { key: '1', cls: 'o-m3' }, use: { key: '1', cls: 'o-b' }, grid: 'hide', rcode: 'hide', flags: 32 },
        { showKey: '1', code: '1 7 0 32,1 7 0 3072', emu: { key: '1', cls: 'o-m3' }, use: { key: '1', cls: 'o-b' }, grid: 'hide', rcode: 'hide' },
      ]
    },
    { name: 'more to come order', sequence: [
        { showKey: 's-orange|1', code: '1 7 0 ????,1 7 0 0', emu: [ 'cbm', '1' ], use: [ 'control', '1' ], grid: 'hide', rcode: 'hide', flags: 3104 },
        { showKey: 's-orange|1', code: '1 7 0 3014,1 7 0 0', emu: [ 'cbm', '1' ], use: [ 'control', '1' ], grid: 'hide', rcode: 'hide' },
      ]
    },
    { name: 'commodore colors', sequence: [
        { showKey: 's-orange|1', code: '1 7 0 32,1 7 0 3072', emu: [ 'cbm', '1' ], use: [ 'control', '1' ], grid: { cls: 'ct' } },
        { showKey: 's-brown|2', code: '2 7 3 32,2 7 3 3072', emu: [ 'cbm', '2' ], use: [ 'control', '2' ] },
        { showKey: 's-pink|3', code: '3 1 0 32,3 7 3 3072', emu: [ 'cbm', '3' ], use: [ 'control', '3' ] },
        { showKey: 's-dkgray|4', code: '4 1 3 32,4 7 3 3072', emu: [ 'cbm', '4' ], use: [ 'control', '4' ] },
        { showKey: 's-medgray|5', code: '5 2 0 32,5 7 3 3072', emu: [ 'cbm', '5' ], use: [ 'control', '5' ] },
        { showKey: 's-ltgreen|6', code: '6 2 3 32,6 7 3 3072', emu: [ 'cbm', '6' ], use: [ 'control', '6' ] },
        { showKey: 's-ltblue|7', code: '7 3 0 32,7 7 3 3072', emu: [ 'cbm', '7' ], use: [ 'control', '7' ] },
        { showKey: 's-ltgray|8', code: '8 3 3 32,8 7 3 3072', emu: [ 'cbm', '8' ], use: [ 'control', '8' ] },
        { showKey: '9', emu: { key: '9', cls: 'o-m3' }, use: { key: '9', cls: 'o-b' } },
        { showKey: '0', emu: { key: '0', cls: 'o-m3' }, use: { key: '0', cls: 'o-b' } },
        { use: [ 'minus', 'equal' ] },
        { showKey: '&#xe040;', code: 'endash 6 1 1', emu: [ 'shift', { key: 'asterisk', cls: 'o-b3r' } ], use: [ 'ltoption', 'minus' ], grid: 'hide', rcode: 'skip' },
        { showKey: '-', code: 'minus 5 3 32', emu: { key: 'minus', cls: 'o-tm3' }, use: { key: 'minus', cls: 'o-b' }, grid: 'hide', rcode: 'skip' },
        { showKey: '&#xe040;', code: 'minus 6 1 ????', emu: [ 'shift', { key: 'asterisk', cls: 'o-b3r' } ], use: [ 'control', 'minus' ], grid: 'hide', rcode: 'skip' },
        { showKey: '&#xe040;', code: 'minus 6 1 ????', emu: [ 'shift', { key: 'asterisk', cls: 'o-b3r' } ], use: [ 'control', 'minus' ], grid: 'hide', rcode: 'skip', flags: 1025 },
        { showKey: '&#xe040;', code: 'minus 6 1 1025', emu: [ 'shift', { key: 'asterisk', cls: 'o-b3r' } ], use: [ 'control', 'minus' ], grid: 'hide' },
        { showKey: '&#xe040;', code: 'equal 6 5 1025', emu: [ 'shift', { key: 'plus', cls: 'o-b3r' } ], use: [ 'control', 'equal' ] },
      ]
    },
    { name: 'third row', sequence: [
        { use: { zone: 'r3' } },
        { code: 'Tab 7 4 0', emu: 'space', use: 'tab', grid: { cls: 'ct' } },
        { code: 'ISO_Left_Tab 0 2 1', emu: [ 'shift', { key: 'right', cls: 'o-tm3' } ], use: [ 'shift', 'tab' ], grid: { cls: 'ct' } },
        { showKey: 'Q', emu: { key: 'q', cls: 'o-tm3' }, use: 'q' },
        { showKey: '&#xe051;', emu: [ 'shift', { key: 'q', cls: 'o-b3r' } ], use: [ 'shift', 'q' ] },
        { showKey: '&#xe06b;', emu: [ 'cbm', { key: 'q', cls: 'o-b3l' } ], use: [ 'control', 'q' ] },
        { showKey: 'Q', code: 'q 7 6 32', emu: { key: 'q', cls: 'o-tm3' }, use: 'q', grid: { cls: 'ct' } },
        { showKey: '&#xe06b;', code: 'q 7 6 3072', emu: [ 'cbm', { key: 'q', cls: 'o-b3l' } ], use: [ 'control', 'q' ], grid: 'hide' },
        { showKey: '&#xe051;', code: 'Q 7 6 1', emu: [ 'shift', { key: 'q', cls: 'o-b3r' } ], use: [ 'shift', 'q' ], grid: 'hide' },
        { showKey: 'W', code: 'w 1 1 32', emu: { key: 'w', cls: 'o-tm3' }, use: 'w' },
        { showKey: '&#xe073;', code: 'w 1 1 3072', emu: [ 'cbm', { key: 'w', cls: 'o-b3l' } ], use: [ 'control', 'w' ], grid: 'hide' },
        { showKey: '&#xe057;', code: 'W 1 1 1', emu: [ 'shift', { key: 'w', cls: 'o-b3r' } ], use: [ 'shift', 'w' ], grid: 'hide' },
        { showKey: 'E', code: 'e 1 6 32', emu: { key: 'e', cls: 'o-tm3' }, use: 'e' },
        { showKey: '&#xe071;', code: 'e 1 6 3072', emu: [ 'cbm', { key: 'e', cls: 'o-b3l' } ], use: [ 'control', 'e' ], grid: 'hide' },
        { showKey: '&#xe045;', code: 'E 1 6 1', emu: [ 'shift', { key: 'e', cls: 'o-b3r' } ], use: [ 'shift', 'e' ], grid: 'hide' },
        { showKey: 'R', code: 'r 2 1 32', emu: { key: 'r', cls: 'o-tm3' }, use: 'r' },
        { showKey: '&#xe072;', code: 'r 2 1 3072', emu: [ 'cbm', { key: 'r', cls: 'o-b3l' } ], use: [ 'control', 'r' ], grid: 'hide' },
        { showKey: '&#xe052;', code: 'R 2 1 1', emu: [ 'shift', { key: 'r', cls: 'o-b3r' } ], use: [ 'shift', 'r' ], grid: 'hide' },
        { showKey: 'T', code: 't 2 6 32', emu: { key: 't', cls: 'o-tm3' }, use: 't' },
        { showKey: '&#xe063;', code: 't 2 6 3072', emu: [ 'cbm', { key: 't', cls: 'o-b3l' } ], use: [ 'control', 't' ], grid: 'hide' },
        { showKey: '&#xe054;', code: 'T 2 6 1', emu: [ 'shift', { key: 't', cls: 'o-b3r' } ], use: [ 'shift', 't' ], grid: 'hide' },
        { showKey: 'Y', code: 'y 3 1 32', emu: { key: 'y', cls: 'o-tm3' }, use: 'y' },
        { showKey: '&#xe077;', code: 'y 3 1 3072', emu: [ 'cbm', { key: 'y', cls: 'o-b3l' } ], use: [ 'control', 'y' ], grid: 'hide' },
        { showKey: '&#xe059;', code: 'Y 3 1 1', emu: [ 'shift', { key: 'y', cls: 'o-b3r' } ], use: [ 'shift', 'y' ], grid: 'hide' },
        { showKey: 'U', code: 'u 3 6 32', emu: { key: 'u', cls: 'o-tm3' }, use: 'u' },
        { showKey: '&#xe078;', code: 'u 3 6 3072', emu: [ 'cbm', { key: 'u', cls: 'o-b3l' } ], use: [ 'control', 'u' ], grid: 'hide' },
        { showKey: '&#xe055;', code: 'U 3 6 1', emu: [ 'shift', { key: 'u', cls: 'o-b3r' } ], use: [ 'shift', 'u' ], grid: 'hide' },
        { showKey: 'I', code: 'i 4 1 32', emu: { key: 'i', cls: 'o-tm3' }, use: 'i' },
        { showKey: '&#xe062;', code: 'i 4 1 3072', emu: [ 'cbm', { key: 'i', cls: 'o-b3l' } ], use: [ 'control', 'i' ], grid: 'hide' },
        { showKey: '&#xe049;', code: 'I 4 1 1', emu: [ 'shift', { key: 'i', cls: 'o-b3r' } ], use: [ 'shift', 'i' ], grid: 'hide' },
        { showKey: 'O', code: 'o 4 6 32', emu: { key: 'o', cls: 'o-tm3' }, use: 'o' },
        { showKey: '&#xe079;', code: 'o 4 6 3072', emu: [ 'cbm', { key: 'o', cls: 'o-b3l' } ], use: [ 'control', 'o' ], grid: 'hide' },
        { showKey: '&#xe04f;', code: 'O 4 6 1', emu: [ 'shift', { key: 'o', cls: 'o-b3r' } ], use: [ 'shift', 'o' ], grid: 'hide' },
        { showKey: 'P', code: 'p 5 1 32', emu: { key: 'p', cls: 'o-tm3' }, use: 'p' },
        { showKey: '&#xe06f;', code: 'p 5 1 3072', emu: [ 'cbm', { key: 'p', cls: 'o-b3l' } ], use: [ 'control', 'p' ], grid: 'hide' },
        { showKey: '&#xe050;', code: 'P 5 1 1', emu: [ 'shift', { key: 'p', cls: 'o-b3r' } ], use: [ 'shift', 'p' ], grid: 'hide' },
        { showKey: '[', code: 'bracketleft 5 5 ????', emu: [ 'shift', { key: 'colon', cls: 'o-t' } ], use: { key: 'ltbracket', cls: 'o-b' }, rcode: 'skip' },
        { showKey: '[', code: 'bracketleft 5 5 ????', emu: [ 'shift', { key: 'colon', cls: 'o-t' } ], use: { key: 'ltbracket', cls: 'o-b' }, grid: 'hide', rcode: 'skip', flags: 1 },
        { showKey: '[', code: 'bracketleft 5 5 ????', emu: [ 'shift', { key: 'colon', cls: 'o-t' } ], use: { key: 'ltbracket', cls: 'o-b' }, grid: 'hide', rcode: 'skip', flags: 33 },
        { showKey: '[', code: 'bracketleft 5 5 33', emu: [ 'shift', { key: 'colon', cls: 'o-t' } ], use:   { key: 'ltbracket', cls: 'o-b' }, grid: 'hide' },
        { showKey: '&#xe05c;', code: 'bracketleft 5 3 3072', emu: [ 'cbm', { key: 'minus', cls: 'o-b3l' } ], use: [ 'control', 'ltbracket' ] },
        { showKey: '&#xe068;', code: 'braceleft 6 0 ????', emu: [ 'cbm', { key: 'gbp', cls: 'o-b3l' } ], use: [ 'shift', { key: 'ltbracket', cls: 'o-t' } ], grid: 'hide', rcode: 'skip', flags: 2064 },
        { showKey: '&#xe068;', code: 'braceleft 6 0 2064', emu: [ 'cbm', { key: 'gbp', cls: 'o-b3l' } ], use: [ 'shift', { key: 'ltbracket', cls: 'o-t' } ] },
        { showKey: ']', code: 'bracketright 6 2 33', emu: [ 'shift', { key: 'semicolon', cls: 'o-t' } ], use: { key: 'rtbracket', cls: 'o-b' } },
        { showKey: '&#xe05f;', code: 'bracketright 6 1 3072', emu: [ 'cbm', { key: 'asterisk', cls: 'o-b3l' } ], use: [ 'control', 'rtbracket' ] },
        { showKey: '&#xe069;', code: 'braceright 6 0 1', emu: [ 'shift', { key: 'gbp', cls: 'o-b3r' } ], use: [ 'shift', { key: 'rtbracket', cls: 'o-t' } ] },
        { showKey: '&#xe04d;', code: 'backslash 4 4 33', emu: [ 'shift', { key: 'm', cls: 'o-b3r' } ], use: { key: 'backslash', cls: 'o-b' }, rcode: { cls: 'lt' }, grid: { cls: 'ct' } },
        { showKey: '&pi;', code: 'backslash 6 6 1025', emu: [ 'shift', { key: 'uparr', cls: 'o-b3' } ], use: [ 'control', 'backslash' ], rcode: { cls: 'lt' }, grid: { cls: 'ct' } },
        { showKey: '&#xe05d;', code: 'bar 5 3 1', emu: [ 'shift', { key: 'minus', cls: 'o-b3r' } ], use: [ 'shift', { key: 'backslash', cls: 'o-t' } ], rcode: { cls: 'lt' }, grid: { cls: 'ct' } },
      ]
    },
    { name: 'caps lock 1', sequence: [
        { use: { zone: 'r4' } },
        { use: 'capslock' },
        { emu: 'shiftlock', use: 'capslock' },
      ]
    },
    { name: 'caps lock 2', sequence: [
        { emu: 'shiftlock', use: 'capslock', grid: { vis: 'show' } }
      ]
    },
    { name: 'caps lock 3', sequence: [
        { code: 'Caps_Lock 1 7 ????', emu: 'ltshift', use: 'capslock', rcode: 'hide', grid: { cls: 'ct' } },
        { code: 'Caps_Lock 1 7 ????', emu: 'ltshift', use: 'capslock', rcode: 'hide', grid: 'hide', flags: 'show' },
        { code: 'Caps_Lock 1 7 ????', emu: 'ltshift', use: 'capslock', rcode: 'hide', grid: 'hide', flags: 64 },
        { code: 'Caps_Lock 1 7 64', emu: 'ltshift', use: 'capslock', rcode: 'hide', grid: 'hide' },
      ]
    },
    { name: 'home row', sequence: [
        { emu: [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ], use: [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ] },
        { showKey: 'A', code: 'a 1 2 32', emu: { key: 'a', cls: 'o-tm3' }, use: 'a', grid: { cls: 'ct' } },
        { showKey: '&#xe070;', code: 'a 1 2 3072', emu: [ 'cbm', { key: 'a', cls: 'o-b3l' } ], use: [ 'control', 'a' ], grid: 'hide' },
        { showKey: '&#xe041;', code: 'A 1 2 1', emu: [ 'shift', { key: 'a', cls: 'o-b3r' } ], use: [ 'shift', 'a' ], grid: 'hide' },
        { showKey: 'S', code: 's 1 5 32', emu: { key: 's', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe06e;', code: 's 1 5 3072', emu: [ 'cbm', { key: 's', cls: 'o-b3l' } ], use: [ 'control', 's' ], grid: 'hide' },
        { showKey: '&#xe053;', code: 'S 1 5 1', emu: [ 'shift', { key: 's', cls: 'o-b3r' } ], use: [ 'shift', 's' ], grid: 'hide' },
        { showKey: 'D', code: 'd 2 2 32', emu: { key: 'd', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe06c;', code: 'd 2 2 3072', emu: [ 'cbm', { key: 'd', cls: 'o-b3l' } ], use: [ 'control', 'd' ], grid: 'hide' },
        { showKey: '&#xe044;', code: 'D 2 2 1', emu: [ 'shift', { key: 'd', cls: 'o-b3r' } ], use: [ 'shift', 'd' ], grid: 'hide' },
        { showKey: 'F', code: 'f 2 5 32', emu: { key: 'f', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe07b;', code: 'f 2 5 3072', emu: [ 'cbm', { key: 'f', cls: 'o-b3l' } ], use: [ 'control', 'f' ], grid: 'hide' },
        { showKey: '&#xe046;', code: 'F 2 5 1', emu: [ 'shift', { key: 'f', cls: 'o-b3r' } ], use: [ 'shift', 'f' ], grid: 'hide' },
        { showKey: 'G', code: 'g 3 2 32', emu: { key: 'g', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe065;', code: 'g 3 2 3072', emu: [ 'cbm', { key: 'g', cls: 'o-b3l' } ], use: [ 'control', 'g' ], grid: 'hide' },
        { showKey: '&#xe047;', code: 'G 3 2 1', emu: [ 'shift', { key: 'g', cls: 'o-b3r' } ], use: [ 'shift', 'g' ], grid: 'hide' },
        { showKey: 'H', code: 'h 3 5 32', emu: { key: 'h', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe074;', code: 'h 3 5 3072', emu: [ 'cbm', { key: 'h', cls: 'o-b3l' } ], use: [ 'control', 'h' ], grid: 'hide' },
        { showKey: '&#xe048;', code: 'H 3 5 1', emu: [ 'shift', { key: 'h', cls: 'o-b3r' } ], use: [ 'shift', 'h' ], grid: 'hide' },
        { showKey: 'J', code: 'j 4 2 32', emu: { key: 'j', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe075;', code: 'j 4 2 3072', emu: [ 'cbm', { key: 'j', cls: 'o-b3l' } ], use: [ 'control', 'j' ], grid: 'hide' },
        { showKey: '&#xe04a;', code: 'J 4 2 1', emu: [ 'shift', { key: 'j', cls: 'o-b3r' } ], use: [ 'shift', 'j' ], grid: 'hide' },
        { showKey: 'K', code: 'k 4 5 32', emu: { key: 'k', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe061;', code: 'k 4 5 3072', emu: [ 'cbm', { key: 'k', cls: 'o-b3l' } ], use: [ 'control', 'k' ], grid: 'hide' },
        { showKey: '&#xe04b;', code: 'K 4 5 1', emu: [ 'shift', { key: 'k', cls: 'o-b3r' } ], use: [ 'shift', 'k' ], grid: 'hide' },
        { showKey: 'L', code: 'l 5 2 32', emu: { key: 'l', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe076;', code: 'l 5 2 3072', emu: [ 'cbm', { key: 'l', cls: 'o-b3l' } ], use: [ 'control', 'l' ], grid: 'hide' },
        { showKey: '&#xe04c;', code: 'L 5 2 1', emu: [ 'shift', { key: 'l', cls: 'o-b3r' } ], use: [ 'shift', 'l' ], grid: 'hide' },
        { showKey: ';', code: 'semicolon 6 2 32', emu: { key: 'semicolon', cls: 'o-b' }, use: { key: 'semicolon', cls: 'o-b' } },
        { showKey: '&#xe07a;', code: 'semicolon 5 6 1025', emu: [ 'shift', { key: 'at', cls: 'o-b3r' } ], use: [ 'control', 'semicolon' ] },
        { showKey: ':', code: 'colon 5 5 16', emu: { key: 'colon', cls: 'o-b' }, use: [ 'shift', { key: 'semicolon', cls: 'o-t' } ] },
        { use: 'quote' },
        { showKey: "'", code: 'apostrophe 3 0 1', emu: [ 'shift', { key: '7', cls: 'o-t3' } ], use: { key: 'quote', cls: 'o-b' } },
        { showKey: '"', code: 'quotedbl 7 3 1', emu: [ 'shift', { key: '2', cls: 'o-t3' } ], use: { key: 'quote', cls: 'o-t' } },
        { code: 'Return 0 1 8', emu: 'return', use: 'return', grid: { cls: 'ct' }, rcode: { cls: 'lt' } },
        { code: 'Return 0 1 8', emu: [ 'shift', 'return' ], use: [ 'shift', 'return' ], grid: 'hide', rcode: { act: 'skip', cls: 'lt' } },
      ]
    }
  ]
}

