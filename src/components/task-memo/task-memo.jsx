import React from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import BuildIcon from '@mui/icons-material/Build';
import PaymentCompletedImg from '../../static/images/payment_completed.png';
import { red, pink, blue, cyan, teal, deepOrange, grey, } from '@mui/material/colors';

import AndroidIcon from '@mui/icons-material/Android';
import PushPinIcon from '@mui/icons-material/PushPin';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const TaskMemo = ({ task, openUpdateModal }) => {
  const getStatusColor = (status) => {
    if (status === 1) { //입고예정
      return cyan[400];
    } else if (status === 2) { //작업전
      return teal[600];
    } else if (status === 3) { //금일작업
      return pink[500];
    } else if (status === 4) { //작업완료
      return deepOrange[500];
    } else if (status === 5) { //출고
      return blue[700];
    }
  };

  const getStatusIcon = (status) => {
    if (status === 1) { //입고예정
      return <AndroidIcon/>
    } else if (status === 2) { //작업전
      return <PushPinIcon/>
    } else if (status === 3) { //금일작업
      return <BuildIcon/>;
    } else if (status === 4) { //작업완료
      return <MilitaryTechIcon fontSize="large"/>;
    } else if (status === 5) { //출고
      return <TimeToLeaveIcon fontSize="large"/>;
    }
  };

  const getDate = (date) => {
    if (date) {
      const formatDate = date.substr(0, 10);
      const timeDate = date.substr(11);
      const weekNum = new Date(formatDate).getDay();
      const weekStr = week[weekNum];
      return `${formatDate} ${weekStr} ${timeDate ? `‣ ${timeDate}`:''}`;
    }
    return <font color={red[400]}>미정</font>
  };

  const checkOrClear = (data) => {
    if (data === 'Y') {
      return <CheckIcon color="success" fontSize=''/>;
    }
    return <ClearIcon color="error" fontSize=''/>;
  }

  return (
    <Card sx={{ maxWidth: 400 }} elevation={6}>
      <CardHeader
        sx={{ bgcolor: grey[200] }}
        avatar={
          <Avatar sx={{ bgcolor: getStatusColor(task.status) }} aria-label="recipe">
            {getStatusIcon(task.status)}
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
          <b>‣ 카마스터</b>: {task.car_master}
          <img src={PaymentCompletedImg} style={{ position: 'static', zIndex: 1, float: 'right'}} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>‣ 고객성명</b>: {task.customer_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>‣ 고객번호</b>: {task.customer_phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>‣ 전면</b>: {task.car_front}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>‣ 측면(1열)</b>: {task.car_side_a}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>‣ 측면(2/3열)</b>: {task.car_side_b}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>‣ 후면</b>: {task.car_back}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>‣ 파노라마</b>: {task.panorama}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>‣ 블랙박스</b>: {task.blackbox}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>‣ PPF</b>: {task.ppf}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>‣기타</b>: {task.etc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>‣ 코일매트</b>: {task.coil_matt === 'E' ? '없음' : task.coil_matt === 'D' ? '딜러' : '카보드'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>‣ 보증서발행</b>: 유리막 [{checkOrClear(task.glass_film)}] 썬팅 [{checkOrClear(task.tinting)}]
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>‣ 출고서류</b>: 복사 [{checkOrClear(task.release_doc)}]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>‣ 출고날짜</b>: {getDate(task.release_date)} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
          <b>‣ 결제금액</b>: {task.payment_amount.toLocaleString('kr-KO')} <b>‣ 결제방식</b>: {task.payment_type}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskMemo;