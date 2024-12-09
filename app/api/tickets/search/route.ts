import tickets from "@/app/database";
import { NextRequest, NextResponse } from "next/server";

// equal to { seachParams} -> api/tickets/search?query=hello
// {query: "hello}"}
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  if(!query) return NextResponse.json(tickets);

  const filteredTickets = tickets.filter((ticket) => ticket.name.toLowerCase().includes(query.toLowerCase()));

  return NextResponse.json(filteredTickets);
}