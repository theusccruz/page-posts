import './styles.css';
import { Component } from 'react';

import Posts from '../../components/Posts';
import loadPosts from '../../http/loadPosts';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

export default class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
    searchValue: '',
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  getMorePosts = () => {
    const { page, postsPerPage, allPosts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    this.setState(currentState => ({
      posts: [...currentState.posts, ...nextPosts],
      page: nextPage,
    }));
  }

  handleInputChange = (e) => {
    const { value } = e.target;

    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
      ? allPosts.filter(({ title }) => {
        return title.toLowerCase().includes(searchValue.toLocaleLowerCase());
      }) : posts;

    return (
      <section className='container'>

        <div className='search-container'>
          {!!searchValue && <h1>Search value: {searchValue}</h1>}

          <TextInput value={searchValue} onChange={this.handleInputChange} type="search" />
        </div>

        {!!filteredPosts.length ? (
          <Posts posts={filteredPosts} />
        ) : (
          <p>Nenhum post encontrado</p>
        )}

        <div className='button-container'>
          {!searchValue && (
            <Button disabled={noMorePosts} onClick={this.getMorePosts} >
              Get More Posts
            </Button>
          )}
        </div>
      </section>
    );
  }
}
