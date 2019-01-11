// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Appear,
  S,
  Markdown,
  CodePane,
  Layout,
  Link
} from 'spectacle';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const counterStyles = {
  marginTop: 30,
}

const Button = ({ onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '6px 12px',
    }}
  >
    {children}
  </button>
)

class ClickCount extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    return (
      <div style={counterStyles}>
        <Button onClick={this.handleClick}>
          Clicks: {this.state.clicks}
        </Button>
      </div>
    );
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Introduction to React
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              or "How to Upset Juan While He's Out"
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} fit lineHeight={1} textColor="primary">
            What Does React Do?
          </Heading>
          <List>
            <Appear>
              <ListItem textColor="primary">
                Javascript <S type="underline">View</S> Library
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                Allows interactive user interfaces
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                Can create web and mobile apps
              </ListItem>
            </Appear>
          </List>

          <Notes>
            <ul>
              <li>
                React is NOT a framework
              </li>
              <li>
                React is only concerned about taking data and turning it into a view
              </li>
              <li>
                Unlike Angular, it isn't opinionated about where it gets its data from
              </li>
              <li>
                We're able to leverage existing frameworks like Rails models / controllers
              </li>
              <li>
                Instead of storing app data in hidden input fields, React stores data in each component's "state"
              </li>
              <li>
                React is highly optimized to update the view as fast as possible
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={3} fit lineHeight={1}>Why Use React?</Heading>
          <List>
            <Appear>
              <ListItem textColor="primary">
                It Makes Views More Consistent
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                It's backed by companies with huge, performant apps
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">
                Once you learn the basics, it's fast and enjoyable to use
              </ListItem>
            </Appear>
          </List>
          <Notes>
            - Your HTML and logic live in the same place
            <br />
            - React is open source, and created by Facebook. All upcoming versions of React are tested directly by Facebook on their own products
            <br />
            - React is also used by Netflix, Instagram, Dropbox, AirBNB, Slack, Reddit, Uber, Twitter, Pinterest
          </Notes>
        </Slide>
        <Slide>
          <Heading margin="0 0 50px 0" size={5}>Simplest Example</Heading>
          <CodePane lang="javascript" source={require('raw-loader!../assets/simple.example')} style={{ fontSize: 16 }} />
          <Notes>
            - From the React docs themselves, this is the simplest React example to start with
            <br />
            - To initially render a React app, you need to target a DOM element and give it a component to render
            <br />
            - Here we're using JSX to render basic HTML H1 tags
          </Notes>
        </Slide>
        <Slide>
          <Heading margin="0 0 50px 0" size={5}>Basic Component</Heading>
          <LiveProvider code={require('raw-loader!../assets/component.example')}>
            <LiveEditor />
            <LiveError />
            <LivePreview />
          </LiveProvider>
          <Notes>
            - Here we have a basic React component that renders the H3 tag below
            <br />
            - Surprise, this presentation was made with React
            <br />
            - We're actually using React INSIDE React to render this component, so we can edit it in real time
            <br />
          </Notes>
        </Slide>
        <Slide bgColor="secondary" align="center flex-start">
          <Heading margin="50px 0" size={3} fill lineHeight={1} textColor="primary">
            Adding "State"
          </Heading>
          <Appear>
            <Text margin="50px 0" textColor="primary">
              State is used to control how your component looks and acts
            </Text>
          </Appear>
          <Appear>
            <CodePane style={{ fontSize: 16 }} lang="javascript" source={`<Dropdown open={this.state.open} />`} />
          </Appear>
          <Appear>
            <Text margin="50px 0" textColor="primary">
              By using state to control your UI, you'll never have to this again:
            </Text>
          </Appear>
          <Appear>
            <CodePane
              style={{ fontSize: 16 }}
              lang="javascript"
              source={
`var guests = $('#hidden-value-guests').val();
$('.guests-count').text(value);
`} />
          </Appear>
          <Notes>
            <ul>
              <li>State is how we control a component in React</li>
              <li>Essentially, state is an object that contains all the details about the component</li>
              <li>For example, you might have a dropdown component that you toggle open and closed with a boolean</li>
              <li>
                This isn't just to bash jQuery, but handling state like this is clunky and unreliable
              </li>
              <li>
                It also means that if you wanted to reuse this logic, you'd have to add a second listener with a separate hidden input
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide bgColor="secondary" align="center flex-start">
          <Text margin="25px 0" textColor="primary">When you change state, it updates how the component looks</Text>
          <Appear>
            <LiveProvider code={require('raw-loader!../assets/state.example')}>
              <LiveEditor style={{ fontSize: 18 }} />
              <LiveError />
              <LivePreview />
            </LiveProvider>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px 0" size={4} textColor="secondary">
            Component Example
          </Heading>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <CodePane lang="javascript" source={require('raw-loader!../assets/click.example')} style={{ fontSize: 16 }} />
            <ClickCount />
          </div>
          <Notes>
            - This is a simple component that just tracks how many times it's been clicked on.
            <br />
            - One of the great benefits of React is that even if you don't know React, you can probably figure out what's going on  here
            <br />
            - React uses Javascript, but the tags you see are called "JSX", which are the preferred way to write React
            <br />
            - This is preferred because it lets you see how your actions and HTML are connected, instead of using jQuery selectors
            <br />
            - You also use curly brackets to indicate when you're using Javascript to escape a value, like using erb tags in Rails
          </Notes>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} textColor="primary" caps>
            Example React Apps
          </Heading>
          <List>
            <ListItem>
              <Link
                style={{ textDecoration: 'underline' }}
                textColor="#fff"
                href="https://flatris.space/"
              >
                React Tetris
              </Link>
            </ListItem>
            <ListItem>
              <Link
                style={{ textDecoration: 'underline' }}
                textColor="#fff"
                href="https://spectrum.chat/cratebind"
              >
                Spectrum
              </Link>
            </ListItem>
            <ListItem>
              <Link
                style={{ textDecoration: 'underline' }}
                textColor="#fff"
                href="http://ngokevin.github.io/aframe-react-boilerplate/"
              >
                Virtual Reality ??
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Working With Rails
          </Heading>
        </Slide>
        {/* <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide> */}
      </Deck>
    );
  }
}
