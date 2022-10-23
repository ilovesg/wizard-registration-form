export class LocalStorage<Store extends Record<string, unknown>> {
  private store: Store | null = null;

  constructor(private id: string) {
    const rawData = localStorage.getItem(this.id);
    if (rawData) {
      try {
        this.store = JSON.parse(rawData);
      } catch (error) {
        console.error(error);
      }
    }
  }

  private saveToStore(): void {
    if (this.store) {
      localStorage.setItem(this.id, JSON.stringify(this.store));
    }
  }

  set<T extends keyof Store, K extends Store[T]>(key: T, value: K): void {
    if (this.store) {
      this.store[key] = value;
    } else {
      this.store = Object.create({ [key]: value });
    }
    this.saveToStore();
  }

  get<T extends keyof Store>(key: T): null | Store[T] {
    if (!this.store) {
      return null;
    }

    return this.store[key];
  }
}
