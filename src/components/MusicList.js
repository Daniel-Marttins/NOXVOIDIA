import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from '@mui/material/Button';
import DeathRace from '../music/Deathracer.mp3';
import Between from '../music/In Between.mp3';
import Traveler from '../music/Data Traveler.mp3';
import imgDeathRace from '../imgs/5581713.jpg';
import imgBetween from '../imgs/5642188.jpg';
import imgTraveler from '../imgs/SL_032321_41610_13.jpg';

const musicList = [
  {
    id: 1,
    title: 'DeathRace',
    artist: 'TurboLash',
    album: 'Topic',
    coverUrl: imgDeathRace,
    audioUrl: DeathRace,
  },
  {
    id: 2,
    title: 'In Between',
    artist: 'marvel83',
    album: 'Genesis',
    coverUrl: imgBetween,
    audioUrl: Between,
  },
  {
    id: 3,
    title: 'Data Traveler',
    artist: 'Lazerknight',
    album: 'Traveler',
    coverUrl: imgTraveler,
    audioUrl: Traveler,
  },
  // Adicione mais músicas conforme necessário
];

const MusicList = ({ handleClose }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudio, setCurrentAudio] = useState(null);
    const audioRef = useRef(new Audio());

    const [volume, setVolume] = useState(0.1);
  
    const handlePlayPause = (audioUrl) => {
      if (!isPlaying) {
        if (currentAudio !== audioUrl) {
          audioRef.current.src = audioUrl;
          setCurrentAudio(audioUrl);
        }
  
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
  
      setIsPlaying(!isPlaying);
    };
  
    const handleSkipNext = () => {
        const currentIndex = musicList.findIndex((music) => music.audioUrl === currentAudio);
        const nextIndex = (currentIndex + 1) % musicList.length;
        const nextAudioUrl = musicList[nextIndex].audioUrl;
    
        audioRef.current.src = nextAudioUrl;
        setCurrentAudio(nextAudioUrl);
        audioRef.current.play();
        setIsPlaying(true);
    };
  
    const handleAudioEnded = () => {
      // Chamado quando a música atual chega ao fim
      setIsPlaying(false);
    };

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
    
        if (!isNaN(newVolume) && newVolume >= 0 && newVolume <= 1) {
            setVolume(newVolume);
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <Box sx={{ width: '700px', maxWidth: '350px', maxHeight: '400px', overflowY: 'auto', padding: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <Button variant="outlined" onClick={handleClose} sx={{ marginBottom: '10px' }}>
                Fechar
            </Button>
            {musicList.map((music) => (
                <Card key={music.id} sx={{ marginBottom: 2 }}>
                <CardMedia
                    component="img"
                    alt={music.title}
                    height="140"
                    image={music.coverUrl}
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                    {music.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                    {music.artist} - {music.album}
                    </Typography>
                </CardContent>
                <div>
                    <IconButton onClick={() => handlePlayPause(music.audioUrl)} aria-label="play/pause">
                      {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
                    <IconButton onClick={handleSkipNext} aria-label="skip next">
                      <SkipNextIcon />
                    </IconButton>
                </div>
                <div>
                    <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    style={{ width: '80px' }}
                    />
                </div>
                </Card>
            ))}
        </Box>
    );
};

export default MusicList;
