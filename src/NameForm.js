import React from "react";

class NameForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleNameSubmit}>
                <label htmlFor="name">
                    {this.props.name && 'Change '}Name:
                    <input type='text'
                            name='name'
                            value={this.props.data}
                            onChange={this.props.handleNameChange}
                            placeholder='Name' />
                </label>
                <button type='submit'>Submit</button>
            </form>
        )
    };
};

export default NameForm;