import { useLoaderData } from "react-router-dom"
import ArtCraftCard from "../../components/ArtCraftCard"


export default function AllArtCraft() {
  const loadedArtCrafts = useLoaderData()
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {
        loadedArtCrafts.map((artCraft) => {
          return (
            <ArtCraftCard key={artCraft._id} artCraft={artCraft}></ArtCraftCard>
          )
        })
      }
    </div>
  )
}
