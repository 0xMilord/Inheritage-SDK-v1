import { InheritageClient } from "@inheritage-foundation/sdk"

const inheritage = new InheritageClient()

async function main() {
  const { data } = await inheritage.findSimilar({
    slug: "taj-mahal-agra",
    limit: 5,
  })

  console.table(
    data.data.map((entry) => ({
      score: entry.score.toFixed(3),
      slug: entry.site.slug,
      state: entry.site.state,
      dynasty: entry.site.dynasty,
    }))
  )
}

main().catch((error) => {
  console.error("Failed to compute similar heritage sites:", error)
  process.exitCode = 1
})

