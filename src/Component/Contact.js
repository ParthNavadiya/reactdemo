import React, { Component } from 'react';
import { connect } from 'react-redux';


class Contact extends Component {

   render() {
      return (
         <div className="post">
            <h2 className="post_title">{'Name : '}{this.props.pet.name}</h2>
            <p className="post_message">{'id : '}{this.props.pet.id}</p>
         </div>
      );
   }



};


export default connect()(Contact);
