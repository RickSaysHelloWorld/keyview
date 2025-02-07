let projects = {}

class Controls {
  constructor(projects, runner) {
    this.maxWaitCount = 40
    this.projects = projects
    this.project = null
    this.sequenceRunner = runner

    this.container = document.getElementById('controls')
    this.lockout = document.getElementById('lockout')
    this.projectInputLabel = this.container.querySelector('label[for="project-name"]')
    this.projectInput = document.getElementById('project-name')
    this.loadProjectButton = document.getElementById('load-project')
    this.sequenceSelectLabel = this.container.querySelector('label[for="sequence-select"]')
    this.sequenceSelect = document.getElementById('sequence-select')
    this.runSequenceButton = document.getElementById('run-sequence')
    this.closeProjectButton = document.getElementById('close-project')

    this.errorMessage = this.container.querySelector('.error')
    this.showError()

    this.state = null
    this.stylesLoaded = [ 'styles' ]
    this.setState('load-project')

    this.loadProjectButton.addEventListener('click', () => { this.loadProject() })
    this.runSequenceButton.addEventListener('click', () => { this.runSequence() })
    this.closeProjectButton.addEventListener('click', () => { this.clearProject() })
  }

  showError(error, append = false) {
    if (!error) {
      this.errorMessage.style.display = 'none'
    } else {
      this.errorMessage.style.display = 'block'
      if (!append) { this.errorMessage.innerHTML = '' }
      this.errorMessage.innerHTML += error + '<br/>'
    }
  }

  setState(newState) {
    this.state = newState
    this.showError()
    this.container.style.display = (newState === 'hidden') ? 'none' : 'block'
    this.lockout.style.display = (newState === 'hidden') ? 'none' : 'block'

    this.projectInputLabel.style.display = (newState === 'load-project') ? 'inline-block' : 'none'
    this.projectInput.style.display = (newState === 'load-project') ? 'inline-block' : 'none'
    this.loadProjectButton.style.display = (newState === 'load-project') ? 'inline-block' : 'none'

    this.sequenceSelectLabel.style.display = (newState === 'run-sequence') ? 'inline-block' : 'none'
    this.sequenceSelect.style.display = (newState === 'run-sequence') ? 'inline-block' : 'none'
    this.runSequenceButton.style.display = (newState === 'run-sequence') ? 'inline-block' : 'none'
    this.closeProjectButton.style.display = (newState === 'run-sequence') ? 'inline-block' : 'none'

    if (newState === 'load-project') {
      this.projectInput.focus()
    } else if (newState === 'run-sequence') {
      this.sequenceSelect.focus()
    }
  }

  loadProject() {
    this.showError()
    this.project = null
    const projectName = (this.projectInput.value || '').trim().toLowerCase()
    if (projectName === '') { return }
    this.container.style.display = 'none'
    if (projectName in this.projects) {
      this.projectLoaded(projectName)
      return
    }
    const scriptElement = document.createElement('script')
    scriptElement.src = `/code/sequences/${projectName}.js`
    scriptElement.type = 'text/javascript'
    document.getElementsByTagName('head')[0].appendChild(scriptElement)
    this.waitForProjectLoad(projectName)
  }

  waitForProjectLoad(projectName, waitCount = 0) {
    if (waitCount === this.maxWaitCount) {
      this.container.style.display = 'block'
      this.showError('Unable to load project')
      return
    }
    if (projectName in this.projects) {
      this.projectLoaded(projectName)
      return
    }
    setTimeout(() => { this.waitForProjectLoad(projectName, waitCount + 1) }, 250)
  }

  loadStyles(styles) {
    styles = styles || []
    for (const style of styles) {
      if (this.stylesLoaded.includes(style)) { continue }
      const linkElement = document.createElement('link')
      linkElement.href = `/style/${style}.css`
      linkElement.type = 'text/css'
      linkElement.rel = 'stylesheet'
      document.getElementsByTagName('head')[0].appendChild(linkElement)
      this.stylesLoaded.push(style)
    }
  }

  createOverlays(elem) {
    const keys = elem.querySelectorAll("key");
    for (let i = 0; i < keys.length; i++) {
      const overlay = document.createElement("div");
      overlay.classList.add("overlay")
      keys[i].appendChild(overlay)
    }
  }

