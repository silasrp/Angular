import Boom from "@hapi/boom";
import { db } from "../database";

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        const { results}  = await db.query(
            'SELECT * FROM listings WHERE id=?',
            [id],
        );
        const currentListing = results[0];
        if (!currentListing) throw Boom.notFound(`Listing does not exist with id ${id}`);
        return currentListing;
    }
}