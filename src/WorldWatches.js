import React from 'react';
import Watch from "./Watch";


class WorldWatches extends  React.Component {
  constructor(props) {
    super(props);


    this.state =  {
      watches: [
      ],
    };
  }

  handleAdd = (event) => {
    const name = event.target.name.value;
    const offset = event.target.offset.value;
    this.setState({ watches: [...this.state.watches, { name, offset }] });
    event.preventDefault();
    event.target.reset();
  };

  handleRemove = (name) => {
    this.setState({ watches: this.state.watches.filter((watch) => watch.name !== name) });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleAdd} >
          <div className="total-container">
            <div className="city-name">
              <div className="label">Название</div>
              <input type="text" name="name"  className="input-name"/>
            </div>

            <div className="time-zone">
              <div className="time">Временная зона</div>
              <input type="text" name="offset"  className="input-time"/>
            </div>
            <button className="add">Добавить</button>
          </div>
        </form>

        <div className="watches">
        {
          this.state.watches.map(({ name, offset }) => <Watch name={name} offset={offset} onRemove={this.handleRemove} key={name} />)
        }
        </div>
      </>
    )
  }
}

export default WorldWatches;
