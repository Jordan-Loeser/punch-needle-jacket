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
  ["draftBase", "draftBentBase"],
  ["draftFront", "draftBentFront"],
  ["draftBack", "draftBentBack"],
  ["draftSleeve", "draftBentSleeve"],
  ["draftTopSleeve", "draftBentTopSleeve"],
  ["draftUnderSleeve", "draftBentUnderSleeve"],
]) {
  Jordan.prototype[m[1]] = function (part) {
    return new Bent(this.settings)[m[0]](part);
  };
}

console.log(Jordan.prototype);

// Attach the draft methods to the prototype
Jordan.prototype.draftBox = draftBox;

export default Jordan;
