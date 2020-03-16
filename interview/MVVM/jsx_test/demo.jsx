class Input extends Component {
    render() {
        return (
            <div>
                <input value={this.state.title} onChange={this.changeHandle.bind(this)}/>
                <button onClick={this.clickHandle.bind(this)}>submit</button>
            </div>
        )
    }
}