import React, { Component } from 'react';
import './App.css';
import Modal from './component/modal';

class App extends Component {
    state={
        show:false
    }
    showModel=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    closeModal=()=>{
        this.setState({
            show:false
        })
    }
    render() {
        return (
            <div className="App">
                <button onClick={this.showModel}>show Modal</button>
                <Modal show={this.state.show} close={this.closeModal}>
                    组件内容
                </Modal>
            </div>
        );
    }
}

export default App;
