import React, { useEffect } from "react";
import TeacherList from "../components/Student/TeacherList";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import HomeworkList from "../components/Student/HomeworkList";
import { useDispatch } from "react-redux";
import { getAllTeachers } from "../store/actions/teacher";
import { getAllHomeworks } from "../store/actions/homework";
import UploadHomework from "../components/Student/UploadHomework";

const Student: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTeachers());
    dispatch(getAllHomeworks());
  }, [dispatch]);
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);

  return (
    <Container sx={{ mt: 10, display: "flex" }}>
      <Card sx={{ minWidth: 300 }}>
        <Typography sx={{ p: 2 }} variant="h6">
          Teacher List
        </Typography>
        <TeacherList />
      </Card>
      <Card sx={{ minWidth: 300, flexGrow:1, ml:2}}>
        <Typography sx={{ p: 2 }} variant="h6">
          Homework List
        </Typography>
        <HomeworkList setOpenDialog={setOpenDialog}/>
      </Card>
      <UploadHomework open={openDialog} setOpenDialog={setOpenDialog}/>
    </Container>
  );
};

export default Student;
