import movieEndpoint from "./movie.endpoint";
import userEndpoint from "./user.endpoint";

const routes = function (router) {
    userEndpoint(router);
    movieEndpoint(router);
};

export default routes;