import { Album } from "../models/album.model.js";

export const getAllAlbums = async (req, res, next) => {
    try {
        // Implementation for getting all albums
        const albums = await Album.find(); 
        res.status(200).json(albums);
    } catch (error) {
        next(error);
    }
};
export const getAlbumById = async (req, res, next) => {
    try {
        // Implementation for getting album by ID
        const { id } = req.params;
        console.log('Fetching album with ID:', id); // Log the album ID being fetched
        const album = await Album.findById(id).populate("songs"); 
    
        if (!album) {
            return res.status(404).json({ error: "Album not found" });
        }
        res.status(200).json(album);
    } catch (error) {
        next(error);
    }
};