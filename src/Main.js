import 'inferno';
import Component from 'inferno-component';

import AddForm from './AddForm';
import Table from './Table';

export default class MainContainer extends Component {

  render() {
    return (
    <main className="b4admin-content">
    <div className="b4admin-content-body">
        <div className="container-fluid">

            <AddForm />

            <Table />

            <div className="row" style="margin-bottom: 1em;">
              <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                      <a className="pull-right" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="true" aria-controls="multiCollapseExample1 multiCollapseExample2">
                           <i className="fa fa-chevron-right" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                          <div className="card-body">
                                sadasdas
                          </div>
                   </div>



                </div>
              </div>
            </div>
        </div>
    </div>
    </main>
    );
  }
}
