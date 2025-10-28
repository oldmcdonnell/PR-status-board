export type BasePR = {
  id: number;
  title: string;
  author: string;
  url: string;

  createdAt: string;       // ISO
  updatedAt?: string;      // ISO

  lastAction?: string;
  lastActionAt?: string;   // ISO

  age?: string;            // humanized like "1d 2h" (computed in UI)
};