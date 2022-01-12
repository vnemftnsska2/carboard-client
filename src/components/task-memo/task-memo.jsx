import React from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar, Button } from '@mui/material';
import { red } from '@mui/material/colors';

const TaskMemo = ({ task }) => {
  return (
    <Card sx={{ maxWidth: 400 }} onClick={() => {console.log(task.idx)}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            문
          </Avatar>
        }
        title="문경민"
        subheader={task.delivery_date}
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