class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // change code below this line
      this.toggleVisibility = this.toggleVisibility.bind(this);
      // change code above this line
    }
    // change code below this line
    toggleVisibility() {
      this.setState(state => {
        if (state.visibility === true) {
           return { visibility: false };
         } else {
           return { visibility: true };
        }
      });
    }
    // change code above this line
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  };

  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // Cambia el código debajo de esta línea
     this.toggleVisibility = this.toggleVisibility.bind(this)
      // Cambia el código encima de esta línea
    }
    // Cambia el código debajo de esta línea
    toggleVisibility() {
      this.setState(state=>{
        if(state.visibility === true){
          return {visibility : false}
        } else {
          return {visibility : true}
        }
      })
    }
    // Cambia el código encima de esta línea
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  }