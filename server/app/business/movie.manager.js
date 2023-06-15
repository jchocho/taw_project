import movieDAO from "../DAO/movieDAO";
import movieModel from "../DAO/movieDAO"
import {isValidObjectId, Types} from 'mongoose';

function create(context) {
    async function query() {
        let result = movieModel.queryAllMovies();
        // let result = movieDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        let result = await movieModel.get(id);
        if (result) {
            return result;
        }
    }

    async function createNewOrUpdate(data) {
        let result = await movieDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }

    async function deleteMovie(id) {
        // return movieDAO.deleteMovie(id);
        let result = await movieDAO.deleteMovie(id);
        if (result) {
            return result;
        }
    }

    return {
        query: query,
        get: get,
        createNewOrUpdate: createNewOrUpdate,
        deleteMovie: deleteMovie,
    };
}

export default {
    create: create,
};