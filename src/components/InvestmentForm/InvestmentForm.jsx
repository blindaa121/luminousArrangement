import React from 'react';
import './InvestmentForm.css'

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

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.props)
    }

    updateField(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderSelectedLevel() {
        if (!this.props.selectedLevel) return null;
        const {bonds, largeCap, midCap, smallCap, foreign} = this.props.selectedLevel;
        return (
            <div>
                {bonds}{largeCap}{midCap}{smallCap}{foreign}
            </div>
        )
    }

    render() {
        return (
            <div className="investment-form-container">
                <h1>How would you like to allocate your money?</h1>
                {this.renderSelectedLevel()}
                <form onSubmit={this.handleSubmit} className="investment-form">
                    <label className="investment-form-title">Bonds
                        <input
                            type="text"
                            onChange={this.updateField('bonds')}
                            value={this.state.bonds}
                        />
                    </label>
                    <label className="investment-form-title">Large Cap
                        <input
                            type="text"
                            onChange={this.updateField('largeCap')}
                            value={this.state.largeCap}/>
                    </label>
                    <label className="investment-form-title">Mid Cap
                        <input
                            type="text"
                            onChange={this.updateField('midCap')}
                            value={this.state.midCap}/>
                    </label>
                    <label className="investment-form-title">Small Cap
                        <input
                            type="text"
                            onChange={this.updateField('smallCap')}
                            value={this.state.smallCap}/>
                    </label>
                    <label className="investment-form-title">Foreign
                        <input
                            type="text"
                            onChange={this.updateField('foreign')}
                            value={this.state.foreign}/>
                    </label>
                    <input type="submit" value="SUBMIT"/>
                </form>
            </div>
        )
    }
}

export default InvestmentForm;