import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
import cloudinary from "../lib/cloudinary.js";

export const checkAdmin = async (req, res) => {
    res.status(200).json({ success: true, message: "Admin access verified" });
};

const uploadToCloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            resource_type: "auto",
        });
        return result.secure_url;
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        throw new Error("Error uploading to Cloudinary");
    }
}

export const createSong = async (req, res, next) => {
    try {
        console.log("===============================================================0")
        if (!req.files || !req.files.audioFile || !req.files.imageFile) {
            console.log("====", req.files)
            return res.status(400).json({ success: false, message: "Audio and cover files are required" });
        }
        console.log("================================================================1")
        const { title, artist, albumId, duration } = req.body;
        const audioFile = req.files.audioFile;
        const imageFile = req.files.imageFile;
        console.log("=================================================================2")
        const audioUrl = await uploadToCloudinary(audioFile);
        const imageUrl = await uploadToCloudinary(imageFile);
        console.log("==================================================================3")
        const song = new Song({
            title, 
            artist,
            audioUrl,
            imageUrl,
            duration,
            albumId: albumId || null
        })

        await song.save()

        if (albumId) {
            await Album.findByIdAndUpdate(albumId, { $push: { songs: song._id } });
        }

        res.status(201).json({ success: true, message: "Song created successfully", song });
    } catch (error) {
        console.error("Error creating song:", error);
        next(error);
    }
};

export const deleteSong = async (req, res, next) => {
    try {
        const { id } = req.params;
        const song = await Song.findById(id);
        
        if (song.albumId) {
            await Album.findByIdAndUpdate(song.albumId, { $pull: { songs: song._id } });
        }

        await Song.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Song deleted successfully" });
    } catch (error) {
        console.error("Error deleting song:", error);
        next(error);
    }
};

export const createAlbum = async (req, res, next) => {
    try {
        const { title, artist, releaseYear } = req.body;
        const { imageFile } = req.files;

        const imageUrl = await uploadToCloudinary(imageFile);

        const album = new Album({
            title,
            artist,
            imageUrl,
            releaseYear
        });
        await album.save();
        res.status(201).json({ success: true, message: "Album created successfully", album });
    } catch (error) {
        console.error("Error creating album:", error);
        next(error);
    }
};

export const deleteAlbum = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Song.deleteMany({ albumId: id });
        await Album.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Album and associated songs deleted successfully" });
    } catch (error) {
        console.error("Error deleting album:", error);
        next(error);
    }
};