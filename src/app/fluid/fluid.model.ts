import { AzureContainerServices } from "@fluidframework/azure-client";
import { IFluidContainer }        from "fluid-framework";

export interface FluidModel {
  container: IFluidContainer;
  services: AzureContainerServices;
}