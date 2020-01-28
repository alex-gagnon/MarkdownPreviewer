import React, {Component} from 'react';
import marked from 'marked';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props)
    marked.setOptions({ breaks: true })
    let defaultMarked = marked(defaultText)
    
    this.state = {
      defaultText: defaultText,
      markdown: defaultMarked
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
        <div className="md-section">
          <textarea id="editor" 
          onChange={this.handleChange}>{this.state.defaultText}</textarea>
        </div>
        <div className="md-section">
          <text id="preview" dangerouslySetInnerHTML={this.createMarkup()}>
          </text>
        </div>
      </main>
    )
  }
}


// a header (H1 size), a sub header (H2 size), a link, inline code, a
// code block, a list item, a blockquote, an image, and bolded text.
const defaultText = `# Learn Flask
## a web application framework

[Flask](https://flask.palletsprojects.com/en/1.1.x/)
- Great for creating small scale applications
- Amazing for creating quick and useable APIs
- Perfect for those interested in Python web development!
\`pip install flask\`

        from flask import Flask
        app = Flask(__name__)

        @app.route('/')
        def hello_world():
            return 'Hello, World!'

> Wow, Flask was so fun to learn!
**Alex**

![Flask](http://flask.palletsprojects.com/en/1.1.x/_images/flask-logo.png)
`

export default Main;