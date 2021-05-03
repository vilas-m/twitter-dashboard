import React, { useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import * as d3 from "d3";

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
    .domain([-20, 10])
    .interpolator(d3.interpolatePurples);

  let scale = d3.scaleLinear().domain([0, 50]).range([9, 50]);

  const callbacks = {
    getWordColor: (i) => myColor(i.value),
    // fontSizes: (i) => scale(i.value + "px"),
    fontWeight: "bold",
  };
  const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
  };
  const size = [650, 600];
  let dd = Object.entries(word_count).map((i) => ({ text: i[0], value: i[1] }));
    const myWords = [ {
      text: 'told',
      value: 64,
    },
    {
      text: 'mistake',
      value: 11,
    },
    {
      text: 'thought',
      value: 16,
    },
    {
      text: 'bad',
      value: 17,
    },
    {
      text: 'correct',
      value: 10,
    },
    {
      text: 'day',
      value: 54,
    },
    {
      text: 'prescription',
      value: 12,
    },
    {
      text: 'time',
      value: 77,
    },
    {
      text: 'thing',
      value: 45,
    },
    {
      text: 'left',
      value: 19,
    },
    {
      text: 'pay',
      value: 13,
    },
    {
      text: 'people',
      value: 32,
    },
    {
      text: 'month',
      value: 22,
    },
    {
      text: 'again',
      value: 35,
    },
    {
      text: 'review',
      value: 24,
    },
    {
      text: 'call',
      value: 38,
    },
    {
      text: 'doctor',
      value: 70,
    },
    {
      text: 'asked',
      value: 26,
    },
    {
      text: 'finally',
      value: 14,
    },
    {
      text: 'insurance',
      value: 29,
    },
    {
      text: 'week',
      value: 41,
    },
    {
      text: 'called',
      value: 49,
    },
    {
      text: 'problem',
      value: 20,
    },
    {
      text: 'going',
      value: 59,
    },
    {
      text: 'help',
      value: 49,
    },
    {
      text: 'felt',
      value: 45,
    },
    {
      text: 'discomfort',
      value: 11,
    },
    {
      text: 'lower',
      value: 22,
    },
    {
      text: 'severe',
      value: 12,
    },
    {
      text: 'free',
      value: 38,
    },
    {
      text: 'better',
      value: 54,
    },
    {
      text: 'muscle',
      value: 14,
    },
    {
      text: 'neck',
      value: 41,
    },
    {
      text: 'root',
      value: 24,
    },
    {
      text: 'adjustment',
      value: 16,
    },
    {
      text: 'therapy',
      value: 29,
    },
    {
      text: 'injury',
      value: 20,
    },
    {
      text: 'excruciating',
      value: 10,
    },
    {
      text: 'chronic',
      value: 13,
    },
    {
      text: 'chiropractor',
      value: 35,
    },
    {
      text: 'treatment',
      value: 59,
    },
    {
      text: 'tooth',
      value: 32,
    },
    {
      text: 'chiropractic',
      value: 17,
    },
    {
      text: 'dr',
      value: 77,
    },
    {
      text: 'relief',
      value: 19,
    },
    {
      text: 'shoulder',
      value: 26,
    },
    {
      text: 'nurse',
      value: 17,
    },
    {
      text: 'room',
      value: 22,
    },
    {
      text: 'hour',
      value: 35,
    },
    {
      text: 'wait',
      value: 38,
    },
    {
      text: 'hospital',
      value: 11,
    },
    {
      text: 'eye',
      value: 13,
    },
    {
      text: 'test',
      value: 10,
    },
    {
      text: 'appointment',
      value: 49,
    },
    {
      text: 'medical',
      value: 19,
    },
    {
      text: 'question',
      value: 20,
    },
    {
      text: 'office',
      value: 64,
    },
    {
      text: 'care',
      value: 54,
    },
    {
      text: 'minute',
      value: 29,
    },
    {
      text: 'waiting',
      value: 16,
    },
    {
      text: 'patient',
      value: 59,
    },
    {
      text: 'health',
      value: 49,
    },
    {
      text: 'alternative',
      value: 24,
    },
    {
      text: 'holistic',
      value: 19,
    },
    {
      text: 'traditional',
      value: 20,
    },
    {
      text: 'symptom',
      value: 29,
    },
    {
      text: 'internal',
      value: 17,
    },
    {
      text: 'prescribed',
      value: 26,
    },
    {
      text: 'acupuncturist',
      value: 16,
    },
    {
      text: 'pain',
      value: 64,
    },
    {
      text: 'integrative',
      value: 10,
    },
    {
      text: 'herb',
      value: 13,
    },
    {
      text: 'sport',
      value: 22,
    },
    {
      text: 'physician',
      value: 41,
    },
    {
      text: 'herbal',
      value: 11,
    },
    {
      text: 'eastern',
      value: 12,
    },
    {
      text: 'chinese',
      value: 32,
    },
    {
      text: 'acupuncture',
      value: 45,
    },
    {
      text: 'prescribe',
      value: 14,
    },
    {
      text: 'medication',
      value: 38,
    },
    {
      text: 'western',
      value: 35,
    },
    {
      text: 'sure',
      value: 38,
    },
    {
      text: 'work',
      value: 64,
    },
    {
      text: 'smile',
      value: 17,
    },
    {
      text: 'teeth',
      value: 26,
    },
    {
      text: 'pair',
      value: 11,
    },
    {
      text: 'wanted',
      value: 20,
    },
    {
      text: 'frame',
      value: 13,
    },
    {
      text: 'lasik',
      value: 10,
    },
    {
      text: 'amazing',
      value: 41,
    },
    {
      text: 'fit',
      value: 14,
    },
    {
      text: 'happy',
      value: 22,
    },
    {
      text: 'feel',
      value: 49,
    },
    {
      text: 'glasse',
      value: 19,
    },
    {
      text: 'vision',
      value: 12,
    },
    {
      text: 'pressure',
      value: 16,
    },
    {
      text: 'find',
      value: 29,
    },
    {
      text: 'experience',
      value: 59,
    },
    {
      text: 'year',
      value: 70,
    },
    {
      text: 'massage',
      value: 35,
    },
    {
      text: 'best',
      value: 54,
    },
    {
      text: 'mouth',
      value: 20,
    },
    {
      text: 'staff',
      value: 64,
    },
    {
      text: 'gum',
      value: 10,
    },
    {
      text: 'chair',
      value: 12,
    },
    {
      text: 'ray',
      value: 22,
    },
    {
      text: 'dentistry',
      value: 11,
    },
    {
      text: 'canal',
      value: 13,
    },
    {
      text: 'procedure',
      value: 32,
    },
    {
      text: 'filling',
      value: 26,
    },
    {
      text: 'gentle',
      value: 19,
    },
    {
      text: 'cavity',
      value: 17,
    },
    {
      text: 'crown',
      value: 14,
    },
    {
      text: 'cleaning',
      value: 38,
    },
    {
      text: 'hygienist',
      value: 24,
    },
    {
      text: 'dental',
      value: 59,
    },
    {
      text: 'charge',
      value: 24,
    },
    {
      text: 'cost',
      value: 29,
    },
    {
      text: 'charged',
      value: 13,
    },
    {
      text: 'spent',
      value: 17,
    },
    {
      text: 'paying',
      value: 14,
    },
    {
      text: 'pocket',
      value: 12,
    },
    {
      text: 'dollar',
      value: 11,
    },
    {
      text: 'business',
      value: 32,
    },
    {
      text: 'refund',
      value: 10,
    },]
  return (
    <div>
      Which words did I used most?
      <ReactWordcloud
        style={{width: '100%', height: '100%'}}
        callbacks={callbacks}
        options={options}
        size={size}
        words={myWords}
        maxWords={30}
      />
    </div>
  );
};

export default WordCloud;
