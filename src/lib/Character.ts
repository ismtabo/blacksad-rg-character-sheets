import { HealthType } from "./HealthType";
import { DTOCharacteristics, DAOCharacteristics } from "./Characteristic";

interface DTOCharacter {
  name: string;
  characteristics: DTOCharacteristics;
  milestones: string;
  complication: string;
  belongings: string;
  protection?: number;
  stamina?: number;
  conscience?: number;
  superation?: number;
  instinct?: number;
  health: HealthType;
  temporalAspects: string;
  background: string;
}

export class DAOCharacter implements DTOCharacter {
  name: string;
  characteristics: DAOCharacteristics;
  milestones: string;
  complication: string;
  belongings: string;
  get initiative(): number {
    return this.characteristics.initiative;
  }
  get defense(): number {
    return this.characteristics.defense;
  }
  get endurance(): number {
    return this.characteristics.endurance;
  }
  get stamina(): number {
    return this._stamina;
  }
  set stamina(value: number) {
    this._stamina = Math.min(value, this.endurance * 3);
  }
  private _stamina: number;
  protection: number;
  get conscience(): number {
    return this._conscience;
  }
  set conscience(value: number) {
    this._conscience = Math.min(value, this.characteristics.conscience);
  }
  private _conscience: number;
  get superation(): number {
    return this._superation;
  }
  set superation(value: number) {
    this._superation = Math.min(value, this.conscience);
  }
  private _superation: number;
  instinct: number;
  health: HealthType;
  temporalAspects: string;
  background: string;

  constructor(obj: DTOCharacter) {
    this.name = obj.name;
    this.characteristics = new DAOCharacteristics(obj.characteristics);
    this.milestones = obj.milestones;
    this.complication = obj.complication;
    this.belongings = obj.belongings;
    this.protection = obj.protection || 0;
    this.stamina = Math.min(
      obj.stamina || Infinity,
      this.characteristics.endurance * 3
    );
    this.conscience = obj.conscience || this.characteristics.conscience;
    this.superation = obj.superation || this.characteristics.conscience;
    this.instinct = obj.instinct || 2;
    this.health = obj.health;
    this.temporalAspects = obj.temporalAspects;
    this.background = obj.background;
  }
}
