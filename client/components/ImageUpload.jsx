import { Component } from 'inferno';
import { Link } from 'inferno-router';

class ImageUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: null,
      selectedFile: null,
      errorGps: false,
    };

    this.handleSelectFile = this.handleSelectFile.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }
  
  handleButton() {
    this.attachment.click();
  }

  handleSelectFile() {
    const reader = new FileReader();

    reader.onload = (e) => {
      const url = e.target.result;
    
      this.setState({url, selectedFile: this.attachment.files[0]});
    };
    reader.readAsDataURL(this.attachment.files[0]);
  }

  handleSend() {
    let ln, lt;
    const self = this;
    const data = new FormData()

      
    self.props.onSend(self.state.url);
    data.append('foto', self.state.selectedFile);

    fetch('/upload', {
      method: 'POST',
      body: data
    }).then(resp => resp.json()).then(data => {
      console.log(data);
    });

  }

  render() {
    const { url, errorGps } = this.state;
    const attachmentEl = <input
      type="file"
      ref={attachment => {this.attachment = attachment;}}
      style="display: none;"
      onchange={this.handleSelectFile}
      accept=".jpg,.jpeg"
    />;


    if (!url) {
      return <div>
          {attachmentEl}
          <button class="btn--float btn--red btn-big" onClick={this.handleButton}>Take img</button>
          <Link to="/latest"><button class="btn--red btn-lates">Latest</button></Link>
        </div>;
    }

    return <div>
      {attachmentEl}
      <img src={url} alt="fire image" className="user-img" ref={image => {this.image = image;}} />
      <button class="btn--red btn-send" onClick={this.handleSend}>Send</button>
    </div>
  }
}

export default ImageUpload;
