class AirPlane {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  land() {}
}

class Runway {
  clear: boolean;

  constructor(clear: boolean) {
    this.clear = clear;
  }
}

class Tower {
  clearForLanding(runway: Runway, plane: AirPlane) {
    if (runway.clear) {
      console.log(`Plane ${plane.name} is clear for landing`);
    } else {
      console.log(`Plane ${plane.name} is waiting for the runway to be clear`);
    }
  }
}

const tower = new Tower();
const runway25A = new Runway(true);
const runway25B = new Runway(false);
const a = new AirPlane("a");
const b = new AirPlane("b");

tower.clearForLanding(runway25A, a);
tower.clearForLanding(runway25B, b);
