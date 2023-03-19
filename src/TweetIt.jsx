import twitter_icon from './assets/images/twitter_icon.png';


function TweetIt (props) {
    let tweetedQuote = props.quote.quote + " -" + props.quote.author;
    if(tweetedQuote.length > 280){
        tweetedQuote = tweetedQuote.slice(0, 276) + "...";
    }

    let tweetLink = "https://twitter.com/intent/tweet?text=" + tweetedQuote;

    return (
        <div>
            <a href = {tweetLink}><img src={twitter_icon} alt="tweet it" width="30px"/></a>
        </div>
    );
}

export default TweetIt;