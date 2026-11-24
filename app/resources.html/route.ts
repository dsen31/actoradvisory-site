import { readFile } from "node:fs/promises";
import { auth } from "@clerk/nextjs/server";

export async function GET(request: Request) {
  const { userId } = await auth();
  const headers = { "Cache-Control": "private, no-store" };
  if (!userId) {
    return new Response(null, {
      status: 307,
      headers: { ...headers, Location: new URL("/resources-login", request.url).href },
    });
  }

  const html = await readFile("app/resources-content.html", "utf8");
  return new Response(html, {
    headers: { ...headers, "Content-Type": "text/html; charset=utf-8" },
  });
}
