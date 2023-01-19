class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
        this.resetear = this.resetear.bind(this)
    }
    incrementar(){
        this.setState(state=>{
            return state.count += 1
        })
    }
    decrementar(){
        this.setState(state=>{
            return state.count -= 1
        })
    }
    resetear(){
        this.setState(state=>{
            return state.count = 0
        })
    }
    render(){
        return (
            <div>
                <button className='inc-button' onClick={incrementar}>Incrementar</button>
                <button className='dec-button' onClick={decrementar}>Decrementar</button>
                <button className='res-button' onClick={resetear}>Resetear</button>
                <h1>Cuenta total: {this.state.count}</h1>
            </div>
        )
    }
}