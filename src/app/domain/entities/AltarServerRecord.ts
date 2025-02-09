import {Option} from "../../../@types/option";
import {Dictionary} from "../../utils/dictionary";

export class AltarServerRecord extends Dictionary<number, Option> {

    private constructor(dictionary : unknown) {
        super(dictionary);
    }

    public static create(): AltarServerRecord {
        return new AltarServerRecord({});
    }

    public static restore(obj: Record<number, Option>): AltarServerRecord {
        return new AltarServerRecord(obj);
    }


}

