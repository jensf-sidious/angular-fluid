import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
}                       from '@angular/core';

import { Subject }      from 'rxjs';

import { AzureMember }  from '@fluidframework/azure-client';
import {
  ISharedMap,
  SharedMap
}                       from 'fluid-framework';
import { FluidModel }   from './fluid/fluid.model';

import { FluidService } from './fluid/fluid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'angular-fluid';

  users!: Map<string, AzureMember<any>>;
  me!: AzureMember;

  fluidModel!: FluidModel;
  sharedMap!: ISharedMap;
  messages!: any[];

  myTimestamp!: string;

  unsubscriber$: Subject<void> = new Subject();

  constructor(
    private fluidService: FluidService,
    private changeDetector: ChangeDetectorRef) {}

  async ngOnInit() {
    await this.connectToFluidContainer();
    this.getSharedData();
    this.setMembersListener();
    this.setSharedDataListener();
  }
  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

  private async connectToFluidContainer() {
    this.fluidModel = await this.fluidService.getFluidContainer();
    if (!this.fluidModel.container.connected) {
      console.log("We are not connected yet...");
      await new Promise<void>((resolve) => {
        this.fluidModel.container.once("connected", () => {
          resolve();
        });
      });
    }
  }

  private getSharedData() {
    this.sharedMap = this.fluidModel.container.initialObjects['map'] as SharedMap;
    this.messages = Array.from(this.sharedMap.values());
    this.me = this.fluidModel.services.audience.getMyself()!;
    this.users = this.fluidModel.services.audience.getMembers();
    this.changeDetector.detectChanges();
  }

  private setMembersListener() {
    this.fluidModel.services.audience.on("membersChanged", () => {
      console.log(this.fluidModel.services.audience.getMembers().values());
      this.users = this.fluidModel.services.audience.getMembers();
      this.changeDetector.detectChanges();
    })
  }

  private setSharedDataListener() {
    this.sharedMap.on("valueChanged", () => {
      console.log("SharedMap changed: ", Array.from(this.sharedMap.values()));
      this.messages = Array.from(this.sharedMap.values());
    });
    this.sharedMap.on("clear", () => {
      this.messages = Array.from(this.sharedMap.values());
      this.changeDetector.detectChanges();
    })
  }

  sayHello() {
    const timestamp = Date.now();
    let data = {
      id: this.me?.userName + timestamp,
      greeting: {
        userName: this.me?.userName,
        message: "Moin ihr Nacken",
        timestamp: timestamp,
      }
    };
    this.sharedMap.set(data.id, data);
  }

  clear() {
    this.sharedMap.clear();
  }
}
