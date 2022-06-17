import React, { Fragment } from 'react';
import Card from '../components/card';
import { /*moviesJSON,*/ API_URL, API_KEY } from '../consts';
import { fragment } from 'react';


class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchTerm: '',
      error: '',
      loading: false
    };
  }

  async getSearchData(query) {
    if (!query) {
      return;
    }
    this.setState({ loading: true });
    const res = await fetch(`${API_URL + API_KEY}${query ? `&s=${query}` : ''}`);
    const resJSON = await res.json();
    if (!resJSON.Search) {
      this.setState({ data: [], error: 'There are not results.', loading: false });
      return;
    }
    console.log(resJSON.Search);
    this.setState({ data: resJSON.Search, searchTerm: '',error: '', loading: false});
  }

  //getSearchData = this.getSearchData.bind(this);

  async componentDidMount() { // Se ejecuta cuando el compponente se carga en pantalla
    /*const res = await fetch(`${API_URL + API_KEY}&s=joker`);
    const resJSON = await res.json();
    console.log(resJSON.Search);
    this.setState({data: resJSON.Search})*/
    this.getSearchData('');

  }

  /*componentDidMount() { // Se ejecuta cuando el compponente se carga en pantalla
    console.log(moviesJSON);
    this.setState({data: moviesJSON});
  }*/

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.searchTerm) {
      return this.setState({ error: 'Please, write a valid text.', loading: false });
    }
    this.getSearchData(this.state.searchTerm);
  }

  render() {
    
    if (this.state.loading) {
      return (
        <div>
          <p className="text-white">loading...</p>
          </div>
      );
    }

    return (
      <Fragment>
        <div className="row">
          <div className="col-md-4 offset-md-4 p-4">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input
                id="searchInput"
                className="form-control"
                type="text"
                placeholder="Search..."
                onChange={(e) => this.setState({searchTerm: e.target.value})}
                value={this.state.searchTerm}
                autoFocus
              />
            </form>
            <p className="text-white">{this.state.error ? this.state.error : ''}</p>
          </div>
        </div>
        <div className="row">
          {
            this.state.data.map((movie, index) => {
              //return <div><h1>{movie.Title}</h1></div>
              return <Card key={index} movie={movie} />
            })
          }
        </div>
      </Fragment>
    );
  }
}


export default List;
