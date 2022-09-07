import { Component } from "react";
import imgTwo from './things.png';


export class List extends Component {
state = {
    userInput: '',
    groceryList: []
}

onChangeEvent(e) {
this.setState({userInput: e});
}

addItem(input) {
    if (input === '') {
        alert("Please enter a thing to do");
    }
    else {
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput: ''});
    }
}

deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray});
}

crossedWord(e) {
const li = e.target;
li.classList.toggle('crossed');
}

onFormSubmit(e) {
e.preventDefault();
}

render() {
    return (
        <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="center">
            <input type="text" placeholder="Type a thing to do..."
            onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput}/>
            </div>
            <div className="center">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn btn-add">Add</button>
            </div>
            <div>
            <ul>
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={imgTwo} alt="Bags" width="40px"/>
                        {item}</li>
                ))}
            </ul>
            <div className="center">
            <button onClick={() => this.deleteItem()} className="btn btn-delete">Delete</button>
            </div>
            </div>
            </form>
        </div>
    )
}
}
