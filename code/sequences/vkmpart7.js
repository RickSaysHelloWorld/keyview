projects.vkmpart7 = {
  styles: ['mac', 'c64'],
  bodycls: 'c64',
  ui: ['show-key', 'code'],
  emu: 'c64',
  emucls: 'c64',
  use: 'macbook',
  usecls: 'mac',

  sequences: [
    { name: 'transform key flags', sequence: [
        { flags: 'show' },
        { emu: 'ltshift', flags: 2 },
        { emu: 'rtshift', flags: 4 },
        { emu: 'shiftlock', flags: 64 },
        { code: 'Caps_Lock 1 7 64', emu: 'ltshift', use: 'capslock', grid: 'show', rcode: 'hide' },
        { emu: 'cbm', flags: 8192 },
        { emu: 'ctrl', flags: 16384 },
      ]
    },
    { name: 'row 1', sequence: [
        {use: { zone: 'r1' } },
        {code: 'Escape 7 7 8', emu: 'stop', use: 'esc', grid: { cls: 'ct' } },
        {code: 'F1 0 4 0', emu: { key: 'f1', cls: 'o-tm3' }, use: [ 'fn', 'f1' ], grid: { cls: 'ct' } },
        {code: 'F2 0 4 1', emu: [ 'shift', { key: 'f1', cls: 'o-b3' } ], use: [ 'fn', 'f2' ] },
        {code: 'F3 0 5 0', emu: {key: 'f3', cls: 'o-tm3'}, use: ['fn', 'f3'] },
        {code: 'F4 0 5 1', emu: [ 'shift', {key: 'f3', cls: 'o-b3'} ], use: ['fn', 'f4'] },
        {code: 'F5 0 6 0', emu: {key: 'f5', cls: 'o-tm3'}, use: ['fn', 'f5'] },
        {code: 'F6 0 6 1', emu: [ 'shift', {key: 'f5', cls: 'o-b3'} ], use: ['fn', 'f6'] },
        {code: 'F7 0 3 0', emu: {key: 'f7', cls: 'o-tm3'}, use: ['fn', 'f7'] },
        {code: 'F8 0 3 1', emu: [ 'shift', {key: 'f7', cls: 'o-b3'} ], use: ['fn', 'f8'] },
        {code: 'F9 -3 0', emu: 'restore', use: [ 'fn', 'f9' ] },
        {code: 'F12 6 3 8', emu: 'home', use: [ 'fn', 'f12' ] },
      ]
    },
    { name: 'row 2', sequence: [
        {use: { zone: 'r2' } },
        {showKey: '&larr;', code: 'grave 7 1 0', emu: 'ltarr', use: { key: 'backtick', cls: 'o-b' }, grid: { cls: 'ct' } },
        {showKey: '&pound;', code: 'asciitilde 6 0 16', emu: { key: 'gbp', cls: 'o-tm3' }, use: [ 'shift', { key: 'backtick', cls: 'o-t' } ], grid: { cls: 'ct' } },
        {showKey: '1', code: '1 7 0 32', emu: { key: '1', cls: 'o-m3'}, use: { key: '1', cls: 'o-b' }, grid: { cls: 'ct' } },
        {showKey: 's-orange|1', code: '1 7 0 3072', emu: [ 'cbm', '1' ], use: [ 'control', '1' ], grid: { cls: 'ct' } },
        {showKey: '!', code: 'exclam 7 0 1', emu: [ 'shift', { key: '1', cls: 'o-t3' } ], use: [ 'shift', { key: '1', cls: 'o-t' } ], grid: { cls: 'ct' } },
        {showKey: 's-black|1', code: 'exclamdown 7 0 4096', emu: [ 'ctrl', '1' ], use: [ 'ltoption', '1' ] },
        {showKey: '2', code: '2 7 3 32', emu: { key: '2', cls: 'o-m3' }, use: { key: '2', cls: 'o-b' } },
        {showKey: 's-brown|2', code: '2 7 3 3072', emu: [ 'cbm', '2' ], use: [ 'control', '2' ] },
        {showKey: '@', code: 'at 5 6 1', emu: { key: 'at', cls: 'o-tm3' }, use: [ 'shift', { key: '2', cls: 'o-t' } ] },
        {showKey: 's-white|2', code: 'trademark 7 3 4096', emu: [ 'ctrl', '2' ], use: [ 'ltoption', '2' ] },
        {showKey: '3', code: '3 1 0 32', emu: { key: '3', cls: 'o-m3' }, use: { key: '3', cls: 'o-b' } },
        {showKey: 's-pink|3', code: '3 7 3 3072', emu: [ 'cbm', '3' ], use: [ 'control', '3' ] },
        {showKey: '#', code: 'numbersign 1 0 1', emu: [ 'shift', { key: '3', cls: 'o-t3' } ], use: [ 'shift', { key: '3', cls: 'o-t' } ] },
        {showKey: 's-red|3', code: 'sterling 1 0 4096', emu: [ 'ctrl', '3' ], use: [ 'ltoption', '3' ] },
        {showKey: '4', code: '4 1 3 32', emu: { key: '4', cls: 'o-m3' }, use: { key: '4', cls: 'o-b' } },
        {showKey: 's-dkgray|4', code: '4 7 3 3072', emu: [ 'cbm', '4' ], use: [ 'control', '4' ] },
        {showKey: '$', code: 'dollar 1 3 1', emu: [ 'shift', { key: '4', cls: 'o-t3' } ], use: [ 'shift', { key: '4', cls: 'o-t' } ] },
        {showKey: 's-cyan|4', code: 'cent 1 3 4096', emu: [ 'ctrl', '4' ], use: [ 'ltoption', '4' ] },
        {showKey: '5', code: '5 2 0 32', emu: { key: '5', cls: 'o-m3' }, use: { key: '5', cls: 'o-b' } },
        {showKey: 's-medgray|5', code: '5 7 3 3072', emu: [ 'cbm', '5' ], use: [ 'control', '5' ] },
        {showKey: '%', code: 'percent 2 0 1', emu: [ 'shift', { key: '5', cls: 'o-t3' } ], use: [ 'shift', { key: '5', cls: 'o-t' } ] },
        {showKey: 's-purple|5', code: 'infinity 2 0 4096', emu: [ 'ctrl', '5' ], use: [ 'ltoption', '5' ] },
        {showKey: '6', code: '6 2 3 32', emu: { key: '6', cls: 'o-m3' }, use: { key: '6', cls: 'o-b' } },
        {showKey: 's-ltgreen|6', code: '6 7 3 3072', emu: [ 'cbm', '6' ], use: [ 'control', '6' ] },
        {showKey: '&uarr;', code: 'asciicircum 6 6 16', emu: { key: 'uparr', cls: 'o-tm3' }, use: [ 'shift', { key: '6', cls: 'o-t' } ] },
        {showKey: 's-green|6', code: 'section 2 3 4096', emu: [ 'ctrl', '6' ], use: [ 'ltoption', '6' ] },
        {showKey: '7', code: '7 3 0 32', emu: { key: '7', cls: 'o-m3' }, use: { key: '7', cls: 'o-b' } },
        {showKey: 's-ltblue|7', code: '7 7 3 3072', emu: [ 'cbm', '7' ], use: [ 'control', '7' ] },
        {showKey: '&', code: 'ampersand 2 3 1', emu: [ 'shift', { key: '6', cls: 'o-t3' } ], use: [ 'shift', { key: '7', cls: 'o-t' } ] },
        {showKey: 's-blue|7', code: 'paragraph 3 0 4096', emu: [ 'ctrl', '7' ], use: [ 'ltoption', '7' ] },
        {showKey: '8', code: '8 3 3 32', emu: { key: '8', cls: 'o-m3' }, use: { key: '8', cls: 'o-b' } },
        {showKey: 's-ltgray|8', code: '8 7 3 3072', emu: [ 'cbm', '8' ], use: [ 'control', '8' ] },
        {showKey: '*', code: 'asterisk 6 1 16', emu: { key: 'asterisk', cls: 'o-tm3' }, use: [ 'shift', { key: '8', cls: 'o-t' } ] },
        {showKey: 's-yellow|8', code: 'enfilledcircbullet 3 3 4096', emu: [ 'ctrl', '8' ], use: [ 'ltoption', '8' ] },
        {showKey: '9', code: '9 4 0 0', emu: { key: '9', cls: 'o-m3' }, use: { key: '9', cls: 'o-b' } },
        {showKey: '(', code: 'parenleft 3 3 1', emu: [ 'shift', { key: '8', cls: 'o-t3' } ], use: [ 'shift', { key: '9', cls: 'o-t' } ] },
        {showKey: 's-rvs|9', code: 'ordfeminine 4 0 4096', emu: [ 'ctrl', '9' ], use: [ 'ltoption', '9' ] },
        {showKey: '0', code: '0 4 3 0', emu: { key: '0', cls: 'o-m3' }, use: { key: '0', cls: 'o-b' } },
        {showKey: ')', code: 'parenright 4 0 1', emu: [ 'shift', { key: '9', cls: 'o-t3' } ], use: [ 'shift', { key: '0', cls: 'o-t' } ] },
        {showKey: '0', code: 'masculine 4 3 4096', emu: [ 'ctrl', '0' ], use: [ 'ltoption', '0' ] },
        {showKey: '-', code: 'minus 5 3 32', emu: { key: 'minus', cls: 'o-tm3' }, use: { key: 'minus', cls: 'o-b' } },
        {showKey: '&#xe040;', code: 'minus 6 1 1025', emu: [ 'shift', { key: 'asterisk', cls: 'o-b3r' } ], use: [ 'control', 'minus' ] },
        {showKey: '&#xe064;', code: 'underscore 5 6 2064', emu: [ 'cbm', { key: 'at', cls: 'o-b3l' } ], use: [ 'shift', { key: 'minus', cls: 'o-t' } ] },
        {showKey: '=', code: 'equal 6 5 32', emu: 'equal', use: { key: 'equal', cls: 'o-b' } },
        {showKey: '&#xe040;', code: 'equal 6 5 1025', emu: [ 'shift', { key: 'plus', cls: 'o-b3r' } ], use: [ 'control', 'equal' ] },
        {showKey: '+', code: 'plus 5 0 16', emu: { key: 'plus', cls: 'o-tm3' }, use: [ 'shift', { key: 'equal', cls: 'o-t' } ] },
        {code: 'BackSpace 0 0 8', emu: 'del', use: 'delete' },
      ]
    },
    { name: 'row 3', sequence: [
        { use: { zone: 'r3' } },
        { code: 'Tab 7 4 0', emu: 'space', use: 'tab', grid: { cls: 'ct' } },
        { code: 'ISO_Left_Tab 0 2 1', emu: [ 'shift', { key: 'right', cls: 'o-tm3' } ], use: [ 'shift', 'tab' ], grid: { cls: 'ct' } },
        { showKey: 'Q', code: 'q 7 6 32', emu: { key: 'q', cls: 'o-tm3' }, use: 'q', grid: { cls: 'ct' } },
        { showKey: '&#xe06b;', code: 'q 7 6 3072', emu: [ 'cbm', { key: 'q', cls: 'o-b3l' } ], use: [ 'control', 'q' ], grid: { cls: 'ct' } },
        { showKey: '&#xe051;', code: 'Q 7 6 1', emu: [ 'shift', { key: 'q', cls: 'o-b3r' } ], use: [ 'shift', 'q' ], grid: { cls: 'ct' } },
        { showKey: 'W', code: 'w 1 1 32', emu: { key: 'w', cls: 'o-tm3' }, use: 'w' },
        { showKey: '&#xe073;', code: 'w 1 1 3072', emu: [ 'cbm', { key: 'w', cls: 'o-b3l' } ], use: [ 'control', 'w' ] },
        { showKey: '&#xe057;', code: 'W 1 1 1', emu: [ 'shift', { key: 'w', cls: 'o-b3r' } ], use: [ 'shift', 'w' ] },
        { showKey: 'E', code: 'e 1 6 32', emu: { key: 'e', cls: 'o-tm3' }, use: 'e' },
        { showKey: '&#xe071;', code: 'e 1 6 3072', emu: [ 'cbm', { key: 'e', cls: 'o-b3l' } ], use: [ 'control', 'e' ] },
        { showKey: '&#xe045;', code: 'E 1 6 1', emu: [ 'shift', { key: 'e', cls: 'o-b3r' } ], use: [ 'shift', 'e' ] },
        { showKey: 'R', code: 'r 2 1 32', emu: { key: 'r', cls: 'o-tm3' }, use: 'r' },
        { showKey: '&#xe072;', code: 'r 2 1 3072', emu: [ 'cbm', { key: 'r', cls: 'o-b3l' } ], use: [ 'control', 'r' ] },
        { showKey: '&#xe052;', code: 'R 2 1 1', emu: [ 'shift', { key: 'r', cls: 'o-b3r' } ], use: [ 'shift', 'r' ] },
        { showKey: 'T', code: 't 2 6 32', emu: { key: 't', cls: 'o-tm3' }, use: 't' },
        { showKey: '&#xe063;', code: 't 2 6 3072', emu: [ 'cbm', { key: 't', cls: 'o-b3l' } ], use: [ 'control', 't' ] },
        { showKey: '&#xe054;', code: 'T 2 6 1', emu: [ 'shift', { key: 't', cls: 'o-b3r' } ], use: [ 'shift', 't' ] },
        { showKey: 'Y', code: 'y 3 1 32', emu: { key: 'y', cls: 'o-tm3' }, use: 'y' },
        { showKey: '&#xe077;', code: 'y 3 1 3072', emu: [ 'cbm', { key: 'y', cls: 'o-b3l' } ], use: [ 'control', 'y' ] },
        { showKey: '&#xe059;', code: 'Y 3 1 1', emu: [ 'shift', { key: 'y', cls: 'o-b3r' } ], use: [ 'shift', 'y' ] },
        { showKey: 'U', code: 'u 3 6 32', emu: { key: 'u', cls: 'o-tm3' }, use: 'u' },
        { showKey: '&#xe078;', code: 'u 3 6 3072', emu: [ 'cbm', { key: 'u', cls: 'o-b3l' } ], use: [ 'control', 'u' ] },
        { showKey: '&#xe055;', code: 'U 3 6 1', emu: [ 'shift', { key: 'u', cls: 'o-b3r' } ], use: [ 'shift', 'u' ] },
        { showKey: 'I', code: 'i 4 1 32', emu: { key: 'i', cls: 'o-tm3' }, use: 'i' },
        { showKey: '&#xe062;', code: 'i 4 1 3072', emu: [ 'cbm', { key: 'i', cls: 'o-b3l' } ], use: [ 'control', 'i' ] },
        { showKey: '&#xe049;', code: 'I 4 1 1', emu: [ 'shift', { key: 'i', cls: 'o-b3r' } ], use: [ 'shift', 'i' ] },
        { code: 'dead_circumflex 4 1 4096', emu: [ 'ctrl', 'i' ], use: [ 'ltoption', 'i' ] },
        { showKey: 'O', code: 'o 4 6 32', emu: { key: 'o', cls: 'o-tm3' }, use: 'o' },
        { showKey: '&#xe079;', code: 'o 4 6 3072', emu: [ 'cbm', { key: 'o', cls: 'o-b3l' } ], use: [ 'control', 'o' ] },
        { showKey: '&#xe04f;', code: 'O 4 6 1', emu: [ 'shift', { key: 'o', cls: 'o-b3r' } ], use: [ 'shift', 'o' ] },
        { showKey: 'P', code: 'p 5 1 32', emu: { key: 'p', cls: 'o-tm3' }, use: 'p' },
        { showKey: '&#xe06f;', code: 'p 5 1 3072', emu: [ 'cbm', { key: 'p', cls: 'o-b3l' } ], use: [ 'control', 'p' ] },
        { showKey: '&#xe050;', code: 'P 5 1 1', emu: [ 'shift', { key: 'p', cls: 'o-b3r' } ], use: [ 'shift', 'p' ] },
        { showKey: '[', code: 'bracketleft 5 5 33', emu: [ 'shift', { key: 'colon', cls: 'o-t' } ], use:   { key: 'ltbracket', cls: 'o-b' } },
        { showKey: '&#xe05c;', code: 'bracketleft 5 3 3072', emu: [ 'cbm', { key: 'minus', cls: 'o-b3l' } ], use: [ 'control', 'ltbracket' ] },
        { showKey: '&#xe068;', code: 'braceleft 6 0 2064', emu: [ 'cbm', { key: 'gbp', cls: 'o-b3l' } ], use: [ 'shift', { key: 'ltbracket', cls: 'o-t' } ] },
        { showKey: ']', code: 'bracketright 6 2 33', emu: [ 'shift', { key: 'semicolon', cls: 'o-t' } ], use: { key: 'rtbracket', cls: 'o-b' } },
        { showKey: '&#xe05f;', code: 'bracketright 6 1 3072', emu: [ 'cbm', { key: 'asterisk', cls: 'o-b3l' } ], use: [ 'control', 'rtbracket' ] },
        { showKey: '&#xe069;', code: 'braceright 6 0 1', emu: [ 'shift', { key: 'gbp', cls: 'o-b3r' } ], use: [ 'shift', { key: 'rtbracket', cls: 'o-t' } ] },
        { showKey: '&#xe04d;', code: 'backslash 4 4 33', emu: [ 'shift', { key: 'm', cls: 'o-b3r' } ], use: { key: 'backslash', cls: 'o-b' } },
        { showKey: '&pi;', code: 'backslash 6 6 1025', emu: [ 'shift', { key: 'uparr', cls: 'o-b3' } ], use: [ 'control', 'backslash' ] },
        { showKey: '&#xe05d;', code: 'bar 5 3 1', emu: [ 'shift', { key: 'minus', cls: 'o-b3r' } ], use: [ 'shift', { key: 'backslash', cls: 'o-t' } ] },
      ]
    },
    { name: 'row 4', sequence: [
        { use: { zone: 'r4' } },
        { code: 'Caps_Lock 1 7 64', emu: 'ltshift', use: 'capslock' },
        { showKey: 'A', code: 'a 1 2 32', emu: { key: 'a', cls: 'o-tm3' }, use: 'a', grid: { cls: 'ct' } },
        { showKey: '&#xe070;', code: 'a 1 2 3072', emu: [ 'cbm', { key: 'a', cls: 'o-b3l' } ], use: [ 'control', 'a' ] },
        { showKey: '&#xe041;', code: 'A 1 2 1', emu: [ 'shift', { key: 'a', cls: 'o-b3r' } ], use: [ 'shift', 'a' ] },
        { showKey: 'S', code: 's 1 5 32', emu: { key: 's', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe06e;', code: 's 1 5 3072', emu: [ 'cbm', { key: 's', cls: 'o-b3l' } ], use: [ 'control', 's' ] },
        { showKey: '&#xe053;', code: 'S 1 5 1', emu: [ 'shift', { key: 's', cls: 'o-b3r' } ], use: [ 'shift', 's' ] },
        { showKey: 'D', code: 'd 2 2 32', emu: { key: 'd', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe06c;', code: 'd 2 2 3072', emu: [ 'cbm', { key: 'd', cls: 'o-b3l' } ], use: [ 'control', 'd' ] },
        { showKey: '&#xe044;', code: 'D 2 2 1', emu: [ 'shift', { key: 'd', cls: 'o-b3r' } ], use: [ 'shift', 'd' ] },
        { showKey: 'F', code: 'f 2 5 32', emu: { key: 'f', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe07b;', code: 'f 2 5 3072', emu: [ 'cbm', { key: 'f', cls: 'o-b3l' } ], use: [ 'control', 'f' ] },
        { showKey: '&#xe046;', code: 'F 2 5 1', emu: [ 'shift', { key: 'f', cls: 'o-b3r' } ], use: [ 'shift', 'f' ] },
        { showKey: 'G', code: 'g 3 2 32', emu: { key: 'g', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe065;', code: 'g 3 2 3072', emu: [ 'cbm', { key: 'g', cls: 'o-b3l' } ], use: [ 'control', 'g' ] },
        { showKey: '&#xe047;', code: 'G 3 2 1', emu: [ 'shift', { key: 'g', cls: 'o-b3r' } ], use: [ 'shift', 'g' ] },
        { showKey: 'H', code: 'h 3 5 32', emu: { key: 'h', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe074;', code: 'h 3 5 3072', emu: [ 'cbm', { key: 'h', cls: 'o-b3l' } ], use: [ 'control', 'h' ] },
        { showKey: '&#xe048;', code: 'H 3 5 1', emu: [ 'shift', { key: 'h', cls: 'o-b3r' } ], use: [ 'shift', 'h' ] },
        { code: 'abovedot 3 5 4096', emu: [ 'ctrl', 'h' ], use: [ 'ltoption', 'h' ] },
        { showKey: 'J', code: 'j 4 2 32', emu: { key: 'j', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe075;', code: 'j 4 2 3072', emu: [ 'cbm', { key: 'j', cls: 'o-b3l' } ], use: [ 'control', 'j' ] },
        { showKey: '&#xe04a;', code: 'J 4 2 1', emu: [ 'shift', { key: 'j', cls: 'o-b3r' } ], use: [ 'shift', 'j' ] },
        { showKey: 'K', code: 'k 4 5 32', emu: { key: 'k', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe061;', code: 'k 4 5 3072', emu: [ 'cbm', { key: 'k', cls: 'o-b3l' } ], use: [ 'control', 'k' ] },
        { showKey: '&#xe04b;', code: 'K 4 5 1', emu: [ 'shift', { key: 'k', cls: 'o-b3r' } ], use: [ 'shift', 'k' ] },
        { showKey: 'L', code: 'l 5 2 32', emu: { key: 'l', cls: 'o-tm3' }, use: 'a' },
        { showKey: '&#xe076;', code: 'l 5 2 3072', emu: [ 'cbm', { key: 'l', cls: 'o-b3l' } ], use: [ 'control', 'l' ] },
        { showKey: '&#xe04c;', code: 'L 5 2 1', emu: [ 'shift', { key: 'l', cls: 'o-b3r' } ], use: [ 'shift', 'l' ] },
        { showKey: ';', code: 'semicolon 6 2 32', emu: { key: 'semicolon', cls: 'o-b' }, use: { key: 'semicolon', cls: 'o-b' } },
        { showKey: '&#xe07a;', code: 'semicolon 5 6 1025', emu: [ 'shift', { key: 'at', cls: 'o-b3r' } ], use: [ 'control', 'semicolon' ] },
        { showKey: ':', code: 'colon 5 5 16', emu: { key: 'colon', cls: 'o-b' }, use: [ 'shift', { key: 'semicolon', cls: 'o-t' } ] },
        { showKey: "'", code: 'apostrophe 3 0 1', emu: [ 'shift', { key: '7', cls: 'o-t3' } ], use: { key: 'quote', cls: 'o-b' } },
        { showKey: '"', code: 'quotedbl 7 3 1', emu: [ 'shift', { key: '2', cls: 'o-t3' } ], use: { key: 'quote', cls: 'o-t' } },
        { code: 'Return 0 1 8', emu: 'return', use: 'return' },
      ]
    },
    { name: 'row 5', sequence: [
        { use: { zone: 'r5' } },
        { code: 'Shift_L 1 7 34', emu: 'ltshift', use: 'ltshift' },
        { code: 'Shift_L 1 7 3073', emu: [ 'shift', 'cbm' ], use: [ 'shift', 'control' ] },
        { showKey: 'Z', code: 'z 1 4 32', emu: { key: 'z', cls: 'o-tm3' }, use: 'z' },
        { showKey: '&#xe06d;', code: 'z 1 4 3072', emu: [ 'cbm', { key: 'z', cls: 'o-b3l' } ], use: [ 'control', 'z' ] },
        { showKey: '&#xe05a;', code: 'Z 1 4 1', emu: [ 'shift', { key: 'z', cls: 'o-b3r' } ], use: [ 'shift', 'z' ] },
        { showKey: 'X', code: 'x 2 7 32', emu: { key: 'x', cls: 'o-tm3' }, use: 'x' },
        { showKey: '&#xe07d;', code: 'x 2 7 3072', emu: [ 'cbm', { key: 'x', cls: 'o-b3l' } ], use: [ 'control', 'x' ] },
        { showKey: '&#xe058;', code: 'X 2 7 1', emu: [ 'shift', { key: 'x', cls: 'o-b3r' } ], use: [ 'shift', 'x' ] },
        { showKey: 'C', code: 'c 2 4 32', emu: { key: 'c', cls: 'o-tm3' }, use: 'c' },
        { showKey: '&#xe07c;', code: 'c 2 4 3072', emu: [ 'cbm', { key: 'c', cls: 'o-b3l' } ], use: [ 'control', 'c' ] },
        { showKey: '&#xe043;', code: 'C 2 4 1', emu: [ 'shift', { key: 'c', cls: 'o-b3r' } ], use: [ 'shift', 'c' ] },
        { showKey: 'V', code: 'v 3 7 32', emu: { key: 'v', cls: 'o-tm3' }, use: 'v' },
        { showKey: '&#xe07e;', code: 'v 3 7 3072', emu: [ 'cbm', { key: 'v', cls: 'o-b3l' } ], use: [ 'control', 'v' ] },
        { showKey: '&#xe056;', code: 'V 3 7 1', emu: [ 'shift', { key: 'v', cls: 'o-b3r' } ], use: [ 'shift', 'v' ] },
        { showKey: 'B', code: 'b 3 4 32', emu: { key: 'b', cls: 'o-tm3' }, use: 'b' },
        { showKey: '&#xe07f;', code: 'b 3 4 3072', emu: [ 'cbm', { key: 'b', cls: 'o-b3l' } ], use: [ 'control', 'b' ] },
        { showKey: '&#xe042;', code: 'B 3 4 1', emu: [ 'shift', { key: 'b', cls: 'o-b3r' } ], use: [ 'shift', 'b' ] },
        { showKey: 'N', code: 'n 4 7 32', emu: { key: 'n', cls: 'o-tm3' }, use: 'n' },
        { showKey: '&#xe06a;', code: 'n 4 7 3072', emu: [ 'cbm', { key: 'n', cls: 'o-b3l' } ], use: [ 'control', 'n' ] },
        { showKey: '&#xe04e;', code: 'N 4 7 1', emu: [ 'shift', { key: 'n', cls: 'o-b3r' } ], use: [ 'shift', 'n' ] },
        { code: 'dead_perispomeni 4 7 4096', emu: [ 'ctrl', 'n' ], use: [ 'ltoption', 'n' ] },
        { showKey: 'M', code: 'm 4 4 32', emu: { key: 'm', cls: 'o-tm3' }, use: 'm' },
        { showKey: '&#xe067;', code: 'm 4 4 3072', emu: [ 'cbm', { key: 'm', cls: 'o-b3l' } ], use: [ 'control', 'm' ] },
        { showKey: '&#xe04d;', code: 'M 4 4 1', emu: [ 'shift', { key: 'm', cls: 'o-b3r' } ], use: [ 'shift', 'm' ] },
        { showKey: ',', code: 'comma 5 7 0', emu: { key: 'comma', cls: 'o-b' }, use: { key: 'comma', cls: 'o-b' } },
        { showKey: '<', code: 'less 5 7 1', emu: { key: 'comma', cls: 'o-t' }, use: { key: 'comma', cls: 'o-t' } },
        { showKey: '.', code: 'period 5 4 0', emu: { key: 'period', cls: 'o-b' }, use: { key: 'period', cls: 'o-b' } },
        { showKey: '>', code: 'greater 5 4 1', emu: { key: 'period', cls: 'o-t' }, use: { key: 'period', cls: 'o-t' } },
        { showKey: '/', code: 'slash 6 7 0', emu: { key: 'slash', cls: 'o-b' }, use: { key: 'slash', cls: 'o-b' } },
        { showKey: '?', code: 'question 6 7 1', emu: { key: 'slash', cls: 'o-t' }, use: { key: 'slash', cls: 'o-t' } },
        { code: 'Shift_R 6 4 36', emu: 'rtshift', use: 'rtshift' },
        { code: 'Shift_R 6 4 3073', emu: [ 'cbm', 'rtshift' ], use: [ 'control', 'rtshift' ] }
      ]
    },
    { name: 'row 6', sequence: [
        { use: { zone: 'r6' } },
        { code: 'Control_L 7 5 0', emu: 'cbm', use: 'control', grid: { cls: 'ct' } },
        { code: 'Alt_L 7 2 16384', emu: 'ctrl', use: 'ltoption' },
        { code: 'Meta_L 7 5 8192', emu: 'cbm', use: 'ltcommand' },
        { code: 'space 7 4 0', emu: 'space', use: 'space' },
        { code: 'Left 0 2 1', emu: [ 'shift', { key: 'right', cls: 'o-tm3' } ], use: 'left' },
        { code: 'Up 0 7 1', emu: [ 'shift', { key: 'down', cls: 'o-tm3' } ], use: { key: 'updown', cls: 'o-t' } },
        { code: 'Down 0 7 0', emu: { key: 'down', cls: 'o-bm3' }, use: { key: 'updown', cls: 'o-b' } },
        { code: 'Right 0 2 0', emu: { key: 'right', cls: 'o-bm3' }, use: 'right', },
      ]
    }
  ]
}

