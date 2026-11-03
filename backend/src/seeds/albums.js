import "dotenv/config";
import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
import { config } from "dotenv";

config();

const songs = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    imageUrl:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/blinding-lights.mp3",
    duration: 200,
    genre: "Synth-pop",
  },
  {
    title: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    imageUrl:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/save-your-tears.mp3",
    duration: 215,
    genre: "Synth-pop",
  },
  {
    title: "Starboy",
    artist: "The Weeknd ft. Daft Punk",
    album: "Starboy",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/starboy.mp3",
    duration: 230,
    genre: "R&B",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    imageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/levitating.mp3",
    duration: 203,
    genre: "Disco-pop",
  },
  {
    title: "Physical",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    imageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/physical.mp3",
    duration: 194,
    genre: "Dance-pop",
  },
  {
    title: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/as-it-was.mp3",
    duration: 167,
    genre: "Pop",
  },
  {
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
    imageUrl:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/watermelon-sugar.mp3",
    duration: 174,
    genre: "Pop-rock",
  },
  {
    title: "Flowers",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
    imageUrl:
      "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/flowers.mp3",
    duration: 200,
    genre: "Pop",
  },
  {
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/good-4-u.mp3",
    duration: 178,
    genre: "Pop-punk",
  },
  {
    title: "Drivers License",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/drivers-license.mp3",
    duration: 242,
    genre: "Pop",
  },
  {
    title: "Heat Waves",
    artist: "Glass Animals",
    album: "Dreamland",
    imageUrl:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/heat-waves.mp3",
    duration: 238,
    genre: "Indie pop",
  },
  {
    title: "Dynamite",
    artist: "BTS",
    album: "BE",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/dynamite.mp3",
    duration: 199,
    genre: "Pop",
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    album: "Evolve",
    imageUrl:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/believer.mp3",
    duration: 204,
    genre: "Alternative rock",
  },
  {
    title: "Industry Baby",
    artist: "Lil Nas X ft. Jack Harlow",
    album: "Montero",
    imageUrl:
      "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/industry-baby.mp3",
    duration: 212,
    genre: "Hip-hop",
  },
  {
    title: "Cruel Summer",
    artist: "Taylor Swift",
    album: "Lover",
    imageUrl:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/cruel-summer.mp3",
    duration: 178,
    genre: "Pop",
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    imageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    audioUrl: "https://example.com/audio/shape-of-you.mp3",
    duration: 233,
    genre: "Pop",
  },
];

const albums = [
  {
    title: "After Hours",
    artist: "The Weeknd",
    imageUrl:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    releaseYear: 2020,
    genre: "Synth-pop",
    totalTracks: 14,
    description: "A moody, nocturnal pop album blending synthwave and R&B vibes.",
  },
  {
    title: "Future Nostalgia",
    artist: "Dua Lipa",
    imageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    releaseYear: 2020,
    genre: "Disco-pop",
    totalTracks: 11,
    description: "A vibrant, dance-inspired album full of retro disco energy.",
  },
  {
    title: "SOUR",
    artist: "Olivia Rodrigo",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    releaseYear: 2021,
    genre: "Pop-punk",
    totalTracks: 12,
    description: "A candid, emotionally driven pop-punk record about heartbreak and growth.",
  },
  {
    title: "Dreamland",
    artist: "Glass Animals",
    imageUrl:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    releaseYear: 2020,
    genre: "Indie pop",
    totalTracks: 12,
    description: "A dreamy, atmospheric album mixing indie hooks with electronic textures.",
  },
  {
    title: "Harry's House",
    artist: "Harry Styles",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    releaseYear: 2022,
    genre: "Pop",
    totalTracks: 13,
    description: "A fresh and upbeat pop album full of airy melodies and soft grooves.",
  },
  {
    title: "Montero",
    artist: "Lil Nas X",
    imageUrl:
      "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=800&q=80",
    releaseYear: 2021,
    genre: "Hip-hop",
    totalTracks: 15,
    description: "A bold, genre-blending album that mixes rap, pop, and experimental sounds.",
  },
  {
    title: "Evolve",
    artist: "Imagine Dragons",
    imageUrl:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
    releaseYear: 2017,
    genre: "Alternative rock",
    totalTracks: 11,
    description: "A powerful rock record built around huge hooks and emotional storytelling.",
  },
  {
    title: "Lover",
    artist: "Taylor Swift",
    imageUrl:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    releaseYear: 2019,
    genre: "Pop",
    totalTracks: 18,
    description: "A bright, romantic pop album celebrating love in all its forms.",
  },
  {
    title: "÷ (Divide)",
    artist: "Ed Sheeran",
    imageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    releaseYear: 2017,
    genre: "Pop",
    totalTracks: 14,
    description: "A versatile pop album mixing heartfelt ballads with catchy anthems.",
  },
  {
    title: "BE",
    artist: "BTS",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    releaseYear: 2020,
    genre: "K-pop",
    totalTracks: 8,
    description: "An uplifting K-pop album centered on positive energy and connection.",
  },
  {
    title: "Fine Line",
    artist: "Harry Styles",
    imageUrl:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
    releaseYear: 2019,
    genre: "Pop-rock",
    totalTracks: 12,
    description: "An eclectic mix of soft rock, pop, and soulful textures.",
  },
  {
    title: "Endless Summer Vacation",
    artist: "Miley Cyrus",
    imageUrl:
      "https://images.unsplash.com/photo-1525201548942-d8732f6610a0?auto=format&fit=crop&w=800&q=80",
    releaseYear: 2023,
    genre: "Pop",
    totalTracks: 10,
    description: "A sun-soaked pop album full of bright melodies and confidence.",
  },
];

const seedDatabase = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error("MONGODB_URI is not defined");
    }

    await mongoose.connect(mongoUri);

    await Song.deleteMany({});
    await Album.deleteMany({});

    // Create albums first so every song can reference its album by ObjectId.
    const albumData = albums.map(({ title, artist, imageUrl, releaseYear }) => ({
      title,
      artist,
      imageUrl,
      releaseYear,
      songs: [],
    }));
    const createdAlbums = await Album.insertMany(albumData);

    const albumIds = new Map(
      createdAlbums.map((album) => [album.title, album._id]),
    );

    const songData = songs.map(
      ({ title, artist, album, imageUrl, audioUrl, duration }) => ({
        title,
        artist,
        imageUrl,
        audioUrl,
        duration,
        albumId: albumIds.get(album),
      }),
    );
    const createdSongs = await Song.insertMany(songData);

    const songsByAlbum = new Map();
    createdSongs.forEach((song, index) => {
      const albumTitle = songs[index].album;
      const albumSongs = songsByAlbum.get(albumTitle) || [];
      albumSongs.push(song._id);
      songsByAlbum.set(albumTitle, albumSongs);
    });

    await Promise.all(
      createdAlbums.map((album) =>
        Album.updateOne(
          { _id: album._id },
          { $set: { songs: songsByAlbum.get(album.title) || [] } },
        ),
      ),
    );

    console.log("Database seeded successfully with songs and albums.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await mongoose.connection.close();
  }
};

seedDatabase();
