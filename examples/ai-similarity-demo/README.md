# AI Similarity Demo

Rank heritage sites by cosine similarity using SDK embeddings.

## Run

```bash
npm install @inheritage/sdk
node ai-similarity-demo/index.mjs
```

## Code

```ts
import { InheritageClient } from "@inheritage-foundation/sdk"

const inheritage = new InheritageClient()

const { data } = await inheritage.findSimilar({
  slug: "taj-mahal-agra",
  limit: 5,
})

console.table(
  data.data.map((entry) => ({
    score: entry.score.toFixed(3),
    slug: entry.site.slug,
    state: entry.site.state,
  }))
)
```

Use this as a starting point for recommendations, AI assistants, or blended search experiences.

