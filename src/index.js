import freesewing from "@freesewing/core";
import plugins from "@freesewing/plugin-bundle";
import Bent from "@freesewing/bent";
import config from "../config";
// Parts
import draftBox from "./box";
import draftFront from "./front";

// Create new design
const Jordan = new freesewing.Design(config, plugins);

// Attach draft methods from Bent to prototype
for (let m of [
  "draftBase",
  "draftFront",
  "draftBack",
  "draftSleeve",
  "draftTopSleeve",
  "draftUnderSleeve",
]) {
  Jordan.prototype[m] = function (part) {
    return new Bent(this.settings)[m](part);
  };
}

// Attach the draft methods to the prototype
Jordan.prototype.draftBox = draftBox;

export default Jordan;
