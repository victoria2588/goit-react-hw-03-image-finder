import { getImageByQuery } from 'api';

import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    data: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getImages({ q: this.state.query, per_page: App.perPage });
    }
  }

  getImages = async (params = {}) => {
    try {
      this.setState({ isLoading: true });
      const data = await getImageByQuery(params);
      this.setState(prev => ({
        data: prev.data ? [...prev.data, ...data] : [...data],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleFormSubmit = newQuery => {
    this.setState({
      query: newQuery,
      data: [],
    });
    console.log(this.state.query);
  };

  render() {
    return (
      <div>
        <div>
          <SearchBar onSubmit={this.handleFormSubmit} />
        </div>
        <div>
          <ImageGallery data={this.state.data} onOpenModal={this.onOpenModal} />
        </div>
        <div>
          <button>Load more</button>
        </div>
      </div>
    );
  }
}
