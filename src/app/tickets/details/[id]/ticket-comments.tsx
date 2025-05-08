"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const comments = [
  {
    author: "Dave",
    date: "2027-01-01",
    content: "This is a comment from Dave",
  },
  {
    author: "Alice",
    date: "2027-01-02",
    content: "This is a comment from Alice",
  },
];

export function TicketComments() {
  return (
    <footer>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Comments
      </h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("TODO: Add comment");
        }}
      >
        <Textarea placeholder="Add a comment" className="mt-4" />
        <Button size="lg" className="w-full mt-4">
          Add comment
        </Button>
      </form>
      <section className="mt-8">
        {comments.map((comment, i) => (
          <Card key={comment.date} className={cn({ "mt-4": i > 0 })}>
            <CardHeader>
              <CardTitle>{comment.author}</CardTitle>
              <CardDescription>{comment.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{comment.content}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </footer>
  );
}
