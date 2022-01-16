import React from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar, } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import BuildIcon from '@mui/icons-material/Build';
import { red, green, grey, } from '@mui/material/colors';

const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

const TaskMemo = ({ task, openUpdateModal }) => {
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
    <Card sx={{ maxWidth: 400 }} elevation={6}>
      <CardHeader
        sx={{ bgcolor: grey[200] }}
        avatar={
          <Avatar sx={{ bgcolor: getStatusColor(task.payment_completed) }} aria-label="recipe">
            {getStatusIcon(task.payment_completed)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={() => { openUpdateModal(task) }}>
            <MoreVertIcon/>
          </IconButton>
        }
        title={<font size="4"><b>{task.car_type}</b></font>}
        subheader={ getDate(task.delivery_date) }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          카마스터: {task.car_master}
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
          코일매트: {task.coil_matt === 'E' ? '없음' : task.coil_matt === 'D' ? '딜러' : '카보드'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          유리막보증 [{task.glass_film === 'Y' ? <CheckIcon color="error" fontSize=''/> : <ClearIcon color="error" fontSize=''/>}]
          보증서발행 [{task.glass_film === 'Y' ? <CheckIcon color="error" fontSize=''/> : <ClearIcon color="error" fontSize=''/>}]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          출고서류 복사 [{task.release_doc === 'Y' ? <CheckIcon color="success" fontSize=''/> : <ClearIcon color="error" fontSize=''/>}]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          출고날짜: { getDate(task.release_date)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskMemo;