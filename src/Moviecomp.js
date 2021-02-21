import React from 'react';
import Modal from 'react-awesome-modal';

export default class Comp1 extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            year: '',
            movielist: {},
            totalpages: 1,
            currentpage: 1,
            moviedetails: {},
            visible : false,
            currenttab: 'grid'
        }
    }

    handleClick(page, event) {
        let url = `http://www.omdbapi.com/?s=${this.state.title}&y=${this.state.year}&apikey=e67f56be&page=${page}`;
        fetch(url)
        .then(res => res.json())
        .then((rows) => {
            console.log(rows);
            this.setState({
                movielist: rows,
                currentpage: page
            });
            if (rows.totalResults) {
                var totalpages = Math.ceil(rows.totalResults / 10);
                this.setState({totalpages: totalpages});
            }
        });
    }

    handleChange(type, event) {
        if (type == 'title') {
            this.setState({title: event.target.value});
        } else if (type == 'year') {
            this.setState({year: event.target.value});
        }
    }

    clickPage(i, event) {
        this.handleClick(i);
        event.preventDefault();
    }

    viewDetails(i, event) {
        this.setState({moviedetails: this.state.movielist.Search[i]});
        this.setState({
            visible : true
        });
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    tabChange(type, event) {
        this.setState({currenttab: type});
    }

    render() {
        var year_options = [];
        for(let i=2000; i<2016; i++) {
            year_options.push(<option key={i} value={i}>{i}</option>);
        }
        return(
            <>
                <h4>MOVIE APPLICATION</h4>
                <div className="m-lg">
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Enter Movie Title</label>
                        <div className="col-sm-10">
                        <input type="text" placeholder="Select title" className="form-control" onKeyUp={this.handleChange.bind(this, 'title')} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Enter Movie Year</label>
                        <div className="col-sm-10">
                            <select className="form-select" onChange={this.handleChange.bind(this, 'year')}>
                                <option value="">Select Year</option>
                                {year_options}
                            </select>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <button className="btn btn-primary" onClick={this.handleClick.bind(this, 1)}>Submit</button>
                        </div>
                    </div>
                </div>

                {this.state.movielist.Search ? 
                    <ul className="nav nav-tabs mb-5">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.tabChange.bind(this, 'grid')}>Grid View</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.tabChange.bind(this, 'box')}>Box View</a>
                        </li>
                    </ul>: ''}

                {this.state.currenttab == 'box' ? 
                    <Boxview movielist={this.state.movielist} totalpages={this.state.totalpages} clickPage={this.clickPage.bind(this)} currentpage={this.state.currentpage} viewDetails={this.viewDetails.bind(this)} />
                    :
                    <div>
                        <Gridview movielist={this.state.movielist} totalpages={this.state.totalpages} clickPage={this.clickPage.bind(this)} currentpage={this.state.currentpage} viewDetails={this.viewDetails.bind(this)} />
                        <Viewinfo moviedetails={this.state.moviedetails} visible={this.state.visible} closeModal={this.closeModal.bind(this)}/>
                    </div>
                }
            </>
        );
    }
}

class Gridview extends React.Component {
    render() {
        var arr = [];
        var pagination_arr = [];
        if (this.props.movielist.Search) {
            let index_start = ((this.props.currentpage - 1) * 10 ) + 1;
            this.props.movielist.Search.map((item, index) => {
                arr.push(<tr key={index}><td>{index_start}</td><td>{item.Title}</td><td><button className="btn btn-info" onClick={this.props.viewDetails.bind(this, index)}>View Details</button></td></tr>);
                index_start++;
            });
            if (this.props.totalpages > 1) {
                for (let i=1; i<=this.props.totalpages; i++) {
                    pagination_arr.push(<li key={i} className="page-item" onClick={this.props.clickPage.bind(this, i)}><a className="page-link" href="#">{i}</a></li>);
                }
            }
        }
        return(
            <div>   
                {this.props.movielist.Response == 'False' ? <div className="alert alert-danger text-left">{this.props.movielist.Error}</div> : ''}
                {this.props.movielist.Response == 'True' ? 
                    <div>
                        
                        <div className="float-left">Total Records: {this.props.movielist.totalResults}</div>
                        <div className="float-right">Page {this.props.currentpage} of {this.props.totalpages}</div>
                        
                        <table className="table table-hover table-striped">
                            <thead className="table-light">
                                <tr>
                                    <td>Sr.</td>
                                    <td className="col-md-9">Name</td>
                                    <td className="col-md-3">Details</td>
                                </tr>
                            </thead>
                            <tbody>
                                {arr}
                            </tbody>
                        </table>

                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                {pagination_arr}
                            </ul>
                        </nav>
                    </div> : ''}
            </div>
        );  
    }
}

class Viewinfo extends React.Component {
    render() {
        var detail_arr = [];
        for (var i in this.props.moviedetails) {
            let value;
            if (i == 'Poster') {
                value=this.props.moviedetails[i];
            } else {
                value=this.props.moviedetails[i];
            }
            detail_arr.push(<div className="breakall" key={i}><b>{i}:</b> {value}</div>);
        }
        
        return(
            <>
                <Modal 
                    visible={this.props.visible}
                    width="600"
                    effect="fadeInLeft"
                    scrollable="true"
                >
                    <div className="modal_cls">
                        <h4>Details</h4>
                        {detail_arr}
                        <button className="btn btn-primary" onClick={this.props.closeModal}>Cancel</button>
                    </div>
                </Modal>
            </>
        );
    }
}

class Boxview extends React.Component {
    render() {
        var arr = [];
        if (this.props.movielist.Search) {
            this.props.movielist.Search.map((item, index) => {
                var poster_img;
                if (item.Poster == 'N/A') {
                    poster_img = 'https://st4.depositphotos.com/7819052/24490/v/600/depositphotos_244908936-stock-illustration-grunge-black-available-word-rubber.jpg';
                } else {
                    poster_img = item.Poster;
                }
                arr.push(
                    <div className="card bg_grey" key={index}>
                        <img src={poster_img} className="card-img-top" alt="test" height="300" />
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg_grey">Title: {item.Title}</li>
                            <li className="list-group-item bg_grey">Year: {item.Year}</li>
                            <li className="list-group-item bg_grey">imdbID: {item.imdbID}</li>
                            <li className="list-group-item bg_grey">Type: {item.Type}</li>
                        </ul>
                    </div>
                );
            });

            arr.push(
                <div className="clearboth"></div>
            );
        }
        
        return(
            <div>   
                {this.props.movielist.Response == 'False' ? <div className="alert alert-danger text-left">{this.props.movielist.Error}</div> : ''}
                {this.props.movielist.Response == 'True' ? 
                    <div>
                        {arr}
                    </div> : ''}
            </div>
        );  
    }
}