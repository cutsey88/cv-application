import React from 'react';
import '../styles/App.css';
import '../styles/personalInfo.css';

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            phone: '',
            saved: false,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.save = this.save.bind(this);
        this.edit = this.edit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    save(e) {
        e.preventDefault();
        this.setState({
            saved: true,
        })
    }

    edit(e) {
        e.preventDefault();
        this.setState({
            saved: false,
        })
    }
    
    render() {
        return (
            <div className="personalInfoContainer">
                <div className="nameBox">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                </div>
                <div className="infoBox">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={this.state.phone}
                        onChange={this.handleInputChange} />
                </div>
            </div>
        );
    }
}

export default PersonalInfo;