import React from 'react';
import {quotes} from './data.js';
import TweetIt from './TweetIt';
import './Quote.css'

function Quote() {
      const [q, setQ] = React.useState(() => {
        return quotes[Math.floor(Math.random() * quotes.length)];
      });
      const colors = ["#F7DDDB", "#F4C78B", "#F7F5B4", "#D6E6C3", "#D0EAF4", "#E6DBEB", "#E1DEED", "#D4F7DE", "#F8E5F7", "#E1E9EA", "#BED6D9", "#E3F4EC", "#F8FCC8", "#DFDCEC"];
      const [color, setColor] = React.useState(() => {
        return ({
          "background-color": colors[Math.floor(Math.random() * colors.length)]
        });
      });

    
      const getQuote = () => {
        let randQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQ(randQuote);

        let c = colors[Math.floor(Math.random() * colors.length)];
        setColor({
          "background-color": c});
      };

    return(
      <div id="quote-box" style={color}>
          <section className="quote-auth">
            <h1 id="text">{q.quote}</h1>
            <h3 id="author">- {q.author}</h3>
          </section>
          <section className="bottom-row">
            <TweetIt quote={q}/>
            <button id="new-quote" onClick={getQuote}>Get New Quote</button>
          </section>
      </div>
    )
} 

export default Quote;