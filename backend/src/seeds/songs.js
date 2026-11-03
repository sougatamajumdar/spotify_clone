import "dotenv/config";
import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { config } from "dotenv";

config();

const songs = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    imageUrl: "https://example.com/images/blinding-lights.jpg",
    audioUrl: "https://example.com/audio/blinding-lights.mp3",
    duration: 200,
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    imageUrl: "https://example.com/images/levitating.jpg",
    audioUrl: "https://example.com/audio/levitating.mp3",
    duration: 203,
  },
  {
    title: "As It Was",
    artist: "Harry Styles",
    imageUrl: "https://example.com/images/as-it-was.jpg",
    audioUrl: "https://example.com/audio/as-it-was.mp3",
    duration: 167,
  },
  {
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    imageUrl: "https://example.com/images/stay.jpg",
    audioUrl: "https://example.com/audio/stay.mp3",
    duration: 141,
  },
  {
    title: "Flowers",
    artist: "Miley Cyrus",
    imageUrl: "https://example.com/images/flowers.jpg",
    audioUrl: "https://example.com/audio/flowers.mp3",
    duration: 200,
  },
  {
    title: "Bad Habits",
    artist: "Ed Sheeran",
    imageUrl: "https://example.com/images/bad-habits.jpg",
    audioUrl: "https://example.com/audio/bad-habits.mp3",
    duration: 231,
  },
  {
    title: "Starboy",
    artist: "The Weeknd ft. Daft Punk",
    imageUrl: "https://example.com/images/starboy.jpg",
    audioUrl: "https://example.com/audio/starboy.mp3",
    duration: 230,
  },
  {
    title: "Cruel Summer",
    artist: "Taylor Swift",
    imageUrl: "https://example.com/images/cruel-summer.jpg",
    audioUrl: "https://example.com/audio/cruel-summer.mp3",
    duration: 178,
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    imageUrl: "https://example.com/images/shape-of-you.jpg",
    audioUrl: "https://example.com/audio/shape-of-you.mp3",
    duration: 233,
  },
  {
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    imageUrl: "https://example.com/images/good-4-u.jpg",
    audioUrl: "https://example.com/audio/good-4-u.mp3   ",
    duration: 178,
  },
  {
    title: "Heat Waves",
    artist: "Glass Animals",
    imageUrl: "https://example.com/images/heat-waves.jpg",
    audioUrl: "https://example.com/audio/heat-waves.mp3",
    duration: 235,
  },
  {
    title: "Dynamite",
    artist: "BTS",
    imageUrl: "https://example.com/images/dynamite.jpg",
    audioUrl: "https://example.com/audio/dynamite.mp3",
    duration: 199,
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    imageUrl: "https://example.com/images/believer.jpg",
    audioUrl: "https://example.com/audio/believer.mp3",
    duration: 204,
  },
  {
    title: "Save Your Tears",
    artist: "The Weeknd",
    imageUrl: "https://example.com/images/save-your-tears.jpg",
    audioUrl: "https://example.com/audio/save-your-tears.mp3",
    duration: 215,
  },
  {
    title: "Industry Baby",
    artist: "Lil Nas X ft. Jack Harlow",
    imageUrl: "https://example.com/images/industry-baby.jpg",
    audioUrl: "https://example.com/audio/industry-baby.mp3",
    duration: 212,
  }
];

const seedSongs = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Song.deleteMany({});
    await Song.insertMany(songs);
    console.log("Songs seeded successfully");
  } catch (error) {
    console.error("Error seeding songs:", error);
  } finally {
    await mongoose.connection.close();
  }
};

seedSongs();
