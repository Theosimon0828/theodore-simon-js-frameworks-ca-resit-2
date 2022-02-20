import React from 'react';
import axios from 'axios';

export default class Data extends React.Component {
  state = {
    data: [],
    searchTerm:""
  }

  componentDidMount() {
    axios.get(`http://universities.hipolabs.com/search?country=norway`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

  render() {
    return (
    <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="input-group rounded pb-3">
                    <input onChange={e => {this.setState({searchTerm:e.target.value})}} type="search" className="form-control rounded" placeholder="Type to filter..." aria-label="Search" aria-describedby="search-addon" />
                </div>
            </div>
        </div>
        {this.state.data.length === 0 ? <div class="spinner-border" role="status">
        <span class="sr-only"></span>
        </div> : ''}
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
            {
            this.state.data.filter((val) => {
                if (this.state.searchTerm === "") {
                    return val
                } else if(val.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                    return val
                }
                return false
            } )
                .map(data =>
                    <div className="col">
                        <div className="card p-5">
                            <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                <p className="card-text">{data.web_pages}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
      </div>
    )
  }
}


