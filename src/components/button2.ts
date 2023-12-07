export enum TypeEnum {
  Normal = 'normal',
  Dialog = 'dialog',
}

export type Button2Type = `${TypeEnum}`;

export interface Button2Props {
  type?: Button2Type;
  text?: string;
}