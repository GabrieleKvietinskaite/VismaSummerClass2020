import { createAction, props } from '@ngrx/store';
import { IPost } from '../Models/post.interface';

export const loadPosts = createAction(
  '[Post Component] Load Posts'
);
export const loadPostsSuccess = createAction(
  '[Post Effect] Load Posts Success',
  props<{ posts: IPost[] }>()
);
export const loadPostsFail = createAction(
  '[Posts Effect] Load Posts Fail',
  props<{ error: any }>()
);