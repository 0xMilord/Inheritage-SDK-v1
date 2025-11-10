# API Fetch Script

Simple Node.js script that paginates the heritage catalogue and saves the output locally.

## Run

```bash
npm install @inheritage/sdk
node api-fetch-script/fetch.mjs
```

## Code

```ts
import { InheritageClient } from "@inheritage/sdk"
import { writeFileSync } from "node:fs"

const inheritage = new InheritageClient()

const allSites = []
let offset = 0

while (true) {
  const { data } = await inheritage.listHeritage({ offset, limit: 100 })
  allSites.push(...data.data)
  if (data.meta.offset + data.meta.limit >= data.meta.total) break
  offset += data.meta.limit
}

writeFileSync("heritage.json", JSON.stringify(allSites, null, 2))
console.log(`Saved ${allSites.length} sites to heritage.json`)
```

Useful for research exports, analytics pipelines, or powering custom caches.

