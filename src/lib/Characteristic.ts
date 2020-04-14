export interface ICharacteristic {
  value: number;
  features?: IFeature[];
}

export class Characteristic {
  constructor(public value: number, public features?: Feature[]) {}

  addFeature(feature: Feature) {
    if (!Array.isArray(this.features)) {
      this.features = [];
    }
    if (
      this.features.length < 3 &&
      this.features
        .map(({ modifier }) => modifier)
        .reduce((a, b) => a + b, 0) <= this.value
    ) {
    }
    this.features.push(feature);
  }

  dropFeature(feature: number | Feature) {
    let idx = -1;
    if (typeof feature === "number") {
      idx = feature;
    } else {
      idx = this.features.findIndex((feat) => feat === feature);
    }
    if (idx !== -1) {
      this.features.splice(idx, 1);
    }
  }
}

export interface IFeature {
  label: string;
  modifier: string;
}

export class Feature {
  constructor(public label: string, private _modifier: number = 1) {}
  get modifier(): number {
    return this._modifier;
  }
  set modifier(value: number) {
    if (0 < value && value <= 3) {
      this._modifier = value;
    }
  }
}

export class ICharacteristics {
  strength: ICharacteristic;
  reflex: ICharacteristic;
  will: ICharacteristic;
  intellect: ICharacteristic;
}

export class Characteristics {
  public strength: Characteristic;
  public reflex: Characteristic;
  public will: Characteristic;
  public intellect: Characteristic;
  get initiative(): number {
    return this.reflex.value + this.intellect.value;
  }
  get defense(): number {
    return Math.ceil(this.reflex.value / 2);
  }
  get endurance(): number {
    return this.strength.value + this.will.value;
  }
  get conscience(): number {
    return this.will.value + this.intellect.value;
  }
}
