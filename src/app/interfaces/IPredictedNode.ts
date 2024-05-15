export interface IPredictedNode {
    id: string;
    outcomes: IOutcomeData[];
    name: string;
    type: string;
}

export interface IOutcomeData {
    id: string;
    odds: number;
}
