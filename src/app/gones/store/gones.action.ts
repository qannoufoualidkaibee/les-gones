import {Gone} from "../../gone";

export class LoadGones {
    static readonly type = `[GONES] Gones loading`;
}

export class LoadTopGones {
    static readonly type = `[GONES] Top Gones loading`;
}

export class SaveGone {
    static readonly type = `[GONES] Save gone`;

    constructor(public gone: Gone) {
    }
}

export class DeleteGone {
    static readonly type = `[GONES] delete gone`;

    constructor(public goneId: number) {
    }
}

export class UpdateGone {
    static readonly type = `[GONES] update gone`;

    constructor(public gone: Gone) {
    }
}
