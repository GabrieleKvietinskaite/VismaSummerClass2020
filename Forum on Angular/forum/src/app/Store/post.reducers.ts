import { createReducer, on } from '@ngrx/store';
import { IPost } from '../Models/post.interface';
import * as postActions from './post.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const postStateFeatureKey = 'postState';

export interface PostState extends EntityState<IPost> {
  error: any;
  selectedPost: IPost;
}

export const adapter: EntityAdapter<IPost> = createEntityAdapter<IPost>();

export const initialState: PostState = adapter.getInitialState({
  error: undefined,
  selectedPost: undefined,
});

export const reducers = createReducer(
  initialState,
  on(postActions.loadPostsSuccess, (state, { posts }) => {
    return adapter.addAll(posts, state);
  }),
  on(
    postActions.loadPostsFail,
    (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);

export const { selectAll } = adapter.getSelectors();