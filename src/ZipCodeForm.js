import React from 'react';

class ZipCodeForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleZipCodeSubmit}>
                <label htmlFor='zipCode'>
                    {this.props.zipCode ? 'Change ' : 'Enter '}Zip Code:
                    <input type='text'
                            name='zipCode'
                            placeholder='Zip Code'
                            value={this.props.data}
                            onChange={this.props.handleZipCodeChange} />
                </label>
                <button type='submit'>Submit</button>
            </form>
        );
    };
};

export default ZipCodeForm;