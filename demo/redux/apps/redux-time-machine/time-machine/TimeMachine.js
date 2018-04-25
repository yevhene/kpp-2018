import { EventEmitter } from 'events'

class TimeMachine extends EventEmitter {
  constructor() {
    super()

    this.stack = []
    this.index = -1
  }

  push(state) {
    if (this.detached()) {
      this.stack = this.stack.slice(0, this.index)
    }
    this.stack.push(state)
    this.index = this.stack.length - 1

    this.emit('change')
  }

  setFrame(index) {
    this.index = parseInt(index)

    this.emit('change')
  }

  getCurrentFrame() {
    return this.stack[this.index]
  }

  detached() {
    return this.index !== (this.stack.length - 1)
  }
}

export default new TimeMachine()
