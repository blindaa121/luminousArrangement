import React from 'react';
import './InvestmentForm.css'

class InvestmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bonds: 0,
            largeCap: 0,
            midCap: 0,
            smallCap: 0,
            foreign: 0
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
        const {level, bonds, largeCap, midCap, smallCap, foreign} = this.props.selectedLevel;
        
        return (
            <div className="current-selection">
                <div id="current-percentage">
                    <h1>Level</h1>
                    <p>{level ? level : 'Select a Risk Level'}</p>
                </div>
                <div id="current-percentage">
                    <h1>Bonds</h1>
                    <p>{bonds ? bonds : 0}%</p>
                </div>
                <div id="current-percentage">
                    <h1>Large Cap</h1>
                    <p>{largeCap ? largeCap : 0}%</p>
                </div>
                <div id="current-percentage">
                    <h1>Mid Cap</h1>
                    <p>{midCap ? midCap : 0}%</p>
                </div>
                <div id="current-percentage">
                    <h1>Small Cap</h1>
                    <p>{smallCap ? smallCap : 0}%</p>
                </div>
                <div id="current-percentage">
                    <h1>Foreign</h1>
                    <p>{foreign ? foreign : 0}%</p>
                </div>
            </div>
        )
    }

    calculateDifferences() {

    }

    renderOptimizedAmount() {

    }

    renderDifferences() {

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