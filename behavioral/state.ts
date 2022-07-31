interface State {
  think(): string;
}

class HappyState implements State {
  public think() {
    return "I am happy";
  }
}

class SadState implements State {
  public think() {
    return "I am sad";
  }
}

class Human {
  private state: State;

  constructor() {
    this.state = new HappyState();
  }

  public think() {
    return this.state.think();
  }

  public changeState(state: State) {
    this.state = state;
  }
}

const phoebe = new Human();
phoebe.think(); // I am happy
phoebe.changeState(new SadState());
phoebe.think(); // I am sad
