import { atom, useAtom } from "jotai";

const modalState = atom(false);

const useCreateWorkspaceModal = () => useAtom(modalState);

export default useCreateWorkspaceModal;
