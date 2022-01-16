import React, { useEffect } from "react";
import { Typography, Card, Container } from "@mui/material";
import StudentList from "../components/Teacher/StudentList";
import { useDispatch } from "react-redux";
import { getAllStudent } from "../store/actions/student";
import { getAllHomeworks } from "../store/actions/homework";
import AddEditHomework from "../components/Teacher/AddEditHomework";

export default function Teacher() {
  const dispatch = useDispatch();
  const [openHomeworkDialog, setOpenHomeworkDialog] =
    React.useState<boolean>(false);
  useEffect(() => {
    dispatch(getAllStudent());
    dispatch(getAllHomeworks());
  }, [dispatch]);
  return (
    <Container sx={{ mt: 10 }}>
      <Card sx={{ minWidth: 300 }}>
        <Typography sx={{ p: 2 }} variant="h6">
          Student List
        </Typography>
        <StudentList setOpenDialog={setOpenHomeworkDialog} />
        <AddEditHomework
          open={openHomeworkDialog}
          setOpenDialog={setOpenHomeworkDialog}
        />
      </Card>
    </Container>
  );
}

