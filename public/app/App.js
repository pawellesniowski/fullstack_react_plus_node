import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render(){
        return (
            <div>This is a React firt component, by pl.</div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));