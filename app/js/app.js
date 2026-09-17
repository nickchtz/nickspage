import './libs/alpine.js';

import { config } from "./config.js";
import { router } from "./router.js";
import { routes } from "./routes.js";

router.init(routes, config);