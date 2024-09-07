import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Loader, LogOut } from "lucide-react";
import useCurrentUser from "@/features/auth/api/use-current-user";
import { useAuthActions } from "@convex-dev/auth/react";

export default function UserButton() {
  const { data, isLoading } = useCurrentUser();
  const { signOut } = useAuthActions();

  if (isLoading) {
    return <Loader className="size-4 animate-spin text-muted-foreground" />;
  }

  if (!data) {
    return null;
  }

  const { image, name, email } = data;
  const avatarFallback = name!.charAt(0).toUpperCase();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 hover:opacity-75 transition">
          <AvatarImage alt={name} src={image} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuLabel>
          <div>
            <p>{name}</p>
            <p className="text-xs text-muted-foreground">{email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={signOut}
          className="flex justify-between cursor-pointer"
        >
          <p>Logout</p>
          <DropdownMenuLabel>
            <LogOut className="size-4" />
          </DropdownMenuLabel>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
