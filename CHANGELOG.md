# Changelog

All notable changes to the Inheritage SDK will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-01-15

### Added
- **React Hooks**: Complete set of hooks for all API endpoints
  - `useHeritage`, `useHeritageList`, `useGeoNearby`, `useMedia`, `useCitation`
  - `useAIContext`, `useSimilarSites`, `useAIMetadata`, `useAIVectorIndex`
- **React Components**: `<InheritageCitation />` for CC BY 4.0 compliance
- **LangChain 0.2+ Integration**:
  - `createHeritageContextRunnable()`, `createHeritageSimilarRunnable()`, `createHeritageVectorIndexRunnable()`
  - `createInheritageToolkit()` with 4 agent tools
  - LangSmith tracing support
- **New AI Endpoints**:
  - `/ai/meta/:slug` — AI metadata bundle
  - `/ai/vector-index.ndjson` — Vector database sync feed
  - `/ai/vision/context` — Image-to-context (stub)
  - `/license/ai` — AI usage policy
- **Enhanced Documentation**:
  - Comprehensive hooks guide (`docs/hooks.md`)
  - Components guide (`docs/components.md`)
  - LangChain integration guide (`docs/langchain.md`)
  - React app example (`examples/react-app.tsx`)
- **Improved Type Safety**:
  - All AI responses include `embedding_checksum`, `model_version`, `sources`
  - New types: `AIMetadataResponse`, `AIVectorRecord`, `AIVisionContextResponse`

### Changed
- Upgraded to use real heritage site examples from Kaggle dataset
- Updated README with hooks and components examples
- Enhanced OpenAPI spec with AI metadata fields

### Fixed
- Hook dependency arrays for proper React memoization
- ETag caching in hooks
- Rate limit handling in all endpoints

---

## [0.1.0] - 2025-01-10

### Added
- **Initial Public Release** 🎉
- Core `InheritageClient` with all API methods
- Full TypeScript definitions
- ESM/CJS dual build
- Comprehensive test suite (unit, integration, e2e)
- Complete documentation
- CI/CD with GitHub Actions

### API Coverage
- Heritage API (`/heritage`, `/heritage/:slug`, `/heritage/featured`, `/heritage/top`)
- Geospatial API (`/geo/nearby`, `/geo/region`, `/geo/:slug`)
- Media API (`/media/:slug`)
- Citation API (`/citation/:entityId`)
- AI Context API (`/ai/context/:slug`, `/ai/embedding/:slug`, `/ai/similar`)

### Features
- ETag caching support
- Rate limit handling
- Abort signal support
- Trace ID extraction
- Custom error classes
- Attribution enforcement
- Tree-shakeable exports

---

## [Unreleased]

### Planned
- Streaming context endpoint (`/ai/context/stream`)
- Vector snapshot endpoint (`/ai/vector-index/latest.tar.zst`)
- LangGraph integration
- LlamaIndex connectors
- Semantic Kernel adapters
- Server Components support (Next.js 15+)
- Svelte/Vue hooks
- Additional React components (`<HeritageCard />`, `<HeritageMap />`, `<MediaGallery />`)

---

[0.2.0]: https://github.com/Inheritage-Foundation/Inheritage-SDK-v1/releases/tag/v0.2.0
[0.1.0]: https://github.com/Inheritage-Foundation/Inheritage-SDK-v1/releases/tag/v0.1.0
[Unreleased]: https://github.com/Inheritage-Foundation/Inheritage-SDK-v1/compare/v0.2.0...HEAD
