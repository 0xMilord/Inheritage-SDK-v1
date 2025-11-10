import { writeFileSync } from "node:fs"
import { InheritageClient } from "@inheritage/sdk"

const inheritage = new InheritageClient()

async function fetchAllHeritage() {
  const results = []
  let offset = 0
  const limit = 100

  while (true) {
    const { data } = await inheritage.listHeritage({ offset, limit })
    results.push(...data.data)

    const nextOffset = data.meta.offset + data.meta.limit
    if (nextOffset >= data.meta.total) {
      break
    }
    offset = nextOffset
  }

  return results
}

async function main() {
  const sites = await fetchAllHeritage()
  writeFileSync("heritage-sites.json", JSON.stringify(sites, null, 2))
  console.log(`Saved ${sites.length} heritage sites to heritage-sites.json`)
}

main().catch((error) => {
  console.error("Failed to export heritage catalogue:", error)
  process.exitCode = 1
})

