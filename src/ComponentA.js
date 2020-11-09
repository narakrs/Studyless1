import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentA extends Component {
    render() {
        const {onHandleChange}= this.props;
        return (
            <div style={{marginBottom:20}}>
                <input onChange={(e)=>onHandleChange(e)}></input>
            </div>
        );
    }
}

ComponentA.propTypes = {

};

export default ComponentA;