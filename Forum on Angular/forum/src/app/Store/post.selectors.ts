import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import {
  PostState,
  postStateFeatureKey,
  selectAll,
} from './post.reducers';

export const selectPostsFeature = createFeatureSelector<PostState>(
  postStateFeatureKey
);

export const selectPosts = createSelector(
  selectPostsFeature,
  selectAll
);

export const selectedPost = createSelector(
  selectPostsFeature,
  (state: PostState) => state.selectedPost
);

export const selectError = createSelector(
  selectPostsFeature,
  (state: PostState) => state.error
);
