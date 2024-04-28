import { useLoaderData } from "react-router-dom"
import ArtCraftCard from "../../components/ArtCraftCard"


export default function AllArtCraft() {
  const loadedArtCrafts=useLoaderData()
  return (
    <div>
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
