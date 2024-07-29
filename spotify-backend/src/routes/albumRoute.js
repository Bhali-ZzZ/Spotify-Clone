import express from "express"
import { addAlbum , listalbum , removeAlbum } from "../Controllers/albumController.js"
import upload from "../middlewares/multer.js"


const albumRouter = express.Router()

albumRouter.post('/add',upload.single('image'),addAlbum)
albumRouter.get('/list',listalbum)
albumRouter.post('/remove',removeAlbum)

export default albumRouter