  async loadKeyboard(keyboard, project, classes = '') {
    const keyboardElement = document.getElementById(`${keyboard}-keyboard`)
    const keyboardFile = project[keyboard]
    keyboardElement.style.display = (keyboardFile) ? 'block' : 'none'
    const kbkey = `${keyboard}cls`
    const kbclass = (kbkey in project) ? project[kbkey] : ''
    keyboardElement.className = ('keyboard ' + classes + ' ' + kbclass).trim()
    if (!keyboardFile) { return }
    try {
      const response = await fetch(`/keyboards/${keyboardFile}.html`)
      keyboardElement.innerHTML = await response.text()
      this.createOverlays(keyboardElement)
      if (keyboard === 'emu') {
        const keyMapDiv = keyboardElement.querySelector('.keymap')
        let keyMapContent = keyMapDiv.innerHTML
        if (keyMapContent.startsWith('\n')) { keyMapContent = keyMapContent.substring(1) }
        keyMapDiv.innerHTML = keyMapContent
        this.keyMap.appendChild(keyMapDiv)
      }
    } catch (error) {
      this.showError(`Unable to load keyboard html for ${keyboard}`, true)
    }
  }

  loadKeyboards(project) {
    this.loadKeyboard('emu', project)
    this.loadKeyboard('use', project)
    this.loadKeyboard('map', project, 'mapped')
  }

  prepUI(ui, bodycls = '') {
    ui = ui || []
    const body = document.getElementsByTagName('body')[0]
    body.className = bodycls

    if (!this.uiShowKey) {
      this.uiShowKey = document.getElementById('show-key')
      this.uiCode = document.getElementById('code')
      this.uiDemoKey = document.getElementById('demo-key')
      this.keyMap = document.getElementById('keymap')
      this.flags = document.getElementById('flags')
      this.runningCode = document.getElementById('running-code')
    }
    this.uiShowKey.style.display = (ui.includes('show-key')) ? 'inline-block' : 'none'
    this.uiCode.style.display = (ui.includes('code')) ? 'inline-block' : 'none'
    this.uiDemoKey.style.display = (ui.includes('demo-key')) ? 'inline-block' : 'none'
    this.keyMap.style.display = 'none' // this shows when asked
    this.flags.style.display = 'none' // this shows when asked
    this.runningCode.style.display = 'none' // this shows when asked
  }

  projectLoaded(projectName) {
    this.project = this.projects[projectName]
    // prep screen
    this.prepUI(this.project.ui, this.project.bodycls)
    this.loadStyles(this.project.styles)
    this.loadKeyboards(this.project)

    // ready sequences
    let sequences = this.project.sequences.map((v) => v.name)
    sequences.push('Show Screen')
    this.sequenceSelect.innerHTML = ''
    for (let idx = 0; idx < sequences.length; idx++) {
      const option = document.createElement('option')
      option.value = idx.toString()
      option.innerHTML = sequences[idx]
      this.sequenceSelect.appendChild(option)
    }
    this.container.style.display = 'block'
    this.setState('run-sequence')
  }

  runSequence() {
    this.setState('hidden')
    const sequenceIndex = parseInt(this.sequenceSelect.value)
    let sequence = []
    if (sequenceIndex < this.project.sequences.length) {
      sequence = [ { showKey: '' }, ...this.project.sequences[sequenceIndex].sequence ]
    }
    this.sequenceRunner.runSequence([ ...sequence, { showKey: '' } ], () => { this.sequenceDone() })
  }

  sequenceDone() {
    this.setState('run-sequence')
  }

  clearProject() {
    this.project = null
    const keyMapDiv = this.keyMap.querySelector('.keymap')
    if (keyMapDiv) { keyMapDiv.remove() }
    this.setState('load-project')
  }
}

class SequenceRunner {
  constructor() {
    this.sequence = null
    this.sequenceIndex = 0
    this.running = false
    this.endCallback = null

    this.characterDisplay = document.getElementById('show-key')
    this.codeDisplay = document.getElementById('code')
    this.demoKeyDisplay = document.getElementById('demo-key');
    this.emulatedKeyboard = document.getElementById('emu-keyboard')
    this.useKeyboard = document.getElementById('use-keyboard')
    this.mapKeyboard = document.getElementById('map-keyboard')
    this.keyMap = document.getElementById('keymap')
    this.flags = document.getElementById('flags')
    this.runningCode = document.getElementById('running-code')

    window.addEventListener('keydown', (e) => {
      this.nextInSequence(e)
    })
  }

  showZone(elem, zoneType) {
    if (!elem) {
      return
    }
    const overlays = elem.querySelectorAll(`key.z-${zoneType} .overlay`);
    for (let i = 0; i < overlays.length; i++) {
      overlays[i].classList.add(`z-${zoneType}`)
    }
  }

