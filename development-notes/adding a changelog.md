# Adding a Changelog

## Package

- `npm install --save-dev standard-version`

## Steps

1. add the release script to `package.json`:

   ```json
   "scripts": {
       "release": "standard-version"
   }
   ```

2. add a `.versionrc` file to the project:

   ```json
   {
     "types": [
       { "type": "feat", "section": "Features" },
       { "type": "fix", "section": "Bug Fixes" },
       { "type": "chore", "hidden": true },
       { "type": "docs", "section": "Documentation" },
       { "type": "style", "hidden": true },
       { "type": "refactor", "section": "Code Refactoring" },
       { "type": "perf", "section": "Performance Improvements" },
       { "type": "test", "hidden": true }
     ]
   }
   ```

### Sample Usage

The commit messages should look like:

```text
## General Format

<type>: <commit message>

## Examples

feat: add new feature
fix: resolve bug
docs: update documentation
```

Any types in the `.versionrc` file are able to be used to replace the `<type>` keyword for the commit message.

The types with `"hidden": true` are not added to the changelog; the one's with a section name are added.

## Updating Changelog

To update the changelog, run: `npm run release`

## Advanced Usage

```text
# Increment patch (1.0.0 → 1.0.1)
npm run release -- --release-as patch

# Increment minor (1.0.0 → 1.1.0)
npm run release -- --release-as minor

# Increment major (1.0.0 → 2.0.0)
npm run release -- --release-as major

# Set a specific version
npm run release -- --release-as 2.3.1
```

For the first release on a project, use: `npm run release -- --first-release`. **NOTE**: we have already run this for this project, this is for new projects only.

## Replacing Changelog in Readme

After running `npm run release` to update the `CHANGELOG.md` file, run `node update-readme.js` to add the latest changelog to `readme.md`.
