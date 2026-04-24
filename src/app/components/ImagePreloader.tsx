import { useEffect } from "react";

// Import all Figma assets to preload them
// Gap Inc assets
import loyaltyNotifications from "figma:asset/1fa10f636891abbe46873a320f1b23cc36a72c21.png";
import loyaltyRewards from "figma:asset/74024bfa1a6e30eddab8062cc344346248c4f4a5.png";
import loyaltyNavyistFull from "figma:asset/9b9a9850b32e18650f836a191d3d3b202dcb6034.png";
import libraryPages from "figma:asset/62f7f9b93b0e54e753a1d30a8306059742bfa938.png";
import cmsBrandColors from "figma:asset/98ae09cc292bbbe0399e47028ad41a04d215f446.png";
import cmsTypography from "figma:asset/2774193ba0c086c904ff0e83303b10a4c4cf6a1e.png";
import shareoutNewsletter from "figma:asset/820fc5770486074b4a9b91c3a0968e60ef4fc487.png";
import shareoutIntake from "figma:asset/0a8adde3690d82e3c1e6cd6fd8657616281dfefe.png";

// Vistaprint assets
import swanLogo from "figma:asset/22350e7a2da3e01ef480a96e102c483f12b4b3c2.png";
import systemArchitecture from "figma:asset/310cb59e51f7a6de476eb0d7e786f11ce4ccdaee.png";
import figmaLibrariesImg from "figma:asset/ca0ff0dad294b06db05cf066d766fa8ff776ad0b.png";
import docComponentsImg from "figma:asset/81ee9abecf83d281e1c8a676ce036d6fa5c6eb90.png";
import docComponentsGridImg from "figma:asset/55a82b90e8d3bbc56a8119116cb3dfdabe590021.png";
import docUxDesignImg from "figma:asset/17e7da5c2dd4b8c56b88d38899602889cac5de6b.png";
import docHomepageImg from "figma:asset/38ca40d770362794d39d1f19250deccda8e5099f.png";
import docFoundationsImg from "figma:asset/cf1fdeb5910c75918119ee3b76daa035e167efeb.png";
import slackUpdatesImg from "figma:asset/56eadb144aef0f8498fc386bdad83df714d30e79.png";
import intakeFormImg from "figma:asset/0a91c75102ab9e73c4b6cdbcab6ed96ca3677eb5.png";
import bugReportImg from "figma:asset/8f9ea2e3a03d82e3b1b5f5b3e9aeb16ec0065c84.png";
import surveyResultsImg from "figma:asset/939c312f2a60b679a82e61502e8377bb4fbd1124.png";
import cardSortMatrixImg from "figma:asset/39224db750c24cecdc1926572bf90f5ea9c536ae.png";

// Ugly Pickle assets
import cardsImg from "figma:asset/451b38690b69546c8d5efff6bf6803a5d7c1c61c.png";
import boardRenderImg from "figma:asset/8f64a96fb41fb9c61af4847559af9bf9911ab8be.png";
import playtestGroupImg from "figma:asset/9989da6d556d2123f6c82536f1c1d7d38b3288c1.png";
import playtestHomeImg from "figma:asset/054b53781e990ee34a68f4248f03594204a921f1.png";
import appStoreImg from "figma:asset/4eb34ae4848ed48f59d87fea86d21eeea4389789.png";
import playStoreImg from "figma:asset/419179c9fa1f6765b5663d4ddee73686c034cbd3.png";
import marketingSiteImg from "figma:asset/94755aa087a1b8901d6aaf778826979765db294a.png";
import renderNetImg from "figma:asset/aea6029e8e9aba6dbc3ecc807543ffa88d50dc68.png";
import renderBoardImg from "figma:asset/9ed10bfe0eca2c5cdf12ec4c23b3aa476c7727a8.png";
import renderAppImg from "figma:asset/646c14ed9043e286c1c39eec34440e20a6e346af.png";
import renderPressureImg from "figma:asset/37284f9f237efe6af6f9371fc5afa6b583aa52ee.png";
import renderScoreboardImg from "figma:asset/b766130dad1e30becf5223df7da2f00145a8ee15.png";
import renderTrophyImg from "figma:asset/2a0845c0415af2e6fecd20a22bc48f669603b1f6.png";
import productionCardsImg from "figma:asset/264ef4c14241cccf872d1dae4a0495c5bb6e9311.png";
import productionMeeplesImg from "figma:asset/fc67e93677c0833887d353b16156734b91ea9c06.png";
import appSplashImg from "figma:asset/6df6ea1fb93e4f7786ec1c1e80e8cb5321d61737.png";
import appModesImg from "figma:asset/0fa97b6f66b2478b291aa92a9f58f40535ac3c01.png";
import appHomeImg from "figma:asset/29f4d6701cc792d0c3bac3aa9f5effde5e8451d1.png";
import appGameplayImg from "figma:asset/22b43ee383982d81ee517f3e0f732d8eb75dfa2d.png";
import hardwareWorkbenchImg from "figma:asset/624f21cb91fde87454174bcefedda0f24359de9e.png";
import hardwareTimerImg from "figma:asset/ca4f0a46ecb5b84e4590f1413015abbe91b23fa0.png";
import cardYellow from "figma:asset/0596d15ea5a924ee1281fa3e81cbf5b00be69cc4.png";
import cardPink from "figma:asset/f6e656692e48a5313f301b84bc69d6cbf008bfdb.png";
import cardRed from "figma:asset/65d80c9dc699bd5cd67039ef87027bbeac005c84.png";
import cardBeige from "figma:asset/7097f05aa9bb3c7e9c97569aab6cb1bddf0edea6.png";
import cardOrange from "figma:asset/a9ca1359f5f494343902416e861bdcd0251d487e.png";
import cardGreen from "figma:asset/758500d3ed8e2f2bc5d339fee3a696969241774a.png";
import cardDark from "figma:asset/717611f17dc2f20662ffed8e21cc6ec99a755d1e.png";
import cardBlue from "figma:asset/ec144430fc60494c01d47f6b9c579a34daf235a5.png";
import cardPurple from "figma:asset/c3d409c8c12cf6aa570d5ab38a75a58c64695d20.png";

const images = [
  // Gap Inc
  loyaltyNotifications,
  loyaltyRewards,
  loyaltyNavyistFull,
  libraryPages,
  cmsBrandColors,
  cmsTypography,
  shareoutNewsletter,
  shareoutIntake,
  // Vistaprint
  swanLogo,
  systemArchitecture,
  figmaLibrariesImg,
  docComponentsImg,
  docComponentsGridImg,
  docUxDesignImg,
  docHomepageImg,
  docFoundationsImg,
  slackUpdatesImg,
  intakeFormImg,
  bugReportImg,
  surveyResultsImg,
  cardSortMatrixImg,
  // Ugly Pickle
  cardsImg,
  boardRenderImg,
  playtestGroupImg,
  playtestHomeImg,
  appStoreImg,
  playStoreImg,
  marketingSiteImg,
  renderNetImg,
  renderBoardImg,
  renderAppImg,
  renderPressureImg,
  renderScoreboardImg,
  renderTrophyImg,
  productionCardsImg,
  productionMeeplesImg,
  appSplashImg,
  appModesImg,
  appHomeImg,
  appGameplayImg,
  hardwareWorkbenchImg,
  hardwareTimerImg,
  cardYellow,
  cardPink,
  cardRed,
  cardBeige,
  cardOrange,
  cardGreen,
  cardDark,
  cardBlue,
  cardPurple,
];

export function ImagePreloader() {
  useEffect(() => {
    // Preload all images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return null; // This component doesn't render anything
}
