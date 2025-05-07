import { Ticket } from "@/lib/types";
import TicketList from "./ticket-list";

const dummyTickets: Ticket[] = [
  {
    id: 1,
    title: "Read Supabase book",
    status: "In progress",
    author: "Riccardo",
  },
  {
    id: 2,
    title: "Write my own book",
    status: "Not started",
    author: "Riccardo",
  },
  {
    id: 3,
    title: "Make videos for the YouTube channel",
    status: "Done",
    author: "David",
  },
];

export default function TicketListPage() {
  return (
    <div>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Ticket List
      </h2>
      <div className="mt-4">
        <TicketList tickets={dummyTickets} />
      </div>
    </div>
  );
}
