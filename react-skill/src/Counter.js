import React from 'react'
import PropTypes from 'prop-types'


const style = {
    color: 'red',
    fontSize: '40px'

}



class Counter extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: props.initialValue
        }


        this.handleIncrementClick = () => this.setState({
            value: this.state.value + props.delta

        })


        this.handleDecrementClick = () => this.setState({
            // value: this.state.initialValue - props.delta
            value: Math.max(this.state.value - props.delta, props.initialValue)

        })

        this.handleResetClick = () => this.setState({
            value: props.initialValue
        })
    }



render() {
        return(

            <div>
                <h4>Counter {this.props.initialValue} / {this.props.delta}</h4>
                <p style={style}>{this.state.value}</p>

                <button onClick={this.handleIncrementClick}>Increase</button>
                <button onClick={this.handleDecrementClick}>Decrease</button>
                <button onClick={this.handleResetClick}>Reset</button>
            </div>

        )
}
    




}



export default Counter