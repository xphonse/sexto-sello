# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sexto Sello is a monorepo containing a Next.js website and React Native (Expo) mobile app for displaying religious choirs and prayers. Both applications consume shared data from the `libs/data` package.

**Live Deployments:**
- Website: https://sextosello.com/
- Android App: https://play.google.com/store/apps/details?id=com.sextosello.cantos_y_coros

## Prerequisites

- Node.js v18.20.4 (specified in `.nvmrc`)
- **For iOS development (macOS only):**
  - Xcode (full installation from App Store, not just Command Line Tools)
  - After installing Xcode:
    - Open Xcode at least once and accept the license
    - Run: `sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer`
    - Verify simulator: `xcrun simctl list devices`
- **For Android development:**
  - Android Studio with Android SDK

## Initial Setup

```bash
# Verify Node version
node -v  # Should be v18.20.4

# Install Nx globally
npm add --global nx@latest

# Install dependencies
npm install

# CRITICAL: Build the shared data library first
# This MUST be done before running either app, otherwise import errors will occur
nx build data
```

## Development Commands

### Shared Data Library (`libs/data`)
```bash
# Build the data library (required before first run of any app)
nx build data

# The data library must be rebuilt whenever changes are made to:
# - libs/data/choirs.ts
# - libs/data/prayers.ts
```

### Next.js Website (`packages/nestjs`)
```bash
# Start development server
nx dev nestjs

# Server runs on http://localhost:3000

# Build for production
nx build nestjs

# Start production server
nx start nestjs

# Lint
nx lint nestjs
```

### React Native App (`packages/react-native`)
```bash
# Start Expo development server (recommended for development)
nx start react-native

# Start with specific platform (requires platform-specific setup)
nx android react-native  # Requires Android Studio and Android SDK
nx ios react-native      # Requires Xcode (macOS only)
nx web react-native      # Web browser

# Lint
nx lint react-native

# Note: For mobile development, Expo Go app on phone is the easiest option
# Platform-specific builds require full native toolchain setup
```

## Architecture

### Monorepo Structure

This is an Nx monorepo with npm workspaces containing:

- **`libs/data`**: Shared TypeScript library containing religious content data
  - `choirs.ts`: Choir/hymn data with lyrics organized by paragraphs
  - `prayers.ts`: Prayer data with multi-dimensional paragraph arrays
  - Compiles to CommonJS in `dist/` directory with TypeScript declarations
  - Must be built before running dependent applications

- **`packages/nestjs`**: Next.js 14 website (incorrectly named "nestjs", actually Next.js)
  - App Router structure with dynamic routes
  - Routes: `/canto/[slug]`, `/oracion/[slug]` for individual items
  - Uses Tailwind CSS for styling
  - Imports data from `data` package

- **`packages/react-native`**: Expo/React Native mobile app
  - Uses React Navigation with native stack navigator
  - Redux Toolkit for state management (UI slice in `store/slices/ui`)
  - Screens: Home, Cantos, Oraciones, Canto (detail), Oracion (detail), Informacion
  - AsyncStorage for local persistence
  - Imports data from `data` package

### Data Flow

1. Religious content is defined in `libs/data` as TypeScript objects
2. `libs/data` is compiled to CommonJS with type definitions
3. Both Next.js and React Native apps import from the compiled `data` package
4. Apps display the data through list and detail views

### Key Data Structures

```typescript
// Choir/Hymn structure
interface Choir {
  id: string;
  page: string;
  title: string;
  paragraphs: string[];  // Each paragraph may contain /n for line breaks
}

// Prayer structure
interface Prayer {
  id: string;
  page: string;
  title: string;
  paragraphs: string[][];  // Multi-dimensional array for complex layouts
}
```

## Important Notes

- The package named `nestjs` is actually a Next.js application, not NestJS
- Always run `nx build data` after modifying content in `libs/data`
- The `data` package uses workspace protocol (`"data": "*"`) for local linking
- Text formatting in data uses `/n` for line breaks within strings
- Both apps share identical data sources but have platform-specific UI implementations

## Testing

Currently, the data library has a placeholder test script that exits with an error. No formal test suite is configured for any package.