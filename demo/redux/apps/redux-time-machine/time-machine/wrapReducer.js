import { SET_FRAME } from './actions'
import TimeMachine from './TimeMachine'

const wrap = reducer => (state, action) => {
  if (action.type === SET_FRAME) {
    TimeMachine.setFrame(action.frame)
    return TimeMachine.getCurrentFrame()
  } else {
    return reducer(state, action)
  }
}

export default wrap
