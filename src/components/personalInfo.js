import React from 'react';

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            phone: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <div className="nameDiv">
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                </div>
                <div className="infoDiv">
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                    <input
                        type="tel"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleInputChange} />
                </div>
            </div>
        );
    }
}

export default PersonalInfo;