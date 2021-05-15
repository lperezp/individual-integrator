export interface ChemicalElementInterface {
  id: number;
  atomicMass: number;
  atomicNumber: number;
  atomicRadius: number;
  block: Block;
  bondingType: BondingType;
  crystalStructure: CrystalStructure;
  serieChemical: SerieChemical;
  standardState: StandardState;
  boilingPoint: number;
  cpkHexColor: string;
  density: number;
  electronAffinity: number;
  electronegativity: number;
  electronicConfiguration: string;
  facts: string;
  group: number;
  ionRadius: string;
  ionizationEnergy: number;
  isotopes: string;
  magneticOrdering: string;
  meltingPoint: number;
  molarHeatCapacity: number;
  name: string;
  oxidationStates: string;
  period: number;
  speedOfSound: number;
  symbol: string;
  vanDelWaalsRadius: number;
  yearDiscovered: number;
  minerals: string;
  history: string;
  order: number;
}

export interface Block {
  id: number;
  value: string;
  description: string;
}
export interface BondingType {
  id: number;
  name: string;
}
export interface CrystalStructure {
  id: number;
  name: string;
}
export interface SerieChemical {
  id: number;
  name: string;
}
export interface StandardState {
  id: number;
  name: string;
}
