import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'pending',
            petname: ''
        }
    }


    handleSubmit = (e) => {
        console.log('log', new Date().getUTCMilliseconds().toString() + new Date().getTime().toString())
        const { petname, status } = this.state;
        const id = new Date().getUTCMilliseconds().toString() + new Date().getTime().toString();
        if (petname !== '') {
            fetch(`https://petstore.swagger.io/v2/pet`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    category: {
                        id: id,
                        name: petname
                    },
                    name: petname,
                    photoUrls: [
                        ''
                    ],
                    tags: [
                        {
                            id: id,
                            name: ''
                        }
                    ],
                    status: status
                })
            }).then(response => response.json())
                .then(
                    data => {
                        console.log('data', data)
                        this.setState({
                            petsarray: data
                        })
                    }
                )
                .catch(error => this.setState({ error }));
        }
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Add Pets</h1>
                <div className="form">
                    <input type="text" name='petname' value={this.state.petname} onChange={(e) => this.handleChange(e)} placeholder="Enter pet Name" /><br /><br />
                    <select className='form-control status' name='status' value={this.state.status} onChange={(e) => this.handleChange(e)}>
                        <option value='pending'>Pending</option>
                        <option value='available'>Available</option>
                        <option value='sold'>Sold</option>
                    </select>
                    <button className='addbutton' onClick={(e) => this.handleSubmit(e)}>ADD PETS</button>
                </div>

            </div>
        );
    }


};


export default AddContact;
