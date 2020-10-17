import React from 'react';
import timelineData from './helpers/data';
import { Chrono } from 'react-chrono';
import { ButtonToggle } from 'reactstrap';

export default class Timeline extends React.Component{
  state = {
    type: 'HORIZONTAL',
    buttonIsOpen: false
  }

  render() {
    return(
      <div>
        <div style={{ width: "100%" }}>
          <ButtonToggle onClick={() => this.setState({ type: 'HORIZONTAL' })}>
            Horizontal
          </ButtonToggle>{' '}
          <ButtonToggle onClick={() => this.setState({ type: 'VERTICAL' })}>
            Vertical
          </ButtonToggle>{' '}
          <ButtonToggle onClick={() => this.setState({ type: 'TREE'} )}>
            Tree
          </ButtonToggle>{' '}

          <Chrono items={timelineData} mode={this.state.type} />
        </div>
      </div>
    )
  }
}