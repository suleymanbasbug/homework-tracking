import React, { Dispatch, SetStateAction } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { AddCircle } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { IHomework } from "../../types/homework.type";
import { setSelectedHomework } from "../../store/actions/homework";

type Props = {
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

const HomeworkList: React.FC<Props> = ({ setOpenDialog }): JSX.Element => {
  const dispatch = useDispatch();
  const { allHomeworks } = useSelector(({ homeworks }: any) => homeworks);
  const { selectedTeacher } = useSelector(({ teachers }: any) => teachers);
  const [homeworkList, setHomeworkList] = React.useState<IHomework[]>([]);
  React.useEffect(() => {
    if (allHomeworks.length !== 0 && selectedTeacher) {
      setHomeworkList(
        allHomeworks.filter(
          (homework: IHomework) => homework.teacherId === selectedTeacher.id
        )
      );
    }
  }, [allHomeworks, selectedTeacher]);

  const handleEditClick = (homework: IHomework) => {
    setOpenDialog(true);
    dispatch(setSelectedHomework(homework));
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
                    aria-label="upload"
                    onClick={() => handleEditClick(homework)}
                  >
                    <AddCircle />
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
