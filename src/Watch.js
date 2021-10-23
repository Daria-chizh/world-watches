import React from 'react';
import moment from 'moment';

class Watch extends  React.Component {
  constructor(props) {
    super(props);
    this.state =  {};
  }

  componentDidMount() {
    const intervalId = setInterval(
      () => {
        this.setState({
          time: this.state.time.add(1, 'second')
        });
      },
      1000
    );

    this.setState({
      time: moment().utcOffset(Number(this.props.offset)),
      intervalId,
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  render() {
    const { name, onRemove } = this.props;
    const { time } = this.state;

    if (!time) {
      return null;
    }

    return (
      <div>
        <div>{name}</div>
        <div className="body">
          <div className="time-field">{this.state.time.format('HH:mm:ss')}</div>
          <span onClick={() => onRemove(name)}>✖</span>
        </div>
      </div>
    )
  }
}

export default Watch;
