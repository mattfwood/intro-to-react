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
  CodePane
} from 'spectacle';

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
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            or "How to Upset Juan"
          </Text>
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
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Simple Examples
          </Heading>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <CodePane lang="javascript" source={require('raw-loader!../assets/click.example')} style={{ fontSize: 16 }} />
            <ClickCount />
          </div>
          <Notes>
            - Surprise, this presentation was made with React
            <br />
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
        <Slide bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Components
          </Heading>
          <CodePane lang="javascript" source={`import React from 'react';`} />
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          {/* <Image src={images.goodWork} width={500} /> */}
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