  hideOverlays(elem) {
    if (!elem) {
      return
    }
    const overlays = elem.querySelectorAll(`key .overlay`);
    for (let i = 0; i < overlays.length; i++) {
      overlays[i].className = 'overlay'
    }
  }

  highlightKey(elem, keyName, subclass) {
    if (!elem) {
      return
    }
    const overlays = elem.querySelectorAll(`key.k-${keyName} .overlay`);
    for (let i = 0; i < overlays.length; i++) {
      overlays[i].classList.add('highlight')
      if (subclass) {
        overlays[i].classList.add(subclass);
      }
    }
  }

  highlightKeymap(elem, keymap) {
    if (!elem) {
      return
    }
    if (keymap.zone) {
      this.showZone(elem, keymap.zone)
      keymap = keymap.key || []
    }
    if (!Array.isArray(keymap)) {
      keymap = [keymap]
    }
    for (let i = 0; i < keymap.length; i++) {
      let key = keymap[i]
      if (typeof key === 'string' || key instanceof String) {
        key = {key, cls: ''}
      }
      this.highlightKey(elem, key.key, key.cls)
    }
  }

  formatCode(code) {
    code = code || ''

    const matches = code.match(/\s*([\w\+]+)\s+(\d+)\s+(\d+)(\s+([\w\?]+))?/)
    if (matches && matches.length === 6) {
      code = ''
      code += matches[1].padEnd(22) // NOTE: 21 is longest alt key name (rightdoublequotemark)
      code += matches[2].padEnd(3) // a number between 0 and 15 max
      code += matches[3].padEnd(3) // a number between 0 and 9 max
      code += matches[4] ? matches[5] : ''
      code = code.replaceAll(' ', '&nbsp;')
    }
    return code
  }

  setBodyClass(bodycls) {
    if (bodycls) {
      const body = document.getElementsByTagName('body')[0]
      if (bodycls.startsWith('-')) {
        bodycls = bodycls.substring(1)
        body.classList.remove(bodycls)
      } else {
        body.classList.add(bodycls)
      }
    }
  }

  setCharacterDisplay(showKey) {
    if (showKey && showKey.startsWith('s-')) {
      const s = showKey.split('|')
      showKey = s[1]
      this.characterDisplay.classList.add(s[0])
    }
    this.characterDisplay.innerHTML = showKey || ''
  }

  setCode(code) {
    if (code && code.startsWith('s-')) {
      const c = code.split('|')
      code = c[1]
      this.codeDisplay.classList.add(c[0])
    }
    let html = ''
    for (const codeline of (code || '').split(',')) {
      if (html.length > 0) { html += '<br/>' }
      html += this.formatCode(codeline)
    }
    this.codeDisplay.innerHTML = html
    return code
  }

  setDemoKey(demo) {
    if (demo) {
      let demoHtml = demo
      if (demo.cls) {
        demoHtml = demo.html
        const demoCls = demo.cls.split(' ')
        for (const dcls of demoCls) {
          this.demoKeyDisplay.classList.add(dcls)
        }
      }
      this.demoKeyDisplay.style.visibility = 'visible'
      this.demoKeyDisplay.innerHTML = demoHtml
    } else {
      this.demoKeyDisplay.style.visibility = 'hidden'
    }
  }

  setKeyGrid(keyGrid, code) {
    keyGrid = keyGrid || {}
    if (typeof keyGrid === 'string' || keyGrid instanceof String) {
      keyGrid = { vis: keyGrid }
    }
    if (keyGrid.cls) {
      this.keyMap.classList.add(...keyGrid.cls.split(' '))
    }
    if (keyGrid.vis !== 'show' && code) {
      this.keyMap.classList.add('small')
    }
    if (keyGrid.vis !== 'hide' && (code || keyGrid.vis === 'show')) {
      let colCls = 'nocol'
      let rowCls = 'norow'
      if (keyGrid.col !== undefined || keyGrid.row !== undefined) {
        colCls = (keyGrid.col >= 0) ? `c-${keyGrid.col}` : 'nocol'
        rowCls = (keyGrid.row >= 0) ? `r-${keyGrid.row}` : 'norow'
      } else if (code) {
        const m = code.match(/\s+(\d+)\s+(\d+)/)
        if (m && m.length === 3) {
          rowCls = `r-${parseInt(m[1])}`
          colCls = `c-${parseInt(m[2])}`
        }
      }
      this.keyMap.classList.add(rowCls, colCls)
      this.keyMap.style.display = 'block'
    }
  }

