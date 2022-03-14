import React from 'react';

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.formatName = this.formatName.bind(this);
    };

    formatName(name) {
        name = name.split('_');
        for (let i = 0; i < name.length; i++) {
            name[i] = name[i][0].toUpperCase() + name[i].substring(1);
        };
        return name.join(' ');
    };

    render() {
        return (
            <p>{this.formatName(this.props.name)}: {this.props.value}</p>
        );
    };
};

export default Data;