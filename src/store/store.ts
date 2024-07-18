import { makeAutoObservable, runInAction } from 'mobx';
import { Storage, Item, Repositories } from '../types/types';

class Store implements Storage {
  repositories: Repositories | null = null;
  favoriteRepositories: Item[] = [];
  state = '';
  error = '';

  constructor() {
    makeAutoObservable(this);
  }

  async fetchRepositories(value: string, signal: AbortSignal) {
    this.repositories = null;
    this.state = 'pending';
    this.error = '';

    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=${value}`, { signal });
      const data = await response.json();

      runInAction(() => {
        if (response.status === 403) {
          this.state = 'error';
          this.error = data.message;
        } else {
          this.repositories = data;
          this.state = 'fulfilled';
        }
      });
    } catch (e) {
      runInAction(() => {
        this.state = 'error';
        if (e instanceof Error) {
          if (e.name === 'AbortError') {
            console.log('Запрос отменен');
          } else {
            this.error = e.message;
          }
        } else {
          this.error = 'Unknown error';
        }
      });
    }
  }

  addFavoriteRepo(item: Item) {
    if (!this.favoriteRepositories.some((el) => el.id === item.id)) {
      this.favoriteRepositories.push(item);
    }
  }

  getRepository(name: string) {
    if (this.repositories) {
      return this.repositories.items.find((item) => item.name === name);
    }
  }
}

const store = new Store();

export default store;
