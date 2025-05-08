import { TicketComments } from "./ticket-comments";

type Props = {
  params: {
    id: number;
  };
};

export default function TicketDetailsPage({ params }: Props) {
  return (
    <article className="border p-4">
      <header>
        <span className="font-bold">#{params.id}</span>
        <span className="inline-block mx-2">-</span>
        <span className="font-bold text-green-500">Open</span>
        <br />
        <small className="text-secondary-foreground">
          Created by{" "}
          <span className="font-bold text-accent-foreground">AuthorName</span>{" "}
          at <time>December 10th 2025</time>
        </small>
        <h2 className="mt-2 border-b pb-2 scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          Ticket title should be here
        </h2>
      </header>
      <section className="mt-4">
        Some details about the ticket should be here.
      </section>
      <div className="mt-16">
        <TicketComments />
      </div>
    </article>
  );
}
