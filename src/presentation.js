// Import React
import React from 'react';
import { br } from 'react-dom';

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Slide, Text, Link, Image, Notes} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
require("./assets/css/custom.css");

// Require CSS
require('normalize.css');

var video = {
  skimovie: require('./assets/videos/80s-skimoguls.mp4'),
  haben: require('./assets/videos/haben-skiing.mp4'),
  hulu: require('./assets/videos/hulu.mp4')
}

const images = {
  blindSkier: require("./assets/images/Blind_skier_and_guide.jpg"),
  austriaSnow: require("./assets/images/austria_snowy_landscape-733872.jpg"),
  habenObama: require("./assets/images/haben-obama.jpg"),
  kayak: require("./assets/images/kayak.jpg"),
  expedia: require("./assets/images/expedia.jpg"),
  pse: require("./assets/images/pse.jpg"),
  huluLawsuit: require("./assets/images/hulu-lawsuit.jpg"),
  carrotVsStick: require("./assets/images/carrot-vs-stick-michael-whitehead.jpg"),
  rainier: require("./assets/images/splitboarding-with-rainier.jpg"),
  a11ywins: require("./assets/images/a11ywins.jpg"),
  wesbos: require("./assets/images/wesbos-example.png"),
  twitter: require("./assets/images/TwitterLogo_white.svg"),
  github: require("./assets/images/github-logomark-white.svg"),
  twitterBlk: require("./assets/images/TwitterLogo_black.svg"),
  githubBlk: require("./assets/images/github-logomark.svg"),
  marcy: require("./assets/images/marcy.jpg"),
  winning: require("./assets/images/winning.png"),
  today: require("./assets/images/ski-signs.jpg"),
  marcyDev: require("./assets/images/marcy-newdev.png"),
  target: require("./assets/images/Target2015-CSR-cover.png"),
  iansride: require("./assets/images/iansride1.jpg"),
  sassy: require("./assets/images/sassy-outwater.jpg"),
  keyboard: require("./assets/images/clacker-keyboard.jpg"),
  skiballet: require("./assets/images/skiballet.jpg"),
  paralympics: require("./assets/images/1988_winter_paralympics1.jpg"),
  paralympics2: require("./assets/images/1988_winter_paralympics2.jpg"),
  axe: require("./assets/images/axe-core.png")
};

