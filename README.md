# 🏛️ Inheritage SDK (TypeScript)

[![npm version](https://img.shields.io/npm/v/%40inheritage%2Fsdk?label=npm&color=blue)](https://www.npmjs.com/package/@inheritage/sdk)
[![License](https://img.shields.io/badge/license-Apache%202.0-green.svg)](./LICENSE)
[![Docs](https://img.shields.io/badge/docs-GitHub%20Pages-ff69b4.svg)](https://inheritage.foundation/docs/api)
[![Discussions](https://img.shields.io/badge/chat-Discussions-blueviolet.svg)](https://github.com/0xMilord/Inheritage-SDK-v1/discussions)
[![Open Data](https://img.shields.io/badge/data-CC%20BY%204.0-orange.svg)](https://inheritage.foundation/api/v1)

**Access India's cultural heritage programmatically.**  
Query thousands of monuments, temples, and cultural sites—open data, CC BY 4.0, ready for maps, AI, and education.

---

## 🚀 Quickstart

```bash
npm install @inheritage/sdk
# or
pnpm add @inheritage/sdk
```

```ts
import { InheritageClient } from "@inheritage/sdk"

const inheritage = new InheritageClient()
const { data } = await inheritage.getHeritage("hoysaleswara-temple")

console.log(data.name) // "Hoysaleswara Temple"
```

---

## 🧠 What You Can Build

- Visualize heritage sites on maps with `geo/heritage` and `geo/nearby`
- Compare dynasties, architectural styles, or visitor metadata over time
- Power AI assistants using deterministic `/ai/context` narratives and embeddings
- Curate media galleries with watermark guidance from `/media`
- Track attribution usage via `/citation/report` for community dashboards

---

## 🔗 Useful Links

- [API Reference](https://inheritage.foundation/docs/api)
- [Dataset Manifest (JSON-LD)](https://inheritage.foundation/api/v1)
- [OpenAPI 3.1 Specification](https://inheritage.foundation/openapi/v1.yaml)
- [Playground](https://inheritage.foundation/docs/api#playground)
- [Issue Tracker](https://github.com/0xMilord/Inheritage-SDK-v1/issues)

---

## 🤝 Contribute

Issues, ideas, and pull requests are welcome!  
Start with the [`Ideas for Developers`](https://github.com/0xMilord/Inheritage-SDK-v1/issues) thread, showcase what you build, or join the [Discussions](https://github.com/0xMilord/Inheritage-SDK-v1/discussions) board.  
Check the [`examples/`](./examples) directory for drop-in starters and consider contributing your own demo.

Every integration helps preserve and popularise India’s heritage.

---

## ⚖️ License

- SDK code: [Apache 2.0](./LICENSE)
- Data responses: CC BY 4.0 — attribution required via `X-Inheritage-Attribution: visible`

© 2025 Inheritage Foundation. All rights reserved.
