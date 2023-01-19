class MyComponent extends Ract.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'Francisco'
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            name: 'Joaquin'
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Cambiar Estado</button>
                <p>{this.state.name}</p>
            </div>
        )
    }
}