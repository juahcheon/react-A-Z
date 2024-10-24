import Link from "next/link";
import { ReactNode } from "react";

export default function BoardLayout({ 
  children,
  boardList,
  comments,
  admin,
}: { 
  children: ReactNode
  boardList: ReactNode
  comments: ReactNode
  admin: ReactNode
}) {
  const isAdmin = true;
  return(
  <>
  <nav>
    <Link href={'/board'}>Board</Link>{"  "}
    <Link href={'/board/settings'}>Setiings</Link>
  </nav>
    {isAdmin && admin}
    {children}
    {boardList}
    {comments}
  </>
);
}
