import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';



class AllContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'pending',
            petsarray: null
        }
    }

    componentWillMount() {
        this.getpets(this.state.status);
    }

    getpets = (status) => {
        // const { status } = this.state
        console.log('state', status)
        fetch(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`, {
            method: "GET",
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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        this.getpets(e.target.value);
    }

    render() {
        return (
            <div>
                <div>
                    <select className='form-control statusvalue' name='status' value={this.state.value} onChange={(e) => this.handleChange(e)}>
                        <option value='pending'>Pending</option>
                        <option value='available'>Available</option>
                        <option value='sold'>Sold</option>
                    </select>
                </div>
                <div className='clearfix' />
                {this.state.petsarray ?
                    <h1 className="post_heading">Pets List</h1>
                    : <h1 className="post_heading">Empty Pets List</h1>
                }
                {this.state.petsarray &&
                    this.state.petsarray.map((pet) =>
                        (
                            <div key={pet.id}>
                                <Contact pet={pet} />
                            </div>
                        ))}
            </div>
        );
    }
}
;


const mapStateToProps = (state) => {
    return {
        contacts: state
    };
};





export default connect(mapStateToProps)(AllContact);
