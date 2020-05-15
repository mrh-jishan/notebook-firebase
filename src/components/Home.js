import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'robin',
            password: '12'
        }
    }

    componentDidMount() {

    }

    handleChange = (evt) => {
        const value = evt.target.value;
        this.setState({ [evt.target.name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();


    }
    render() {
        return (
            <React.Fragment>
                <h1>This is home component</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Email *</label>
                        <input placeholder='Enter value' name='email' value={this.state.email} onChange={this.handleChange.bind(this)} />
                    </div>

                    <div>
                        <label>Password *</label>
                        <input placeholder='Enter value' name='password' value={this.state.password} onChange={this.handleChange.bind(this)} />
                    </div>

                    <div>
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default Home;