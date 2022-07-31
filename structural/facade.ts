class PlumbingSystem {
  public setPressure(pressure: number): void {}
  public turnOn(): void {}
  public turnOff(): void {}
}

class ElectricalSystem {
  public setVoltage(voltage: number): void {}
  public turnOn(): void {}
  public turnOff(): void {}
}

class House {
  public plumbingSystem = new PlumbingSystem();
  public electricalSystem = new ElectricalSystem();

  public turnOnSystems(): void {
    this.electricalSystem.setVoltage(120);
    this.electricalSystem.turnOn();

    this.plumbingSystem.setPressure(500);
    this.plumbingSystem.turnOn();
  }

  public shutDownSystems(): void {
    this.electricalSystem.turnOff();
    this.plumbingSystem.turnOff();
  }
}

const client = new House();

client.turnOnSystems();
client.shutDownSystems();
