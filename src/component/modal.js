import React from 'react';
import ReactDOM from 'react-dom';

const wrapper={
	position:'fixed',
	left:0,
	top:0,
	right:0,
	bottom:0,
	background:'rgba(0,0,0,0.3)'
}
const modal={
	position:'absolute',
	left:0,
	top:0,
	right:0,
	bottom:0,
	overflow:'auto',
	margin:'30px 0px'
}

const content={
	width:800,
	position:'absolute',
	left:'50%',
	top:'10%',
	border:'1px solid #ccc',
	borderRadius:5,
	transform:'translateX(-50%)',
	background:'#fff',
	padding:50,
	boxSizing:'border-box'
}
const close={
	position:'absolute',
	right:0,
	top:-30,
	cursor:'pointer',
	backgroundColor:'#f5f5f5',
	border:'none'
}
const modalRoot=document.getElementById('modalRoot');

 class Modal extends React.Component{
	constructor(props){
		super(props);
		this.el=document.createElement('div');
	}
	keyUp=(e)=>{
		let code=e.keyCode || e.which;
		if(code === 27 && this.props.show){
			this.props.close();
		}
	}
	componentDidMount(){
		document.addEventListener("keyup",this.keyUp);
		modalRoot.appendChild(this.el);
	}
	componentWillUnmount(){
		console.log('组件即将销毁')
		document.removeEventListener("keyup",this.keyUp);
	}
	render(){
		const modalUi=(
			<div style={wrapper}>
				<div style={modal}>
					<div style={content}>
						{this.props.children}
						<button onClick={this.props.close} style={close}>x</button>
					</div>
				</div>
			</div>
		);
		if(!this.props.show){
			return null;
		}
		return ReactDOM.createPortal(modalUi, this.el);
		
	}
}



export default Modal;