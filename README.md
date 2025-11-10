# @inheritage/sdk

Official TypeScript SDK for the Inheritage API Suite (`/api/v1`).

> **Status:** Alpha – the API contract is production ready, the SDK surface may evolve prior to v1.  
> **License:** Apache 2.0

## Features

- Thin, typed wrapper around the public API (heritage, geo, media, citation, AI, system).
- Automatic attribution headers and rate-limit metadata.
- First-class support for `fetch` polyfills (browser, Node 18+, edge runtimes).
- Helpful error objects with trace IDs and retry hints.

## Installation

```bash
npm install @inheritage/sdk
# or
yarn add @inheritage/sdk
```

## Quick start

```ts
import { InheritageClient } from "@inheritage/sdk"

const client = new InheritageClient()

const { data: heritage } = await client.getHeritage("hoysaleswara-temple")
console.log(heritage.name) // "Hoysaleswara Temple"
```

## Configuration

```ts
const client = new InheritageClient({
  baseUrl: "https://inheritage.foundation/api/v1",
  attribution: "visible", // default – required on the public tier
  userAgent: "my-app/1.0.0",
  fetch: customFetch, // optional override (e.g. cross-fetch, undici)
})
```

### Commercial tier

If you hold a commercial plan that allows suppressed attribution headers:

```ts
const client = new InheritageClient({
  attribution: "suppressed",
  plan: "commercial",
})
```

Attempting to use `suppressed` without `plan: "commercial"` throws during construction – fail fast to avoid breaking the contract.

## Error handling

All non-2xx responses raise an `InheritageApiError` containing the platform error envelope, HTTP status, trace ID, rate-limit headers, and an optional retry hint.

```ts
import { InheritageClient, InheritageApiError } from "@inheritage/sdk"

const client = new InheritageClient()

try {
  const data = await client.getHeritage("unknown")
} catch (error) {
  if (error instanceof InheritageApiError) {
    console.error(error.code, error.status, error.traceId)
    if (error.retryAfter) {
      console.log(`Back off for ${error.retryAfter} seconds.`)
    }
  }
}
```

## Building locally

```bash
npm install
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes and open a PR

Please read `/docs/public-api-suite.md` in the main Inheritage repository for the canonical API contract.

---

© 2025 Inheritage Foundation. Licensed under Apache 2.0.
