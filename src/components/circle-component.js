import React, { Component } from 'react';

class Cicrle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingAmount: 5,
      stateCoutDown: false,
      viewData: {
        width: '50px',
        height: '50px'
      }
    }
    this.coutDown = this.coutDown.bind(this);
    this.circle = React.createRef();
    this.interval = null;
  }

  coutDown() {
    let { remainingAmount, stateCoutDown } = this.state
    if (remainingAmount === 0) return
    !stateCoutDown ?
    this.interval = setInterval(() => {
      this.setState({
        remainingAmount: remainingAmount - 1 < 0 ? 0 : --remainingAmount,
        stateCoutDown: !stateCoutDown
      });
    }, 1000) :
    this.stopCountDown();
  }

  stopCountDown() {
    const { stateCoutDown } = this.state
    this.setState({
      stateCoutDown: !stateCoutDown
    });
    clearInterval(this.interval);
  }

  componentDidMount() {
    const { remainingAmount } = this.state
    const { number } = this.props
    this.setState({
      remainingAmount: number || remainingAmount
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { remainingAmount, stateCoutDown, viewData } = this.state
    const { view } = this.props

    const styles = {
      ...viewData, ...view
    }
    return (
      <div className="circle-wrap">
        <button className="circle-action" onClick={this.coutDown}>{ stateCoutDown ? 'Stop' : 'Start' }</button>
        <div ref={this.circle} style={styles} onClick={this.coutDown} className="circle">{ remainingAmount }</div>
      </div>
    );
  }
}
export default Cicrle;
