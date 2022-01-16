import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedHomework, addHomework } from "../../store/actions/homework";
import { setSelectedStudent } from "../../store/actions/student";
import { ITeacher } from "../../types/teacher.type";
import { IHomework } from "../../types/homework.type";
type Props = {
  open: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddEditHomework: React.FC<Props> = ({
  open,
  setOpenDialog,
}): JSX.Element => {
  const dispatch = useDispatch();
  const { selectedHomework } = useSelector(({ homeworks }: any) => homeworks);
  const { selectedStudent } = useSelector(({ students }: any) => students);
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [selectedTeacher, setSelectedTeacher] = React.useState<ITeacher | null>(
    null
  );

  React.useEffect(() => {
    const localStorageUser = JSON.parse(
      localStorage.getItem("authUser") || "{}"
    );
    setSelectedTeacher(localStorageUser);
  }, []);

  const handleClose = () => {
    setOpenDialog(false);
    setTitle("");
    setDescription("");
    dispatch(setSelectedHomework(null));
    dispatch(setSelectedStudent(null));
  };

  React.useEffect(() => {
    if (selectedHomework) {
      setTitle(selectedHomework.title);
      setDescription(selectedHomework.description);
    }
  }, [selectedHomework]);

  const handleSave = () => {
    const homework: IHomework = {
      title,
      description,
      studentId: selectedStudent.id,
      teacherId: selectedTeacher ? selectedTeacher.id : 0,
      id: new Date().getTime(),
    };
    if (selectedHomework) {
      // For edit homework
    } else {
      dispatch(addHomework(homework));
    }
    setOpenDialog(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {selectedHomework ? "Edit Homework" : "Add Homework"}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          variant="standard"
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          placeholder="Description"
          style={{
            maxWidth: "500px",
            width: "93%",
            marginTop: "20px",
            padding: "10px",
          }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEditHomework;
