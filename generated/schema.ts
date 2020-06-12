// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PrizePoolBuilder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PrizePoolBuilder entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PrizePoolBuilder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PrizePoolBuilder", id.toString(), this);
  }

  static load(id: string): PrizePoolBuilder | null {
    return store.get("PrizePoolBuilder", id) as PrizePoolBuilder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get trustedForwarder(): Bytes {
    let value = this.get("trustedForwarder");
    return value.toBytes();
  }

  set trustedForwarder(value: Bytes) {
    this.set("trustedForwarder", Value.fromBytes(value));
  }

  get prizePoolModuleManagerFactory(): Bytes {
    let value = this.get("prizePoolModuleManagerFactory");
    return value.toBytes();
  }

  set prizePoolModuleManagerFactory(value: Bytes) {
    this.set("prizePoolModuleManagerFactory", Value.fromBytes(value));
  }

  get compoundYieldServiceFactory(): Bytes {
    let value = this.get("compoundYieldServiceFactory");
    return value.toBytes();
  }

  set compoundYieldServiceFactory(value: Bytes) {
    this.set("compoundYieldServiceFactory", Value.fromBytes(value));
  }

  get periodicPrizePoolFactory(): Bytes {
    let value = this.get("periodicPrizePoolFactory");
    return value.toBytes();
  }

  set periodicPrizePoolFactory(value: Bytes) {
    this.set("periodicPrizePoolFactory", Value.fromBytes(value));
  }

  get ticketFactory(): Bytes {
    let value = this.get("ticketFactory");
    return value.toBytes();
  }

  set ticketFactory(value: Bytes) {
    this.set("ticketFactory", Value.fromBytes(value));
  }

  get loyaltyFactory(): Bytes {
    let value = this.get("loyaltyFactory");
    return value.toBytes();
  }

  set loyaltyFactory(value: Bytes) {
    this.set("loyaltyFactory", Value.fromBytes(value));
  }

  get timelockFactory(): Bytes {
    let value = this.get("timelockFactory");
    return value.toBytes();
  }

  set timelockFactory(value: Bytes) {
    this.set("timelockFactory", Value.fromBytes(value));
  }

  get sponsorshipFactory(): Bytes {
    let value = this.get("sponsorshipFactory");
    return value.toBytes();
  }

  set sponsorshipFactory(value: Bytes) {
    this.set("sponsorshipFactory", Value.fromBytes(value));
  }

  get governorInterface(): Bytes {
    let value = this.get("governorInterface");
    return value.toBytes();
  }

  set governorInterface(value: Bytes) {
    this.set("governorInterface", Value.fromBytes(value));
  }

  get rngInterface(): Bytes {
    let value = this.get("rngInterface");
    return value.toBytes();
  }

  set rngInterface(value: Bytes) {
    this.set("rngInterface", Value.fromBytes(value));
  }
}

export class SingleRandomWinnerPrizePoolBuilder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save SingleRandomWinnerPrizePoolBuilder entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SingleRandomWinnerPrizePoolBuilder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SingleRandomWinnerPrizePoolBuilder", id.toString(), this);
  }

  static load(id: string): SingleRandomWinnerPrizePoolBuilder | null {
    return store.get(
      "SingleRandomWinnerPrizePoolBuilder",
      id
    ) as SingleRandomWinnerPrizePoolBuilder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get prizePoolBuilder(): Bytes {
    let value = this.get("prizePoolBuilder");
    return value.toBytes();
  }

  set prizePoolBuilder(value: Bytes) {
    this.set("prizePoolBuilder", Value.fromBytes(value));
  }

  get prizeStrategyFactory(): Bytes {
    let value = this.get("prizeStrategyFactory");
    return value.toBytes();
  }

  set prizeStrategyFactory(value: Bytes) {
    this.set("prizeStrategyFactory", Value.fromBytes(value));
  }
}

export class PoolModule extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PoolModule entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PoolModule entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PoolModule", id.toString(), this);
  }

  static load(id: string): PoolModule | null {
    return store.get("PoolModule", id) as PoolModule | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get moduleManager(): Bytes {
    let value = this.get("moduleManager");
    return value.toBytes();
  }

  set moduleManager(value: Bytes) {
    this.set("moduleManager", Value.fromBytes(value));
  }

  get prizeStrategy(): Bytes {
    let value = this.get("prizeStrategy");
    return value.toBytes();
  }

  set prizeStrategy(value: Bytes) {
    this.set("prizeStrategy", Value.fromBytes(value));
  }

  get periodicPrizePoolModule(): Bytes | null {
    let value = this.get("periodicPrizePoolModule");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set periodicPrizePoolModule(value: Bytes | null) {
    if (value === null) {
      this.unset("periodicPrizePoolModule");
    } else {
      this.set("periodicPrizePoolModule", Value.fromBytes(value as Bytes));
    }
  }

  get compoundYieldServiceModule(): Bytes | null {
    let value = this.get("compoundYieldServiceModule");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set compoundYieldServiceModule(value: Bytes | null) {
    if (value === null) {
      this.unset("compoundYieldServiceModule");
    } else {
      this.set("compoundYieldServiceModule", Value.fromBytes(value as Bytes));
    }
  }

  get loyaltyModule(): Bytes | null {
    let value = this.get("loyaltyModule");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set loyaltyModule(value: Bytes | null) {
    if (value === null) {
      this.unset("loyaltyModule");
    } else {
      this.set("loyaltyModule", Value.fromBytes(value as Bytes));
    }
  }

  get timelockModule(): Bytes | null {
    let value = this.get("timelockModule");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set timelockModule(value: Bytes | null) {
    if (value === null) {
      this.unset("timelockModule");
    } else {
      this.set("timelockModule", Value.fromBytes(value as Bytes));
    }
  }

  get ticketModule(): Bytes | null {
    let value = this.get("ticketModule");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set ticketModule(value: Bytes | null) {
    if (value === null) {
      this.unset("ticketModule");
    } else {
      this.set("ticketModule", Value.fromBytes(value as Bytes));
    }
  }

  get sponsorshipModule(): Bytes | null {
    let value = this.get("sponsorshipModule");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set sponsorshipModule(value: Bytes | null) {
    if (value === null) {
      this.unset("sponsorshipModule");
    } else {
      this.set("sponsorshipModule", Value.fromBytes(value as Bytes));
    }
  }
}
