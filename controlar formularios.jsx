
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.setState({
            submit: this.state.input
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange}></input>
                    <button type='submit'>Submit!</button>
                </form>
                <h1>El texto ingresado fue {this.state.submit}</h1>
            </div>
        )
    }

}