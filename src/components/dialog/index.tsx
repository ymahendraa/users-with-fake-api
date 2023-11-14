import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

interface DialogCustomProps {
    title: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

const DialogCustom: React.FC<DialogCustomProps> = ({
    open,
    setOpen,
    children,
    title
}) => {
    return (
        <Dialog open={open} handler={setOpen} className="overflow-y-auto max-h-[500px]">
            <DialogHeader>{title}</DialogHeader>
            <DialogBody>
                {children}
            </DialogBody>

        </Dialog>
    );
}

export default DialogCustom;