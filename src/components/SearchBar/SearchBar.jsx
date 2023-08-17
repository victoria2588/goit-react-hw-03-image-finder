import { Component } from 'react';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      return alert('Введите, что хотите найти из изображений!');
    }
    //2.И передаю в метод значение из этого файла state=searchName -> прокидываем пропс с App 'propName' и передаем ему значение с Searchbar -> searchImgName
    this.props.onSubmit(this.state.query);
    //5.Идет очистка формы поля input после ее сабмита
    this.setState({ query: '' });
  };

  render() {
    return (
      <>
        <header>
          {/* // 1.при событии Submit формы -> вызываю метод из App -> handleSubmit -> this.props.propName */}
          <form onSubmit={this.handleSubmit}>
            <button type="submit">Submit</button>
            <input
              type="text"
              name="query"
              value={this.state.query}
              onChange={this.handleQueryChange}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
