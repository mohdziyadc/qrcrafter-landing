import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import SignUp from "./SignUpForm";

type Props = {
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

const WaitlistDialog = ({ openDialog, setOpenDialog }: Props) => {
  return (
    <div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="mr-4 ml-4">
          <DialogHeader>
            <DialogTitle className="font-bold">
              Sign up to QRCrafter
            </DialogTitle>
            <DialogDescription>Join the waitlist here</DialogDescription>
          </DialogHeader>
          <SignUp />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WaitlistDialog;
