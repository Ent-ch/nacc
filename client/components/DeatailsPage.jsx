import { Component } from 'inferno';

class DeatailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        imaggaTags: {}
      },
    }
  }

  componentDidMount() {
    const { id } = this.props;

    fetch(`/image/${id}`).then(resp => {
      return resp.status === 200 && resp.json();
    }).then(data => {
      this.setState({ data });
    });
  }

  render() {
    const { data: { url, created, imaggaTags: { results }}} = this.state;

    return <div className="detail-page">
    </div>
  }
}

export default DeatailsPage;
