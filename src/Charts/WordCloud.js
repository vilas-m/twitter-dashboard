import React, { useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import * as d3 from 'd3'

const WordCloud = () => {
  let common =
    "poop,i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall";
  let text_string =
    "Of course that’s your contention. You’re a first year grad student. You just got finished readin’ some Marxian historian, Pete Garrison probably. You’re gonna be convinced of that ’til next month when you get to James Lemon and then you’re gonna be talkin’ about how the economies of Virginia and Pennsylvania were entrepreneurial and capitalist way back in 1740. That’s gonna last until next year. You’re gonna be in here regurgitating Gordon Wood, talkin’ about, you know, the Pre-Revolutionary utopia and the capital-forming effects of military mobilization… ‘Wood drastically underestimates the impact of social distinctions predicated upon wealth, especially inherited wealth.’ You got that from Vickers, Work in Essex County, page 98, right? Yeah, I read that, too. Were you gonna plagiarize the whole thing for us? Do you have any thoughts of your own on this matter? Or do you, is that your thing? You come into a bar. You read some obscure passage and then pretend, you pawn it off as your own, as your own idea just to impress some girls and embarrass my friend? See, the sad thing about a guy like you is in 50 years, you’re gonna start doin’ some thinkin’ on your own and you’re gonna come up with the fact that there are two certainties in life. One: don’t do that. And two: you dropped a hundred and fifty grand on a fuckin’ education you coulda got for a dollar fifty in late charges at the public library.";

  let word_count = {};

  let words = text_string.split(/[ '\-\(\)\*":;\[\]|{},.!?]+/);
  if (words.length == 1) {
    word_count[words[0]] = 1;
  } else {
    words.forEach(function (word) {
      word = word.toLowerCase();
      if (word != "" && common.indexOf(word) == -1 && word.length > 1) {
        if (word_count[word]) {
          word_count[word]++;
        } else {
          word_count[word] = 1;
        }
      }
    });
  }

  let myColor = d3
    .scaleSequential()
    .domain([-20, 20])
    .interpolator(d3.interpolatePurples);

    let scale = d3.scaleLinear().domain([0, 50]).range([9, 50])

  const callbacks = {
    getWordColor: (i) => myColor(i.value),
    fontSizes:(i) => scale(i.value + 'px'),
    fontWeight: 'bold',

  };
  const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
  };
  const size = [650, 600];
  let dd = Object.entries(word_count).map((i) => ({ text: i[0], value: i[1] }));
  console.log(dd);
  //   const myWords =
  return (
    <ReactWordcloud
      callbacks={callbacks}
      options={options}
      size={size}
      words={dd}
      maxWords={30}
    />
  );
};

export default WordCloud;
