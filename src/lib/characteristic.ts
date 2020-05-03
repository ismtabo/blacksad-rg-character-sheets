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

  get pointsLeft(): number {
    return this.value - this.features.reduce((acc: number, {modifier}: DAOFeature) => acc + modifier, 0);
  }
}

export interface DTOFeature {
  label: string;
  modifier: number;
}

export class DAOFeature implements DTOFeature {
  public label: string;
  public modifier: number = 1;
  constructor({ label, modifier }: DTOFeature) {
    this.label = label;
    this.modifier = modifier;
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
