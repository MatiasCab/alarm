import { IOutcomeData } from "./IPredictedNode";

export interface INode {
    id: string;
    type: string;
    summary: string;
    outcomes: IOutcomeData[];
    description: string;
    }