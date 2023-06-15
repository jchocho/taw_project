import {request} from "express";
import business from "../business/business.container";

const movieEndpoint = (router) => {
    router.get("/api/movies", async (request, response, next) => {
        try {
            const result = await business.getMovieManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.get('/api/movie/:id', async (request, response, next) => {
        try {
            const id = request.params.id;
            let result = await business.getMovieManager().get(id);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
            response.status(500).send('An error occurred while retrieving the movie');
        }
    });

    router.post('/api/movie', async (request, response, next) => {
        try {
            const data = request.body;
            let result = await business.getMovieManager().createNewOrUpdate(data);
            response.status(201).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.delete('/api/movie/:id', async (request, response, next) => {
        try {
            const id = request.params.id;

            if (!id) {
                return response.status(400).send('Invalid movie ID');
            }

            await business.getMovieManager().deleteMovie(id);

            response.status(200).send('Movie deleted successfully');
        } catch (error) {
            console.log(error);
            response.status(500).send('An error occurred while deleting the movie');
        }
    });
};
export default movieEndpoint;