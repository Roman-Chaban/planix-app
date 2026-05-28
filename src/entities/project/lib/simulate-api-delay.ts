import { API_DELAY_MS } from './constants';

export const simulateApiDelay = () =>
  new Promise<void>((resolve) => setTimeout(resolve, API_DELAY_MS));
