import { serveResource } from "../serve-resource";

export function GET(request: Request) {
  return serveResource(request, "app/resources-content.html");
}
