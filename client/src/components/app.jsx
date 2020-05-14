/* eslint-disable no-console */
/* eslint-disable import/extensions */

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Steps from './steps.jsx';


const AppWrap = styled.div`
  margin: 5vh 35vw 5vh 5vw;
  width: 60vw;
  font-family: Graphik Web, Helvetica Neue, Helvetica, Roboto, Arial, Sans-Serif !important;
  line-height: 1.3;
  letter-spacing: 1px;
`;

const StepsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StepsTitle = styled.h3`
  margin-left: 3vw;
`;

const StepsHideButton = styled.button`
  & {
    background: none!important;
    border: none;
    padding: 0 !important;
    text-decoration: underline;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
`;

const StepsWraper = styled.div`
`;

const StepsUl = styled.ul`
  list-style: none;
`;


const nonRandomRecipe = {
  id: 1,
  name: 'Cinnamon-Date Sticky Buns',
  steps: [
    {
      id: 1,
      number: 1,
      text: 'Combine ¾ cup buttermilk and 6 Tbsp. vegetable oil in a small microwave-safe bowl (it won’t get smooth and that’s okay) and heat in the microwave in three 10-second bursts until just about body temperature (it shouldn’t feel hot or cold to the touch; an instant-read thermometer should register about 98°). If you don’t have a microwave, you can heat in a small saucepan over medium-low, stirring constantly, about 1 minute.',
      hasVideos: [
        {
          id: 1,
          url: 'https://assets.bonappetit.com/clips/5e908f11a19ab80008f8f97e/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_01_WARM_OIL_BUTTERMILK_.mp4.mp4',
        },
      ],
    },
    {
      id: 2,
      number: 2,
      text: 'Whisk 1 large egg, one ¼-oz. envelope active dry yeast (about 2¼ tsp.), and ¼ cup (packed; 50 g) dark brown sugar in a measuring glass to combine, then whisk into buttermilk mixture.',
      hasVideos: [
        {
          id: 2,
          url: 'https://assets.bonappetit.com/clips/5e908f11d7d6500008c507e2/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_02_EGGS_YEAST_BROWN_SUGAR_.mp4.mp4',
        },
      ],
    },
    {
      id: 3,
      number: 3,
      text: 'Pulse 3 cups (375 g) all-purpose flour, 1 tsp. kosher salt, and ¼ tsp. baking soda in a food processor to combine. With the motor running, stream in buttermilk mixture. Process until about 80% of dough comes together into a ball (mixture will look very wet at first, then begin to pull away from the sides of processor), about 2 minutes.',
      hasVideos: [
        {
          id: 3,
          url: 'https://assets.bonappetit.com/clips/5e908f127933750008e30766/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_03_FLOUR_BAKING_SODA_SALT_.mp4.mp4',
        },
      ],
    },
    {
      id: 4,
      number: 4,
      text: 'Using a bowl scraper or rubber spatula, scrape dough onto an unfloured surface. (It should still be pretty wet and sticky.) Knead, pushing it away from you, then pulling it back toward you, until a smooth ball forms, about 3 minutes. The dough will grow silkier, tighter, and easier to work with as you knead. (Don’t be tempted to add flour; if dough is too sticky to work with, lightly oil your hands.)',
      hasVideos: [
        {
          id: 4,
          url: 'https://assets.bonappetit.com/clips/5e908f13c5c4bd0008e9aac8/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_04_SCRAPE_KNEAD_DOUGH_v2.mp4.mp4',
        },
      ],
    },
    {
      id: 5,
      number: 5,
      text: 'Roll out dough into a rough 8" square. Fold dough over onto itself to make an 8x4" rectangle, then flatten it slightly and fold over once more to make a 4" square. Roll dough back out to an 8" square and repeat folding process (you should be back at a 4" square). Pour 1 Tbsp. vegetable oil into a medium bowl and add dough (still folded); turn to coat. Cover bowl tightly and chill dough until doubled in volume, at least 8 hours and up to 1 day.',
      hasVideos: [
        {
          id: 5,
          url: 'https://assets.bonappetit.com/clips/5e908f137933750008e30768/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_05_FOLD_OIL_COVER_DOUGH_.mp4.mp4',
        },
      ],
    },
    {
      id: 6,
      number: 6,
      text: 'To make the date filling, bring 1½ cups water to a boil in a small saucepan. Tear 1 cup (packed; 180 g) Medjool dates in half and remove pits; discard. Place dates in a small bowl. Pour hot water over. Let soak until softened, about 10 minutes. Drain dates and transfer to clean food processor; discard soaking liquid. Add 2 Tbsp. vegetable oil, 2 tsp. ground cinnamon, and remaining ½ tsp. kosher salt. Purée, scraping down sides as needed, until smooth, about 4 minutes. (You should have about ½ cup purée.)',
      hasVideos: [
        {
          id: 6,
          url: 'https://assets.bonappetit.com/clips/5e908f140964620008c3bd70/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_05a_PIT_SOAK_DATES__1.mp4.mp4',
        },
        {
          id: 7,
          url: 'https://assets.bonappetit.com/clips/5e908f152a386f0008e97205/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_05b_PUREE_DATES_.mp4.mp4',
        },
      ],
    },
    {
      id: 7,
      number: 7,
      text: 'Time to assemble the buns! Grease a 10" cast-iron skillet with remaining 1 Tbsp. vegetable oil. Punch down dough, then transfer to a clean, unfloured surface and roll out to an 8" square. Fold in half into an 8x4" rectangle, then fold rectangle over itself to form a 4" square (this is the same folding process you did before). If dough feels tough and uncooperative, let it sit about 5 minutes to relax and try again. Roll out dough to a 12" square about ¼" thick.',
      hasVideos: [
        {
          id: 8,
          url: 'https://assets.bonappetit.com/clips/5e908f1575159d0008ca4663/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_06a_GREASE_SKILLET_.mp4.mp4',
        },
        {
          id: 9,
          url: 'https://assets.bonappetit.com/clips/5e908f172fa8a600088c47ba/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_06b_ROLL_MEASURE_DOUGH__1.mp4.mp4',
        },
      ],
    },
    {
      id: 8,
      number: 8,
      text: 'Dollop date purée all over. Using a small offset spatula or spoon, spread evenly over dough, leaving a ½" border without purée along edge farthest from you. Sprinkle remaining ¼ cup (packed; 50 g) dark brown sugar over purée.',
      hasVideos: [
        {
          id: 10,
          url: 'https://assets.bonappetit.com/clips/5e908f1731e3840009ad5500/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_06c_DOLLOP_PUREE_BROWN_SUGAR_.mp4.mp4',
        },
      ],
    },
    {
      id: 9,
      number: 9,
      text: 'Starting at edge closest to you, roll dough away from you into a tight log. Using a sharp serrated knife and long sawing motions, trim about ½" of dough from both ends and discard. Slice log crosswise into 3 sections, wiping knife clean between slices. Slice each section crosswise into 3 buns (you should have 9 buns total that are each about 1" thick). Transfer buns to prepared pan as you go. When you first place the buns in the pan, space them evenly. As they proof, the buns will start to touch (this is what you want so that when then bake they rise vertically in the oven.)',
      hasVideos: [
        {
          id: 11,
          url: 'https://assets.bonappetit.com/clips/5e908f1731e3840009ad5501/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_07_ROLL_SLICE_TRANSFER__.mp4.mp4',
        },
      ],
    },
    {
      id: 10,
      number: 10,
      text: 'Cover pan tightly with foil (or a domed lid if you have one) and place in a warm, dry spot. Let buns rise until they’re doubled in volume and spring back slowly when poked, leaving only a small indentation, 1–1½ hours, depending on how warm and humid your kitchen is. (If your kitchen is cold, you can let the buns rise in a turned-off oven with its light on.)',
      hasVideos: [
        {
          id: 12,
          url: 'https://assets.bonappetit.com/clips/5e908f182a386f0008e97207/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_09a_PROOF_v2.mp4.mp4',
        },
      ],
    },
    {
      id: 11,
      number: 11,
      text: 'Place a rack in middle of oven; preheat to 350°. Bake buns, still covered, until puffed, pale, and mostly set, about 20 minutes. Remove foil and continue to bake until golden brown, about 15 minutes if you prefer a soft and squishy bun and up to 25 minutes for a more toasted bun. Let cool slightly.',
      hasVideos: [],
    },
    {
      id: 12,
      number: 12,
      text: 'Meanwhile, whisk ¾ cup (83 g) powdered sugar, 1 tsp. vanilla paste or extract, and remaining 3 Tbsp. buttermilk in a medium bowl to combine. (Vanilla bean paste will give you cute flecks, but extract offers the same flavor.)',
      hasVideos: [
        {
          id: 14,
          url: 'https://assets.bonappetit.com/clips/5e908f1ac5c4bd0008e9aaca/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_10a_MAKE_GLAZE_.mp4.mp4',
        },
      ],
    },
    {
      id: 13,
      number: 13,
      text: 'Brush glaze over warm buns (warm buns are key so that the glaze can soak into all the crannies) and serve from skillet.',
      hasVideos: [
        {
          id: 15,
          url: 'https://assets.bonappetit.com/clips/5e908f1bed51740008882af8/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_10b_GLAZE_SERVE_.mp4.mp4',
        },
      ],
    },
  ],
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeId: window.location.pathname,
      recipe: nonRandomRecipe,
      videos: [],
      hidden: false,
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  componentDidMount() {
    const { recipeId } = this.state;
    axios.get(`/api/steps${recipeId}`)
      .then((res) => {
        this.setState({
          recipe: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(`/api/videos${recipeId}`)
      .then((res) => {
        this.setState({
          videos: res.data,
        });
      })
      .then(() => {
        this.parse();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  findVideosByStepId(stepId) {
    const output = [];
    const { videos } = this.state;
    for (let i = 0; i < videos.length; i += 1) {
      if (videos[i].steps_id === stepId) {
        output.push(videos[i]);
      }
    }
    return output;
  }

  parse() {
    const { recipe } = this.state;
    for (let i = 0; i < recipe.steps.length; i += 1) {
      const iStepId = recipe.steps[i].id;
      if (recipe.steps[i].hasVideos) {
        const videos = this.findVideosByStepId(iStepId);
        recipe.steps[i].hasVideos = videos;
      } else {
        recipe.steps[i].hasVideos = [];
      }
    }
    this.setState({
      recipe,
    });
  }

  toggleHidden() {
    const { hidden } = this.state;
    this.setState({
      hidden: !hidden,
    });
  }

  render() {
    const {
      recipe, hidden,
    } = this.state;
    return (
      <AppWrap>
        <StepsHeader>
          <StepsTitle>
            Steps
          </StepsTitle>
          <StepsHideButton onClick={this.toggleHidden} type="button">
            Hide All Images
          </StepsHideButton>
        </StepsHeader>
        <StepsWraper>
          <StepsUl>
            {recipe.steps.map((step) => (
              <Steps
                text={step.text}
                videos={step.hasVideos}
                hidden={hidden}
                number={step.number}
              />
            ))}
          </StepsUl>
        </StepsWraper>
      </AppWrap>
    );
  }
}

export default App;
