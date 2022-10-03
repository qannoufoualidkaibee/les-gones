import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Gone} from "../../gone";
import {DeleteGone, LoadGones, LoadTopGones, UpdateGone} from "./gones.action";
import {tap} from "rxjs";
import {Injectable} from "@angular/core";
import {GoneService} from "../../gone.service";

export interface GonesStateModel {
    gones: Gone[],
    topGones: Gone[]
}

@State<GonesStateModel>({
    name: 'gonesState',
    defaults: {
        gones: [],
        topGones: []
    }
})
@Injectable()
export class GonesState {
    constructor(private gonesService: GoneService) {
    }

    @Selector()
    public static getTopGones(stateModel: GonesStateModel): Gone[] {
        return stateModel.topGones;
    }

    @Selector()
    public static getGones(stateModel: GonesStateModel): Gone[] {
        return stateModel.gones;
    }

    @Action(LoadGones)
    public loadGones(ctx: StateContext<GonesStateModel>) {
        return this.gonesService.getGones()
            .pipe(tap((gones) => ctx.patchState({
                ...ctx.getState(),
                gones: [...gones]
            })));
    }

    @Action(LoadTopGones)
    public loadTopGones(ctx: StateContext<GonesStateModel>) {
        return this.gonesService.getTopGones()
            .pipe(tap((topGones) => ctx.patchState({
                ...ctx.getState(),
                topGones: [...topGones]
            })));
    }

    @Action(DeleteGone)
    public deleteGones(ctx: StateContext<GonesStateModel>, action: DeleteGone) {
        return this.gonesService.deleteGone(action.goneId)
            .pipe(tap(() => {
                ctx.dispatch(new LoadGones());
                ctx.dispatch(new LoadTopGones())
            }));
    }

    @Action(UpdateGone)
    public updateGone(ctx: StateContext<GonesStateModel>, action: UpdateGone) {
        return this.gonesService.updateGone(action.gone)
            .pipe(tap(() => {
                ctx.dispatch(new LoadGones());
                ctx.dispatch(new LoadTopGones())
            }));
    }
}
