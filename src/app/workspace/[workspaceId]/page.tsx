"use client";

import useGetWorkspace from "@/features/workspaces/api/use-get-workspace";
import useWorkspace from "@/hooks/use-workspace-id";

export default function WorkspaceIdPage() {
  const workspaceId = useWorkspace();
  const { data } = useGetWorkspace({ id: workspaceId });
  return (
    <div>
      Workspace <small>{data?.name}</small>
    </div>
  );
}
