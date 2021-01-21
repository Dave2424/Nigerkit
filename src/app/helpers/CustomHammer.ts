/**
 * Created by david on 4/28/20.
 */
import { Injectable } from '@angular/core';
import {HammerGestureConfig} from "@angular/platform-browser";

@Injectable()
export class CustomHammerConfig extends HammerGestureConfig  {
    overrides = {
        pinch: { enable: false },
        rotate: { enable: false }
    };
}
