// Import React
import React from 'react';
import { br } from 'react-dom';

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, CodePane, Slide, Text, Link, Image, Notes} from 'spectacle';

import { SVGDeliverables } from './assets/svg/deliverables.js';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
require("./assets/css/custom.css");

// Require CSS
require('normalize.css');

const images = {
  crowd: require("./assets/images/sea-of-faces.jpg"),
  UX: require("./assets/images/digital-user-experience.png"),
  a11ywins: require("./assets/images/a11ywins.png"),
  freecodecamp: require("./assets/images/freecodecamp-example.png"),
  wesbos: require("./assets/images/wesbos-example.png"),
  twitter: require("./assets/images/TwitterLogo_black.svg"),
  github: require("./assets/images/github-logomark.svg"),
  marcy: require("./assets/images/marcy.jpg"),
  winning: require("./assets/images/winning.png"),
  today: require("./assets/images/today.svg"),
  deliverables: require("./assets/images/deliverables.png"),
  accessibilityMobile: require("./assets/images/venn-diagram.png"),
  balancing: require("./assets/images/cairns.jpg"),
  marcyDev: require("./assets/images/marcy-newdev.png"),
  target: require("./assets/images/Target2015-CSR-cover.png"),
  iansride: require("./assets/images/iansride1.jpg"),
  sassy: require("./assets/images/sassy-outwater.jpg"),
  keyboard: require("./assets/images/clacker-keyboard.jpg")
};

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#007dbc',
    quartenary: '#849f00',
    quinary: '#7d7e80'
  },
  {
    primary: 'manu_negra_regular',
    secondary: 'robotomedium',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["fade"]} bgColor="primary" bgImage={images.crowd}>
          <Notes>
            <p>We build stuff for users, right? Who are your users? Do you know what your customer demographics are? Like, really know?</p>
          </Notes>
          <Heading size={1} className="offscreen">Sea of users</Heading>
        </Slide>
        <Slide bgSize="contain" bgRepeat="no-repeat" transition={["fade"]} bgColor="black" bgImage={images.UX}>
          <Notes>
            <p>If the diversity of your users was represented on a spectrum, would your apps be usable by people at the edges, or just the young, healthy, and wealthy folks in the middle? It's been said that if you design and develop for the extremes, the middle will take care of itself. I'm here to tell you, that's true.</p>
          </Notes>
          <Heading size={2} className="offscreen">Impacting your Users</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" bgImage={images.wesbos} bgSize="contain" bgPosition="top center" bgRepeat="no-repeat">
          <Notes>
          I'm going to level with you: it's rough out there for accessibility in the real world. There are pitfalls everywhere. I filed a bunch of accessibility issues on the Spectacle slide framework for this talk, even.
          </Notes>
          <Heading size={2} className="offscreen">Wes Bos's "learn React" series</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" bgImage={images.a11ywins} bgSize="cover" bgPosition="top center" bgRepeat="no-repeat">
          <Notes>
          I maintain a blog of positive accessibility examples, and it's really hard to find them...especially accessibility in flashy, modern web apps. But it doesn't have to be that way. Accessibility can be modern, and JavaScript is a necessary tool for the job. We can totally do this.
          </Notes>
          <Heading size={2} className="offscreen">Accessibility Wins</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Notes>
          I'm Marcy Sutton,a senior front-end engineer at Deque Systems, where I work on accessibility testing tools for developers. I love the intersection of JavaScript with HTML and CSS, and I've spent a fair amount of time writing and speaking about accessibility in JavaScript frameworks because of its impact on people.
          </Notes>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Enabling Users in Client-Rendered Applications
          </Heading>
          <Text textColor="tertiary" textFont="secondary">
            Marcy Sutton ~ Deque Systems
          </Text>
          <Text textColor="secondary" textFont="secondary">
            <Image src={images.twitter} alt="Twitter" display="inline-block" padding="0.25em 0 0" margin="0 0.15em 0" width="40px" height="40px" />
            <Image src={images.github} alt="Github" display="inline-block" padding="0.25em 0 0" margin="0 0.15em 0" width="40px" height="40px" />
            @marcysutton
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" bgImage={images.marcy}>
          <Notes>
          Last time I was in Paris, I brought my bicycle. This time I brought my mother with me. Hi, Mom! :)
          </Notes>
          <Heading size={2} className="offscreen">Who is Marcy Sutton?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" bgImage={images.winning}>
          <Notes>
            My goal for this talk is to create accessibility champions out of you, and enable more users to productively use our apps and web sites. A more accessible web is in reach, but it will take involvement from all of us.
          </Notes>
          <Heading size={2} className="offscreen">Winning</Heading>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.today}>
          <Notes>
            Today, we'll go over some techniques for integrating accessibility into modern web applications. I'm excited to share this information with you, because I know you're capable of doing it! Hopefully these tips find their way into your development workflow, and we see a positive change as a result.
          </Notes>
          <Heading size={2} className="offscreen">Today</Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Notes>
          What would it take to convert a website to support mobile browsers after a big fancy redesign, when your budget was spent? I personally wouldn't be too thrilled to "implement mobile in phase 2". In fact, I'd make a lot of noise to prioritize accessibility in the MVP and prototyping phases. The earlier you can innovate the right way, the better your solution can be.
          </Notes>
          <Heading size={2} className="offscreen">Deliverables: desktop wireframe/design on left and mobile wireframe/design on right crossed out</Heading>
          {SVGDeliverables}
        </Slide>
        <Slide transition={["fade"]} bgImage={images.accessibilityMobile} bgSize="contain" bgRepeat="no-repeat">
          <Notes>
          There's also a big overlap in the need for accessibility and users of mobile devices, as modern accessibility features can give someone with a disability independence, privacy, and opportunities to get ahead in life.

          It's futuristic–people with disabilities are often early adopters of technology. And we've seen huge advances in technologies like voice recognition, switch control, and crowd-sourced functionality like the app BeMyEyes.
          </Notes>
          <Heading size={2} className="offscreen">Venn diagram of accessibility and mobile</Heading>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.balancing}>
          <Notes>
          TODO: make image match visual style 

          The challenge, I think, is there are a lot of competing concerns when building web apps. We have to juggle security, performance, accessibility–the "three unattractive pillars of the web". But that balancing act is our job.

          - Three unattractive pillars. Aerotwist article, or something else? Balancing
          </Notes>
          <Heading size={2} className="offscreen">Balancing</Heading>
        </Slide>
        <Slide bgImage={images.marcyDev}>
          <Notes>
          When I became a developer I didn't know about accessibility. I didn't know what headings were for, the button element wasn't top of my mind when coding for user interaction, and I didn't understand what ARIA was for.

          - Early developer days
          </Notes>
          <Heading size={2} className="offscreen">I was a new dev once too</Heading>
        </Slide>
        <Slide bgImage={images.target} bgPosition="bottom center">
          <Notes>
          That all changed when I began working for a client that had been sued for accessibility. Given the opportunity to learn about web accessibility and meet people with disabilities, I learned how much my work mattered to them.

            - POP experience. Something to evoke Target without being outright? I've already talked about it publicly
          </Notes>
          <Heading size={2} className="offscreen">Target</Heading>
        </Slide>
        <Slide bgImage={images.sassy} bgSize="contain" bgRepeat="no-repeat" bgColor="#000">
          <Notes>
          I met people like Sarah Outwater, my friend who is blind and awesome. Sarah uses a screen reader to navigate the web, and her trusty guide dog Ferdinand to navigate the world.
          </Notes>
          <Heading size={2} className="offscreen">Accessibility is about people</Heading>
        </Slide>

        <Slide bgImage={images.iansride}>
          <Notes>
          For other folks like Ian Mackay and Todd Stabelfeldt, who are paralyzed, navigating the web requires the use of a switch device–essentially a keyboard with a limited set of buttons. I find developing for that technology SO COOL. And it makes me feel like if I get in an accident, life will go on. But the success of people with disabilites navigating, working and learning online–people like Ian and Todd, Sarah, and so many more–depends on us designing and developing accessibility into our apps and websites. And frankly, any one of us could get in a bike accident or have a child or family member with a disability. This stuff matters to LIFE.
          </Notes>
          <Heading size={2} className="offscreen">Accessibility is so cool</Heading>
        </Slide>
        <Slide bgImage={images.keyboard}>
          <Notes>
          To make the most out of our time together, I'm going to show you the most action packed version of how I test and fix clientside apps for accessibility, so you can make them usable for people too. Your most valuable testing tool? The keyboard. That's right, you're already equipped to start testing for accessibility. 

          And the rainbow clacker keyboard image on this gives me major keyboard envy.
          </Notes>
          <Heading size={2} className="offscreen">Let's get down to technical business</Heading>
        </Slide>
        <Slide>
          <Notes>
          With any new user interface, you should tab through it to make sure you can reach and operate every interactive control. Can you see where you are on the screen? Can you complete every user task without bailing to use the mouse or the trackpad? If not, there are your first few items to fix. 

          Tab through netflix. Look for unreachable things, color contrast/subtlety of focus states, focus management. If we tab through Hulu, we can see even worse attention paid to accessibility than Netflix...this could be a lot better, starting with if they got rid of outline:0 on the links.

          If I run the aXe Chrome extension on these pages, I can easily find low hanging accessibility fruit to fix.
          </Notes>
          <Heading size={2}>Keyboard Test Demo</Heading>
          <Text textFont="secondary">
            <Link href="https://netflix.com" textColor="tertiary">https://netflix.com</Link>
          </Text>
          <Text textFont="secondary">
            <Link href="https://hulu.com" textColor="tertiary">https://hulu.com</Link>
          </Text>
        </Slide>

        <Slide>
          <Notes>
          Let's look at focus in a collapsible sidebar. If I tab through the page, I should see where I am on the screen...but I can't. Focus styles have been disabled, and it's pretty inconsistent throughout the app. If I turn on Voiceover, I can learn about how it sounds with a screen reader when I can see the screen. A bit of a test hack, if you will. So, let's go fix it.

