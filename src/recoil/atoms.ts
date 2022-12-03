import { atom } from 'recoil';

import { IData } from '../interfaces';

export const weddingState = atom<IData>({
  key: 'weddingState',
  default: { results: [] },
});

export const natureState = atom<IData>({
  key: 'natureState',
  default: { results: [] },
});

export const animalsState = atom<IData>({
  key: 'animalsState',
  default: { results: [] },
});

export const topic = atom<string>({
  key: 'topic',
  default: 'WEDDING',
});

export const isLoadMore = atom<boolean>({
  key: 'isLoadMore',
  default: false,
});
