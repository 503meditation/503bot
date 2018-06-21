var Twit = require('twit')

var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);

var imageCount;
var descriptorCount;
var kawaiiCount;

function pick_random_image(){ // retrieve random choice from total number of available images
    imageCount = 53
    return getRandomNumber(imageCount);
}

function pick_random_text(){ // dictionarys with 3 seperate arrays storing the various text values
  var guru_descriptor_dictionary = [
    'meditate',
    'reflect',
    'ruminate',
    'consumer',
    'secret',
    'hope',
    'align',
    'focus',
    'swing',
    'enlighten',
    'bent',
    'arklight',
    'bathing',
    'hush',
    'synthetic',
    'channel',
    'warm',
    'gleaming',
    'tender',
    'glistening',
    'reclining',
    'experience',
    'glow',
    'modulate',
    'simmer',
    'placate',
    'mellow',
    'springy',
    'incandescent',
    'ethereal',
    'lush',
    'pressurized',
    'crafted',
    'loved',
    'verging',
    'dubbed',
    'soften',
    'erudite',
    'elegant',
    'pan',
    'improving',
    'elevate',
    'tranquil',
    'serene',
    'wandering',
    'dissolve',
    'embody',
  ];
  var guru_object_dictionary = [
    'guru',
    'meditation',
    'reflection',
    'rumination',
    'consumer',
    'comfort',
    'ambience',
    'splendor',
    'beam',
    'joy',
    'secret',
    'hope',
    'vigor',
    'spring',
    'bliss',
    'verge',
    'craft',
    'love',
    'theme',
    'saga',
    'unplace',
    'glory',
    'sheen',
    'orientation',
    'crystal',
    'wildflower',
    'knowledge',
    'bloom',
    'wheel',
    'awareness',
    'shimmer',
    'lore',
    'tenderness',
    'entropy',
    'belief',
    'training',
    'movement',
    'truth',
    'experience',
    'alignment',
    'prescience',
    'splendor',
    'clairvoyance',
    'perception',
    'perceptivity',
    'elevation',
    'drift',
    'rapture',
    'wisdom',
    'sagaciousness',
    'poise',
    'focus',
    'swing',
    'groove',
    'enlightenment',
    'glow',
    'steps',
    'meander',
    'console',
    'warp',
    'reality',
    'harmony',
    'landscape',
    'headspace',
    'cycle',
    'guide',
  ];
  var guru_kawaii_dictionary = [
    '≧◡≦',
    '(✿◠‿◠)',
    '◎[▪‿▪]◎',
    '(▰˘◡˘▰)',
    'ↁ_ↁ',
    'ᇂﮌᇂ)',
    '(●´ω｀●)',
    '♥╣[-_-]╠♥',
    '★~(◡﹏◕✿)',
    '（⌒_⌒）',
    '(~￣▽￣)~',
    'v(=∩_∩=)ﾌ',
    '(｡♥‿♥｡)',
    '(n˘v˘•)¬',
    'ヘ(^_^ヘ)',
    '(╯3╰)',
    'ｖ(⌒ｏ⌒)ｖ♪',
    '＼（○＾ω＾○）／',
    '◖♪_♪|◗',
    '✌♫♪˙‿˙♫♪✌',
    '♨(⋆‿⋆)♨',
    '˘˛˘',
    '♪ ♬ ヾ(´︶`♡)ﾉ ♬ ♪',
    '(づ￣ ³￣)づ',
    '۹⌤_⌤۹',
    'ヾ(*´∀｀*）ノ',
    '乂◜◬◝乂',
    '{•̃̾_•̃̾}',
    '(″･ิ_･ิ)っ',
    '|˚–˚|',
    '〠_〠',
    '༺‿༻',
    '(・∀・ )',
    '(╯ಊ╰)',
    '((((゜д゜)))',
    '( ﾟ,_ゝﾟ)',
    '⊙▃⊙',
    '˚ㄥ˚',
    '۞_۞',
    '(ு८ு)',
    '(◠‿◠✿)',
    'ʕ·ᴥ·ʔ',
    '(°∀°)',
    '!⑈ˆ~ˆ!⑈',
    'ヅ',
    '≖‿≖',
    '三三ᕕ( ᐛ )ᕗ',
    '(◔ᴥ◔)',
    '｡(✿‿✿)｡',
    '(¬‿¬)',
    '(∩▂∩)',
    '१✌˚◡˚✌५',
    '(ᅌᴗᅌ* )',
    '(●⌒∇⌒●)',
    '⊂◉‿◉つ',
    '.ʕʘ‿ʘʔ.',
    '٩(̾●̮̮̃̾•̃̾)۶',
    '(´･ω･`)',
    '( ͡° ͜ʖ ͡°)',
    '∑(゜Д゜;)',
    '°٢°',
    'ಇ( ˵ᐛ ˵)ಇ',
    '(─‿‿─)',
    '❀◕ ‿ ◕❀',
    '(￣▽￣)/♫•*¨*•.¸¸♪   ',
    '♪♪♪ ヽ(ˇ∀ˇ )ゞ   ',
    '( ･ิ ͜ʖ ･ิ)',
    '♪♪(oᐛ)o～♪♪',
    '（｡>‿‿<｡ ）',
    '( ͡☉⁄ ⁄ ͜⁄ ͜ʖ̫⁄ ⁄ ͡☉)',
    '＼ ⍢⃝／',
    ' ⍤⃝',
    ' ⍢⃝',
    'ʕっ˘ڡ˘ςʔ',
    'Ƹ̵̡Ӝ̵̨̄Ʒ',
    '(´•ω•｀♥)',
  ];
  descriptorCount = guru_descriptor_dictionary.length
  objectCount = guru_object_dictionary.length
  kawaiiCount = guru_kawaii_dictionary.length
  return guru_descriptor_dictionary[getRandomNumber(descriptorCount)] + guru_kawaii_dictionary[getRandomNumber(kawaiiCount)] + guru_object_dictionary[getRandomNumber(objectCount)];
}

function getRandomNumber(count) { // gives a random number in the array range, will never be the previous selection
    var min = 1,
        max = count,
        random;

    do {
        random = Math.floor(Math.random() * (max - min)) + min;
    } while (random === getRandomNumber.last);
    getRandomNumber.last = random;
    return random;
};

function upload_random_image(){ //uploads chosen text and image combos to twitter via API
  console.log('Opening an image...');
  var image_path = path.join(__dirname, '/guru_images/' + 'guru' + pick_random_image() + '.jpg'),
      b64content = fs.readFileSync(image_path, { encoding: 'base64' });

  console.log('Uploading image...',image_path.substr(image_path.length - 6));

  T.post('media/upload', { media_data: b64content }, function (err, data, response) {
    if (err){
      console.log('ERROR');
      console.log(err);
    }
    else{
      console.log('Image uploaded!');

      T.post('statuses/update', {
        media_ids: new Array(data.media_id_string),
        status: pick_random_text()
      },
        function(err, data, response) {
          if (err){
            console.log('Error!');
            console.log(err);
          }
          else{
            console.log('Posted a Tweet!');
          }
        }
      );
    }
  });
}

function secsToTime(time) //takes in seconds and outputs a nice time format
{
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

function runBot() { //loops the main bot function using a random trigger time between min and max
  var min = 90,
      max = 28800; // 1.5 mins - 8 hours interval
  var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between values
  console.log('Next tweet triggered in ' + secsToTime(rand));
  upload_random_image()
  setTimeout(runBot, rand * 1000);
}

runBot()