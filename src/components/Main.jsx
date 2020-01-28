import React, {Component} from 'react';
import marked from 'marked';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      markdown: marked(event.target.value)
    })
  }

  render() {
    return (
      <main>
        <div>
          <textarea id="editor" 
          onChange={this.handleChange}></textarea>
        </div>
        <div>
          <text id="preview">{this.state.markdown}</text>
        </div>
      </main>
    )
  }
}

export default Main;