If I inspect the element and look at the CSS, I can see that there's a hover style specified, but no focus style. I'm a big fan of styling these both at the same time. So, easy fix. Let's make that change in our CSS by removing outline: 0 from the reset file, and adding a focus style next to the hover style for links and buttons.

          </Notes>
          <Heading size={2}>A11y Dev Demo</Heading>
          <Text>
          <Link textFont="secondary" textColor="tertiary" href="https://github.com/marcysutton/a11y-demo-app">https://github.com/marcysutton/a11y-demo-app</Link>
          </Text>
        </Slide>

        <Slide>
          <Notes>
         Another thing I like to do in integration tests is work in the aXe accessibility test suite. That means I can test for something complicated like color contrast at the page or component level with ease. If I use `npm install axe-webdriverjs@next`, I can add aXe's prerelease Shadow DOM support. 

          </Notes>
          <Heading size={2}>Integration testing<br/>with aXe</Heading>
          {/*<CodePane lang="javascript" source={require('raw-loader!./examples/integration-test.js')}></CodePane>*/}
        </Slide>

        <Slide>
          <Notes>
            Tools that were used in this demo, and resources
          </Notes>
          <Heading size={2}>Resources</Heading>
          <List textFont="secondary">
            <ListItem>
              Chrome Accessibility Debugger<br/>
              <Link textColor="tertiary" href="https://bit.ly/chrome-a11y">https://bit.ly/chrome-a11y</Link>
            </ListItem>
            <ListItem>
              aXe Chrome Extension<br/>
              <Link textColor="tertiary" href="https://bit.ly/axe-chrome">https://bit.ly/axe-chrome</Link>
            </ListItem>
            <ListItem>
              aXe-WebdriverJS<br/>
              <Link textColor="tertiary" href="https://github.com/dequelabs/axe-webdriverJS">https://github.com/dequelabs/axe-webdriverJS</Link>
            </ListItem>
            <ListItem>
              Egghead.io Accessibility Course<br/>
              <Link textColor="tertiary" href="https://bit.ly/egghead-a11y">https://bit.ly/egghead-a11y</Link>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Thanks for having me!</Heading>
          <Text textColor="secondary" textFont="secondary">
            <Image src={images.twitter} alt="Twitter" display="inline-block" padding="0.25em 0 0" margin="0 0.15em 0" width="40px" height="40px" />
            <Image src={images.github} alt="Github" display="inline-block" padding="0.25em 0 0" margin="0 0.15em 0" width="40px" height="40px" />
            @marcysutton
          </Text>
        </Slide>
      </Deck>
    );
  }
}
