const db = require('./index.js');
const faker = require('faker');



const dbQuery = (sql) => {
  db.con.query(sql, (err, result)=>{
    if (err) {
      console.log(`Database Seeding Error: ${sql}`);
    }
  });
};

//iife creates database structure
(()=> {
  let sqlString = 'DROP DATABASE IF EXISTS recipes;';
  dbQuery(sqlString);

  sqlString = 'CREATE DATABASE recipes;';
  dbQuery(sqlString);

  sqlString = 'USE recipes;';
  dbQuery(sqlString);

  sqlString = 'CREATE TABLE recipes (\
    id INT NOT NULL AUTO_INCREMENT, \
    name VARCHAR(255) NOT NULL, \
    PRIMARY KEY (id)\
    );';
  dbQuery(sqlString);

  sqlString = 'CREATE TABLE steps (\
    recipes_id INT NOT NULL, \
    id INT NOT NULL AUTO_INCREMENT, \
    number INT NOT NULL, \
    text TEXT NOT NULL, \
    hasVideos TINYINT(1) NOT NULL, \
    PRIMARY KEY (id), \
    FOREIGN KEY(recipes_id) \
      REFERENCES recipes(id) \
  );';
  dbQuery(sqlString);

  sqlString = 'CREATE TABLE  videos (\
    steps_id INT NOT NULL, \
    url VARCHAR(255) NOT NULL, \
    PRIMARY KEY (id), \
    FOREIGN KEY(steps_id) \
      REFERENCES steps(id) \
  );';
  dbQuery(sqlString);
  console.log('Success: Database Built');
})();

