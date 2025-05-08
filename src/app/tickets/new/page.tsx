"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

export default function CreateTicket() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const handleCommentChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    alert("TODO: Add a new ticket");
  };

  return (
    <article>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Create a new ticket
      </h3>

      <form onSubmit={handleSubmit} className="mt-6">
        <Input
          value={title}
          onChange={handleTitleChange}
          placeholder="Add a title"
        />
        <Textarea
          value={description}
          onChange={handleCommentChange}
          placeholder="Add a comment"
          className="mt-4"
        />
        <Button type="submit" className="w-full mt-4">
          Create ticket now
        </Button>
      </form>
    </article>
  );
}
