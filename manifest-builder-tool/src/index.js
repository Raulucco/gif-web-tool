#! /usr/bin/env node
const fs = require("fs");
const path = require("path");
const mergeImages = require("merge-images");
const { Canvas, Image } = require("canvas");
const rawManifest = require("../../server/layers-api/layers.json");
const { stderr } = require("process");

async function addEntry(layers) {
  try {
    const base64 = await mergeImages(
      layers.map((layer) => {
        // const cwd = process.cwd();
        // process.chdir(path.join(__dirname, '../'));
        const _path = path.join(
            './../',
          "server/public",
          layer //.replace(/(\s+)/g, '\\$1')
        );
        console.log(process.cwd(), _path);
        // process.chdir(cwd);
        
        return _path;
      }),
      {
        Canvas: Canvas,
        Image: Image,
      }
    );
    return base64;
  } catch (e) {
    console.log(e, layers);
    process.exit(-1);
  }
}

let processDidFinish = false;

process.on("beforeExit", (code) => {
  if (!processDidFinish) {
    setTimeout(() => {}, 0);
  } else {
    console.log("process ended");
  }
});

async function init() {
  const promises = [];
  for (let i = 0; i < rawManifest.length; i++) {
    promises.push(addEntry(rawManifest[i].layers));
  }

  console.log("aloha");

  try {
    const thumbnails = await Promise.all(promises);
    console.log(thumbnails.length);
    const files = await Promise.all(
      thumbnails.map(async (thumbnail, i) => {
        const [mimeType, img] = thumbnail.split(";base64,");
        const extension = mimeType.split("/").pop();
        console.log(mimeType);
        try {
            const cwd = process.cwd();
            process.chdir(path.join(__dirname, '../'));
          const file = await fs.promises.writeFile(
            path.join(
                './../',
              `server/public/thumbnails/${i + 1}.${extension}`
            ),
            img,
            "base64"
          );
          process.chdir(cwd);
          return file;
        } catch (e) {
          console.log(e);
          stderr.emit(e);
          process.exit(-1);
        } 
      })
    );

    console.log(files.length);
  } catch (e) {
    console.log(e);
    stderr.emit(e);
    process.exit(-1);
  } finally {
    console.log("did finish");
    processDidFinish = true;
  }
}

init();
