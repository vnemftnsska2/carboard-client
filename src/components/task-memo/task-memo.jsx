import React from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar } from '@mui/material';
import { red } from '@mui/material/colors';

const TaskMemo = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            문
          </Avatar>
        }
        title="문경민"
        subheader="2021-01-01"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          카마스터 (카니발)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          고객성명
        </Typography>
        <Typography variant="body2" color="text.secondary">
          고객번호
        </Typography>
        <Typography variant="body2" color="text.secondary">
          전면
        </Typography>
        <Typography variant="body2" color="text.secondary">
          측면(1열)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          측면(2/3열)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          후면
        </Typography>
        <Typography variant="body2" color="text.secondary">
          파노라마
        </Typography>
        <Typography variant="body2" color="text.secondary">
          블랙박스
        </Typography>
        <Typography variant="body2" color="text.secondary">
          PPF
        </Typography>
        <Typography variant="body2" color="text.secondary">
          기타
        </Typography>
        <Typography variant="body2" color="text.secondary">
          코일매트
        </Typography>
        <Typography variant="body2" color="text.secondary">
          유리막보증[ ] 보증서발행[ ]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          출고서류: 복사[ ]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          출고날짜
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskMemo;