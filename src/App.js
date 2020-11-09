import './App.css';
import Task from './ComponentA';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          arrplus: '',
          arr1:'',
          arr2:'',
        };
    }
    onChangeArr1 = (e) => {
      const {value}= e.target;
       this.setState({
         arr1:value
       }) 
    }
    onChangeArr2 = (e) => {
      const {value}= e.target;
       this.setState({
         arr2:value
       }) 
    }
    render() {
        const { arr2, arr1}= this.state;
        return (
            <div>
                <Task onHandleChange={
                    this.onChangeArr1
                }></Task>
                <Task onHandleChange={
                    this.onChangeArr2
                }></Task>
                <div> Nối 2 chuỗi là  </div>
                <div> {arr1}{arr2} </div>
            </div>
        );
    }
} App.propTypes = {};

export default App;
