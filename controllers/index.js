//use { Router } when importing a non default export
import { Router } from "express";
import pokemonApi from "../pokemon.js";
const router = Router();

const pokeRes = pokemonApi;

router.get("/", (request, response) => {
    response.send(pokeRes);
});

export default router;