import { Injectable } from "@angular/core";

import { FluidModel }        from "./fluid.model";
import { getFluidContainer } from "./utils";

@Injectable()
export class FluidService {

  public getFluidContainer(): Promise<FluidModel> {
    return getFluidContainer();
  }
}