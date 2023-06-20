const timeout = 2000;
const buttons = Array.from(document.querySelectorAll(".copyButton"));

const hashtags = {
  "RED BULL RACING":
    "#RedBull #RB19 #RB18 #RedBullPowertrains #MaxVerstappen #SergioPerez #verstappen33 #redbull #mv33 #SergioPerez #SergioPerez11 #Perez11 #formulanerds #f1podcast #racingpodcast #podcast #f1 #formula1 #racing #motorsport #raceweek #formulaone #motorsport #redbullracing #max33",

  FERRARI:
    "#scuderiaferrari #Ferrari #SF23 #F175 #Ferrari #CharlesLeclerc #CarlosSainz #ferrarimotorsport #ferrarif1 #scuderiaferrarif1 #formula1 #formulaone #motorsport #grandprix #scuderia #cs55 #charlesleclerc #charlesleclerc16 #leclerc #leclerc16 #charles16 #cl16 #formulanerds",

  MERCEDES:
    "#Mercedes #Mercedesamgf1 #W14 #W13 #Mercedes #LewisHamilton #teamLH44 #LH44 #LewisHamilton44 #Lewis44 #Hamilton44 #team44 #GeorgeRussell #GeorgeRussell63 #mercedesf1 #mercedesamgf1team #mercedesamgf1petronas #toto #formulanerds #f1podcast #racingpodcast #podcast #racing #formulaone #motorsport",

  ALPINE: "values10 values11 values12",

  MCLAREN: "values10 values11 values12",

  "ALFA ROMEO": "values10 values11 values12",

  "ASTON MARTIN":
    "#AstonMartin #AMR23 #AMR22 #Mercedes #FernandoAlonso #LanceStroll #SebastianVettel #astonmartinf1 #f1 #formula1 #formulaone #racing #motorsport #alonso #LanceStroll #grandprix #astonmartinf1team #astonmartinracing #fa14 #alonso14 #ls18 #motorsports #formulanerds #f1podcast #racingpodcast #raceweek",

  HAAS: "values10 values11 values12",

  ALPHATAURI: "values10 values11 values12",

  WILLIAMS: "values10 values11 values12",
};

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    const btnText = button.innerText;

    navigator.clipboard.writeText(hashtags[btnText]);

    button.innerText = "Copied to clipboard 📋";

    setTimeout(() => {
      button.innerText = btnText;
    }, timeout);
  })
);
