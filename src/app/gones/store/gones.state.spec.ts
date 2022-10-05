import {TestBed} from "@angular/core/testing";
import {NgxsModule, Store} from "@ngxs/store";
import {GonesState} from "./gones.state";
import {GoneService} from "../../gone.service";

describe('GoneStateTest', () => {
    let store: Store;
    let goneService: GoneService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([GonesState])],
            providers: [GoneService]
        });
    });

    beforeEach(() => {
        store = TestBed.inject(Store);
        goneService = TestBed.inject(GoneService);
    });

    it(`test`, () => {

    });
});
