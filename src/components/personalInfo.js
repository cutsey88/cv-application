import React from 'react';

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
        if (this.state.saved) {
            return (
                <div className="personalInfoContainer">
                    <div className="nameBox">
                        <p className="nameText">{this.state.name}</p>
                    </div>
                    <div className="infoBox">
                        <div className="subInfoBox">
                            <p className="emailText">{this.state.email}</p>
                        </div>
                        <div className="subInfoBox">
                            <p className="phoneText">{this.state.phone}</p>
                        </div>
                    </div>
                    <div className="buttonBox">
                        <button className="editButton" onClick={this.edit}>Edit</button>
                    </div>
                </div>
            );
        }
        return (
            <div className="personalInfoContainer">
                <div className="nameBox">
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                </div>
                <div className="infoBox">
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
                <div className="buttonBox">
                        <button className="saveButton" onClick={this.save}>Save</button>
                    </div>
            </div>
        );
    }
}

export default PersonalInfo;