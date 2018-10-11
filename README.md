# husky-plugin-filter-push

A husky plugin to filter out empty push or delete remote branch push.

## Installation

```shell
npm i -D husky husky-plugin-filter-push
```

*This plugin won't install husky for you, you should install it by your self.*

## Usage

You could use this with your husky `pre-push` hook:

```json
{
  "hooks": {
    "pre-push": "husky-plugin-filter-push --git $HUSKY_GIT_STDIN --command npm test"
  }
}
```

This will trigger `npm test`.

## Options

There are 2 options for this CLI:

- git: should always be `$HUSKY_GIT_STDIN` for husky >= 1.0.0 and `$GIT_STDIN` for old huksy.
- command: use to run as `pre-push` hook.
