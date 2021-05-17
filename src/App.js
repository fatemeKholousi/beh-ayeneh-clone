import React from "react";
import "./App.css";
import Fscards from "./components/first-set-cards/fscards";
import FscardsLbl from "./components/first-set-cards/fscardslbl";
import Navbar from "./components/upside_navbar/navbar";
import Sscards from "./components/second-set-cards/Sscards";
// https://www.behinee.com/Business
function App() {
  const first_set_cards_label = [
    "درآمد بیشتر ",
    " مشتریان جدید",
    "اسراف کمتر ",
  ];
  let first_set_cards_img = [
    "https://www.behinee.com/image/icon/coins.png",
    "https://www.behinee.com/image/icon/multipleUsers.png",
    "https://www.behinee.com/image/icon/leaf.png",
  ];

  const second_set_cards_label = [
    "سوپر مارکت",
    "هتل",
    "رستوران و کافه",
    "نانوایی وقنادی ",
  ];
  let second_set_cards_img = [
    "https://www.behinee.com/image/icon/kharobar.png",
    "https://www.behinee.com/image/icon/hotel.png",
    "https://www.behinee.com/image/icon/restaurant.png",
    "https://www.behinee.com/image/icon/bread.png",
  ];
  return (
    <div className="App">
      <Navbar />

      <span className="container_first">
        <Fscards
          img={first_set_cards_img[0]}
          lable={first_set_cards_label[0]}
        />
        <Fscards
          img={first_set_cards_img[1]}
          lable={first_set_cards_label[1]}
        />
        <Fscards
          img={first_set_cards_img[2]}
          lable={first_set_cards_label[2]}
        />
      </span>

      <div className="second_section">
        <h1 className="hamrahan_txt">بهترین همراهان ما</h1>

        <div className="second_set">
          <Sscards
            img={second_set_cards_img[0]}
            lbl={second_set_cards_label[0]}
          />
          <Sscards
            img={second_set_cards_img[1]}
            lbl={second_set_cards_label[1]}
          />
          <Sscards
            img={second_set_cards_img[2]}
            lbl={second_set_cards_label[2]}
          />
          <Sscards
            img={second_set_cards_img[3]}
            lbl={second_set_cards_label[3]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
