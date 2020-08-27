import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostService } from '../Services/post.service';
import * as PostActions from './post.actions';

@Injectable()
export class PostEffects {
    constructor(
        private actions$: Actions,
        private postService: PostService) { }

    loadPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostActions.loadPosts),
            mergeMap(() =>
                this.postService.getPosts().pipe(
                    map((posts) =>
                    PostActions.loadPostsSuccess({ posts })
                    ),
                    catchError((error) =>
                        of(PostActions.loadPostsFail({ error }))
                    )
                )
            )
        )
    );
}