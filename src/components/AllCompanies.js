import React, { Component } from 'react';
import axios from 'axios'; 
import '../styles/AllCompanies.css'; 


class AllCompanies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: null
    };
    this.inputCompany = React.createRef();

    this.search = this.search.bind(this);
  }
  search(e) {
    e.preventDefault();

    const symbol = this.inputCompany.current.value;
    axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
      .then(response => {
        this.setState({
          company: response.data
        })
      })
  }
  render () {
    return (
      <form onSubmit={this.search}>
        <h1 className="all-companies-title"> Search by Ticker Symbol </h1>
        <div className="field has-addons companies-searchbox">
          <div className="control">
            <input
              className="input"
              placeholder="Ticker Symbol eg. AAPL"
              ref={this.inputCompany}
              type="text"
            />
          </div>
          <div className="control">
            <button type="submit" className="button is-link">Search</button>
          </div>
        </div>
        {
          this.state.company &&
            <div id='searchedCompany'>
              <p><b>Company:</b> { this.state.company.companyName }</p>
              <p><b>Symbol:</b> { this.state.company.symbol }</p>
              <p><b>Price:</b> { this.state.company.latestPrice } USD</p>
              <p><b>Change from Previous Close:</b> { this.state.company.change } USD ({ (100 * this.state.company.changePercent).toFixed(2) }%)</p>
            </div>
        }
      </form>
    )
  }
}

export default AllCompanies;