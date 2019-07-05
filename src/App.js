import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios';

class App extends Component {
  state = {
    books: [],
    columns: [{
      dataField: 'id',
      text: 'Book ID',
      sort: true
    },
    {
      dataField: 'name',
      text: 'Book Name',
      sort: true,
	  filter: textFilter()
    }, {
      dataField: 'price',
      text: 'Book Price',
      sort: true
    }]
  }

  componentDidMount() {
    axios.get('http://localhost:4000/results')
      .then(response => {
        this.setState({
          books: response.data
        });
      });
  }
  render() {
    return (
      <div className="container" style={{ marginTop: 50 }}>
        <BootstrapTable 
        striped
        hover
        keyField='id' 
        data={ this.state.books } 
        columns={ this.state.columns } 
		filter={ filterFactory() }
		pagination={ paginationFactory()} />
      </div>
    );
  }
}
export default App;
