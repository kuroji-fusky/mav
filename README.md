<div align="center">
  <img alt="MyFursona cards" src="https://github.com/MyFursona-Project/MyFursona/assets/94678583/0cc5e73f-3197-4170-906b-30a64063569a">
</div>

<h1 align="center">MyFursona</h1>

<p align="center">
  The <strong>MyFursona</strong> web and desktop client written in Next.js,
  Tailwind CSS, and Tauri.
</p>

## Contributing

This repo uses Husky hooks that format your code automatically with Prettier
when you push a commit.

### Prerequisites

- Node.js (versions 18 or higher)
- Yarn
- [Optional] Rust, for building the standalone desktop client (versions 1.72
  or higher)

### Installation

Fork/clone the repository and install dependencies and run the local dev server
on the root directory:

```console
git clone https://github.com/MyFursona-Project/MyFursona.git
yarn
yarn dev
```

You can now access http://localhost:3000.

## Commands

- `yarn dev` - Serves a running web app on your local machine
- `yarn dev:client` - Opens a desktop client, will require Rust
- `yarn build` - Builds the web app with Turborepo and caches it on Vercel
- `yarn build:client` - Builds and bundles the desktop app for production
- `yarn build:all` - Builds both the web and desktop clients

## License

Apache-2.0
