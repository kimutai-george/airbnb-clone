import getCurrentUser from "../actions/getCurrentUser";
import getFavouriteListings from "../actions/getFavouriteListinfs";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavouriteClient from "./FavouriteClient";

const FavouritesPage = async () => {

    const currentUser = await getCurrentUser()
    const listings = await getFavouriteListings()

    if(!currentUser)
    {
        return (
            <ClientOnly>
                <EmptyState 
                 title="Unauthorized Access"
                 subtitle="Please Login to continue"
                />
            </ClientOnly>
        )
    }

    if(listings.length === 0)
    {
        return (
            <ClientOnly>
                <EmptyState 
                 title="No Favourites found"
                 subtitle="You have no favourites here"
                />
            </ClientOnly>
        )
    }



    return (
        <ClientOnly>
            <FavouriteClient 
            listings={listings}
            currentUser={currentUser}
            />
        </ClientOnly>
    )
}
 
export default FavouritesPage;