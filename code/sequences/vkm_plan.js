projects.vkm_plan = {
  styles: ['mac', 'mapped' ],
  bodycls: 'c64',
  ui: [ 'demo-key' ],
  map: 'mapped-plan-c64',
  mapcls: 'mac',

  sequences: [
    { name: "first row", sequence: [
        { map: { zone: 'r1' } }
      ]
    },
    { name: "second row", sequence: [
        { map: { zone: 'r2' } }
      ]
    },
    {
      name: "second row missing", sequence: [
        { map: { zone: 'r2' } },
        { map: [
            { key: '1', cls: 'o-b3' }, { key: '2', cls: 'o-b3' }, { key: '3', cls: 'o-b3' }, { key: '4', cls: 'o-b3' },
            { key: '5', cls: 'o-b3' }, { key: '6', cls: 'o-b3' }, { key: '7', cls: 'o-b3' }, { key: '8', cls: 'o-b3' },
            { key: '9', cls: 'o-b3' }, { key: '0', cls: 'o-b3' }
          ]
        },
        { map: [
            { key: 'minus', cls: 'o-b3' }, { key: 'equal', cls: 'o-b3' }
          ]
        }
      ]
    },
    { name: 'third row', sequence: [
        { map: { zone: 'r3' } }
      ]
    },
    { name: 'commodore key', sequence: [
        { map: 'ltoption' }
      ]
    },
    { name: 'fifth + sixth row', sequence: [
        { map: { zone: 'r5' } },
        { map: { zone: 'r6' } },
      ]
    }
  ]
}