var videoUrls = [
  'https://assets.bonappetit.com/clips/5e908f11a19ab80008f8f97e/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_01_WARM_OIL_BUTTERMILK_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e908f11d7d6500008c507e2/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_02_EGGS_YEAST_BROWN_SUGAR_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e908f127933750008e30766/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_03_FLOUR_BAKING_SODA_SALT_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e908f13c5c4bd0008e9aac8/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_04_SCRAPE_KNEAD_DOUGH_v2.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e908f137933750008e30768/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_05_FOLD_OIL_COVER_DOUGH_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e908f140964620008c3bd70/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_05a_PIT_SOAK_DATES__1.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e908f152a386f0008e97205/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_05b_PUREE_DATES_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e908f1575159d0008ca4663/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_06a_GREASE_SKILLET_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e908f172fa8a600088c47ba/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_06b_ROLL_MEASURE_DOUGH__1.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e908f1731e3840009ad5500/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_06c_DOLLOP_PUREE_BROWN_SUGAR_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e908f1731e3840009ad5501/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_07_ROLL_SLICE_TRANSFER__.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e908f182a386f0008e97207/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_09a_PROOF_v2.mp4.mp4',

  'https://assets.bonappetit.com/clips/5e7ccde8fc61e900083835d3/720p/pass/BA_BAO_S06_Ep046_Basically_StickyCardamomCarrotCake_01_PREP_PAN_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e7ccdea9f62730008e59752/720p/pass/BA_BAO_S06_Ep046_Basically_StickyCardamomCarrotCake_02a_EGGS.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e7ccde9ee2e740008328ee5/720p/pass/BA_BAO_S06_Ep046_Basically_StickyCardamomCarrotCake_02b_PEEL_GRATE_CARROTS__.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e7ccdea10415d00083d7fb2/720p/pass/BA_BAO_S06_Ep046_Basically_StickyCardamomCarrotCake_03_BUTTER_PISTACHIOS_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e7ccdeb0251c70008225162/720p/pass/BA_BAO_S06_Ep046_Basically_StickyCardamomCarrotCake_04a_ADD_EGGS_SUGAR_ETC_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e7ccdedab380c0008ccf670/720p/pass/BA_BAO_S06_Ep046_Basically_StickyCardamomCarrotCake_04b_MIX_ADD_BROWN_BUTTER_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e7ccded2d71a80008045dc9/720p/pass/BA_BAO_S06_Ep046_Basically_StickyCardamomCarrotCake_05a_CHOP_PISTACHIOS_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e7ccdede4d50100086c32ab/720p/pass/BA_BAO_S06_Ep046_Basically_StickyCardamomCarrotCake_05b_COMBINE_FLOUR_EGG_MIX_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e7ccdf19f62730008e59754/720p/pass/BA_BAO_S06_Ep046_Basically_StickyCardamomCarrotCake_05c_ADD_NUTS_CARROTS_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e7ccdf12d71a80008045dcb/720p/pass/BA_BAO_S06_Ep046_Basically_StickyCardamomCarrotCake_06_BATTER_IN_PAN_.mp4.mp4',

  'https://assets.bonappetit.com/clips/5e865fc91e6e3f000851ca11/720p/pass/BA_BAO_S06_Ep047_Basically_TrippleThreatOnioinGalette_01_DRY_MIX_BUTTER_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e865fc88b15a5000801e1a4/720p/pass/BA_BAO_S06_Ep047_Basically_TrippleThreatOnioinGalette_02_MIX_IN_WATER_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e865fc8cf4c170008b9957a/720p/pass/BA_BAO_S06_Ep047_Basically_TrippleThreatOnioinGalette_03a_FOLD_ROLL_DOUGH_v2__.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e865fcd8ea4790009b80277/720p/pass/BA_BAO_S06_Ep047_Basically_TrippleThreatOnioinGalette_03b_FOLD_ROLL_DOUGH_v2__.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e865fcd12276200082ec0d5/720p/pass/BA_BAO_S06_Ep047_Basically_TrippleThreatOnioinGalette_04_FLATTEN_FOLD_BAKING_SHEET_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e865fcb7245ee00082fb40f/720p/pass/BA_BAO_S06_Ep047_Basically_TrippleThreatOnioinGalette_05a_ONION_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e865fce5d5d260008f00bae/720p/pass/BA_BAO_S06_Ep047_Basically_TrippleThreatOnioinGalette_05b_GARLIC_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e865fcf68006d00089474f1/720p/pass/BA_BAO_S06_Ep047_Basically_TrippleThreatOnioinGalette_06_COOK_ONIONS_GARLIC_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e865fd07245ee00082fb411/720p/pass/BA_BAO_S06_Ep047_Basically_TrippleThreatOnioinGalette_07_SLICE_SCALIONS_.mp4.mp4',

  'https://assets.bonappetit.com/clips/5e6a81951371d20008da2974/720p/pass/BA_BAO_S06_Ep039_Basically_SourCreamAndOnionBiscuits_02_DRY_MIX_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e6a81965174050008cae91a/720p/pass/BA_BAO_S06_Ep039_Basically_SourCreamAndOnionBiscuits_03a_CUT_SCALLIONS_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e6a81955174050008cae918/720p/pass/BA_BAO_S06_Ep039_Basically_SourCreamAndOnionBiscuits_03b_CUT_BUTTER_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e6a8197ba65930008d31eda/720p/pass/BA_BAO_S06_Ep039_Basically_SourCreamAndOnionBiscuits_03c_DRY_MIX_BUTTER_SCALLIONS_v2_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e6a819712d0ca00084b23d9/720p/pass/BA_BAO_S06_Ep039_Basically_SourCreamAndOnionBiscuits_04_ADD_SOUR_CREAM_v2_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e6a819846c9590008ef0fdf/720p/pass/BA_BAO_S06_Ep039_Basically_SourCreamAndOnionBiscuits_05a_KNEAD_DOUGH_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e6a8199a7a01e0008cde060/720p/pass/BA_BAO_S06_Ep039_Basically_SourCreamAndOnionBiscuits_05b_PAT_DOUGH_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e6a819a21540a00084d21d9/720p/pass/BA_BAO_S06_Ep039_Basically_SourCreamAndOnionBiscuits_06a_FOLD_SHAPE_DOUGH_v2_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e6a819aba65930008d31edc/720p/pass/BA_BAO_S06_Ep039_Basically_SourCreamAndOnionBiscuits_06b_FOLD_SHAPE_DOUGH_v2_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e6a819b1b0d740009528d5a/720p/pass/BA_BAO_S06_Ep039_Basically_SourCreamAndOnionBiscuits_07a_CUT_DOUGH_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e6a819b5174050008cae91c/720p/pass/BA_BAO_S06_Ep039_Basically_SourCreamAndOnionBiscuits_07b_BAKING_SHEET_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e6a819c1371d20008da2976/720p/pass/BA_BAO_S06_Ep039_Basically_SourCreamAndOnionBiscuits_07c_BRUSH_SALT_BAKE_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e6a819d25503300082327ec/720p/pass/BA_BAO_S06_Ep039_Basically_SourCreamAndOnionBiscuits_08_SERVE_a_.mp4.mp4',

  'https://assets.bonappetit.com/clips/5e74f540d906210008988be6/720p/pass/BA_BAO_S06_Ep045_Basically_TahiniBillionairesBars_01_PREP_PAN_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e74f5402703c1000985be52/720p/pass/BA_BAO_S06_Ep045_Basically_TahiniBillionairesBars_02a_DRY_MIX_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e74f54044b38d00086266a7/720p/pass/BA_BAO_S06_Ep045_Basically_TahiniBillionairesBars_02b_ADD_BUTTER_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e74f54304fca90008eaf726/720p/pass/BA_BAO_S06_Ep045_Basically_TahiniBillionairesBars_02c_ADD_EGG_YOLKS_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e74f5442703c1000985be54/720p/pass/BA_BAO_S06_Ep045_Basically_TahiniBillionairesBars_03_TRANSFER_TO_PAN_FORK_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e74f5426df98c0008ce4a1c/720p/pass/BA_BAO_S06_Ep045_Basically_TahiniBillionairesBars_05a_MELT_BUTTER_BROWN_SUGAR_v2.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e74f54502b81c00082987c3/720p/pass/BA_BAO_S06_Ep045_Basically_TahiniBillionairesBars_05b_WHISK_CREAM_SALT_REMOVE_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e74f545b18d1c00086452e2/720p/pass/BA_BAO_S06_Ep045_Basically_TahiniBillionairesBars_05c_ADD_TAHINI_VANILLA_POUR_OVER_SHORTBREAD_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e74f54604fca90008eaf728/720p/pass/BA_BAO_S06_Ep045_Basically_TahiniBillionairesBars_06_POUR_CHOCOLATE_SESAME_SEEDS_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e74f54704fca90008eaf72a/720p/pass/BA_BAO_S06_Ep045_Basically_TahiniBillionairesBars_07_CUT_SERVE_.mp4.mp4'
];

((n)=> {
  for (var i = 1; i <= n; i++) {
    let sqlString = `INSERT INTO recipes (name) VALUES (${faker.lorem.words(faker.random.number({ min: 1, max: 5 }))});`;
    dbQuery(sqlString);
    for (var j = 1; j <= faker.random.number({ min: 5, max: 15 }); j++) {
      let hasVideos = faker.random.number(1);
      let sqlString = `INSERT INTO steps (recipes_id, number, text, hasVideos) \
      VALUES (${i}, ${j}, ${faker.lorem.sentences(faker.random.number({ min: 2, max: 6 }))}, ${hasVideos} );`;
      dbQuery(sqlString);
      if (hasVideos) {
        for (var k = 1; k <= faker.random.number({ min: 1, max: 2 }); k++) {
          let sqlString = `INSERT INTO recipes (steps_id, url) VALUES (${j}, ${videoUrls[faker.random.number({ min: 0, max: videoUrls.length - 1})]});`;
          dbQuery(sqlString);
        }

      }
    }
  }
  console.log('Success: Database Seeded');
})(100);
//change n for amount of recipes generated

process.exit();
