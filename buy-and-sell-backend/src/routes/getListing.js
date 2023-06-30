import { fakeListings } from "./fake-data";
import Boom from "@hapi/boom";

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: (req, h) => {
        const id = req.params.id;
        const currentListing =  fakeListings.find(listing => listing.id === id);
        if (!currentListing) throw Boom.notFound(`Listing does not exist with id ${id}`);
        return currentListing;
    }
}