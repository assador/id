import LoginForm from './LoginForm.jsx';
import LoginWait from './LoginWait.jsx';
import React from 'react';

class LoginApp extends React.Component {
	constructor(props) {
		super(props);
    this.state={
      session:localStorage.getItem('session'),
      mode:'LoginWait',
      destURL:'agate.php',
    }
    this.onReceiveData = this.onReceiveData.bind(this);
	}

  onReceiveData(data){
    if(data.rootmode){
      this.setState({'mode':data.rootmode});
    };
    if(data.session){
      this.setState({'session':data.session});
      localStorage.setItem('session',data.session);
    };
  }

  componentDidMount() {
    var _this=this;
    $.ajax({
          type:"POST",
          url:this.state.destURL,
          data:{
            "cls":"home",
            "ses":this.state.session
          },
          success:this.onReceiveData
        });
  }

  componentWillUnmount() {

  }

	render() {
		switch(this.state.mode){
				case 'LoginForm':
					return (
						<LoginForm />
					);
				case 'LoginWait':
					return (
		      	<LoginWait />
					);
				default:
					return (
						<h1>Panic! Strange mode {this.state.mode}</h1>
					);
		}

		const CustomTag = this.state.mode;
	}
}

export default LoginApp;
