import React from 'react'
import { connect } from 'react-redux'
import TimeMachine from '../TimeMachine'
import { setFrame } from '../actions'

export default class Sliders extends React.Component {
  constructor() {
    super()

    this.state = {
      index: 0,
      frames: 0
    }
  }

  componentDidMount() {
    TimeMachine.on('change', () => this.onAction())
  }

  onAction() {
    this.setState({
      frames: TimeMachine.stack.length - 1,
    }, () => {
      this.setState({
        index: TimeMachine.index
      })
    })
  }

  onFrameChange() {
    this.props.store.dispatch(setFrame(parseInt(this.refs.scale.value)))
  }

  render() {
    return (
      <div className="container time-machine">
        <div className="row">
          <div className="col-md-10">
            <input type="range"
                   min={ 0 } max={ this.state.frames }
                   value={ this.state.index }
                   ref="scale"
                   onChange={ () => this.onFrameChange() } />
          </div>

          <div className="col-md-2">
            <strong>{ this.state.index } / { this.state.frames }</strong>
          </div>
        </div>
      </div>
    )
  }
}