  setFlags(flags) {
    flags = (flags === undefined) ? 'hide' : flags
    if (typeof flags === 'string' || flags instanceof String) {
      this.flags.style.display = (flags === 'show') ? 'block' : 'none'
    } else {
      const total = flags
      if (flags === 0) {
        this.flags.querySelector('.v0').classList.add('on')
      } else {
        let v = 16384
        while (v > 0 && flags > 0) {
          if (flags >= v) {
            this.flags.querySelector(`.v${v}`).classList.add('on')
            flags -= v
          }
          v = v / 2
        }
      }
      this.flags.querySelector('.total').innerHTML = `         ${total.toString().padStart(6)}`
      this.flags.style.display = 'block';
    }
  }

  setRunCode(rcode, code) {
    let runcode = rcode || (code ? 'show' : 'hide')
    if (typeof runcode === 'string' || runcode instanceof String) {
      runcode = { act: runcode }
    }
    let runcodeact = runcode.act || (code ? 'show' : 'hide')
    if (runcode.act === 'del' || (code && runcodeact === 'repl')) {
      this.runningCode.querySelector(`p:nth-child(${runcode.ln})`).remove()
      if (runcodeact === 'repl') { runcodeact = 'show' }
    }
    if (code && runcodeact === 'show') {
      const p = document.createElement('p')
      p.innerHTML = this.formatCode(code)
      this.runningCode.appendChild(p)
      p.scrollIntoView({ behavior: 'smooth' })
      this.runningCode.style.display = 'block'
    } else if (runcodeact === 'hide') {
      this.runningCode.style.display = 'none'
    }
    if (runcode.cls) { this.runningCode.classList.add(...runcode.cls.split(' ')) }
  }

  setKeyHighlights(keymap) {
    if ('zone' in keymap) {
      let zone = keymap.zone
      if (typeof zone === 'string' || zone instanceof String) {
        zone = [zone]
      }
      for (const z of zone) {
        this.showZone(this.emulatedKeyboard, z)
        this.showZone(this.useKeyboard, z)
        this.showZone(this.mapKeyboard, z)
      }
    }
    if ('emu' in keymap) {
      this.highlightKeymap(this.emulatedKeyboard, keymap.emu)
    }
    if ('use' in keymap) {
      this.highlightKeymap(this.useKeyboard, keymap.use)
    }
    if ('map' in keymap) {
      this.highlightKeymap(this.mapKeyboard, keymap.map)
    }
  }

  showKeymap(keymap) {
    this.setBodyClass(keymap.bodycls)
    this.setCharacterDisplay(keymap.showKey)
    const code = this.setCode(keymap.code)
    this.setDemoKey(keymap.demo)
    this.setKeyGrid(keymap.grid, code)
    this.setFlags(keymap.flags)
    this.setRunCode(keymap.rcode, code)
    this.setKeyHighlights(keymap)
  }

  runSequence(keyseq, endCallback) {
    this.running = true
    this.sequence = keyseq
    this.sequenceIndex = 0
    this.endCallback = endCallback
    this.runningCode.innerHTML = ''
    this.showSequenceStep()
  }

  showSequenceStep() {
    if (!this.sequence.noclear) {
      this.characterDisplay.innerHTML = ''
      this.characterDisplay.className = ''
      this.codeDisplay.innerHTML = ''
      this.codeDisplay.className = ''
      this.demoKeyDisplay.innerHTML = ''
      this.keyMap.className = ''
      this.keyMap.style.display = 'none'
      this.hideOverlays(this.emulatedKeyboard)
      this.hideOverlays(this.useKeyboard)
      this.hideOverlays(this.mapKeyboard)
      this.flags.querySelectorAll('p').forEach(el => { el.classList.remove('on') })
      this.flags.querySelector('p.total').innerHTML = ''
      this.runningCode.className = ''
    }
    if (this.sequenceIndex === this.sequence.length) {
      this.sequence = null
      this.running = false
      this.sequenceIndex = 0
      if (this.endCallback) { this.endCallback() }
      this.endCallback = null
      this.runningCode.innerHTML = ''
      return
    }
    this.showKeymap(this.sequence[this.sequenceIndex])
    if (this.sequence.nowait) {
      this.nextInSequence()
    }
  }

  nextInSequence(evt) {
    if (!this.running) {
      return true
    }
    this.sequenceIndex += 1
    this.showSequenceStep()
    if (evt) {
      evt.preventDefault()
    }
    return false
  }
}

window.addEventListener('load', (event) => {
  const sequenceRunner = new SequenceRunner()
  new Controls(projects, sequenceRunner)
})

