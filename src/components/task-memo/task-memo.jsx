import React from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar, } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';
import BuildIcon from '@mui/icons-material/Build';
import { red, green, grey, } from '@mui/material/colors';

const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

const TaskMemo = ({ task, openMadal }) => {
  const getStatusColor = (completed) => {
    if (completed === 'Y') {
      return green[400];
    }
    return red[400];
  };

  const getStatusIcon = (completed) => {
    if (completed === 'Y') {
      return <CheckIcon fontSize='large'/>;
    }
    return <BuildIcon />;
  };

  const getDate = (date) => {
    if (date) {
      const formatDate = date.substr(0, 10);
      const weekNum = new Date(formatDate).getDay();
      const weekStr = week[weekNum];
      return `${formatDate} ${weekStr}`;
    }
    return '-'
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        sx={{ bgcolor: grey[200] }}
        avatar={
          <Avatar sx={{ bgcolor: getStatusColor(task.payment_completed) }} aria-label="recipe">
            {getStatusIcon(task.payment_completed)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon onClick={() => { openMadal(task.idx) }}/>
          </IconButton>
        }
        title={`no. ${task.idx}`}
        subheader={ getDate(task.delivery_date) }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {task.car_master} ({task.car_type})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          고객성명: {task.customer_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          고객번호: {task.customer_phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          전면: {task.car_front}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          측면(1열): {task.car_side_a}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          측면(2/3열): {task.car_side_b}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          후면: {task.car_back}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          파노라마: {task.panorama}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          블랙박스: {task.blackbox}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          PPF: {task.ppf}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          기타: {task.etc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          코일매트: {task.coil_matt}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          유리막보증[ ] 보증서발행[ ]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          출고서류: 복사[ ]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          출고날짜: {task.release_date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskMemo;