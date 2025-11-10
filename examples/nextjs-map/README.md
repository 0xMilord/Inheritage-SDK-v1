# Next.js Map Example

A minimal Next.js route that renders a map of heritage sites using the Inheritage SDK and the GeoJSON endpoint.

## Setup

```bash
npm install @inheritage/sdk maplibre-gl
```

## Usage

Create `app/page.tsx` (or any route component) with:

```tsx
"use client"

import { useEffect, useState } from "react"
import maplibregl from "maplibre-gl"
import { InheritageClient } from "@inheritage/sdk"

const inheritage = new InheritageClient()

export default function MapPage() {
  const mapContainerRef = useState<HTMLDivElement | null>(null)[0]

  useEffect(() => {
    if (!mapContainerRef) return

    const map = new maplibregl.Map({
      container: mapContainerRef,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      center: [78.9629, 20.5937],
      zoom: 4.3,
    })

    inheritage
      .listGeoHeritage({ limit: 200 })
      .then(({ data }) => {
        data.features.forEach((feature) => {
          new maplibregl.Marker()
            .setLngLat(feature.geometry.coordinates)
            .setPopup(
              new maplibregl.Popup().setHTML(`<strong>${feature.properties.name}</strong><br/>${feature.properties.state}`)
            )
            .addTo(map)
        })
      })

    return () => map.remove()
  }, [mapContainerRef])

  return <div ref={mapContainerRef} style={{ width: "100%", height: "600px" }} />
}
```

This example easily extends to filtering by state, country, or category.

