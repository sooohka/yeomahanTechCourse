import { IncomingMessage, ServerResponse } from "http";
import AppView from "../view/app.view";

class AppController {
  static async renderHome(req: IncomingMessage, res: ServerResponse) {
    const file = await AppView.home();
    res.write(file);
    res.end();
  }

  static async renderNotFound(req: IncomingMessage, res: ServerResponse) {
    const file = await AppView.notFound();
    res.write(file);
    res.end();
  }
}

export default AppController;
