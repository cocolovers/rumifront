import {IBase} from "./IBase";

export interface Ilog extends IBase {
    error: (message: string) => void;

}
