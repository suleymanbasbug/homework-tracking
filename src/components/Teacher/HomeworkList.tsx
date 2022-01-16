import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { Edit } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { IHomework } from "../../types/homework.type";
import { setSelectedHomework } from "../../store/actions/homework";
import { setSelectedStudent } from "../../store/actions/student";
import { IStudent } from "../../types/student.type";
type Props = {
  student: IStudent;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const HomeworkList: React.FC<Props> = ({
  student,
  setOpenDialog,
}): JSX.Element => {
  const dispatch = useDispatch();
  const { allHomeworks } = useSelector(({ homeworks }: any) => homeworks);
  const [homeworkList, setHomeworkList] = React.useState<IHomework[]>([]);
  React.useEffect(() => {
    if (allHomeworks.length !== 0) {
      setHomeworkList(
        allHomeworks.filter(
          (homework: IHomework) => homework.studentId === student.id
        )
      );
    }
  }, [allHomeworks, student]);

  const handleEditClick = (homework: IHomework) => {
    dispatch(setSelectedHomework(homework));
    dispatch(setSelectedStudent(student));
    setOpenDialog(true);
  };
  return (
    <React.Fragment>
      {homeworkList.length !== 0 ? (
        <List>
          {homeworkList.map((homework: IHomework) => (
            <React.Fragment key={homework.id}>
              <Divider />
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEditClick(homework)}
                  >
                    <Edit />
                  </IconButton>
                }
              >
                <ListItemText primary={homework.title} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      ) : (
        <Typography>No Homework</Typography>
      )}
    </React.Fragment>
  );
};

export default HomeworkList;
