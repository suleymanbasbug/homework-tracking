import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTeacher } from "../../store/actions/teacher";
import { ITeacher } from "../../types/teacher.type";

const TeacherList: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { allTeachers } = useSelector(({ teachers }: any) => teachers);
  const handleClick = (teacher: ITeacher) => {
    dispatch(setSelectedTeacher(teacher));
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {allTeachers.map((teacher: any) => (
        <React.Fragment key={teacher.id}>
          <Divider />
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleClick(teacher)}>
                  <ListItemText primary={teacher.name} />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>{" "}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default TeacherList;
