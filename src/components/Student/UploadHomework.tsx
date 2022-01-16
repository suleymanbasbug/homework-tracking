import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedHomework } from "../../store/actions/homework";
import { styled } from "@mui/material/styles";

type Props = {
  open: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
};
const Input = styled("input")({
  display: "none",
});
const UploadHomework: React.FC<Props> = ({
  open,
  setOpenDialog,
}): JSX.Element => {
  const dispatch = useDispatch();
  const { selectedHomework } = useSelector(({ homeworks }: any) => homeworks);
  const handleClose = () => {
    dispatch(setSelectedHomework(null));
    setOpenDialog(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Upload Homework</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          disabled
          value={selectedHomework?.title}
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          disabled
          value={selectedHomework?.description}
          placeholder="Description"
          style={{
            maxWidth: "500px",
            width: "93%",
            marginTop: "20px",
            padding: "10px",
          }}
        />
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span" fullWidth>
            Upload
          </Button>
        </label>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadHomework;
