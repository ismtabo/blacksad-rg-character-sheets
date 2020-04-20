export interface DTOCharacteristic {
  value: number;
  features?: DTOFeature[];
}

export class DAOCharacteristic implements DTOCharacteristic {
  public value: number;
  public features: DAOFeature[];

  constructor({ value, features }: DTOCharacteristic) {
    this.value = value;
    this.features = (features || []).map((feat) => new DAOFeature(feat));
  }

  addFeature({ label, modifier }: DTOFeature) {
    if (!Array.isArray(this.features)) {
      this.features = [];
    }
    if (
      this.features.length < 3 &&
      this.features
        .map(({ modifier }) => modifier)
        .reduce((a, b) => a + b, modifier) <= this.value
    ) {
      this.features.push(new DAOFeature({ label, modifier }));
    }

    return this;
  }

  dropFeature(feature: number | DTOFeature) {
    let idx = -1;
    if (typeof feature === "number") {
      idx = feature;
    } else {
      idx = this.features.findIndex((feat) => feat === feature);
    }
    if (idx !== -1) {
      this.features.splice(idx, 1);
    }

    return this;
  }
}

export interface DTOFeature {
  label: string;
  modifier: number;
}

export class DAOFeature implements DTOFeature {
  public label: string;
  private _modifier: number = 1;
  constructor({ label, modifier }: DTOFeature) {
    this.label = label;
    this._modifier = modifier;
  }
  get modifier(): number {
    return this._modifier;
  }
  set modifier(value: number) {
    if (0 < value && value <= 3) {
      this._modifier = value;
    }
  }
}

export class DTOCharacteristics {
  strength: DTOCharacteristic;
  reflex: DTOCharacteristic;
  will: DTOCharacteristic;
  intellect: DTOCharacteristic;
}

export class DAOCharacteristics {
  public strength: DAOCharacteristic;
  public reflex: DAOCharacteristic;
  public will: DAOCharacteristic;
  public intellect: DAOCharacteristic;
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
  constructor({ strength, reflex, will, intellect }: DTOCharacteristics) {
    this.strength = new DAOCharacteristic(strength);
    this.reflex = new DAOCharacteristic(reflex);
    this.will = new DAOCharacteristic(will);
    this.intellect = new DAOCharacteristic(intellect);
  }
}
