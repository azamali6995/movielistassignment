import {request} from './APIHandler';
export const API = {
  movieList: () => request.get('movie?api-key=d7c910ba2c94a29d6ca511e61497d99a'),
};
