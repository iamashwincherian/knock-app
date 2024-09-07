"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useCreateWorkspaceModal from "../store/use-create-workspace-modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useCreateWorkspace from "../api/use-create-workspace";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CreateWorkspaceModal() {
  const [open, setOpen] = useCreateWorkspaceModal();
  const { mutate, isPending } = useCreateWorkspace();
  const [name, setName] = useState("");
  const router = useRouter();

  const handleClose = () => setOpen(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(
      { name },
      {
        onSuccess(id) {
          toast.success("Workspace created!");
          router.push(`/workspaces/${id}`);
          handleClose();
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new workspace</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={name}
            disabled={isPending}
            minLength={3}
            placeholder="Workspace name eg. 'Work', 'Personal', 'Home'"
            onChange={(e) => setName(e.target.value)}
            autoFocus
            required
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={isPending}>
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
