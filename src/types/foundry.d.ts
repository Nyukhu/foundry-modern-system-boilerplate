// Minimal ambient declarations for the Foundry V14 globals used by this boilerplate.
// Intentionally untyped (any) — swap for a real Foundry types package once one tracks V14.
declare const Hooks: {
  once(hook: string, callback: (...args: any[]) => void): void;
  on(hook: string, callback: (...args: any[]) => void): void;
};
declare const CONFIG: any;
declare const game: any;
declare const foundry: any;
declare const Actor: any;
declare const Item: any;

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
