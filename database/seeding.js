const db = require('./index.js');
const faker = require('faker');


const videoUrls = [
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
  'https://assets.bonappetit.com/clips/5e908f1ac5c4bd0008e9aaca/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_10a_MAKE_GLAZE_.mp4.mp4',
  'https://assets.bonappetit.com/clips/5e908f1bed51740008882af8/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_10b_GLAZE_SERVE_.mp4.mp4',

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
const nonRandomRecipe = {
  id: 1,
  name: 'Cinnamon-Date Sticky Buns',
  steps: [
    {
      id: 1,
      number: 1,
      text: 'Step 1: Combine ¾ cup buttermilk and 6 Tbsp. vegetable oil in a small microwave-safe bowl (it won’t get smooth and that’s okay) and heat in the microwave in three 10-second bursts until just about body temperature (it shouldn’t feel hot or cold to the touch; an instant-read thermometer should register about 98°). If you don’t have a microwave, you can heat in a small saucepan over medium-low, stirring constantly, about 1 minute.',
      hasVideos: 1
    },

    {
      id: 2,
      number: 2,
      text: 'Step 2: Whisk 1 large egg, one ¼-oz. envelope active dry yeast (about 2¼ tsp.), and ¼ cup (packed; 50 g) dark brown sugar in a measuring glass to combine, then whisk into buttermilk mixture.',
      hasVideos: 1
    },
    {
      id: 3,
      number: 3,
      text: 'Step 3: Pulse 3 cups (375 g) all-purpose flour, 1 tsp. kosher salt, and ¼ tsp. baking soda in a food processor to combine. With the motor running, stream in buttermilk mixture. Process until about 80% of dough comes together into a ball (mixture will look very wet at first, then begin to pull away from the sides of processor), about 2 minutes.',
      hasVideos: 1
    },

    {
      id: 4,
      number: 4,
      text: 'Step 4: Using a bowl scraper or rubber spatula, scrape dough onto an unfloured surface. (It should still be pretty wet and sticky.) Knead, pushing it away from you, then pulling it back toward you, until a smooth ball forms, about 3 minutes. The dough will grow silkier, tighter, and easier to work with as you knead. (Don’t be tempted to add flour; if dough is too sticky to work with, lightly oil your hands.)',
      hasVideos: 1
    },
    {
      id: 5,
      number: 5,
      text: 'Step 5: Roll out dough into a rough 8" square. Fold dough over onto itself to make an 8x4" rectangle, then flatten it slightly and fold over once more to make a 4" square. Roll dough back out to an 8" square and repeat folding process (you should be back at a 4" square). Pour 1 Tbsp. vegetable oil into a medium bowl and add dough (still folded); turn to coat. Cover bowl tightly and chill dough until doubled in volume, at least 8 hours and up to 1 day.',
      hasVideos: 1
    },
    {
      id: 6,
      number: 6,
      text: 'Step 6: To make the date filling, bring 1½ cups water to a boil in a small saucepan. Tear 1 cup (packed; 180 g) Medjool dates in half and remove pits; discard. Place dates in a small bowl. Pour hot water over. Let soak until softened, about 10 minutes. Drain dates and transfer to clean food processor; discard soaking liquid. Add 2 Tbsp. vegetable oil, 2 tsp. ground cinnamon, and remaining ½ tsp. kosher salt. Purée, scraping down sides as needed, until smooth, about 4 minutes. (You should have about ½ cup purée.)',
      hasVideos: 1
    },
    {
      id: 7,
      number: 7,
      text: 'Step 7: Time to assemble the buns! Grease a 10" cast-iron skillet with remaining 1 Tbsp. vegetable oil. Punch down dough, then transfer to a clean, unfloured surface and roll out to an 8" square. Fold in half into an 8x4" rectangle, then fold rectangle over itself to form a 4" square (this is the same folding process you did before). If dough feels tough and uncooperative, let it sit about 5 minutes to relax and try again. Roll out dough to a 12" square about ¼" thick.',
      hasVideos: 1
    },
    {
      id: 8,
      number: 8,
      text: 'Step 8: Dollop date purée all over. Using a small offset spatula or spoon, spread evenly over dough, leaving a ½" border without purée along edge farthest from you. Sprinkle remaining ¼ cup (packed; 50 g) dark brown sugar over purée.',
      hasVideos: 1
    },
    {
      id: 19,
      number: 9,
      text: 'Step 9: Starting at edge closest to you, roll dough away from you into a tight log. Using a sharp serrated knife and long sawing motions, trim about ½" of dough from both ends and discard. Slice log crosswise into 3 sections, wiping knife clean between slices. Slice each section crosswise into 3 buns (you should have 9 buns total that are each about 1" thick). Transfer buns to prepared pan as you go. When you first place the buns in the pan, space them evenly. As they proof, the buns will start to touch (this is what you want so that when then bake they rise vertically in the oven.)',
      hasVideos: 1
    },
    {
      id: 10,
      number: 10,
      text: 'Step 10: Cover pan tightly with foil (or a domed lid if you have one) and place in a warm, dry spot. Let buns rise until they’re doubled in volume and spring back slowly when poked, leaving only a small indentation, 1–1½ hours, depending on how warm and humid your kitchen is. (If your kitchen is cold, you can let the buns rise in a turned-off oven with its light on.)',
      hasVideos: 1
    },
    {
      id: 11,
      number: 11,
      text: 'Step 11: Place a rack in middle of oven; preheat to 350°. Bake buns, still covered, until puffed, pale, and mostly set, about 20 minutes. Remove foil and continue to bake until golden brown, about 15 minutes if you prefer a soft and squishy bun and up to 25 minutes for a more toasted bun. Let cool slightly.',
      hasVideos: 0
    },
    {
      id: 12,
      number: 12,
      text: 'Step 12: Meanwhile, whisk ¾ cup (83 g) powdered sugar, 1 tsp. vanilla paste or extract, and remaining 3 Tbsp. buttermilk in a medium bowl to combine. (Vanilla bean paste will give you cute flecks, but extract offers the same flavor.)',
      hasVideos: 1
    },
    {
      id: 13,
      number: 13,
      text: 'Step 13: Brush glaze over warm buns (warm buns are key so that the glaze can soak into all the crannies) and serve from skillet.',
      hasVideos: 1
    },
  ],
  videos: [
    {
      stepsId: 1,
      url: 'https://assets.bonappetit.com/clips/5e908f11a19ab80008f8f97e/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_01_WARM_OIL_BUTTERMILK_.mp4.mp4',
    },
    {
      stepsId: 2,
      url: 'https://assets.bonappetit.com/clips/5e908f11d7d6500008c507e2/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_02_EGGS_YEAST_BROWN_SUGAR_.mp4.mp4',
    },
    {
      stepsId: 3,
      url: 'https://assets.bonappetit.com/clips/5e908f127933750008e30766/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_03_FLOUR_BAKING_SODA_SALT_.mp4.mp4',
    },
    {
      stepsId: 4,
      url: 'https://assets.bonappetit.com/clips/5e908f13c5c4bd0008e9aac8/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_04_SCRAPE_KNEAD_DOUGH_v2.mp4.mp4',
    },
    {
      stepsId: 5,
      url: 'https://assets.bonappetit.com/clips/5e908f137933750008e30768/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_05_FOLD_OIL_COVER_DOUGH_.mp4.mp4',
    },
    {
      stepsId: 6,
      url: 'https://assets.bonappetit.com/clips/5e908f140964620008c3bd70/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_05a_PIT_SOAK_DATES__1.mp4.mp4',
    },
    {
      stepsId: 6,
      url: 'https://assets.bonappetit.com/clips/5e908f152a386f0008e97205/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_05b_PUREE_DATES_.mp4.mp4',
    },
    {
      stepsId: 7,
      url: 'https://assets.bonappetit.com/clips/5e908f1575159d0008ca4663/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_06a_GREASE_SKILLET_.mp4.mp4',
    },
    {
      stepsId: 7,
      url: 'https://assets.bonappetit.com/clips/5e908f172fa8a600088c47ba/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_06b_ROLL_MEASURE_DOUGH__1.mp4.mp4',
    },
    {
      stepsId: 8,
      url: 'https://assets.bonappetit.com/clips/5e908f1731e3840009ad5500/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_06c_DOLLOP_PUREE_BROWN_SUGAR_.mp4.mp4',
    },
    {
      stepsId: 9,
      url: 'https://assets.bonappetit.com/clips/5e908f1731e3840009ad5501/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_07_ROLL_SLICE_TRANSFER__.mp4.mp4',
    },
    {
      stepsId: 10,
      url: 'https://assets.bonappetit.com/clips/5e908f182a386f0008e97207/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_09a_PROOF_v2.mp4.mp4',
    },
    {
      stepsId: 12,
      url: 'https://assets.bonappetit.com/clips/5e908f1ac5c4bd0008e9aaca/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_10a_MAKE_GLAZE_.mp4.mp4',
    },
    {
      stepsId: 13,
      url: 'https://assets.bonappetit.com/clips/5e908f1bed51740008882af8/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_10b_GLAZE_SERVE_.mp4.mp4',
    }
  ]
};

const dbQuery = (sql) => {
  db.con.query(sql, (err, result)=>{
    if (err) {
      console.log(`Database Seeding Error: ${sql}`, err);
    }
  });
};

//iife creates database, establishes tables;
(()=> {
  let sqlString = 'DROP DATABASE IF EXISTS bonappetit;';
  dbQuery(sqlString);

  sqlString = 'CREATE DATABASE bonappetit;';
  dbQuery(sqlString);

  sqlString = 'USE bonappetit;';
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

  sqlString = 'CREATE TABLE videos (\
    steps_id INT NOT NULL, \
    id INT NOT NULL AUTO_INCREMENT, \
    url VARCHAR(255) NOT NULL, \
    PRIMARY KEY (id), \
    FOREIGN KEY(steps_id) \
      REFERENCES steps(id) \
  );';
  dbQuery(sqlString);
})();

(()=> {
  let sqlString = `INSERT INTO recipes (name) VALUES ('${nonRandomRecipe.name}');`;
  dbQuery(sqlString);
  for (var j = 0; j < nonRandomRecipe.steps.length; j++) {
    let sqlString = `INSERT INTO steps (recipes_id, number, text, hasVideos) \
    VALUES (1, ${nonRandomRecipe.steps[j].number}, '${nonRandomRecipe.steps[j].text}', ${nonRandomRecipe.steps[j].hasVideos});`;
    dbQuery(sqlString);
    if (nonRandomRecipe.steps[j].hasVideos) {
      for (var k = 0; k < nonRandomRecipe.videos.length; k++) {
        if (nonRandomRecipe.steps[j].id === nonRandomRecipe.videos[k].stepsId) {
          let sqlString = `INSERT INTO videos (steps_id, url) VALUES (${nonRandomRecipe.steps[j].id}, '${nonRandomRecipe.videos[k].url}');`;
          dbQuery(sqlString);
        }
      }
    }
  }
})();


// change n for amount of recipes generated
((n = 100)=> {
  for (var i = 2; i <= n; i++) {
    let sqlString = `INSERT INTO recipes (name) VALUES ('${faker.lorem.words(faker.random.number({ min: 1, max: 5 }))}');`;
    dbQuery(sqlString);
    for (var j = 1; j <= faker.random.number({ min: 5, max: 15 }); j++) {
      let hasVideos = faker.random.number(1);
      let sqlString = `INSERT INTO steps (recipes_id, number, text, hasVideos) \
      VALUES (${i}, ${j}, '${faker.lorem.sentences(faker.random.number({ min: 2, max: 6 }))}', ${hasVideos} );`;
      dbQuery(sqlString);
      if (hasVideos) {
        for (var k = 1; k <= faker.random.number({ min: 1, max: 2 }); k++) {
          let sqlString = `INSERT INTO videos (steps_id, url) VALUES (${j}, '${videoUrls[faker.random.number({ min: 0, max: videoUrls.length - 1})]}');`;
          dbQuery(sqlString);
        }
      }
    }
  }
})();

module.exports = nonRandomRecipe;