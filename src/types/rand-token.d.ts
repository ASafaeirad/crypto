interface RandToken {
  uid(uid: number): string;
}

declare var randToken: RandToken;

declare module "rand-token" {
  export = randToken;
}
