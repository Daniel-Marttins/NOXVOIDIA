import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import BookIcon from '@mui/icons-material/Book'; // Importando o ícone do livro
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import History from './History';
import MusicList from './MusicList';

export default function ControlledOpenSpeedDial() {
    const [open, setOpen] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const [showMusicList, setShowMusicList] = useState(false);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const handleClickOpen = (scrollType) => {
      setShowHistory(true);
    };

    const handleMusicListClick = () => {
      setShowMusicList(true);
    };

    const handleHistoryClose = () => {
      setShowHistory(false);
      handleClose();
    };

    const handleMusicListClose = () => {
      setShowMusicList(false);
      handleClose();
    };
  
    return (
      <Box sx={{
        width: showMusicList ? '100%' : '10%',
        height: '50%',
        zIndex: '000',
        transition: 'width 0.3s ease-in-out',
      }}>
        {showHistory ? (
          <History scrollType="paper" handleClose={handleHistoryClose} />
        ) : showMusicList ? (
          <MusicList handleClose={handleMusicListClose} />
        ) : (
          <SpeedDial
            ariaLabel="SpeedDial controlled open example"
            sx={{ position: 'absolute', top: 0, right: 20 }}
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
          >
            <SpeedDialAction
              key="Historia"
              icon={<BookIcon />}
              tooltipTitle="Historia"
              onClick={() => handleClickOpen('paper')}
            />
            <SpeedDialAction
              key="Musicas"
              icon={<MusicNoteIcon />}
              tooltipTitle="Musicas"
              onClick={handleMusicListClick}
            />
          </SpeedDial>
        )}
      </Box>
    );
  }