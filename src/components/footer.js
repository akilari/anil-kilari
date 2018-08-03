import React,{Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          term: '',
          email:'',
          textArea:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div>
            <h3 className='text-center'>Message Anil</h3>
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label>Name:</label>
                    <input type="text" className="form-control" name='term' value={this.state.term} onChange={this.handleChange} />
                </div>
                <div className='form-group'>
                    <label>Email:</label>
                    <input type="email" className="form-control" name='email'value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className='form-group'>
                    <label>Message:</label>
                    <textarea rows="4" cols="50" className="form-control" name='textArea'value={this.state.textArea} onChange={this.handleChange} />
                </div>
                <input type="submit" className='btn btn-primary btn-lg' value="Submit" />
            </form>
            </div>
        );
    }
}
export default Footer;
