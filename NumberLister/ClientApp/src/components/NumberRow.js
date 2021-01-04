import React from 'react';

class NumberRow extends React.Component {

    render() {
        const { number, onAddToListClick, onRemoveClick } = this.props;

        return <tr>
                <td>{number.number}</td>
                <td>{number.addButton ? <button className="btn btn-success" onClick={onAddToListClick}>Add</button> :
                    <button className="btn btn-danger" onClick={onRemoveClick}>Remove</button>}</td>
            </tr>

    }
}

export default NumberRow;