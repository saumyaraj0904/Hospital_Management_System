import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "dsui9ptiv",
  api_key: "199986135414274",
  api_secret: "Yml7L6da120ia4uJISy9i54gn60",
});

app.listen(4000, () => {
  console.log(`Server listening at port 4000`);
});
