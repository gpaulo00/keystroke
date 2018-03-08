
export interface IKey {
  id?: number;
  title: string;
  user?: string;
  pass: string;
}

export class Key implements IKey {
  id?: number;
  title: string;
  user?: string;
  pass: string;
}
