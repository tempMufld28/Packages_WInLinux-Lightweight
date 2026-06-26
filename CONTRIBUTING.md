## How to contribute to Pake

**Welcome to create [pull requests](https://github.com/tw93/Pake/compare/) for bugfix, new component, doc, example, suggestion and anything.**

## Branch Management

All development happens directly on `main`. Submit pull requests to `main`.

## Development Setup

### Prerequisites

- Node.js ≥22.0.0 (recommended LTS, older versions ≥18.0.0 may work)
- Rust ≥1.85.0 (required for edition2024 support in dependencies)
- Platform-specific build tools:
  - **Windows**: Visual Studio Build Tools with MSVC
  - **Linux**: `build-essential`, `libwebkit2gtk`, system dependencies

### Installation

```bash
# Clone the repository
git clone https://github.com/tw93/Pake.git
cd Pake

# Install dependencies
pnpm install

# Start development (Tauri only)
pnpm run dev

# Start development (CLI Wrapper + Tauri) - Recommended for CLI changes
pnpm run cli:dev -- https://web.telegram.org/k/
```

### Testing

```bash
# Run all tests (unit + integration + builder)
pnpm test

# Build CLI for testing
pnpm run cli:build
```

### Tips

- Use `--iterative-build` flag during development to skip some hefty checks and use app bundle format for faster debugging:

  ```bash
  pnpm run cli:dev --iterative-build
  ```

## Continuous Integration

The project uses streamlined GitHub Actions workflows:

- **Quality & Testing**: Automatic code quality checks and comprehensive testing on all platforms
- **Claude AI Integration**: Automated code review and interactive assistance
- **Release Management**: Coordinated releases with app building and Docker publishing

## Troubleshooting

### Common Build Issues

- **Rust compilation errors**: Run `cargo clean` in `src-tauri/` directory
- **`cargo` command not found after installation**: Pake CLI now reloads the Rust environment automatically, but if the issue persists reopen your terminal or run `source ~/.cargo/env` (Linux) / `call %USERPROFILE%\.cargo\env` (Windows) before retrying
- **Node dependency issues**: Delete `node_modules` and run `pnpm install`

See the [Advanced Usage Guide](docs/advanced-usage.md) for project structure and customization techniques.

## More

It is a good habit to create a feature request issue to discuss whether the feature is necessary before you implement it. However, it's unnecessary to create an issue to claim that you found a typo or improved the readability of documentation, just create a pull request.
