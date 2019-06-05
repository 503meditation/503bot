# °·.·°¯°·._.· Ｇｕｒｕ Ｂｏｔ ·._.·°¯°·.·°

https://twitter.com/503bot

## Run

Clone repo locally and make sure node is installed

```bash
$ cd ../503bot
$ node 503bot.js
```

## Config

### Tweet Body

To add new language simply open the `503bot.js` file and create a new line in the `guru_descriptor_dictionary` or `guru_object_dictionary` arrays

To add new kawaii faces, do the same in the `guru_kawaii_dictionary` array

### Images

To add new tweet images, add a new file to the `guru_images` folder within the project using the correct filename structure `guru{{N}}.jpg`, replacing {{N}} with a sequential number

Now update the `imageCount` variable within the `pick_random_image` function of `503bot.js` to the highest sequential number within the `guru_images` folder

> Note: the `pick_random_image` function will fail if it tries to call an image not included in the `guru_images` folder, so ensure all numbers are present and sequential!

## Directory Structure

```
~/503bot
└┬ 503bot.js
 ├─ config.js
 ├─ package-lock.json
 ├─ package.json
 ├─ README.md
 ├─ /guru_images
 |  ├─ guru1.jpg
 |  ├─ guru2.jpg
 |  └─ etc.
 ├─ /node_modules
 |  └─ ...
 ```
