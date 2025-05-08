import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { users } from "./mock";
import { cn } from "@/lib/utils";

export default function UserList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Job</TableHead>
          <TableHead className="w-32">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.name}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.job}</TableCell>
            <TableCell
              className={cn("flex items-center", {
                "text-green-500": user.isAvailable,
                "text-red-600": !user.isAvailable,
              })}
            >
              <span className="inline-block w-1 h-1 rounded-full bg-current mr-2">
                &nbsp;
              </span>
              <span>{user.isAvailable ? "Available" : "Not available"}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
