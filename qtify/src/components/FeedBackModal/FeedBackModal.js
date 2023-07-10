import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "../Button/Button";
import styles from "./FeedBackModal.module.css";
import { IconButton, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 526,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  borderRadius: 3,
};

export default function FeedBackModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        Message={"Give feedBack"}
        buttonColor={"--color-Primary"}
        backgroundColor={"black"}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.header}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Feed Back
            </Typography>
          </div>
          <IconButton
            sx={{ position: "absolute", left: "460px", top: "10px" }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Stack
            spacing={2}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "auto" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="standard"
            />
            <TextField
              id="outlined-basic"
              label="Email ID"
              variant="standard"
            />
            <TextField id="outlined-basic" label="Subject" variant="standard" />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              variant="standard"
            />
            <Button
              disabled
              Message={"Submit Feedback"}
              buttonColor={"--color-white"}
              backgroundColor={"#34c94b"}
            />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
