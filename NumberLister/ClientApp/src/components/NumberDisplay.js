import React from 'react';

class NumberDisplay extends React.Component {
    render() {
        return <div className="container">
            <button className="btn btn-success" onClick={this.props.onAddNumberToTableClick}>Add</button>
        </div>
    }
}

export default NumberDisplay;