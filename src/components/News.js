import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin';
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8, 
        category: 'general',
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, 
        category: PropTypes.string,
      }

      articles= [
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Haje Jan Kamps",
          "title": "If your startup doesn’t seem impossible at first, it’s not hard enough",
          "description": "The key to a successful startup lies in its team and their ability to answer pivotal questions about the startup's purpose and challenges.\n© 2023 TechCrunch. All rights reserved. For personal use only.",
          "url": "https://techcrunch.com/2023/11/03/ifyourstartupdoesntseemimpossibleatfirstitsnothardenough/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2022/07/GettyImages869779546.jpg?resize=1200,900",
          "publishedAt": "20231103T19:05:30Z",
          "content": "Welcome to Startups Weekly. Sign up here to get it in your inbox every Friday.\r\nStartups exist to solve complex problems, not to be a quick moneymaking scheme, and their success lies in their unique … [+7760 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Sarah Perez",
          "title": "Apple CEO Tim Cook says AI is a fundamental technology, confirms investments in generative AI",
          "description": "Apple CEO Tim Cook pushed back a bit at the notion that the company was behind in AI on yesterday’s Q4 earnings call with investors, as he highlighted technology developments that Apple had made recently that “would not be possible without AI.” Specifically, …",
          "url": "https://techcrunch.com/2023/11/03/appleceotimcooksaysaiisafundamentaltechnologyconfirmsinvestmentsingenerativeai/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2021/09/AppleEvent.SEP14Keynote.Tim_Cook.01.jpg?resize=1200,898",
          "publishedAt": "20231103T16:01:04Z",
          "content": "Apple CEO Tim Cook pushed back a bit at the notion that the company was behind in AI on yesterday’s Q4 earnings call with investors, as he highlighted technology developments that Apple had made rece… [+3059 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Sarah Perez",
          "title": "Lemon8, the Instagram rival from TikTok parent ByteDance, fails to gain traction in U.S.",
          "description": "TikTok owner ByteDance's efforts to make its PinterestslashInstagram competitor Lemon8 take off in the U.S. haven't yet panned out.  Since launching in the...",
          "url": "https://techcrunch.com/2023/11/03/lemon8theinstagramrivalfromtiktokparentbytedancefailstogaintractioninus/",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Sfhve1pdM2TxMBQya_Hi7w/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MTg/https://media.zenfs.com/en/techcrunch_350/e465fa95d0f319fcdbc1bbb65c1f1246",
          "publishedAt": "20231103T15:35:08Z",
          "content": "TikTok owner ByteDance's efforts to make its PinterestslashInstagram competitor Lemon8 take off in the U.S. haven't yet panned out. Since launching in the U.S. earlier this year, the Lemon8 app has… [+4085 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "thunderbong",
          "title": "Zephr plans to create a \"networked GPS\" using cell phones",
          "description": "Article URL: https://techcrunch.com/2023/11/02/zephremergesfromstealthwith35mandplanstocreateanetworkedgpsusingcellphones/\nComments URL: https://news.ycombinator.com/item?id=38112421\nPoints: 5\n# Comments: 0",
          "url": "https://techcrunch.com/2023/11/02/zephremergesfromstealthwith35mandplanstocreateanetworkedgpsusingcellphones/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2020/07/GettyImages119701976.jpg?resize=1200,900",
          "publishedAt": "20231102T12:14:44Z",
          "content": "Zephr has emerged from stealth with radical plans to dramatically improve GPS using cell phones with zero hardware modifications.\r\nMobile devices have abysmal GPS accuracy, which prevents location ap… [+4778 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Romain Dillet",
          "title": "Revolut appoints new UK CEO as British banking license is still pending",
          "description": "Revolut, the fintech giant based in the U.K., has appointed a new CEO for its U.K. division. Francesca Carlesi will be in charge of Revolut’s division in its home country — Nik Storonsky remains the CEO of Revolut Ltd. It’s worth noting that today’s news come…",
          "url": "https://techcrunch.com/2023/11/02/revolutappointsfrancescacarlesiasnewukceo/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/11/FrancescaCarlessi1.jpg?resize=1200,675",
          "publishedAt": "20231102T12:02:52Z",
          "content": "Revolut, the fintech giant based in the U.K., has appointed a new CEO for its U.K. division. Francesca Carlesi will be in charge of Revoluts division in its home country Nik Storonsky remains the CEO… [+3190 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Thomas Macaulay",
          "title": "AI is the ‘word of the year.’ Here’s how previous tech terms fared",
          "description": "The artificial intelligence hype train has reached another milestone. In an eagerlyanticipated announcement, Collins Dictionary today named AI as its word of the year. Generously, Collins also provided a definition for the nebulous term: “the modelling of hu…",
          "url": "https://thenextweb.com/news/ainamedcollinswordoftheyear",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F11%2FUntitleddesign3.jpg&signature=446dd6664c146bb402771fc6b5b58459",
          "publishedAt": "20231101T17:31:16Z",
          "content": "The artificial intelligence hype train has reached another milestone. In an eagerlyanticipated announcement, Collins Dictionary today named AI as its word of the year.\r\nGenerously, Collins also prov… [+5660 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "Nokia sues Amazon, HP over video patent infringement",
          "description": "Nokia has taken legal action against Amazon and HP over their alleged “unauthorised use” of the company’s video streamingrelated technologies. In a blogpost, Nokia’s Chief Licencing Officer Arvin Patel alleged that Amazon Prime Video and Amazon’s streaming d…",
          "url": "https://thenextweb.com/news/nokiasuesamazonhpvideopatentinfringement",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F11%2FUntitleddesign19.jpg&signature=2ac90cdb1a405cb463995ea85180d53f",
          "publishedAt": "20231101T14:59:44Z",
          "content": "Nokia has taken legal action against Amazon and HP over their alleged unauthorised use of the companys video streamingrelated technologies.\r\nIn a blogpost, Nokias Chief Licencing Officer Arvin Patel… [+1736 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "AI nearly twice as good as biopsy at assessing rare cancer",
          "description": "AI could be nearly twice as accurate as biopsies at assessing the aggressiveness of some rare types of cancer, a new study suggests. According to researchers this could save the lives of thousands of patients. A research team from the Royal Marsden NHS Founda…",
          "url": "https://thenextweb.com/news/aitwiceasgoodbiopsyassessingrarecancer",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F11%2Fxray6841384_1280.jpg&signature=b4aa3b8e0bb40ff424849d3be908ce31",
          "publishedAt": "20231101T13:14:14Z",
          "content": "AI could be nearly twice as accurate as biopsies at assessing the aggressiveness of some rare types of cancer, a new study suggests. According to researchers this could save the lives of thousands of… [+2452 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Kyle Wiggers",
          "title": "Authentication startup FusionAuth raises $65M, its first outside round | TechCrunch",
          "description": "FusionAuth, a startup providing authentication and user management tools for developers, has raised $65 million in its first outside venture round.",
          "url": "https://techcrunch.com/2023/11/01/authenticationstartupfusionauthraises65mitsfirstoutsideround/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2022/12/GettyImages1367402313.jpg?resize=1200,537",
          "publishedAt": "20231101T13:08:09Z",
          "content": "Funding for cybersecurity startups continues to look bleak. According to a recent Crunchbase survey, companies in the digital security space raised 30% less funds — $1.9 billion — in Q3 2023 compared… [+3365 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Thomas Macaulay",
          "title": "Bedazzled by big tech, the UK’s AI summit is overlooking big issues",
          "description": "World leaders and tech titans are currently descending on southern England for an AI safety summit, but the flashy event isn’t impressing everyone. Over the next two days, around 100 bigwigs will attend the event at the historic Bletchley Park, a country esta…",
          "url": "https://thenextweb.com/news/ukaisafetysummitraisesconcerns",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign13.jpg&signature=02a6f7880c6639d719798dc0b70b9a40",
          "publishedAt": "20231101T09:48:41Z",
          "content": "World leaders and tech titans are currently descending on southern England for an AI safety summit, but the flashy event isnt impressing everyone.\r\nOver the next two days, around 100 bigwigs will att… [+8413 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Steve Hasker",
          "title": "How AI is enhancing, not threatening the future of professionals | TechCrunch",
          "description": "Driven by the notion of AI as a competitor, fear of job displacement still looms in some corners of the professional world.",
          "url": "https://techcrunch.com/2023/10/31/howaiisenhancingnotthreateningthefutureofprofessionals/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/10/GettyImages1365093475.jpg?resize=1200,675",
          "publishedAt": "20231031T22:03:08Z",
          "content": "The widespread influence of artificial intelligence (AI) on nearly every facet of our lives is undeniable. Its rapid expansion has prompted us to reflect on how it can redefine the roles of professio… [+2462 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Amanda Silberling",
          "title": "So long, Twitter Circles",
          "description": "If tictactoe has taught us anything, it’s that Xs and circles cannot peacefully coexist. The app formerly known as Twitter, X, has shut down the Circles feature, which allowed users to post to a small, exclusive audience. Like an Instagram Close Friends sto…",
          "url": "https://techcrunch.com/2023/10/31/twittercirclegone/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/07/xlogobeheadstwitterlogo.jpg?resize=1200,675",
          "publishedAt": "20231031T19:58:39Z",
          "content": "If tictactoe has taught us anything, it’s that Xs and circles cannot peacefully coexist.\r\nX, the app formerly known as Twitter, has shut down the Circles feature, which allowed users to post to a s… [+2161 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "Multiverse Computing deploys quantum technology to predict floods",
          "description": "Climate change is here. Along with it, catastrophic floods are becoming alarmingly more and more common. Adapting to a new climate reality is no easy task, but technological advancements offer a ray of hope. Among the industry players tackling this challenge …",
          "url": "https://thenextweb.com/news/quantumstartupmultiversecomputingpredictfloods",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign1719.jpg&signature=ef5387f9ce3c380d9b447072667af3d9",
          "publishedAt": "20231031T15:28:31Z",
          "content": "Climate change is here. Along with it, catastrophic floods are becoming alarmingly more and more common. Adapting to a new climate reality is no easy task, but technological advancements offer a ray … [+2419 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "Cultivated meat is a ‘promising’ space food for astronauts, ESA says",
          "description": "Development of cultivated meat, i.e. actual animal meat that’s grown in bioreactors from stem cells, has been gaining traction in recent years. That’s because it can provide a more sustainable and ethical alternative that doesn’t only mitigate animal slaughte…",
          "url": "https://thenextweb.com/news/cultivatedmeatpromisingspacefoodastronautsesa",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign1718.jpg&signature=3c1ad1ae4aceaf70014afbadf42bb76c",
          "publishedAt": "20231031T12:19:00Z",
          "content": "Development of cultivated meat, i.e. actual animal meat thats grown in bioreactors from stem cells, has been gaining traction in recent years. Thats because it can provide a more sustainable and ethi… [+2924 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Linnea Ahlgren",
          "title": "Meta begrudgingly launches €9.99 adfree subscription for Facebook and Instagram",
          "description": "The effects of the EU’s regulatory crusade on Big Tech are beginning to make themselves known to consumers. Yesterday, Meta launched adfree subscription services for Facebook and Instagram within the bloc. Users will be able to pay from €9.99 to use the soci…",
          "url": "https://thenextweb.com/news/metaadfreesubscriptionfacebookinstagram",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2Ffacebookmetae1698744440453.jpeg&signature=5ec43c214eeb01b39c1ec3f0c41a943b",
          "publishedAt": "20231031T09:32:36Z",
          "content": "The effects of the EUs regulatory crusade on Big Tech are beginning to make themselves known to consumers. Yesterday, Meta launched adfree subscription services for Facebook and Instagram within the… [+2277 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Callum Booth",
          "title": "Secure your Mac like a rockstar — 5 easy life hacks to stay safe online",
          "description": "Yes, hackers and cybersecurity professionals are still engaged in a constant game of cat and mouse to exploit and fix loopholes, but the world around this has altered substantially. These days 80% of Mac users say they’re informed about cyber threats, a far c…",
          "url": "https://thenextweb.com/news/securemac5easyhacksstaysafeonline",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FAddaheading21.jpg&signature=17162fb055d73e97a601fe70efac433c",
          "publishedAt": "20231031T08:35:18Z",
          "content": "Yes, hackers and cybersecurity professionals are still engaged in a constant game of cat and mouse to exploit and fix loopholes, but the world around this has altered substantially.\r\nThese days 80% o… [+6420 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Manish Singh",
          "title": "Indian opposition leaders say Apple has warned them of statesponsored iPhone attacks",
          "description": "Apple has warned at least six Indian politicians and other members of political parties and one journalist of their iPhones being targets of statesponsored attacks, these people said Tuesday. Shashi Tharoor of the opposition Congress party, Mahua Moitra, a n…",
          "url": "https://techcrunch.com/2023/10/30/indianoppositionleaderssaysapplehaswarnedthemofstatesponsorediphoneattacks/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2018/02/tcbacklight.png?resize=1200,486",
          "publishedAt": "20231031T05:22:02Z",
          "content": "Apple has warned at least six Indian politicians and other members of political parties and one journalist of their iPhones being targets of statesponsored attacks, these people said Tuesday. \r\nShas… [+1031 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Brian Heater",
          "title": "Apple’s Journal app has arrived – here’s what’s good and bad",
          "description": "Having used Journal for a few days now, I feel confident saying that Day One is not staring down an existential threat — at least not yet. Keep in mind we’re talking about Apple has a wellknown history of Sherlocking new apps with feature updates (it was, af…",
          "url": "https://techcrunch.com/2023/10/30/applesjournalapphasarrivedhereswhatsgoodandbad/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/01/journalingapp.jpg?resize=1200,645",
          "publishedAt": "20231030T23:27:39Z",
          "content": "Having used Journal for a few days now, I feel confident saying that Day One is not staring down an existential threat — at least not yet. Keep in mind were talking about Apple has a wellknown histo… [+6162 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "EU backs new project that combines solar power with agriculture",
          "description": "A new “agrivoltaics” initiative looking to prove the commercial viability of integrating solar power plants with agriculture has won the favour of Brussels. The EU is backing German renewable energy company BayWa, in a firstofitskind scheme that could be a…",
          "url": "https://thenextweb.com/news/europesolarpoweragricultureagrivoltaics",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2Fagrivoltaics.jpeg&signature=4c405a02a87fb4f86f2e6a4a3c8fc9f7",
          "publishedAt": "20231030T16:12:51Z",
          "content": "A new agrivoltaics initiative looking to prove the commercial viability of integrating solar power plants with agriculture has won the favour of Brussels. The EU is backing German renewable energy co… [+2518 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "UK police urged to double down on facial recognition",
          "description": "In a controversial move, UK police is being encouraged to double its use of retrospective facial recognition to track down known offenders. Specifically, in a letter to force chiefs, policing minister Chris Philp said that using the AIenabled technology  wou…",
          "url": "https://thenextweb.com/news/ukpolicefacialrecognition",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign1717.jpg&signature=0dc058381f8c415116fb15e3e79411c2",
          "publishedAt": "20231030T15:10:17Z",
          "content": "In a controversial move, UK police is being encouraged to double its use of retrospective facial recognition to track down known offenders.\r\nSpecifically, in a letter to force chiefs, policing minist… [+1986 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "UK helps fund Rocket Factory Augsburg in lead up to Scotland launch",
          "description": "German startup Rocket Factory Augsburg has secured £3.5mn (€4mn) in funding from the UK Space Agency as it prepares for its maiden flight next year. The funding was awarded under the European Space Agency’s Boost! Programme, which aims to help companies devel…",
          "url": "https://thenextweb.com/news/ukrocketfactoryaugsburgfunding",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FSaxaVordSpaceport.jpg&signature=bd5e38e784a24a2f14b26ce3278cc17f",
          "publishedAt": "20231030T13:22:05Z",
          "content": "German startup Rocket Factory Augsburg has secured £3.5mn (4mn) in funding from the UK Space Agency as it prepares for its maiden flight next year.\r\nThe funding was awarded under the European Space A… [+2110 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "UK launches £100M AI fund to help treat incurable diseases",
          "description": "From making variantproof vaccines to preventing genetic diseases and improving cancer treatments, AI could truly be an invaluable tool in solving some of the biggest challenges in healthcare. Against this backdrop, the UK aims to harness the tech’s potential…",
          "url": "https://thenextweb.com/news/uk100mhealthcareaifundtreatincurablediseases",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign1716.jpg&signature=d084f08e60bdb9a1a7b9f26aa1b28e8b",
          "publishedAt": "20231030T11:00:43Z",
          "content": "From making variantproof vaccines to preventing genetic diseases and improving cancer treatments, AI could truly be an invaluable tool in solving some of the biggest challenges in healthcare.\r\nAgain… [+2174 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Christine Hall",
          "title": "A look at how one fintech CEO’s PR decision backfired",
          "description": "Welcome back to The Interchange, where we take a look at the hottest fintech news of the previous week. If you want to receive The Interchange directly in your inbox every Sunday, head here to sign up! Last week, we chronicled one CEO’s big PR flub, one firm’…",
          "url": "https://techcrunch.com/2023/10/29/alookathowonefintechceosprdecisionbackfired/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2016/12/gettyimages583874193.jpg?resize=1200,800",
          "publishedAt": "20231029T14:25:19Z",
          "content": "Welcome back to The Interchange, where we take a look at the hottest fintech news of the previous week. If you want to receive The Interchange directly in your inbox every Sunday, head here to sign u… [+7808 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Amanda Silberling",
          "title": "Elon Musk’s Twitter a year later: Everything you need to know",
          "description": "Welcome to Elon Musk’s Twitter (now X), where the rules are made up and the check marks don’t matter. The Tesla and SpaceX CEO first announced his bid to buy Twitter in April 2022, zealously driven to rid the platform of spam bots and protect free speech; now…",
          "url": "https://techcrunch.com/2023/10/27/elonmusktwittereverythingyouneedtoknow/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/04/elonownstwitter.jpg?resize=1200,675",
          "publishedAt": "20231027T17:15:09Z",
          "content": "Welcome to Elon Musks Twitter (now X), where the rules are made up and the check marks dont matter.\r\nThe Tesla and SpaceX CEO announced his bid to buy Twitter in April 2022, zealously driven to rid t… [+60643 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Sarah Perez",
          "title": "X to take on newswire services with new product, XWire",
          "description": "As Instagram Threads is leaning away from news, according to statements made by Instagram head Adam Mosseri, its competitor X appears to be doubling down. Executives at the company formerly known as Twitter, spoke during yesterday’s allhands internal meeting…",
          "url": "https://techcrunch.com/2023/10/27/xtotakeonnewswireserviceswithnewproductxwire/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/07/xtwitter.jpg?resize=1200,550",
          "publishedAt": "20231027T15:13:00Z",
          "content": "As Instagram Threads is leaning away from news, according to statements made by Instagram head Adam Mosseri, its competitor X appears to be doubling down. Executives at the company formerly known as … [+2078 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "Netherlands starts building €1.5bn hydrogen pipeline to cut reliance on natural gas",
          "description": "Today, the Netherlands officially began constructing a 1,200kmlong hydrogen pipeline — amid a continentwide push to wean Europe off natural gas. The first section of the pipeline will run from the Maasvlakte — a massive manmade extension of the Europoort i…",
          "url": "https://thenextweb.com/news/netherlandshydrogenpipelinenaturalgasenergy",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2Fhydrogenpipelinenetherlands.jpg&signature=39e92e77c6083a98f9677d2c71ceb967",
          "publishedAt": "20231027T15:11:58Z",
          "content": "Today, the Netherlands officially began constructing a 1,200kmlong hydrogen pipeline amid a continentwide push to wean Europe off natural gas.\r\nThe first section of the pipeline will run from the M… [+3728 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "UN creates AI advisory body to ‘maximise’ benefits for humankind",
          "description": "UN SecretaryGeneral António Guterres has unveiled a dedicated AI advisory body with a mandate to harness the technology’s power for good and mitigate its risks through international collaboration and governance. “AI could power extraordinary progress for hum…",
          "url": "https://thenextweb.com/news/unaiadvisorybodytomaximisebenefitsforhumankind",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign1715.jpg&signature=cdc11e4438a0f883f07c335bb2dc38b7",
          "publishedAt": "20231027T12:08:50Z",
          "content": "UN SecretaryGeneral António Guterres has unveiled a dedicated AI advisory body with a mandate to harness the technologys power for good and mitigate its risks through international collaboration and… [+1985 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Manish Singh",
          "title": "Tata to start manufacturing iPhones in India",
          "description": "Tata Group will start making iPhones in India for the local and global markets, India’s Deputy IT Minister Rajeev Chandrasekhar said on Friday, after the Taiwanese firm Wistron entered a deal with the salttosteel conglomerate. Tata Group has acquired Wistro…",
          "url": "https://techcrunch.com/2023/10/27/tatatostartmakingiphonesinindia/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/10/GettyImages621560602.jpg?resize=1200,800",
          "publishedAt": "20231027T11:14:49Z",
          "content": "Tata Group will start making iPhones in India for the local and global markets, India’s Deputy IT Minister Rajeev Chandrasekhar announced on Friday, moments after Wistron’s board approved the sale of… [+2264 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "Dutch solar EV completes 1,000km test drive through the desert",
          "description": "An offroad solar car built by a team of Dutch students has successfully traversed 1,000km of rugged desert terrain in North Africa — opening up possibilities for the broader rollout of solarpowered EVs in areas with limited charging infrastructure. The Eind…",
          "url": "https://thenextweb.com/news/dutchsolarcartestdrivemoroccoeindhoven",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2Fsolarcareindhovenmorocco.jpg&signature=cb177459ec1b1364501c326f593cd559",
          "publishedAt": "20231027T11:02:17Z",
          "content": "An offroad solar car built by a team of Dutch students has successfully traversed 1,000km of rugged desert terrain in North Africa opening up possibilities for the broader rollout of solarpowered E… [+3146 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Sarah Perez",
          "title": "Despite usage declines, X remains ‘stickier’ than first thought",
          "description": "Despite overall declining usage since Elon Musk’s acquisition, X’s hold on the microblogging market may be stickier than first thought. The app formerly known as Twitter saw its daily active users drop 16% in September, according to The Wall Street Journal, c…",
          "url": "https://techcrunch.com/2023/10/26/despiteusagedeclinesxremainsstickierthanfirstthought/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/08/twitterxlogomusk1.jpg?resize=1200,675",
          "publishedAt": "20231026T15:44:09Z",
          "content": "Despite overall declining usage since Elon Musk’s acquisition, X’s hold on the microblogging market may be stickier than first thought. The app formerly known as Twitter saw its daily active users dr… [+4094 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "Amazon to launch ‘sovereign’ European cloud amid data privacy concerns",
          "description": "Amazon has announced the launch of independent cloud services for Europe, in what seems to be an attempt to allay fears over EU data sovereignty. The tech giant will be rolling out the Amazon Web Services (AWS) European Sovereign Cloud, which is especially de…",
          "url": "https://thenextweb.com/news/amazonsovereigneuropeancloud",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FDutchMPscriticisenewUSexportbanonASMLchipmachine1.jpg&signature=f13bd99476c4aa2f9cdded1a89b27250",
          "publishedAt": "20231026T14:18:52Z",
          "content": "Amazon has announced the launch of independent cloud services for Europe, in what seems to be an attempt to allay fears over EU data sovereignty.\r\nThe tech giant will be rolling out the Amazon Web Se… [+1426 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Alex Wilhelm",
          "title": "AgentSync raises $50M more in a massive Series B extension",
          "description": "Insurtech has had a rocky few years. Several startups in the space raised a lot of money and tried their luck on the public markets, but found that investors were unwilling to grant them valuations on par with other tech companies for just trying to make insu…",
          "url": "https://techcrunch.com/2023/10/26/agentsyncraises50mmoreinamassiveseriesbextension/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2021/11/GettyImages464675083.jpg?resize=1200,803",
          "publishedAt": "20231026T13:00:00Z",
          "content": "Insurtech has had a rocky few years. Several startups in the space raised a lot of money and tried their luck on the public markets, but found that investors were unwilling to grant them valuations o… [+2317 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Ivan Mehta",
          "title": "iOS 17.1 will let you continue AirDrop transfers over cellular data",
          "description": "Apple released iOS 17.1 on Wednesday to all users with features including improved AirDrop sharing and updates to Apple Music. The biggest change with this release is the ability to use AirDrop when you move out of the WiFi range. AirDrop uses Bluetooth to s…",
          "url": "https://techcrunch.com/2023/10/26/ios171willletyoucontinueairdroptransfersovercellulardata/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/09/iPhone15Pro32.jpg?w=1200",
          "publishedAt": "20231026T12:50:06Z",
          "content": "Apple released iOS 17.1 on Wednesday to all users with features including improved AirDrop sharing and updates to Apple Music. The biggest change with this release is the ability to use AirDrop when … [+1715 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "This Irish startup is throwing concrete dust on farms to fight climate change",
          "description": "Climate tech startup Silicate is set to undertake the first trial of its enhanced weathering technology, which aims to remove C02 permanently from the atmosphere and lock it in the world’s oceans for tens of thousands of years.  The trial will involve spreadi…",
          "url": "https://thenextweb.com/news/irishstartupcarbonremoval",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2Fcarbonremovalfarmlandenhancedweathering.jpg&signature=62c9301b14a739520b5e5485a5c09a5d",
          "publishedAt": "20231026T12:40:59Z",
          "content": "Climate tech startup Silicate is set to undertake the first trial of its enhanced weathering technology, which aims to remove C02 permanently from the atmosphere and lock it in the worlds oceans for … [+2995 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Ivan Mehta",
          "title": "Zuckerberg says Threads has a ‘good chance’ of reaching 1 billion users in a few years",
          "description": "Meta said today that its textbased social network Threads has under 100 million monthly users three months after its launch. Mark Zuckerberg noted during the company’s latest earnings call that the social networking giant is happy with Threads’ progress — wi…",
          "url": "https://techcrunch.com/2023/10/26/zuckerbergsaysthreadshasagoodchanceofreaching1billionusersinafewyears/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/07/ThreadsGettyImages1524134312.jpg?resize=1200,800",
          "publishedAt": "20231026T08:38:57Z",
          "content": "Meta said today that its textbased social network Threads has under 100 million monthly users three months after its launch.\r\nMark Zuckerberg noted during the company’s latest earnings call that the… [+2766 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Manish Singh",
          "title": "Tech companies seek 1218 month extension for India dataprotection law compliance",
          "description": "The Asia Internet Coalition, a powerful industry group that represents Apple, Google, Meta, Microsoft and many other tech companies, has requested India’s IT Ministry for an extended deadline to comply with certain provisions of a newly approved data protecti…",
          "url": "https://techcrunch.com/2023/10/25/techcompaniesseek1218monthextensionforindiadataprotectionlawcompliance/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/10/GettyImages1681877521.jpg?resize=1200,800",
          "publishedAt": "20231026T05:46:39Z",
          "content": "The Asia Internet Coalition, a powerful industry group that represents Apple, Google, Meta, Microsoft and many other tech companies, has requested India’s IT Ministry for an extended deadline to comp… [+2554 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Rebecca Bellan",
          "title": "Will X’s addition of audio and video calling create stickiness in the app?",
          "description": "Elon Musk announced Wednesday that an early version of video and audio calling is now available on X, formerly known as Twitter. The move is another step towards Musk’s goal of turning X into an “everything app” that can handle everything from online payments…",
          "url": "https://techcrunch.com/2023/10/25/willxsadditionofaudioandvideocallingcreatestickinessintheapp/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/08/twitterxlogomuskpattern.jpg?resize=1200,675",
          "publishedAt": "20231026T04:02:19Z",
          "content": "Elon Muskannounced Wednesday that an early version ofvideo and audio calling is now available on X, formerly known as Twitter.\r\nThe move is another step towards Musks goal of turning X into an “every… [+3502 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Brian Heater",
          "title": "Apple Watch’s best new feature is now live",
          "description": "With today’s watchOS 10.1 drop, Apple Watch Series 9 and Apple Watch Ultra 2 owners now have access to the smartwatches’ most exciting feature. Double Tap, which adds gesturebased interactions through tapping one’s index finger and thumbs together twice. It’…",
          "url": "https://techcrunch.com/2023/10/25/applewatchsbestnewfeatureisnowlive/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/09/AppleWatchSeries901.jpg?w=1200",
          "publishedAt": "20231025T17:32:27Z",
          "content": "With today’s watchOS 10.1 drop, Apple Watch Series 9 and Apple Watch Ultra 2 owners now have access to the smartwatches’ most exciting feature. Double Tap, which adds gesturebased interactions throu… [+2348 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "Dutch MPs criticise new US export ban on ASML chip machine",
          "description": "Dutch politicians have expressed their dismay over the US’ new export rules for ASML, claiming that Washington has “unilaterally” imposed restrictions on selling yet another chip making machine to China. AMSL has already been prohibited from selling its most …",
          "url": "https://thenextweb.com/news/dutchcriticisenewusexportbanasmlchipmachine",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FDutchMPscriticisenewUSexportbanonASMLchipmachine.jpg&signature=ace81b3fc242498cf8801c112428ddf2",
          "publishedAt": "20231025T14:25:06Z",
          "content": "Dutch politicians have expressed their dismay over the US new export rules for ASML, claiming that Washington has unilaterally imposed restrictions on selling yet another chip making machine to China… [+2521 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Mary Ann Azevedo",
          "title": "Flourish Ventures, a ‘fintech venture fund with a purpose,’ secures $350M in new capital",
          "description": "Flourish Ventures, an earlystage venture firm investing exclusively in fintech companies in the U.S. and in emerging markets, has secured $350 million in fresh capital, TechCrunch is the first to report. The new raise brings the fouryearold firm’s total as…",
          "url": "https://techcrunch.com/2023/10/25/flourishventuresafintechventurefundwithapurposesecures350minnewcapital/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/10/Unknown1.jpeg?resize=1200,685",
          "publishedAt": "20231025T14:03:59Z",
          "content": "Flourish Ventures, an earlystage venture firm investing exclusively in fintech companies in the U.S. and in emerging markets, has secured $350 million in fresh capital, TechCrunch is the first to re… [+4244 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Karoli Hindriks",
          "title": "Antiimmigration policy is killing European tech",
          "description": "Governments need to create environments where founders and their teams can imagine building lasting and successful businesses.",
          "url": "https://techcrunch.com/2023/10/17/antiimmigrationpolicyiskillingeuropeantech/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/10/GettyImages474416023.jpg?resize=1200,800",
          "publishedAt": "20231025T11:26:44Z",
          "content": "Increases in immigration to Europe since the pandemic have given politicians ample material for election campaigns. Despite illegal immigration making up just a fraction of net migration to Europe, r… [+6495 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "Solar power farms in space commercially viable, study proves",
          "description": "A firstofitskind study has proven that solar power farms in space are a viable option for renewable energy generation — paving the way for the potential commercial application of the technology. The experiment was carried out by a team of scientists from t…",
          "url": "https://thenextweb.com/news/solarpowerfarmspacecommerciallyviable",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign1714.jpg&signature=12d60d3ccf576a47855eb9df2babb512",
          "publishedAt": "20231025T10:39:09Z",
          "content": "A firstofitskind study has proven that solar power farms in space are a viable option for renewable energy generation paving the way for the potential commercial application of the technology. The… [+2722 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Krista Krumina",
          "title": "Attracting talent and breaking down silos are two major challenges scaleups will face in 2024",
          "description": "Don’t miss Salesforce’s Vala Afshar in his keynote speech about a new mindset for unlimited business success at Valencia Digital Summit on October 27. This week, October 2627, Valencia will once again be abuzz as over 10,000 tech enthusiasts from all over th…",
          "url": "https://thenextweb.com/news/attractingtalentbreakingdownsiloschallengesscaleupsface2024",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FAddaheading2.jpg&signature=e5657947beb3688e9472a5a2a3b52b3f",
          "publishedAt": "20231025T10:00:45Z",
          "content": "Dont miss Salesforces Vala Afshar in his keynote speech about a new mindset for unlimited business success at Valencia Digital Summit on October 27. \r\nThis week, October 2627, Valencia will once aga… [+4376 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Thomas Macaulay",
          "title": "How to build a spaceport",
          "description": "Around 250 kilometres off the north coast of Scotland, the Shetland isle of Unst undergoing a dramatic renovation. On a peninsula flanked by giant cliffs and open ocean, builders are constructing a spaceport. They call the project SaxaVord. They say it could …",
          "url": "https://thenextweb.com/news/howtobuildsaxavordspaceportspacetech",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign8.jpg&signature=8cdc13f0754a4d815616b7e6ea07665d",
          "publishedAt": "20231025T07:00:59Z",
          "content": "Around 250 kilometres off the north coast of Scotland, theShetland isle of Unst undergoing a dramatic renovation. \r\nOn a peninsula flanked by giant cliffs and open ocean, builders are constructing a … [+15425 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Catherine Shu",
          "title": "TripleA gets funding from Peak XV to help more businesses use crypto",
          "description": "Created by the founder of Thunes, global digital currency payments institution TripleA wants to close the gap between traditional finance and Created by the founder of Thunes, global digital currency payments startup TripleA wants to close the gap between t…",
          "url": "https://techcrunch.com/2023/10/24/triplea/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/10/GettyImages1366240594.jpg?resize=1200,800",
          "publishedAt": "20231025T01:30:38Z",
          "content": "Created by the founder of Thunes, global digital currency payments institution TripleA wants to close the gap between traditional finance and blockchainbased payments with its whitelabel solutions… [+5816 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "‘We may irreversibly lose control of autonomous AI,’ warn top academics",
          "description": "Open letters warning over AI’s risks are amassing — with top technologists and researchers sounding the alarm on uncontrollable development, pressing existential threats, and the lack of regulation. Now, just a week before the AI Summit in London, a new lette…",
          "url": "https://thenextweb.com/news/wemaylosecontrolautonomousaiwarnacademics",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign1713.jpg&signature=3d9ea33839018641f84162068e54f737",
          "publishedAt": "20231024T14:47:33Z",
          "content": "Open letters warning over AIs risks are amassing with top technologists and researchers sounding the alarm on uncontrollable development, pressing existential threats, and the lack of regulation.\r\nNo… [+2506 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Linnea Ahlgren",
          "title": "How this Berlin startup deploys AI to make preventative healthcare accessible",
          "description": "There are plenty of conversations around how AI can progress healthcare. And indeed, it has numerous applications in the form of diagnostics and accelerated drug discovery. However, wouldn’t it be even better if artificial intelligence could help prevent us f…",
          "url": "https://thenextweb.com/news/howberlinstartupdeploysaipreventativehealthcareaccessible",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FHealthCatersTeame1698154782374.jpg&signature=b7e6d2b3a3308b6a055c9e66bae6b0fb",
          "publishedAt": "20231024T13:51:55Z",
          "content": "There are plenty of conversations around how AI can progress healthcare. And indeed, it has numerous applications in the form of diagnostics and accelerated drug discovery. However, wouldnt it be eve… [+6873 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "Netherlands to build laser pointer for ESA black hole space mission",
          "description": "The Netherlands Organisation for Applied Scientific Research (TNO) has been granted €1.39mn to finish development of its highprecision laser targeting mechanism. This will support one of ESA’s most ambitious missions: tracing and studying black holes with th…",
          "url": "https://thenextweb.com/news/netherlandsbuildlaserpointeresablackholespacemission",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign1712.jpg&signature=bb41b80c3c136a62acf1e6edb543a2ac",
          "publishedAt": "20231024T12:28:39Z",
          "content": "The Netherlands Organisation for Applied Scientific Research (TNO) has been granted 1.39mn to finish development of its highprecision laser targeting mechanism. This will support one of ESAs most am… [+2813 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "Startup bags €8.5M to bolster Europe’s EV battery upcycling",
          "description": "In a big boost to sustainable mobility, 130 million EVs are expected to hit Europe’s streets by 2035, reaching about half of the total vehicles on the continent. However, this also translates to 130 million dead batteries, which — unless recycled — could end …",
          "url": "https://thenextweb.com/news/startuptobolstereuropesevbatteryupcycling",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign1711.jpg&signature=255c3667374c42d38b27cbaaf596bd9f",
          "publishedAt": "20231024T04:03:53Z",
          "content": "In a big boost to sustainable mobility, 130 million EVs are expected to hit Europes streets by 2035, reaching about half of the total vehicles on the continent. However, this also translates to 130 m… [+3822 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Dara Flynn",
          "title": "Should we be working at 85% capacity? The pros and cons of ‘sustainable’ effort",
          "description": "Perfectionism and productivity are uneasy bedfellows. The pandemic, job insecurity, and mass layoffs that followed have exacerbated overperformance burnout, leading to a new thought pattern in employee welfare; one that nobody dared utter out loud until now.…",
          "url": "https://thenextweb.com/news/working85capacityprosandcons",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FAddaheading11.jpg&signature=233a07267d1aed7b52420fa9b0b939d0",
          "publishedAt": "20231023T16:14:25Z",
          "content": "Perfectionism and productivity are uneasy bedfellows.\r\nThe pandemic, job insecurity, and mass layoffs that followed have exacerbated overperformance burnout, leading to a new thought pattern in empl… [+4749 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "Europe has ‘no other choice’ but to depend on SpaceX for upcoming satellite launches",
          "description": "Elon Musk’s SpaceX has reached a deal with the European Space Agency (ESA) to launch four navigation and communications satellites into orbit, the Wall Street Journal reports. The agreement covers two launches next year, each carrying two Galileo satellites, …",
          "url": "https://thenextweb.com/news/europespacexsatelliterocketlaunchdeal",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2Fspacexeuropedeal.jpg&signature=288244f76c75e88000e7beab939c5ebe",
          "publishedAt": "20231023T14:50:19Z",
          "content": "Elon Musks SpaceX has reached a deal with the European Space Agency (ESA) to launch four navigation and communications satellites into orbit, the Wall Street Journalreports.\r\nThe agreement covers two… [+2019 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "2023 to be Europe’s ‘most depressed’ year for VC exit value in a decade",
          "description": "Amid the economic downturn, 2023 is expected to be the “most depressed” year in Europe’s VC exit value since 2013, data from Pitchbook has shown. According to the report, during the first three quarters of 2023, exit value reached €9.1bn — down 72.8% compared…",
          "url": "https://thenextweb.com/news/2023europemostdepressedyearvcexitvalue",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign1710.jpg&signature=25a7df9c6f27ee8a65a93edf69714f6c",
          "publishedAt": "20231023T14:25:41Z",
          "content": "Amid the economic downturn, 2023 is expected to be the most depressed year in Europes VC exit value since 2013, data from Pitchbook has shown.\r\nAccording to the report, during the first three quarter… [+1861 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "Amazon adds 1GW of renewable energy to Europe’s grid",
          "description": "Amazon has added 39 new renewable energy projects to its European portfolio since the start of the year, the company said today.  The 39 new additions include 15 rooftop solar installations on Amazon’s own facilities in Belgium, France, Italy, Spain, and the …",
          "url": "https://thenextweb.com/news/amazon1gwofrenewableenergyeurope2023",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2Famazonwindfarmenergy.jpg&signature=557a190de3450e63a99c95022d462d6e",
          "publishedAt": "20231023T12:17:10Z",
          "content": "Amazon has added 39 new renewable energy projects to its European portfolio since the start of the year, the company said today. \r\nThe 39 new additions include 15 rooftop solar installations on Amazo… [+1673 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "Norway’s AutoStore unveils nextgen electric warehouse robot",
          "description": "Norwegian tech company AutoStore today unveiled the latest version of its warehouse storage and retrieval robot, as it seeks to boost the efficiency of its automated fulfilment system.  Dubbed the R5 Pro, the electric cubeshaped robot is fitted with nextgen…",
          "url": "https://thenextweb.com/news/norwayautostoreunveilsnewelectricwarehouserobot",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FAutostorewarehouserobot.jpg&signature=9813700a766398237bd0bfd5bc2d2251",
          "publishedAt": "20231023T04:00:52Z",
          "content": "Norwegian tech company AutoStore today unveiled the latest version of its warehouse storage and retrieval robot, as it seeks to boost the efficiency of its automated fulfilment system. \r\nDubbed the R… [+3374 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Kirsten Korosec",
          "title": "Rivian R1T is the first EV to win the longest offroad competition in the US",
          "description": "A team driving an Rivian R1T won the Rebelle Rally, making it the first EV to place first in the longest offroad competition in the U.S.",
          "url": "https://techcrunch.com/2023/10/22/rivianr1tisthefirstevtowinthelongestoffroadcompetitionintheus/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/10/Rivianrebelle.jpg?resize=1200,800",
          "publishedAt": "20231023T00:33:39Z",
          "content": "Motorsports and offroad competition isn’t the typical fodder over here at TechCrunch unless, of course, there also happens to be a podiumwinning team driving an allelectric 2023 Rivian R1T.\r\nThe R… [+3929 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Sarah Perez",
          "title": "Tape It's software for musicians aims to deliver studioquality noise reduction via AI | TechCrunch",
          "description": "After Apple discontinued its Music Memos app favored by musicians for developing song ideas, a new startup called Tape It stepped in to fill the void with",
          "url": "https://techcrunch.com/2023/10/20/tapeitssoftwareformusiciansaimstodeliversstudioqualitynoisereductionviaai/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2020/04/gettymusicai.jpg?resize=1200,860",
          "publishedAt": "20231020T19:50:06Z",
          "content": "After Apple discontinued its Music Memos app favored by musicians for developing song ideas, a new startup called Tape It stepped in to fill the void with an app that leveraged AI to automatically de… [+5469 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Carly Page",
          "title": "Authorities confirm RagnarLocker ransomware taken down during international sting | TechCrunch",
          "description": "The FBI said in 2022 that dozens of U.S. entities, including manufacturing, energy and government, had been hit by RagnarLocker ransomware.",
          "url": "https://techcrunch.com/2023/10/20/ragnarlockerransomwaredarkwebportalseizedininternationalsting/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/10/ragnarlockertakedownauthoritieseuropol.jpg?resize=1200,755",
          "publishedAt": "20231020T18:52:52Z",
          "content": "An international group of law enforcement agencies have disrupted the notorious RagnarLocker ransomware operation.\r\nTechCrunch reported Thursday that an international law enforcement operation involv… [+3925 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Dominicmadori Davis",
          "title": "Black founders received 0.13% of capital this Q3 | TechCrunch",
          "description": "Funding to Black founders is only getting worse after the promises made in 2020.",
          "url": "https://techcrunch.com/2023/10/20/blackfoundersreceived013ofcapitalthisq3/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/10/GettyImages12273056871.jpg?resize=1200,800",
          "publishedAt": "20231020T16:15:09Z",
          "content": "Black founders raised 0.13% of all capital allocated to U.S. startups in Q3, according to Crunchbase. Thats about $39.7 million out of $29.9 billion.\r\nThis number is a massive yearoveryear drop.\r\nI… [+3043 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "jbegley",
          "title": "Telegram Is Leaking User IP Addresses to Contacts",
          "description": "Article URL: https://techcrunch.com/2023/10/19/telegramisstillleakinguseripaddressestocontacts/\nComments URL: https://news.ycombinator.com/item?id=37957793\nPoints: 11\n# Comments: 2",
          "url": "https://techcrunch.com/2023/10/19/telegramisstillleakinguseripaddressestocontacts/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/10/telegramuseripleak.jpg?resize=1200,800",
          "publishedAt": "20231020T15:49:59Z",
          "content": "The popular messaging app Telegram can leak your IP address if you simply add a hacker to your contacts and accept a phone call from them.\r\nDenis Simonov, a security researcher, who is also known as … [+2741 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Oskars Ozoliņš",
          "title": "Why AI progress hitting the brakes is more likely than world domination",
          "description": "There’s a looming global computing capacity crunch that cannot be sustainably addressed the way we’re doing things right now.  Simply put, between artificial intelligence (AI) models growing exponentially and an ongoing global digital transformation, data cen…",
          "url": "https://thenextweb.com/news/aiprogresshittingbrakesmorelikelythanworlddomination",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FAIcapacitycrunche1697798324907.jpg&signature=c923a4bfb51b9257f701bf2e51cd0e08",
          "publishedAt": "20231020T10:49:43Z",
          "content": "Theres a looming global computing capacity crunch that cannot be sustainably addressed the way were doing things right now. \r\nSimply put, between artificial intelligence (AI) models growing exponenti… [+8113 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "Exercise bike inspired by Ukraine war provides backup power during emergencies",
          "description": "Lithuanian startup Tukas EV has developed an exercise bike that harnesses the energy you produce while peddling and stores it as a backup source of power for household devices and appliances. The exercise bike, dubbed HR Bank, was designed to provide urban dw…",
          "url": "https://thenextweb.com/news/exercisebikeinspiredbyukrainewarprovidesbackuppowerduringemergencies",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FHRbanktukasEV.jpg&signature=188583aa490f7372d2f26111be2a7d25",
          "publishedAt": "20231020T09:25:53Z",
          "content": "Lithuanian startup Tukas EV has developed an exercise bike that harnesses the energy you produce while peddling and stores it as a backup source of power for household devices and appliances.\r\nThe ex… [+2709 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Ivan Mehta",
          "title": "Elon Musk confirms X is soon launching two new premium tiers",
          "description": "Elon Musk today said that X (formerly Twitter) is going to soon launch two new premium tiers, confirming previous reports and code sightings. The owner of the platform said that one tier will cost lower than the current $8 per month plan, but won’t reduce ads…",
          "url": "https://techcrunch.com/2023/10/19/elonmuskconfirmsxissoonlaunchingtwonewpremiumtiers/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/08/twitterxlogomusk1.jpg?resize=1200,675",
          "publishedAt": "20231020T06:21:26Z",
          "content": "Elon Musk today said that X (formerly Twitter) is going to soon launch two new premium tiers, confirming previous reports and code sightings.\r\nThe owner of the platform said that one tier will cost l… [+1482 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Thomas Macaulay",
          "title": "Boomers have better cybersecurity habits than millennials and GenZ, study finds",
          "description": "Boomers are often reviled for hoarding the world’s resources, but they’re also dominating their descendants in their cyber defences. That’s according to a new survey by Yubico, a Swedish vendor of authentication devices. The company asked 2,000 consumers in t…",
          "url": "https://thenextweb.com/news/boomersbettercybersecuritymillennialsgenz",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign61.jpg&signature=c0ed77591895da3222cdeabb2b4d6761",
          "publishedAt": "20231019T15:26:05Z",
          "content": "Boomers are often reviled for hoarding the worlds resources, but theyre also dominating their descendants in their cyber defences.\r\nThats according to a new survey by Yubico, a Swedish vendor of auth… [+1935 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "Amazon shows off latest delivery drone, plans liftoff in UK and Italy next year",
          "description": "From around this time next year, Amazon customers in the UK and Italy will have the option to get their packages delivered by drone, the retail giant announced Wednesday. While Amazon has been delivering small packages via drone in Texas and California for ov…",
          "url": "https://thenextweb.com/news/amazondeliverydroneukitaly",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FAmazondronedeliveryukitaly.jpg&signature=6945e0903b8f385cfbee657094c1bae1",
          "publishedAt": "20231019T11:05:24Z",
          "content": "From around this time next year, Amazon customers in the UK and Italy will have the option to get their packages delivered by drone, the retail giant announced Wednesday.\r\nWhile Amazon has been deliv… [+2722 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Thomas Macaulay",
          "title": "3Dprinted organs could solve liver transplant shortage, startup says",
          "description": "You can already buy 3Dprinted houses, cars, rocket engines, sneakers, and, of course, sex robots. But can I interest you in a 3Dprinted kidney? It’s an offer that Vital3D plans to make a reality. The Lithuanian startup is among a growing wave of companies t…",
          "url": "https://thenextweb.com/news/vital3d3dprintedorgansbioprintingliver",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign2.jpg&signature=ba75d7d1c0fea466072643f5a77ae3ff",
          "publishedAt": "20231019T10:46:42Z",
          "content": "You can already buy 3Dprinted houses, cars, rocket engines,sneakers, and, of course, sex robots. But can I interest you in a 3Dprinted kidney?\r\nIts an offer that Vital3D plans to make a reality. Th… [+2430 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Thomas Macaulay",
          "title": "3Dprinted organs could solve kidney transplant shortage, startup says",
          "description": "You can already buy 3Dprinted houses, cars, rocket engines, sneakers, and, of course, sex robots. But can I interest you in a 3Dprinted kidney? It’s an offer that Vital3D plans to make a reality. The Lithuanian startup is among a growing wave of companies t…",
          "url": "https://thenextweb.com/news/vital3d3dprintedorgansbioprintingkidney",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign7.jpg&signature=a18e6bcf332831cb25755970bc5f0fe7",
          "publishedAt": "20231019T10:46:42Z",
          "content": "You can already buy 3Dprinted houses, cars, rocket engines,sneakers, and, of course, sex robots. But can I interest you in a 3Dprinted kidney?\r\nIts an offer that Vital3D plans to make a reality. Th… [+2430 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "Musk mulls removing X, formerly Twitter, from EU to dodge disinformation laws",
          "description": "Elon Musk, owner of X, formerly Twitter, is considering removing the social media platform from Europe in an attempt to dodge a new antidisinformation law recently passed in the bloc, Insider reports. Musk is “increasingly frustrated” with having to comply w…",
          "url": "https://thenextweb.com/news/muskmightremovextwitterfromeudisinformationlaw",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F09%2F1599pxElon_Musk_at_a_Press_Conferencee1697706382605.jpg&signature=199fedd46349d10740636c01a19dd826",
          "publishedAt": "20231019T09:06:33Z",
          "content": "Elon Musk, owner of X, formerly Twitter, is considering removing the social media platform from Europe in an attempt to dodge a new antidisinformation law recently passed in the bloc, Insiderreports… [+1942 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Harri Weber",
          "title": "Tesla's solar business is tanking but energy storage is making up for it",
          "description": "Once among the top three residential installers in the nation, Tesla's solar business is in decline.  In the third quarter, the automaker's solar deployments...",
          "url": "https://techcrunch.com/2023/10/18/teslassolarbusinessistankingbutenergystorageismakingupforit/",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/jftvPu5hJxhRocIQxLRmzA/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA/https://media.zenfs.com/en/techcrunch_350/5f9fa43380c94752ffc450aef9d4bc33",
          "publishedAt": "20231018T20:55:39Z",
          "content": "By the megawatt, solar installations are outpacing other energy sources in the U.S. this year but you wouldn't know it judging from Tesla's latest reports.\r\nOnce among the top three residential insta… [+1328 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Sarah Perez",
          "title": "X plans to use payment, phone and ID verification to stop bots, in addition to the new $1/yr fee",
          "description": "It’s official: X is charging users to use its service — a move X owner Elon Musk said would help the company combat bots and spam, something he’s repeatedly complained about even before acquiring the social network. But while critics, including WordPress foun…",
          "url": "https://techcrunch.com/2023/10/18/xplanstousepaymentphoneandidverificationtostopbotsinadditiontothenew1yrfee/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/10/botsglitchxtwitter.jpeg?resize=1200,675",
          "publishedAt": "20231018T17:33:48Z",
          "content": "It’s official: X is charging users to use its service — a move X owner Elon Musk said would help the company combat bots and spam, something he’srepeatedlycomplainedabout even before acquiring the so… [+6453 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Thomas Macaulay",
          "title": "New AI tool could make future vaccines ‘variantproof,’ researchers say",
          "description": "A new AI tool that predicts viral mutations could guide treatments for COVID19 — and the next pandemic. The system, named EVEscape, was developed at Harvard Medical School and Oxford University. In tests, the tool accurately predicted the most concerning and…",
          "url": "https://thenextweb.com/news/evescapeaipredictsvirusmutationscovid19vaccines",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign12.jpg&signature=921090e15f1a1302d08d33769bc0fe6d",
          "publishedAt": "20231018T15:36:26Z",
          "content": "A new AI tool that predicts viral mutations could guide treatments for COVID19 and the next pandemic.\r\nThe system, named EVEscape, was developed at Harvard Medical School and Oxford University. In t… [+3708 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Mary Ann Azevedo",
          "title": "Anyplace, a startup aimed at giving 'digital nomads’ a comfortable place to work, nearly doubles valuation",
          "description": "In early 2022, the company pivoted into an operator model with its product, Anyplace Select, which is designed for remote workers and corporate travelers to ...",
          "url": "https://techcrunch.com/2023/10/18/anyplaceastartupaimedatgivingdigitalnomadsacomfortableplacetoworknearlydoublesvaluationwithnew827mround/",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/vdqfZB3UdmO3iYkdwb9_uw/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA/https://media.zenfs.com/en/techcrunch_350/a1a8bf552c73bdb8c4f16d6b29aea9bc",
          "publishedAt": "20231018T15:02:16Z",
          "content": "Hospitality startup Anyplace began its life as a marketplace that gives people the option to book hotels or rentals for a minimum of 30 days nearly anyplace they want. \r\nIn early 2022, the company pi… [+3812 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Kyle Wiggers",
          "title": "Passwordless authentication startup SecureW2 raises $80M from Insight Partners",
          "description": "Passwordless authentication offers a host of advantages over traditional pins, passphrases and passcodes.  Surveys around the web show that compromised...",
          "url": "https://techcrunch.com/2023/10/18/passwordlessauthenticationstartupsecurew2raises80mfrominsightpartners/",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/R6KR6l9Andw_qM8vPJbzhg/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MDg/https://media.zenfs.com/en/techcrunch_350/c82d2322566f1e94f44408173d4318d1",
          "publishedAt": "20231018T12:00:21Z",
          "content": "Passwordless authentication offers a host of advantages over traditional pins, passphrases and passcodes. Surveys around the web show that compromised passwords cause an estimated 81% of all breaches… [+3850 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Marris Adikwu",
          "title": "How can social impact startups influence global change?",
          "description": "Around the world, people are grappling with the impact of climate change at an unprecedented level, with natural disasters and air pollution making the need for action more apparent every day. At the same time, as the global population grows, novel ideas are …",
          "url": "https://thenextweb.com/news/howsocialimpactstartupsglobalchange",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FImage2.jpg&signature=75781796d97dc8297bc34132eee7602f",
          "publishedAt": "20231018T11:50:19Z",
          "content": "Around the world, people are grappling with the impact of climate change at an unprecedented level, with natural disasters and air pollution making the need for action more apparent every day. At the… [+8095 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Thomas Macaulay",
          "title": "UK lost €2.3B in tax from big tech because rules are ‘no longer fit for purpose’",
          "description": "Up to €2.3bn of annual tax from big tech may be missing from the UK’s coffers because of archaic rules. That’s according to TaxWatch, a think tank formed to expose abuses of the taxation system. In new research, the group analysed the finances of seven tech g…",
          "url": "https://thenextweb.com/news/ukloste23bintaxfrombigtechbecauserulesarenolongerfitforpurpose",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2021%2F06%2FZuckmoney.jpg&signature=cc19bf839bffdc62052848ab6bdc59f1",
          "publishedAt": "20231018T11:13:46Z",
          "content": "Up to 2.3bn of annual tax from big tech may be missing from the UKs coffers because of archaic rules.\r\nThats according to TaxWatch, a think tank formed to expose abuses of the taxation system. In new… [+3939 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Amanda Silberling, DominicMadori Davis and Kyle Wiggers",
          "title": "When was the last time Marc Andreessen talked to a poor person?",
          "description": "Venture capitalist Marc Andreessen posted a manifesto on the a16z website, calling for “technooptimism” in a frenzied, 5,000word blog post that somehow",
          "url": "https://techcrunch.com/2023/10/17/whenwasthelasttimemarcandreessentalkedtoapoorperson/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2016/09/gettyimages604311102.jpg?resize=1200,798",
          "publishedAt": "20231018T05:25:25Z",
          "content": "Venture capitalist Marc Andreessen posted a manifesto on the a16z website, calling for technooptimism in a frenzied, 5,000word blog post that somehow manages to reinvent Reaganomics, propose the c… [+7785 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "I swapped my car for an electric cargo bike",
          "description": "Tired of endless traffic jams, hefty bills, and the weight of climate guilt, city dwellers across Europe are ditching their cars for cargo bikes — and never looking back. Here’s why I became one of them. Once the vehicle of choice for a select group of urban …",
          "url": "https://thenextweb.com/news/swappedmycarforelectriccargobike",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FIswappedmycarforacargobikeebikeurbanarrow.jpg&signature=f3a955e371ba285add1d92a3b188d0c2",
          "publishedAt": "20231017T14:27:48Z",
          "content": "Tired of endless traffic jams, hefty bills, and the weight of climate guilt, city dwellers across Europe are ditching their cars for cargo bikes and never looking back. Heres why I became one of them… [+13274 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Thomas Macaulay",
          "title": "Google and Qualcomm are building a RISCVbased platform for wearables",
          "description": "RISCV, the upstart chip architecture, has stepped further into the market for processors. Semiconductor giant Qualcomm today announced that it’s building a RISCVbased wearables platform for Wear OS, Google’s operating system for smartwatches. The system wi…",
          "url": "https://thenextweb.com/news/googlequalcommriscvwearablessmartwatcheswearos",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign1.jpg&signature=80d47015dd29344103fba7283c2a00e4",
          "publishedAt": "20231017T13:00:54Z",
          "content": "RISCV, the upstart chip architecture, has stepped further into the market for processors.\r\nSemiconductor giant Qualcomm today announced that its building a RISCVbased wearables platform for Wear O… [+2980 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Linnea Ahlgren",
          "title": "EV startup Volta Trucks files for bankruptcy amid battery supply woes",
          "description": "Sometimes, despite the best of plans and intentions, businesses don’t make it. Unfortunately, this is true also for those who hope to change the world for the better. Earlier today, Swedish electric lorry startup Volta Trucks announced it had filed for bankru…",
          "url": "https://thenextweb.com/news/evstartupvoltatrucksbatterysupplywoesbankruptcy",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2Fvoltatrucks2e1697544803481.jpeg&signature=a861add3d40c08ecaac8854f207c91a7",
          "publishedAt": "20231017T12:21:08Z",
          "content": "Sometimes, despite the best of plans and intentions, businesses dont make it. Unfortunately, this is true also for those who hope to change the world for the better. Earlier today, Swedish electric l… [+2159 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Linnea Ahlgren",
          "title": "London Marathon turns to carbon removals in race to net zero",
          "description": "While promoting fitness, community and often charitable causes, large running events can have a significant environmental impact. Adding to the waste generation from water stations and temporary race infrastructure are the carbon emissions from the transporta…",
          "url": "https://thenextweb.com/news/londonmarathoncarbonremovalscur8racenetzero",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FTL107528e1697539278865.jpeg&signature=1971566687aed90bc8d7b42cf40f991e",
          "publishedAt": "20231017T10:49:18Z",
          "content": "While promoting fitness, community and often charitable causes, large running events can have a significant environmental impact. Adding to the waste generation from water stations and temporary race… [+2625 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "UK plan to lead in generative AI ‘unrealistic,’ say Cambridge researchers",
          "description": "The British government’s aim to turn the UK into a global leader in the development of generative AI is “unrealistic,” researchers at the University of Cambridge argue. According to the associated report, the country lacks both the necessary capital investmen…",
          "url": "https://thenextweb.com/news/ukplanleadgenerativeaiunrealisticsaycambridgeresearchers",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign179.jpg&signature=c420284741063427c75c261d670edab2",
          "publishedAt": "20231016T14:20:22Z",
          "content": "The British governments aim to turn the UK into a global leader in the development of generative AI is unrealistic, researchers at the University of Cambridge argue.\r\nAccording to the associated repo… [+2541 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "TikTok complies with EU demands against IsraelHamas disinformation",
          "description": "TikTok said on Sunday that it had taken action against disinformation, following EU demands after Hamas’ attack on Israel. On Thursday, Thierry Breton, the bloc’s chief of the internal market, gave the platform a 24hour deadline to introduce measures that co…",
          "url": "https://thenextweb.com/news/tiktokcomplieseudemandsisraelhamasdisinformation",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign178.jpg&signature=c6166cfb742d41a3aae713cdb39aa7ab",
          "publishedAt": "20231016T10:48:26Z",
          "content": "TikTok said on Sunday that it had taken action against disinformation, following EU demands after Hamas attack on Israel.\r\nOn Thursday, Thierry Breton, the blocs chief of the internal market, gave th… [+2650 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Christine Hall",
          "title": "Braid shuts down, Stash marches toward an IPO and what happens when a fintech relationship fizzles out",
          "description": "Welcome back to The Interchange, where we take a look at the hottest fintech news of the previous week. If you want to receive The Interchange directly in your inbox every Sunday, head here to sign up! We covered lots of happenings in the world of fintech thi…",
          "url": "https://techcrunch.com/2023/10/15/braidclosesdownstashmarchestowardsanipoandwhathappenswhenafintechrelationshipfizzlesout/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2021/11/GettyImages522212886.jpg?resize=1200,873",
          "publishedAt": "20231015T14:34:57Z",
          "content": "Welcome back to The Interchange, where we take a look at the hottest fintech news of the previous week. If you want to receive The Interchange directly in your inbox every Sunday, head here to sign u… [+8596 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Kirsten Korosec",
          "title": "How generative AI is creeping into EV battery development | TechCrunch",
          "description": "Aionics, a Palo Alto startup, is using AI and even generative AI to accelerate battery research and ultimately build better batteries.",
          "url": "https://techcrunch.com/2023/10/14/howgenerativeaiiscreepingintoevbatterydevelopment/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/10/lithiumionbatteriesabstract1.jpg?resize=1200,675",
          "publishedAt": "20231015T01:03:55Z",
          "content": "Ten billion. That’s how many commercially procurable molecules are available today. Start looking at them in groups of five the typical combination used to make electrolyte materials in batteries and… [+4802 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "PaulHoule",
          "title": "PC shipments decline slows in Q3 2023, but Apple plunges over 23%",
          "description": "Article URL: https://techcrunch.com/2023/10/10/pcshipmentsdeclineslowsinq32023butappleplungesover23/\nComments URL: https://news.ycombinator.com/item?id=37874345\nPoints: 18\n# Comments: 3",
          "url": "https://techcrunch.com/2023/10/10/pcshipmentsdeclineslowsinq32023butappleplungesover23/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/10/GettyImages529385035.jpg?resize=1200,800",
          "publishedAt": "20231013T19:12:06Z",
          "content": "It hasn’t been a great time in recent quarters for PC companies, but with IDC, Gartner and Canalys all reporting data for Q3 2023, it shows an improving landscape. While shipments still declined betw… [+2181 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "Google to pay €3.2M yearly fee to German news publishers",
          "description": "Google has agreed to pay German publishers €3.2mn per year for publishing their content on its News search engine. The compensation is part of an interim agreement between the tech giant and Corint Media, pending a decision by the German Patent and Trademark …",
          "url": "https://thenextweb.com/news/googlepayyearlyfeegermannewspublishers",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign177.jpg&signature=2f6bbbfe21a073a4956234e79b1bbe35",
          "publishedAt": "20231013T13:49:20Z",
          "content": "Google has agreed to pay German publishers 3.2mn per year for publishing their content on its News search engine.\r\nThe compensation is part of an interim agreement between the tech giant and Corint M… [+1560 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "VC funding in Europe rose in Q3 2023, but favoured latestage startups",
          "description": "In the third quarter of 2023, European startups raised $16.4bn (€15.6bn) in VC funding — a 28% increase quarter over quarter. The findings are based on an analysis by Crunchbase, which also unveiled that the fresh capital has mostly favoured latestage rounds…",
          "url": "https://thenextweb.com/news/vcfundingeuroperoseq32023favouredlatestagestartups",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign176.jpg&signature=fbb00d1c2995d4cf781163a1edb14f96",
          "publishedAt": "20231013T11:15:53Z",
          "content": "In the third quarter of 2023, European startups raised $16.4bn (15.6bn) in VC funding a 28% increase quarter over quarter.\r\nThe findings are based on an analysis by Crunchbase, which also unveiled th… [+1827 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Linnea Ahlgren",
          "title": "GG Microsoft! UK clears $69B Activision Blizzard deal",
          "description": "After a lengthy process of regulatory scrutiny, the biggest deal in gaming history finally has the allclear. Today, the final holdout in the saga, the UK’s CMA, said it had approved Microsoft’s acquisition of Activision Blizzard, after the parties had made …",
          "url": "https://thenextweb.com/news/ggmicrosoftukclearsactivisionblizzarddealgaming",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F07%2FUntitleddesign58.jpg&signature=1982e37edbac19f6fed97e051395544f",
          "publishedAt": "20231013T10:47:36Z",
          "content": "After a lengthy process of regulatory scrutiny, the biggest deal in gaming history finally has the allclear. Today, the final holdout in the saga, the UKs CMA, said it had approved Microsofts acqui… [+3734 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Catherine Shu",
          "title": "After warning, the EU opens investigation into X over alleged disinformation",
          "description": "The European Union announced today it is opening an investigation into X for allegedly spreading illegal content and disinformation, including terrorist The European Union announced today it is opening an investigation into X for allegedly spreading illegal c…",
          "url": "https://techcrunch.com/2023/10/12/euxinvestigation/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/07/xtwitter.jpg?resize=1200,550",
          "publishedAt": "20231013T00:38:56Z",
          "content": "The European Union announced today it is opening an investigation into X for allegedly spreading illegal content and disinformation, including terrorist and violent content and hate speech. This come… [+3552 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Sarah Perez",
          "title": "Bluesky gets its first thirdparty mobile app with Graysky, launching later this month",
          "description": "Bluesky, the Jack Dorseybacked Twitter alternative, is getting its first thirdparty app for mobile users: a new app called Graysky. Though numerous Bluesky projects built on the company’s API are already in the works or in testing, Graysky will be the first…",
          "url": "https://techcrunch.com/2023/10/12/blueskygetsitsfirstthirdpartymobileappwithgrayskylaunchinglaterthismonth/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/10/grayskyheader.jpeg?w=1200",
          "publishedAt": "20231012T16:48:38Z",
          "content": "Bluesky, the Jack Dorseybacked Twitter alternative, is getting its first thirdparty app for mobile users: a new app called Graysky. Though numerous Bluesky projects built on the company’s API are a… [+5644 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Thomas Macaulay",
          "title": "New technique makes AI hallucinations wake up and face reality",
          "description": "Chatbots have an alarming propensity to generate false information, but present it as accurate. This phenomenon, known as AI hallucinations, has various adverse effects. At best, it restricts the benefits of artificial intelligence. At worst, it can cause rea…",
          "url": "https://thenextweb.com/news/aihallucinationssolutionirisai",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign31.jpg&signature=fb7eca7b8ef925a65ea4a0bf792ec762",
          "publishedAt": "20231012T13:51:50Z",
          "content": "Chatbots have an alarming propensity to generate false information, but present it as accurate. This phenomenon, known as AI hallucinations, has various adverse effects. At best, it restricts the ben… [+7021 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "Europe outpaces US and China in hydrogen investment, says EU president",
          "description": "From transportation to heavy industries, clean hydrogen has emerged as a key element in the transition to climate neutrality — and the EU wants to ensure that the fossilfuel alternative joins its arsenal. In a speech to representatives of hydrogen’s entire v…",
          "url": "https://thenextweb.com/news/europeoutpacesuschinainhydrogeninvestment",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FHydrogenmoleculehystar.jpeg&signature=c6a256bcd016113125184139da149254",
          "publishedAt": "20231012T11:16:47Z",
          "content": "From transportation to heavy industries, clean hydrogen has emerged as a key element in the transition to climate neutrality and the EU wants to ensure that the fossilfuel alternative joins its arse… [+2546 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "German antiracism agency quits X amid IsraelPalestine disinformation wave",
          "description": "Germany’s federal antidiscrimination agency (FADA) said Wednesday it was quitting X, formerly known as Twitter, due to an “enormous rise” in hate speech.  “Due to the enormous rise in antitrans and queer rhetoric, racism, misogyny, and antisemitism, we no l…",
          "url": "https://thenextweb.com/news/germanantiracismagencyquitsxisraelpalestinedisinformation",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FdisinformationXtwitterhatespeechisraelpalestine.jpg&signature=5181e734e38ea974af4015f78db57e77",
          "publishedAt": "20231012T10:23:46Z",
          "content": "Germanys federal antidiscrimination agency (FADA) said Wednesday it was quitting X, formerly known as Twitter, due to an enormous rise in hate speech. \r\nDue to the enormous rise in antitrans and qu… [+2163 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "Taiwan’s semiconductor suppliers plan to invest in European chip factories",
          "description": "Amid the global race for semiconductor chips, Taiwanese suppliers are considering investing in Europe, the Financial Times reports. “We are planning investments in Germany, and the European market is going to be ours,” Vincent Liu, president and chief executi…",
          "url": "https://thenextweb.com/news/taiwanssemiconductorsuppliersinvesteuropeanchipfactories",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2Fprocessor2217771_1280.jpg&signature=5825884474bf7cec740e07c99b3f7884",
          "publishedAt": "20231011T14:48:56Z",
          "content": "Amid the global race for semiconductor chips, Taiwanese suppliers are considering investing in Europe, the Financial Times reports.\r\nWe are planning investments in Germany, and the European market is… [+1856 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "Google’s AI could soon consume as much electricity as Ireland, study finds",
          "description": "Amid the debate over the dangers of widespread AI development, an important concern may have been overlooked: the huge amount of energy required to train these large language models. A new study published this week suggests that the AI industry could consume …",
          "url": "https://thenextweb.com/news/googlesaicouldconsumeasmuchelectricityasireland",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FAIenergyuse1.jpg&signature=eaed9cab0dbad5d5b75d490a40a3e8a7",
          "publishedAt": "20231011T14:38:23Z",
          "content": "Amid the debate over the dangers of widespread AI development, an important concern may have been overlooked: the huge amount of energy required to train these large language models.\r\nA new study pub… [+1597 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "Croatia wants to turn superhot underground lake into 16MW power plant",
          "description": "A Croatian energy company has discovered an underwater lake of superheated water that could supply the country’s far north with clean geothermal electricity. The find was the result of a twoyear study by staterun power company Bukotermal that sought to find…",
          "url": "https://thenextweb.com/news/croatiageothermalenergyplant",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2Fgeothermalenergycroatia.jpg&signature=b03f98716968713038ba9bb1f1943361",
          "publishedAt": "20231011T12:58:46Z",
          "content": "A Croatian energy company has discovered an underwater lake of superheated water that could supply the countrys far north with clean geothermal electricity.\r\nThe find was the result of a twoyear stu… [+4271 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Ioanna Lykiardopoulou",
          "title": "Cambridge aims to double its unicorns, plans support scheme for founders",
          "description": "Home to over 5,300 high tech companies, Cambridge is among the world’s leading universitybased ecosystems. Ranked as the third most important science hub globally in 2022, the city counts 23 unicorns and its universitybacked startups have raised over £3bn i…",
          "url": "https://thenextweb.com/news/cambridgedoubleunicornssupportschemeforfounders",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign175.jpg&signature=d42512ace12bdf432014c4c8a90d4f9d",
          "publishedAt": "20231011T12:58:36Z",
          "content": "Home to over 5,300 high tech companies, Cambridge is among the worlds leading universitybased ecosystems. Ranked as the third most important science hub globally in 2022, the city counts 23 unicorns… [+2380 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "Kyle Wiggers",
          "title": "Conveyor raises $12.5M to automate security reviews using LLMs",
          "description": "The trouble is, security reviews require a massive investment of time  and labor.  Questionnaires  the main way companies vet vendor  contain hundreds ...",
          "url": "https://techcrunch.com/2023/10/11/conveyorraises125mtoautomatesecurityreviewsusingllms/",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/h.PFmPJx9o7cUNooregDbQ/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA/https://media.zenfs.com/en/techcrunch_350/9ec52c964408dd06abbaad9250ed9cdd",
          "publishedAt": "20231011T12:30:55Z",
          "content": "In a perfect world, companies would vet the security and compliance of every thirdparty vendor they use. Sales wouldn't close until these reviews are complete. The trouble is, security reviews requi… [+5875 chars]"
          },
        {
          "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
          },
          "author": "DominicMadori Davis",
          "title": "California mandates VC firms to release investments' diversity information",
          "description": "This is the United States’ first piece of legislation that aims to increase diversity within the venture capital landscape.",
          "url": "https://techcrunch.com/2023/10/09/californiapasseslawmandatingvcfirmstoreleaseinvestmentsdiversityinformation/",
          "urlToImage": "https://techcrunch.com/wpcontent/uploads/2023/10/GettyImages186653928.jpg?resize=1200,800",
          "publishedAt": "20231010T20:50:25Z",
          "content": "Last night, California Governor Gavin Newsom signed into law Senate Bill 54, which will require venture capital firms in the state to annually report the diversity of the founders they are backing. T… [+4253 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Thomas Macaulay",
          "title": "5 spaceage technologies that the EU just launched into orbit",
          "description": "A new EU mission has sent some suitably spaceage tech into the cosmos. On a Vega rocket that launched from the European spaceport in French Guyana on Monday, the union sent six satellites and nine experiments into orbit for testing. The programme aims to boo…",
          "url": "https://thenextweb.com/news/euspacemissiontechorbittesting",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2FUntitleddesign6.jpg&signature=8ea7eee166413d34c18fbdb82ccb5023",
          "publishedAt": "20231010T15:09:54Z",
          "content": "A new EU mission has sent some suitably spaceage tech into the cosmos. On a Vega rocket that launched from the European spaceport in French Guyana on Monday, the union sent six satellites and nine e… [+3432 chars]"
          },
        {
          "source": {
          "id": "thenextweb",
          "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "Even world’s biggest offshore wind farm can’t mask UK’s green energy failures",
          "description": "The world’s largest offshore wind farm has started exporting power to the UK grid after its first turbine came online this weekend.   The Dogger Bank Wind Farm, currently under construction in the North Sea, will comprise a total of 277 turbines once complete…",
          "url": "https://thenextweb.com/news/worldsbiggestoffshorewindfarmsunakgreenenergy",
          "urlToImage": "https://imgcdn.tnwcdn.com/image/tnwblurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwpcontent%2Fblogs.dir%2F1%2Ffiles%2F2023%2F10%2Fdoggerbankwindfarmuksunak.jpg&signature=fa25e72050d796b5ec3e91248b71ba1b",
          "publishedAt": "20231010T14:46:07Z",
          "content": "The worlds largest offshore wind farm has started exporting power to the UK grid after its first turbine came online this weekend.  \r\nThe Dogger Bank Wind Farm, currently under construction in the No… [+5374 chars]"
          }
          ]
    constructor(){
        super();
        this.state = {
            articles:[],
            loading: false,
            page:1,
            totalResults:0
        }
    }

    async componentDidMount(){ 
      this.props.setprogress(10);
        let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.props.setprogress(50)
        console.log(parsedData); 
        this.setState({articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false})
        this.props.setprogress(100)
    }
     handlePrevClick = async ()=>{
        console.log("Previous");
        let url =`https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })

    }
    
     handleNextClick = async ()=>{
        console.log("Next"); 
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json() 
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
    }
        }
        // this is for the infinty scroll
        // fetchMoreData = async() => {
        //  this.setState({page:this.state.page+1})
        // let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData); 
        // this.setState({articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false})
        // };
    render() { 
        return (
           <> 
                <h1 className="text-center " style={{margin: '35px 0px'}}>NewsMonkey - {this.props.category} News Headines</h1>
                {this.state.loading && <Spin/>}
                {/* <InfiniteScroll
                  dataLength={this.state.articles.length}
                  next={this.fetchMoreData}
                  hasMore={this.articles.length!==this.state.totalResults}
                  loader={<Spin/>}
                > */}
               <div className="container">
               <div className="row"> 
                { this.state.articles &&  this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} Author={element.author?element.author:"Not found"} date={element.publishedAt?element.publishedAt:'Not Found'} description={element.description?element.description:""} source={element.source.name} imageUrl={element.urlToImage} newsurl={element.url} />
                    </div> 

                })} 
                </div> 
               </div>
                {/* </InfiniteScroll> */}
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </>
        )
    }
}

export default News
