import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserAvatar({ size = 32 }: { size?: number }) {
  return (
    <Avatar className="cursor-pointer" style={{ width: size, height: size }}>
      <AvatarImage src="/user.png"/>
      <AvatarFallback>Avatar</AvatarFallback>
    </Avatar>
  );
}
