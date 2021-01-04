import React from 'react';
import NumberRow from './NumberRow';
import NumberDisplay from './NumberDisplay';

class NumberLister extends React.Component {
    state = {
        numbers: [],
        listedNumbers: []
    }

    onAddNumberToTableClick = e => {
        const number = Math.floor(Math.random() * 10000) + 1;
        this.setState({ numbers: [...this.state.numbers, { number, addButton: true }] });
    }

    onAddToListClick = (number, index) => {
        const newNumbers = [...this.state.numbers];
        newNumbers[index] = {...newNumbers[index], addButton: !newNumbers[index].addButton};
        this.setState({
            listedNumbers: [...this.state.listedNumbers, number],
            numbers: newNumbers
        });
    }

    onRemoveClick = (number, index) => {
        const newListedNumbers = [...this.state.listedNumbers];
        const indexInList = newListedNumbers.findIndex(n => n.number === number.number);
        newListedNumbers.splice(indexInList, 1);

        const newNumbers = [...this.state.numbers];
        newNumbers[index] = { ...newNumbers[index], addButton: !newNumbers[index].addButton };

        this.setState({
            listedNumbers: newListedNumbers,
            numbers: newNumbers
        });
    }

    render() {
        return (
            < div className="container" >
                <NumberDisplay onAddNumberToTableClick={this.onAddNumberToTableClick} />
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Add/Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.numbers.map((n, i) => <NumberRow key={i} number={n} onAddToListClick={() => this.onAddToListClick(n, i)}
                            onRemoveClick={() => this.onRemoveClick(n, i)} />)}
                    </tbody>
                </table>
                <ul>
                    {this.state.listedNumbers.map(n => <li>{n.number}</li>)}
                </ul>
            </div >);
    }
}

export default NumberLister;