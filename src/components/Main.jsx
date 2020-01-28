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

  createMarkup() {
    marked.setOptions({ breaks: true })
    return {__html: this.state.markdown}
  }

  render() {
    return (
      <main>
        <div>
          <textarea id="editor" 
          onChange={this.handleChange}></textarea>
        </div>
        <div>
          <div id="preview">
            <text dangerouslySetInnerHTML={this.createMarkup()}></text>
          </div>
        </div>
      </main>
    )
  }
}

export default Main;