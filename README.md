
# NexTube

## Overview
NexTube is a YouTube clone featuring secure account management, video uploads, user interactions, comment management, subscription handling, and personalized playlists.

## Features

- **Secure Account Management:** Facilitates secure account creation, login, and identity verification using industry-standard authentication processes.
- **Seamless Video Upload:** Ensures a smooth video uploading experience with efficient metadata processing like titles, descriptions, and tags.
- **Interact with Videos:** Enables users to like or dislike videos, enhancing engagement and providing valuable feedback to content creators.
- **Commenting System:** Allows users to leave comments and replies on videos, fostering community engagement.
- **Subscribe and Unsubscribe:** Users can subscribe to channels to stay updated on their favorite content, with the flexibility to unsubscribe.
- **Comprehensive Comment Management:** Enables users to leave comments, reply to comments, and engage in discussions around video content.
- **Personalized Playlists:** Lets users create and manage personalized playlists, organizing and accessing favorite content easily.

## Technologies Used

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JSON Web Tokens (JWT)**
- **Bcrypt**

### Frontend
- **React**
- **Tailwind CSS**

## Setup Instructions

1. **Clone the repository:**
   
   ```sh
   git clone https://github.com/harshil048/NexTube.git
   cd NexTube
   ```

3. **Install dependencies:**
   
   ```sh
   npm install
   ```

5. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:

   ```
   PORT=8000
   MONGODB_URI=YOUR_URI
   CORS_ORIGIN=http://localhost:5173
   ACCESS_TOKEN_SECRET=YOUR_KEY
   ACCESS_TOKEN_EXPIRY=1d
   REFRESH_TOKEN_SECRET=YOUR_KEY
   REFRESH_TOKEN_EXPIRY=10d
   CLOUDINARY_CLOUD_NAME=YOUR_NAME
   CLOUDINARY_API_KEY=YOUR_KEY
   CLOUDINARY_API_SECRET=YOUR_KEY
   ```

6. **Run the application:**
   
   ```sh
   npm start
   ```

7. **Access the application:**
   
   The backend will be running on `http://localhost:8000`

## API Endpoints

- **User Authentication:**
  
  - `POST /signup` - Create a new user account
  - `POST /login` - Log in to an existing account

- **Video Management:**
  
  - `POST /videos` - Upload a new video
  - `GET /videos` - Get a list of videos

- **Comment Management:**
  
  - `POST /videos/:videoId/comments` - Add a comment to a video
  - `GET /videos/:videoId/comments` - Get comments for a video

- **User Interactions:**
  
  - `POST /videos/:videoId/like` - Like a video
  - `POST /videos/:videoId/dislike` - Dislike a video

- **Subscription Management:
  
  - `POST /channels/:channelId/subscribe` - Subscribe to a channel
  - `POST /channels/:channelId/unsubscribe` - Unsubscribe from a channel

- **Playlist Management:**
  
  - `POST /playlists` - Create a new playlist
  - `GET /playlists` - Get user playlists
    
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
