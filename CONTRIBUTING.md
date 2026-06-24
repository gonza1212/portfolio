# CONTRIBUTING.md

## Git workflow

### Branch structure

```
main     — deployable code only
dev      — working integration branch
feature/ — one branch per feature unit
fix/     — one branch per bug fix
```

Never commit directly to `main`.

### Workflow

1. Create a feature branch from `dev`.
2. Implement the unit on that branch.
3. Run `pnpm build` — must pass without errors.
4. Request explicit confirmation before committing.
5. Commit with a message following the convention below.
6. Merge to `dev` with `--no-ff`.
7. Delete the feature branch.
8. When ready, rebase `dev` onto `main`, fast-forward merge, push both.

### Commit convention

Types: `feat`, `fix`, `chore`, `refactor`, `ux`, `perf`.

Messages in English, imperative mood, concise. Example: `feat: add Hero section with dot pattern background`.

## Quality gate

```bash
pnpm build   # static build, must pass without errors or TypeScript warnings
```

No automated tests. Verification is manual via browser smoke test.

## Versioning

Not applicable. This is a website, not a package.

## Files always given to the agent

- `ARCHITECTURE.md`
- `CONTEXT.md`
