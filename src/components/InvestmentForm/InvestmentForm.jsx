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
                    <h1>Please enter amount for each category</h1>
                    <div className="investment-input">
                        <div className="investment-input-content">
                            <label className="investment-form-title">Bonds
                            <br/>
                                <input
                                    type="text"
                                    onChange={this.updateField('bonds')}
                                    value={this.state.bonds}
                                    placeholder="0"
                                />
                            </label>
                        </div>
                        <div className="investment-input-content">
                            <label className="investment-form-title">Large Cap
                            <br/>
                                <input
                                    type="text"
                                    onChange={this.updateField('largeCap')}
                                    value={this.state.largeCap}
                                    placeholder="0"
                                    
                                    />
                            </label>
                        </div>
                        <div className="investment-input-content">
                            <label className="investment-form-title">Mid Cap
                            <br/>
                                <input
                                    type="text"
                                    onChange={this.updateField('midCap')}
                                    value={this.state.midCap}
                                    placeholder="0"
                                    
                                    />
                            </label>
                        </div>
                        <div className="investment-input-content">
                            <label className="investment-form-title">Small Cap
                            <br/>
                                <input
                                    type="text"
                                    onChange={this.updateField('smallCap')}
                                    value={this.state.smallCap}
                                    placeholder="0"
                                    
                                    />
                            </label>
                        </div>
                        <div className="investment-input-content">
                            <label className="investment-form-title">Foreign
                            <br/>
                                <input
                                    type="text"
                                    onChange={this.updateField('foreign')}
                                    value={this.state.foreign}
                                    placeholder="0"
                          
                                    />
                            </label>
                        </div>
                    </div>
                    <input id="submit-btn" type="submit" value="SUBMIT"/>
                </form>
            </div>
        )
    }
}

export default InvestmentForm;