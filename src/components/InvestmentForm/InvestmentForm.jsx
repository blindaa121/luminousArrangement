import React from 'react';

class InvestmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bonds: '',
            largeCap: '',
            midCap: '',
            smallCap: '',
            foreign: ''
        }
    }

    render() {
        return (
            <div>
                <h1>How would you like to allocate your money?</h1>

            </div>
        )
    }
}

export default InvestmentForm;