const theme = createTheme(
  {
    primary: '#000',
    secondary: '#fff',
    tertiary: 'hotpink',
    quartenary: '#a6a80e',
    quinary: '#7d7e80'
  },
  {
    primary: 'robotomedium',
    secondary: 'sf_alien_encountersregular',
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
        <Slide transition={["fade"]} progressColor="secondary" controlColor="secondary">
          {/*<iframe width="1000" height="720" src="https://www.youtube-nocookie.com/embed/lHsXNUWGWWA?rel=0&amp;showinfo=0" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen title="Youtube: old vhs ski movies"></iframe>*/}
          <Notes>
            <p>It's been said that if you design and develop for the extremes, the middle will take care of itself. If the diversity of your users was represented on a spectrum, or graph, would your apps be usable by people at the edges, or just the young, healthy, and wealthy folks in the middle?</p>
          </Notes>
          <Heading size={2} className="offscreen">Getting Radical</Heading>
          <video src={video.skimovie} controls></video>
        </Slide>
        <Slide bgImage={images.paralympics} controlColor="secondary" progressColor="secondary">
           <Heading className="offscreen" size={2}>You know who else gets super rad? People with disabilities. Paralympians. Regular citizens.</Heading>
        </Slide>
        <Slide bgImage={images.blindSkier} transition={["fade"]} progressColor="quartenary" controlColor="quartenary">
          <Heading className="offscreen" size={2}>Blind people ski. I know I would if I lost my vision.</Heading>
        </Slide>
        <Slide transition={["fade"]} progressColor="secondary" controlColor="secondary">
          <video src={video.haben} controls style={{maxWidth:'100%'}}></video>
          {/*<Notes cite="https://www.facebook.com/habengirma/videos/10212294760546693/" className="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/habengirma/videos/10212294760546693/">Powder Mountain Skiing</a>
            <p>Deafblind skier Haben and guide Alex skiing side-by-side down snowy Powder Mountain. Alex signs turns with his right hand and Haben keeps her left hand over his right to catch the signals. Video by Common Ground Outdoor Adventure.</p>
          </Notes>*/}
        </Slide>
        <Slide bgImage={images.habenObama}>
          <Heading className="offscreen">Haben talks with President Obama at the White House 25th Anniversary celebration of the ADA.</Heading>
        </Slide>
        <Slide transition={["fade"]} bgPosition="top center" bgImage={images.kayak} progressColor="primary" controlColor="secondary">
          <Notes>
          What do you think would happen if Haben, or someone else with a disability tried to book a ski trip online? Or tried to pay their bills? Or watch a film?

          Visuals: screenshots of online travel sites, bill pay, hulu/netflix... fade in thinking face?
          </Notes>
          <Heading size={2} className="offscreen">Kayak.com</Heading>
        </Slide>
        <Slide transition={["fade"]} bgPosition="top center" bgImage={images.pse} progressColor="primary" controlColor="primary">
          <Notes>
          What do you think would happen if Haben, or someone else with a disability tried to book a ski trip online? Or tried to pay their bills? Or watch a film?

          Visuals: screenshots of online travel sites, bill pay, hulu/netflix... fade in thinking face?
          </Notes>
          <Heading size={2} className="offscreen">Puget Sound Energy</Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Notes>
          Hulu's landing page is pretty inaccessible, essentially keeping people with disabilities out of their service. It says "we don't welcome you here." Even though these are people with MONEY, who want to use a service. People with disabilities are often in a "shut up, fix it and take my money" situation.
          </Notes>
          <Heading size={2} className="offscreen">Hulu</Heading>
          <video src={video.hulu} autoPlay style={{width:'100%'}}></video>
        </Slide>
        <Slide transition={["fade"]} bgPosition="top center" bgImage={images.huluLawsuit} progressColor="primary" controlColor="primary">
          <Notes>
          Hulu was sued by the National Association for the Deaf to add captions. They're being sued again by a group of blind and low-vision individuals and advocacy groups to make their app and website more accessible. Audio described content and screen-reader accessible services would mean more folks could enjoy digital entertainment. Why shouldn't they be able to be entertained too, to take part in all parts of society?
          https://netflixproject.wordpress.com/2017/11/25/class-action-lawsuit-challenges-hulus-discrimination-toward-the-blind/
          </Notes>
          <Heading size={2} className="offscreen">The Accessible Digital Project: Class action lawsuit challenges Hulu’s discrimination toward the blind</Heading>
        </Slide>
        <Slide transition={["fade"]} bgPosition="center center" bgImage={images.carrotVsStick} progressColor="primary" controlColor="primary">
          <Heading size={2} className="offscreen">Carrot vs. the Stick</Heading>
        </Slide>
        <Slide transition={["zoom"]} progressColor="tertiary" controlColor="secondary">
          <Notes>
          I'm Marcy Sutton, a senior front-end engineer at Deque Systems, where I work on accessibility testing tools for developers. I'm also a snowboarder, having started riding mountains as a little kid. On the web, I love the intersection of JavaScript with HTML and CSS. The more I get to know people in all areas of my life, I feel that we should enable all users of our applications, not put barriers in their way.
          </Notes>
          <Heading size={1} lineHeight={1} textColor="secondary" textFont="secondary">
            Enabling Users in Client-Rendered Applications
          </Heading>
          <Text textColor="tertiary" textFont="primary">
            Marcy Sutton ~ Deque Systems
          </Text>
          <Text textColor="secondary" textFont="primary">
            <Image src={images.twitter} alt="Twitter" display="inline-block" padding="0.25em 0 0" margin="0 0.15em 0" width="40px" height="40px" />
            <Image src={images.github} alt="Github" display="inline-block" padding="0.25em 0 0" margin="0 0.15em 0" width="40px" height="40px" />
            @marcysutton
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.rainier} progressColor="primary" controlColor="primary">
          <Heading size={2} className="offscreen">Splitboarding with my dog Rainier</Heading>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.a11ywins} bgPosition="top center" bgRepeat="no-repeat" progressColor="secondary" controlColor="quinary">
          <Notes>
          I maintain a blog of positive accessibility examples, and it's really hard to find them. Especially for shiny, JavaScript-heavy apps. It's not that it can't be done though–accessibility is totally possible in all kinds of apps. Expedia did a really great job with their site, so I gave them an accessibility win.
          </Notes>
          <Heading size={2} className="offscreen">Accessibility Wins - Expedia</Heading>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.wesbos} bgSize="contain" bgPosition="top center" bgRepeat="no-repeat" progressColor="secondary" controlColor="quinary">
          <Notes>
          But if I get real for a minute, it's rough out there for accessibility in the real world. There are pitfalls everywhere, and they impact real people. And it starts in how we learn to code.
          </Notes>
          <Heading size={2} className="offscreen">Wes Bos's "learn React" series</Heading>
        </Slide>
        <Slide bgImage={images.marcyDev} transition={['fade']} controlColor="secondary" progressColor="secondary">
          <Notes>
          When I became a developer I didn't know about accessibility. I didn't know what headings were for, the button element wasn't top of my mind when coding for user interaction, and I didn't understand what ARIA was for.
          </Notes>
          <Heading size={2} className="offscreen">I was a new dev once too</Heading>
        </Slide>
        <Slide bgImage={images.target} bgPosition="bottom center" transition={['fade']} controlColor="tertiary" progressColor="secondary">
          <Notes>
          That all changed when I began working for a client that had been sued for accessibility. Given the opportunity to learn about web accessibility and meet people with disabilities, I learned how much my work mattered to them.
          </Notes>
          <Heading size={2} className="offscreen">Target</Heading>
        </Slide>
        <Slide bgImage={images.sassy} bgSize="contain" bgRepeat="no-repeat" bgColor="#000" transition={['fade']}>
          <Notes>
          I met people like Sarah Outwater, my friend who is blind and awesome. Sarah uses a screen reader to navigate the web, and her trusty guide dog Ferdinand to navigate the world.
          </Notes>
          <Heading size={2} className="offscreen">Accessibility is about people</Heading>
        </Slide>

        <Slide bgImage={images.iansride} bgColor="#fff" transition={['fade']}>
          <Notes>
          For other folks like Ian Mackay and Todd Stabelfeldt, who are paralyzed, navigating the web requires the use of a switch device–essentially a keyboard with a limited set of buttons. I find developing for that technology SO COOL. But the success of people with disabilites navigating, working and learning online–people like Ian and Todd, Sarah, and so many more–depends on us designing and developing accessibility into our apps and websites. And frankly, any one of us could get in a bike accident or have a child or family member with a disability. This stuff matters to LIFE.
          </Notes>
          <Heading size={2} className="offscreen">Accessibility is so cool</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" bgImage={images.winning} bgSize="95% auto" progressColor="quartenary" controlColor="secondary">
          <Notes>
            My goal for this talk is to create accessibility champions out of you, and enable more users to productively use our apps and web sites. A more accessible web is in reach, but it will take involvement from all of us.
          </Notes>
          <Heading size={2} className="offscreen">Winning</Heading>
        </Slide>
        
        <Slide transition={["fade"]} bgImage={images.today} controlColor="tertiary" progressColor="tertiary">
          <Notes>
            Today, we'll cover techniques for integrating accessibility into modern web applications. I'm excited to share this information with you, because I know you're capable of doing it! Hopefully these tips find their way into your development workflow, and we see a positive change as a result. We can't cover everything in 18 minutes, so we'll focus on common issues in JavaScript web apps.
          </Notes>
          <Heading size={2} className="offscreen">Today</Heading>
        </Slide>

        <Slide bgImage={images.keyboard} transition={['fade']}>
          <Notes>
          To make the most out of our time together, I'm going to show you the most action packed version of how I test and fix clientside apps for accessibility, so you can make them usable for people too. Your most valuable testing tool? The keyboard. That's right, you're already equipped to start testing for accessibility.
          </Notes>
          <Heading size={2} className="offscreen">Let's get down to technical business</Heading>
        </Slide>

        <Slide bgColor="transparent" controlColor="secondary" progressColor="secondary">
          <Notes>
          Let's look at a React application I made that's full of common accessibility problems, and we'll fix them live. We might not get to all of them, but we'll give it our best shot. We'll start with focus management and keyboard support, something so important for users yet often forgotten.
          </Notes>
          <Heading size={2} textFont="secondary">A11y Demo App</Heading>
          <Text>
          <Link textFont="primary" textColor="tertiary" href="https://github.com/marcysutton/a11y-demo-app">https://github.com/marcysutton/a11y-demo-app</Link>
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.skiballet} controlColor="secondary" progressColor="secondary">
          <Heading size={2} className="offscreen">Ski Ballet</Heading>
        </Slide>
        <Slide controlColor="secondary" progressColor="secondary">
          <Notes>
            Tools that were used in this demo
          </Notes>
          <Heading size={2} textFont="secondary">In this demo</Heading>
          <List textFont="primary">
            <ListItem>
              Chrome Accessibility Debugger<br/>
              <Link textColor="tertiary" href="https://bit.ly/chrome-a11y">https://bit.ly/chrome-a11y</Link>
            </ListItem>
            <ListItem>
              WICG Inert<br/>
              <Link textColor="tertiary" href="https://github.com/WICG/inert">https://github.com/WICG/inert</Link>
            </ListItem>
            <ListItem>
              aXe Chrome Extension<br/>
              <Link textColor="tertiary" href="https://bit.ly/axe-chrome">https://bit.ly/axe-chrome</Link>
            </ListItem>
            <ListItem>
              aXe-WebdriverJS<br/>
              <Link textColor="tertiary" href="https://github.com/dequelabs/axe-webdriverJS">https://github.com/dequelabs/axe-webdriverJS</Link>
            </ListItem>
          </List>
        </Slide>

        <Slide controlColor="secondary" progressColor="secondary">
          <Heading size={2} textFont="secondary">VOTE for Inert!</Heading>
          <List>
            <ListItem>
              Microsoft Edge<br/>
              <Link textColor="tertiary" href="http://bit.ly/inert-edge" target="_blank">http://bit.ly/inert-edge</Link>
            </ListItem>
            <ListItem>
              Mozilla Firefox<br/>
              <Link textColor="tertiary" target="_blank" href="http://bit.ly/inert-firefox">http://bit.ly/inert-firefox</Link>
            </ListItem>
            <ListItem>
              Safari WebKit<br/>
              <Link textColor="tertiary" target="_blank" href="http://bit.ly/inert-safari">http://bit.ly/inert-safari</Link>
            </ListItem>
          </List>
        </Slide>

        <Slide controlColor="secondary" progressColor="secondary">
          <Heading size={2} textFont="secondary">A11y Resources</Heading>
          <List textFont="primary">
            <ListItem>
              Deque University<br/>
              <Link textColor="tertiary" href="https://dequeuniversity.com">https://dequeuniversity.com</Link>
            </ListItem>
            <ListItem>
              Egghead.io Accessibility Course<br/>
              <Link textColor="tertiary" href="http://bit.ly/egghead-a11y">http://bit.ly/egghead-a11y</Link>
            </ListItem>
            <ListItem>
              A11y Project<br/>
              <Link textColor="tertiary" href="https://a11yproject.com">https://a11yproject.com</Link>
            </ListItem>
            <ListItem>
              What Input<br/>
              <Link textColor="tertiary" href="https://github.com/ten1seven/what-input">https://github.com/ten1seven/what-input</Link>
            </ListItem>
          </List>
        </Slide>

        <Slide bgImage={images.paralympics2} controlColor="secondary" progressColor="secondary">
          <Heading size={2} textFont="secondary" textColor="secondary" style={{textShadow: '3px 3px 3px #000'}}>Let's make the web <br/>
          more accessible!</Heading>
          <Text textColor="primary" textFont="primary" style={{backgroundColor: 'rgba(255,255,255,0.7)', display:' inline-block'}}>
            <Image src={images.twitterBlk} alt="Twitter" display="inline-block" padding="0.25em 0 0" margin="0 0.15em 0" width="40px" height="40px" style={{verticalAlign: 'bottom'}} />
            <Image src={images.githubBlk} alt="Github" display="inline-block" padding="0.25em 0 0" margin="0 0.15em 0" width="40px" height="40px" style={{verticalAlign: 'bottom'}} />
            <span style={{display:'inline-block', height: '35px'}}>@marcysutton</span>
            <Image src={images.axe} alt="axe-core" display="block" height="80px" margin="0.25em 0.5em 0" />
          </Text>
        </Slide>
      </Deck>
    );
  }
}
