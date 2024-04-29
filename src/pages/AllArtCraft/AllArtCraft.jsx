import { useLoaderData } from "react-router-dom"
import ArtCraftCard from "../../components/ArtCraftCard"


export default function AllArtCraft() {
  const loadedArtCrafts = useLoaderData()
  return (<>
  <h2 className="text-center text-3xl text-[#70D2C0] my-10">All Art & Craft</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 my-20 gap-10">

      {
        !loadedArtCrafts ? <div className="justify-center flex my-20"><span className="loading loading-spinner loading-lg"></span></div> : loadedArtCrafts.map((artCraft) => {
          return (
            <ArtCraftCard key={artCraft._id} artCraft={artCraft}></ArtCraftCard>
          )
        })
      }
    </div>
  </>
  )
}
