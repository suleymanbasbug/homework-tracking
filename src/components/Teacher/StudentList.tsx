import React, { Dispatch, SetStateAction } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AddCircle } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import HomeworkList from "./HomeworkList";
import { useDispatch, useSelector } from "react-redux";
import { IStudent } from "../../types/student.type";
import { setSelectedStudent } from "../../store/actions/student";
type Props = {
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

const StudentList: React.FC<Props> = ({ setOpenDialog }): JSX.Element => {
  const dispatch = useDispatch();
  const { allStudents } = useSelector(({ students }: any) => students);
  const handleAddClick = (student: IStudent) => {
    setOpenDialog(true);
    dispatch(setSelectedStudent(student));
  };
  return (
    <div>
      {allStudents.length !== 0 ? (
        allStudents.map((student: IStudent) => (
          <Accordion key={student.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{`${student.name} ${student.surname}`}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
              <IconButton
                edge="end"
                sx={{ alignSelf: "flex-end" }}
                onClick={() => handleAddClick(student)}
              >
                <AddCircle />
              </IconButton>
              <Typography variant="h6">Homework List</Typography>
              <HomeworkList student={student} setOpenDialog={setOpenDialog}/>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Typography>No Student</Typography>
      )}
    </div>
  );
};

export default StudentList;
