class HotDog {
  constructor(
    public ketchup?: string,
    public mustard?: string,
    public mayo?: string,
    public chili?: string
  ) {}

  public addKetchup(): HotDog {
    this.ketchup = "ketchup";
    return this;
  }

  public addMustard(): HotDog {
    this.mustard = "mustard";
    return this;
  }

  public addMayo(): HotDog {
    this.mayo = "mayo";
    return this;
  }

  public addChili(): HotDog {
    this.chili = "chili";
    return this;
  }

  public toString(): string {
    return `HotDog(${this.ketchup}, ${this.mustard})`;
  }
}

const hotDog = new HotDog();

hotDog.addKetchup().addMustard().addMayo().addChili();

console.log(String(hotDog));
