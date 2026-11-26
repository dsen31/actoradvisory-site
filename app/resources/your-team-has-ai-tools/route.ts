import { serveResource } from "../../serve-resource";

export function GET(request: Request) {
  return serveResource(request, "app/ai-adoption-article.html");
}
