import React from 'react';
import { loadTodo, initTodo } from '../redux/actions/todoAction';
import { connect } from 'react-redux';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'robin',
            age: '12',
            address: 'Dhaka, Bangladesh',
            contact: '0118783478347'
        }
    }

    componentDidMount() {
        this.props.loadTodo();
    }

    handleChange = (evt) => {
        const value = evt.target.value;
        this.setState({ [evt.target.name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.initTodo(this.state)

    }

    render() {
        return (
            <React.Fragment>
                <h1>This is todo component</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Name *</label>
                        <input placeholder='Enter value' name='name' value={this.state.name} onChange={this.handleChange.bind(this)} />
                    </div>

                    <div>
                        <label>age *</label>
                        <input placeholder='Enter value' name='age' value={this.state.age} onChange={this.handleChange.bind(this)} />
                    </div>

                    <div>
                        <label>address *</label>
                        <input placeholder='Enter value' name='address' value={this.state.address} onChange={this.handleChange.bind(this)} />
                    </div>

                    <div>
                        <label>connect *</label>
                        <input placeholder='Enter value' name='contact' value={this.state.contact} onChange={this.handleChange.bind(this)} />
                    </div>

                    <div>
                        <button type='submit'>Add Todo</button>
                    </div>
                </form>

                <h1>Todo list</h1>

                {/* {this.props.list.map(t=>{
                    return()
                })} */}

                {Object.keys(this.props.list).map(key => {
                    return (
                        <div key={key}>
                            <p>{this.props.list[key].name}</p>
                            <p>{this.props.list[key].age}</p>
                            <p>{this.props.list[key].address}</p>
                            <p>{this.props.list[key].contact}</p>
                            <hr/>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    loadTodo: () => dispatch(loadTodo()),
    initTodo: (todo) => dispatch(initTodo(todo))
});


const mapStateToProps = ({ todo }) => ({
    list: todo.list
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);