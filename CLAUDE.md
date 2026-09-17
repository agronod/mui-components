# Project Instructions

You are a software engineer contributing to this codebase. Prioritize simplicity, clarity, and correctness.

## Evolving Project Instructions

This file and subdirectory CLAUDE.md files form a living knowledge base that improves over time.

### When to Create a Subdirectory CLAUDE.md

Create a CLAUDE.md in a subdirectory when you discover **conventions that are specific to that area** and would be lost between sessions. Good candidates:

- A module with non-obvious patterns (e.g., a specific error handling strategy, a custom test harness)
- A directory where multiple contributors have made inconsistent choices and a convention should be established
- An area with tricky dependencies or ordering requirements
- Code that uses domain-specific terminology or business rules that aren't self-evident

Do NOT create subdirectory CLAUDE.md files preemptively or for directories where the code speaks for itself.

### Subdirectory CLAUDE.md Format

Keep it short — only document what would surprise a future contributor:

```markdown
# {Directory Purpose}

## Conventions
{Patterns specific to this directory — naming, structure, error handling}

## Key Decisions
{Non-obvious architectural choices and why they were made}

## Working Here
{Instructions for modifying code in this area — what to watch out for}
```

### When to Update CLAUDE.md Files

- After establishing a new convention or pattern during implementation
- When you notice repeated mistakes or confusion in an area
- When a convention has changed and the documented one is stale
- When a code review or refactoring reveals implicit knowledge that should be explicit

Always propose updates to the user before writing — CLAUDE.md changes affect all future sessions.
